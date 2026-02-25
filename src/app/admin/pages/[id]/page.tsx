"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { use } from "react";

interface PageSection {
  id: string;
  type: string;
  content: Record<string, string>;
}

interface PageData {
  id: string;
  title: string;
  slug: string;
  isSystem: boolean;
  sections: PageSection[];
  customHtml?: string;
}

export default function PageEditor({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState<"sections" | "html">("sections");
  const router = useRouter();

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    const res = await fetch("/api/pages");
    if (res.ok) {
      const data = await res.json();
      const found = data.pages.find((p: PageData) => p.id === id);
      if (found) {
        setPage(found);
        if (found.customHtml) setActiveTab("html");
      }
    }
    setLoading(false);
  };

  const handleSave = async () => {
    if (!page) return;
    setSaving(true);
    setMessage("");

    try {
      const res = await fetch("/api/pages", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(page),
      });

      if (res.ok) {
        setMessage("Saved successfully!");
      } else {
        const data = await res.json();
        setMessage(data.error || "Failed to save");
      }
    } catch {
      setMessage("Network error");
    } finally {
      setSaving(false);
      setTimeout(() => setMessage(""), 3000);
    }
  };

  const updateSectionContent = (
    sectionId: string,
    key: string,
    value: string
  ) => {
    if (!page) return;
    setPage({
      ...page,
      sections: page.sections.map((s) =>
        s.id === sectionId
          ? { ...s, content: { ...s.content, [key]: value } }
          : s
      ),
    });
  };

  const addSection = () => {
    if (!page) return;
    const newSection: PageSection = {
      id: `section-${Date.now()}`,
      type: "content-block",
      content: { heading: "New Section", text: "Enter your content here" },
    };
    setPage({ ...page, sections: [...page.sections, newSection] });
  };

  const removeSection = (sectionId: string) => {
    if (!page) return;
    setPage({
      ...page,
      sections: page.sections.filter((s) => s.id !== sectionId),
    });
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-red-400">Page not found</div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">
            Edit: {page.title}
          </h1>
          <p className="text-gray-500 text-sm">
            {page.slug}
            {page.isSystem && " • System page"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={page.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm transition-colors border border-white/10 px-4 py-2 rounded"
          >
            Preview ↗
          </a>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-gold text-black px-6 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-all disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>

      {message && (
        <div className="bg-gold/10 border border-gold/30 text-gold text-sm rounded px-4 py-2.5 mb-6">
          {message}
        </div>
      )}

      {/* Title Edit */}
      <div className="bg-dark border border-white/10 rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Page Title
            </label>
            <input
              type="text"
              value={page.title}
              onChange={(e) => setPage({ ...page, title: e.target.value })}
              className="w-full bg-darker border border-white/10 text-white rounded px-4 py-2.5 focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              URL Slug
              {page.isSystem && (
                <span className="text-gray-600 ml-2">(locked)</span>
              )}
            </label>
            <input
              type="text"
              value={page.slug}
              onChange={(e) => setPage({ ...page, slug: e.target.value })}
              disabled={page.isSystem}
              className="w-full bg-darker border border-white/10 text-white rounded px-4 py-2.5 focus:outline-none focus:border-gold transition-colors disabled:opacity-50 font-mono text-sm"
            />
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="flex gap-1 mb-4">
        <button
          onClick={() => setActiveTab("sections")}
          className={`px-4 py-2 rounded-t text-sm font-medium transition-colors ${
            activeTab === "sections"
              ? "bg-dark text-gold border-t border-x border-white/10"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Content Sections
        </button>
        <button
          onClick={() => setActiveTab("html")}
          className={`px-4 py-2 rounded-t text-sm font-medium transition-colors ${
            activeTab === "html"
              ? "bg-dark text-gold border-t border-x border-white/10"
              : "text-gray-500 hover:text-gray-300"
          }`}
        >
          Custom HTML
        </button>
      </div>

      {activeTab === "sections" && (
        <div className="space-y-4">
          {page.sections.map((section) => (
            <div
              key={section.id}
              className="bg-dark border border-white/10 rounded-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-white font-medium text-sm">
                    {section.type}
                  </span>
                  <span className="text-gray-600 text-xs ml-2">
                    #{section.id}
                  </span>
                </div>
                <button
                  onClick={() => removeSection(section.id)}
                  className="text-red-400 hover:text-red-300 text-sm"
                >
                  Remove
                </button>
              </div>

              <div className="space-y-3">
                {Object.entries(section.content).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </label>
                    {value.length > 100 ? (
                      <textarea
                        value={value}
                        onChange={(e) =>
                          updateSectionContent(section.id, key, e.target.value)
                        }
                        rows={3}
                        className="w-full bg-darker border border-white/10 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                      />
                    ) : (
                      <input
                        type="text"
                        value={value}
                        onChange={(e) =>
                          updateSectionContent(section.id, key, e.target.value)
                        }
                        className="w-full bg-darker border border-white/10 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={addSection}
            className="w-full border-2 border-dashed border-white/10 rounded-lg py-4 text-gray-500 hover:text-gold hover:border-gold/30 transition-colors text-sm"
          >
            + Add Content Section
          </button>
        </div>
      )}

      {activeTab === "html" && (
        <div className="bg-dark border border-white/10 rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Custom HTML Content
          </label>
          <p className="text-gray-500 text-xs mb-3">
            Full HTML for this page. Use Tailwind CSS classes for styling. This
            overrides the sections above.
          </p>
          <textarea
            value={page.customHtml || ""}
            onChange={(e) => setPage({ ...page, customHtml: e.target.value })}
            rows={25}
            className="w-full bg-darker border border-white/10 text-white rounded px-4 py-3 focus:outline-none focus:border-gold transition-colors font-mono text-sm leading-relaxed"
            placeholder="<section>...</section>"
          />
        </div>
      )}
    </div>
  );
}
