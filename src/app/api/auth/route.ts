import { NextRequest, NextResponse } from "next/server";
import {
  hashPassword,
  verifyPassword,
  createToken,
  getTokenCookieName,
} from "@/lib/auth";
import { getUserByEmail, addUser } from "@/lib/data";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { action, email, password, name } = body;

  if (action === "register") {
    // Check if any users exist — first user auto-approved, otherwise block
    const existing = getUserByEmail(email);
    if (existing) {
      return NextResponse.json({ error: "Email already registered" }, { status: 400 });
    }

    const passwordHash = await hashPassword(password);
    const user = {
      id: `admin-${Date.now()}`,
      email,
      passwordHash,
      name: name || email.split("@")[0],
      role: "admin" as const,
      createdAt: new Date().toISOString(),
    };
    addUser(user);

    const token = await createToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
    response.cookies.set(getTokenCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return response;
  }

  if (action === "login") {
    const user = getUserByEmail(email);
    if (!user) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const valid = await verifyPassword(password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = await createToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    const response = NextResponse.json({ success: true, user: { id: user.id, email: user.email, name: user.name } });
    response.cookies.set(getTokenCookieName(), token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    return response;
  }

  if (action === "logout") {
    const response = NextResponse.json({ success: true });
    response.cookies.delete(getTokenCookieName());
    return response;
  }

  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}
