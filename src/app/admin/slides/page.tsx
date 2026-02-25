"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: string;
  src: string;
  alt: string;
  order: number;
  isLogo: boolean;
}

export default function SlidesManager() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [newAlt, setNewAlt] = useState("");
  const [newIsLogo, setNewIsLogo] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    const res = await fetch("/api/slides");
    if (res.ok) {
      const data = await res.json();
      setSlides(data.slides);
    }
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("alt", newAlt || file.name);
    formData.append("isLogo", String(newIsLogo));

    const res = await fetch("/api/slides", { method: "POST", body: formData });
    if (res.ok) {
      setMessage("Image uploaded successfully!");
      setNewAlt("");
      setNewIsLogo(false);
      form.reset();
      fetchSlides();
    } else {
      setMessage("Upload failed");
    }
    setUploading(false);
    setTimeout(() => setMessage(""), 3000);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this slide?")) return;
    const res = await fetch("/api/slides", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setMessage("Slide deleted");
      fetchSlides();
    }
    setTimeout(() => setMessage(""), 3000);
  };

  const handleReorder = async (id: string, direction: "up" | "down") => {
    const sorted = [...slides].sort((a, b) => a.order - b.order);
    const idx = sorted.findIndex((s) => s.id === id);
    if (
      (direction === "up" && idx === 0) ||
      (direction === "down" && idx === sorted.length - 1)
    )
      return;

    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    const temp = sorted[idx].order;
    sorted[idx].order = sorted[swapIdx].order;
    sorted[swapIdx].order = temp;

    const res = await fetch("/api/slides", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slides: sorted }),
    });
    if (res.ok) {
      const data = await res.json();
      setSlides(data.slides);
    }
  };

  const handleUpdateAlt = async (id: string, alt: string) => {
    const updated = slides.map((s) => (s.id === id ? { ...s, alt } : s));
    const res = await fetch("/api/slides", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slides: updated }),
    });
    if (res.ok) {
      const data = await res.json();
      setSlides(data.slides);
      setMessage("Alt text updated");
      setTimeout(() => setMessage(""), 2000);
    }
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
      <h1 className="text-3xl font-bold text-white mb-2">Slideshow Manager</h1>
      <p className="text-gray-400 mb-8">
        Upload, reorder, and manage hero slideshow images
      </p>

      {message && (
        <div className="bg-gold/10 border border-gold/30 text-gold text-sm rounded px-4 py-2.5 mb-6">
          {message}
        </div>
      )}

      {/* Upload Form */}
      <div className="bg-dark border border-white/10 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-bold text-white mb-4">Upload New Image</h2>
        <form onSubmit={handleUpload} className="space-y-4">
          <div>
            <input
              type="file"
              accept="image/*"
              required
              className="text-gray-300 text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-gold/10 file:text-gold file:font-medium file:cursor-pointer hover:file:bg-gold/20"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1">Alt Text</label>
              <input
                type="text"
                value={newAlt}
                onChange={(e) => setNewAlt(e.target.value)}
                placeholder="Describe the image"
                className="w-full bg-darker border border-white/10 text-white rounded px-3 py-2 text-sm focus:outline-none focus:border-gold"
              />
            </div>
            <div className="flex items-end gap-3">
              <label className="flex items-center gap-2 text-sm text-gray-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newIsLogo}
                  onChange={(e) => setNewIsLogo(e.target.checked)}
                  className="accent-gold"
                />
                Logo image (centered, not stretched)
              </label>
            </div>
          </div>
          <button
            type="submit"
            disabled={uploading}
            className="bg-gold text-black px-6 py-2.5 rounded font-bold text-sm uppercase tracking-wider hover:bg-gold-light transition-all disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Slides List */}
      <div className="space-y-4">
        {slides
          .sort((a, b) => a.order - b.order)
          .map((slide, idx) => (
            <div
              key={slide.id}
              className="bg-dark border border-white/10 rounded-lg p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <div className="relative w-32 h-20 flex-shrink-0 bg-darker rounded overflow-hidden">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  className={slide.isLogo ? "object-contain p-2" : "object-cover"}
                  sizes="128px"
                />
              </div>

              <div className="flex-1 min-w-0">
                <input
                  type="text"
                  defaultValue={slide.alt}
                  onBlur={(e) => {
                    if (e.target.value !== slide.alt) {
                      handleUpdateAlt(slide.id, e.target.value);
                    }
                  }}
                  className="w-full bg-transparent border-b border-white/10 text-white text-sm py-1 focus:outline-none focus:border-gold"
                />
                <div className="text-gray-600 text-xs mt-1">
                  {slide.src} {slide.isLogo && "• Logo"}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleReorder(slide.id, "up")}
                  disabled={idx === 0}
                  className="w-8 h-8 bg-white/5 rounded text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors text-sm"
                >
                  ↑
                </button>
                <button
                  onClick={() => handleReorder(slide.id, "down")}
                  disabled={idx === slides.length - 1}
                  className="w-8 h-8 bg-white/5 rounded text-gray-400 hover:text-white hover:bg-white/10 disabled:opacity-30 transition-colors text-sm"
                >
                  ↓
                </button>
                <button
                  onClick={() => handleDelete(slide.id)}
                  className="w-8 h-8 bg-red-500/10 rounded text-red-400 hover:bg-red-500/20 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
      </div>

      {slides.length === 0 && (
        <div className="text-center text-gray-500 py-12">
          No slideshow images yet. Upload one above.
        </div>
      )}
    </div>
  );
}
