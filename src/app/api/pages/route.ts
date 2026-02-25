import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { getPages, getPageById, updatePage, deletePage } from "@/lib/data";

export async function GET() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ pages: getPages() });
}

export async function POST(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { title, slug, customHtml, sections } = body;

  if (!title || !slug) {
    return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
  }

  const cleanSlug = slug.startsWith("/") ? slug : `/${slug}`;
  const page = {
    id: `page-${Date.now()}`,
    title,
    slug: cleanSlug,
    isSystem: false,
    sections: sections || [],
    customHtml: customHtml || "",
  };

  updatePage(page);
  return NextResponse.json({ success: true, page });
}

export async function PUT(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const { id, title, slug, customHtml, sections } = body;

  const existing = getPageById(id);
  if (!existing) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  const updated = {
    ...existing,
    title: title || existing.title,
    slug: existing.isSystem ? existing.slug : (slug || existing.slug),
    sections: sections !== undefined ? sections : existing.sections,
    customHtml: customHtml !== undefined ? customHtml : existing.customHtml,
  };

  updatePage(updated);
  return NextResponse.json({ success: true, page: updated });
}

export async function DELETE(request: NextRequest) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();
  const success = deletePage(id);

  if (!success) {
    return NextResponse.json(
      { error: "Cannot delete system pages" },
      { status: 400 }
    );
  }

  return NextResponse.json({ success: true });
}
