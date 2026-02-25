"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPage() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [customHtml, setCustomHtml] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const handleTitleChange = (val: string) => {
    setTitle(val);
    // Auto-generate slug from title
    setSlug(
      "/" +
        val
          .toLowerCase()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSaving(true);

    try {
      const res = await fetch("/api/pages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, slug, customHtml }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Failed to create page");
        return;
      }

      const { page } = await res.json();
      router.push(`/admin/pages/${page.id}`);
    } catch {
      setError("Network error");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-2">Create New Page</h1>
      <p className="text-gray-400 mb-8">
        Add a new page to your website
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-dark border border-white/10 rounded-lg p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Page Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => handleTitleChange(e.target.value)}
              required
              className="w-full bg-darker border border-white/10 text-white rounded px-4 py-2.5 focus:outline-none focus:border-gold transition-colors"
              placeholder="e.g., Airport Transfers"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              URL Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
              className="w-full bg-darker border border-white/10 text-white rounded px-4 py-2.5 focus:outline-none focus:border-gold transition-colors font-mono text-sm"
              placeholder="/airport-transfers"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Page Content (HTML)
            </label>
            <p className="text-gray-500 text-xs mb-2">
              Write your page content using HTML. Use Tailwind CSS classes for styling.
            </p>
            <textarea
              value={customHtml}
              onChange={(e) => setCustomHtml(e.target.value)}
              rows={20}
              className="w-full bg-darker border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-gold transition-colors font-mono text-sm leading-relaxed"
              placeholder={`<section class="bg-dark py-16 sm:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl font-bold text-white mb-6">Page Title</h1>
    <p class="text-gray-400">Your content here...</p>
  </div>
</section>`}
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded px-4 py-2.5">
            {error}
          </div>
        )}

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="bg-gold text-black px-8 py-3 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-all disabled:opacity-50"
          >
            {saving ? "Creating..." : "Create Page"}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
