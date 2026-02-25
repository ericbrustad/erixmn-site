import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getSlides, updateSlides } from "@/lib/data";
import { writeFileSync, unlinkSync, existsSync } from "fs";
import { join } from "path";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ slides: getSlides() });
}

export async function PUT(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { slides } = await request.json();
  updateSlides(slides);
  return NextResponse.json({ success: true, slides: getSlides() });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File;
  const alt = (formData.get("alt") as string) || "Slideshow image";
  const isLogo = formData.get("isLogo") === "true";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Generate unique filename
  const ext = file.name.split(".").pop()?.toLowerCase() || "webp";
  const filename = `hero-slide-${Date.now()}.${ext}`;
  const filepath = join(process.cwd(), "public", "images", filename);

  writeFileSync(filepath, buffer);

  const slides = getSlides();
  const newSlide = {
    id: `s-${Date.now()}`,
    src: `/images/${filename}`,
    alt,
    order: slides.length,
    isLogo,
  };
  slides.push(newSlide);
  updateSlides(slides);

  return NextResponse.json({ success: true, slide: newSlide });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();
  const slides = getSlides();
  const slide = slides.find((s) => s.id === id);

  if (slide) {
    // Delete the image file
    const filepath = join(process.cwd(), "public", slide.src);
    if (existsSync(filepath)) {
      try {
        unlinkSync(filepath);
      } catch {
        // File might be locked, continue anyway
      }
    }
  }

  const remaining = slides.filter((s) => s.id !== id).map((s, i) => ({ ...s, order: i }));
  updateSlides(remaining);

  return NextResponse.json({ success: true });
}
