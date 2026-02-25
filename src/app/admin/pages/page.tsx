"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface Page {
  id: string;
  title: string;
  slug: string;
  isSystem: boolean;
  sections: Array<{
    id: string;
    type: string;
    content: Record<string, string>;
  }>;
  customHtml?: string;
}

export default function PagesManager() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    const res = await fetch("/api/pages");
    if (res.ok) {
      const data = await res.json();
      setPages(data.pages);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this page? This cannot be undone.")) return;
    const res = await fetch("/api/pages", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage("Page deleted");
      fetchPages();
    } else {
      const data = await res.json();
      setMessage(data.error || "Failed to delete");
    }
    setTimeout(() => setMessage(""), 3000);
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Pages</h1>
          <p className="text-gray-400">Manage and edit all site pages</p>
        </div>
        <Link
          href="/admin/pages/new"
          className="bg-gold text-black px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-all"
        >
          + New Page
        </Link>
      </div>

      {message && (
        <div className="bg-gold/10 border border-gold/30 text-gold text-sm rounded px-4 py-2.5 mb-6">
          {message}
        </div>
      )}

      <div className="space-y-3">
        {pages.map((page) => (
          <div
            key={page.id}
            className="bg-dark border border-white/10 rounded-lg p-5 flex items-center justify-between hover:border-white/20 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-white font-semibold">{page.title}</h3>
                {page.isSystem && (
                  <span className="text-xs bg-white/10 text-gray-400 px-2 py-0.5 rounded">
                    System
                  </span>
                )}
              </div>
              <p className="text-gray-500 text-sm">{page.slug}</p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={page.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                View ↗
              </a>
              <Link
                href={`/admin/pages/${page.id}`}
                className="text-gold hover:text-gold-light text-sm font-medium transition-colors"
              >
                Edit
              </Link>
              {!page.isSystem && (
                <button
                  onClick={() => handleDelete(page.id)}
                  className="text-red-400 hover:text-red-300 text-sm transition-colors"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
