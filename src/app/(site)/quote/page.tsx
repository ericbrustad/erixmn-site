"use client";

import { Metadata } from "next";
import { Phone, MapPin, Calculator } from "lucide-react";
import { useState } from "react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pickupDate: "",
    pickupTime: "",
    pickupAddress: "",
    dropoffAddress: "",
    passengers: "1",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Quote Request from Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPickup Date: ${formData.pickupDate}\nPickup Time: ${formData.pickupTime}\nPickup Address: ${formData.pickupAddress}\nDropoff Address: ${formData.dropoffAddress}\nPassengers: ${formData.passengers}\nNotes: ${formData.notes}`
    );
    window.location.href = `mailto:info@erixmn.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Easy as 1 2 3
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Get a Quote
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The Erix Coach and Car Incredible Quote Calculator™ — Fill out the
            form below or call us directly.
          </p>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Number of Passengers
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) =>
                        setFormData({ ...formData, passengers: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Passenger" : "Passengers"}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.pickupDate}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupDate: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Pickup Time *
                    </label>
                    <input
                      type="time"
                      required
                      value={formData.pickupTime}
                      onChange={(e) =>
                        setFormData({ ...formData, pickupTime: e.target.value })
                      }
                      className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Pickup Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street address, City, State and Zip"
                    value={formData.pickupAddress}
                    onChange={(e) =>
                      setFormData({ ...formData, pickupAddress: e.target.value })
                    }
                    className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Dropoff Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Street address, City, State and Zip"
                    value={formData.dropoffAddress}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dropoffAddress: e.target.value,
                      })
                    }
                    className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white placeholder-gray-600 focus:border-gold focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Special Requests / Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full bg-darker border border-white/10 rounded px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all"
                >
                  Send Quote Request
                </button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pricing Info */}
              <div className="bg-darker p-6 rounded-lg border border-gold/20">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Calculator className="text-gold" size={20} />
                  Pricing Guide
                </h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li className="flex justify-between">
                    <span>Hourly Rate</span>
                    <span className="text-gold font-semibold">$96/hr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gratuity</span>
                    <span className="text-gold font-semibold">20%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Minimum</span>
                    <span className="text-gold font-semibold">2 Hours</span>
                  </li>
                  <li className="border-t border-white/10 pt-3 flex justify-between">
                    <span>Distance Based Min</span>
                    <span className="text-gold font-semibold">$72</span>
                  </li>
                  <li className="border-t border-white/10 pt-3">
                    <span className="block mb-1">7-13 Passengers</span>
                    <span className="text-gold font-semibold">
                      $225/hr (2 SUVs, Sprinter, or Stretch)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact */}
              <div className="bg-darker p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">
                  Prefer to Call?
                </h3>
                <div className="space-y-3">
                  <a
                    href="tel:+19522084920"
                    className="flex items-center gap-2 text-gold hover:underline"
                  >
                    <Phone size={16} />
                    952-208-4920
                  </a>
                  <a
                    href="tel:7632838336"
                    className="flex items-center gap-2 text-gold hover:underline"
                  >
                    <Phone size={16} />
                    763-283-8336
                  </a>
                </div>
              </div>

              {/* Book Directly */}
              <div className="bg-darker p-6 rounded-lg border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">
                  Ready to Book?
                </h3>
                <a
                  href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gold text-black px-6 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all text-center"
                >
                  Book Now
                </a>
                <p className="text-gray-500 text-xs mt-3 text-center">
                  Dare to Compare
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
