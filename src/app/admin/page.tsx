import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getPages, getSlides } from "@/lib/data";
import Link from "next/link";

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const pages = getPages();
  const slides = getSlides();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
      <p className="text-gray-400 mb-8">Welcome back, {session.email}</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-gold mb-1">{pages.length}</div>
          <div className="text-gray-400 text-sm">Pages</div>
        </div>
        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-gold mb-1">{slides.length}</div>
          <div className="text-gray-400 text-sm">Slideshow Images</div>
        </div>
        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <div className="text-3xl font-bold text-gold mb-1">
            {pages.filter((p) => !p.isSystem).length}
          </div>
          <div className="text-gray-400 text-sm">Custom Pages</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/admin/pages/new"
              className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
            >
              <span className="w-8 h-8 bg-gold/10 rounded flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                +
              </span>
              Create New Page
            </Link>
            <Link
              href="/admin/slides"
              className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
            >
              <span className="w-8 h-8 bg-gold/10 rounded flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                🖼
              </span>
              Manage Slideshow
            </Link>
            <Link
              href="/admin/pages"
              className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors group"
            >
              <span className="w-8 h-8 bg-gold/10 rounded flex items-center justify-center text-gold group-hover:bg-gold/20 transition-colors">
                📄
              </span>
              Edit Pages
            </Link>
          </div>
        </div>

        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <h2 className="text-lg font-bold text-white mb-4">All Pages</h2>
          <div className="space-y-2">
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`/admin/pages/${page.id}`}
                className="flex items-center justify-between py-2 px-3 rounded hover:bg-white/5 transition-colors group"
              >
                <span className="text-gray-300 group-hover:text-white text-sm">
                  {page.title}
                </span>
                <span className="text-gray-600 text-xs">{page.slug}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
