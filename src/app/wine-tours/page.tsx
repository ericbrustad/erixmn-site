import { Metadata } from "next";
import { Phone, Wine, Clock, MapPin, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Wine Tours | Erix Coach and Car Limo Service",
  description:
    "Luxury limousine wine tours in Minnesota and Wisconsin. Visit Waconia wineries and the Mega Wisconsin Winery Tour. From $149 per person.",
};

export default function WineTours() {
  const wineries = [
    "Cracked Barrel Winery",
    "65 Vines Winery",
    "Forestville Vines",
    "Vino in the Valley",
    "Maiden Rock Winery & Cidery",
    "Villa Bellezza",
    "Belle Vinez",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Luxury Wine Tours
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            The Waconia Wine Tour
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Minnesota Tour or Wisconsin? Call{" "}
            <a href="tel:+19522084920" className="text-gold hover:underline">
              952-208-4920
            </a>{" "}
            to Reserve your tour.
          </p>
        </div>
      </section>

      {/* Mega Wisconsin Tour */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Mega Wisconsin Winery Tour
            </h2>
            <p className="text-xl text-gold mb-2">Do you accept the challenge?</p>
            <p className="text-gray-400 italic">
              &quot;I Give you the Company Credit Card and say — Go have some fun&quot;
            </p>
          </div>

          {/* What's included */}
          <div className="bg-darker rounded-xl border border-gold/20 p-8 sm:p-12 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gold mb-2">
                1: Limousine PAID &bull; 2: Wine Tastings PAID
              </h3>
              <p className="text-gray-300 text-lg">
                Up to <span className="text-gold font-bold text-3xl">12 hours</span> of FUN — PAID
              </p>
              <p className="text-gray-500 text-sm mt-1">
                (time may be more or less, wineries and/or time may be reduced to your schedule or venue hours of operation)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pricing */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <DollarSign className="text-gold" size={20} />
                  Pricing
                </h4>
                <div className="bg-black/30 rounded-lg p-6">
                  <div className="text-3xl font-bold text-gold mb-1">$149</div>
                  <p className="text-gray-400 mb-3">per person (includes 5 hours)</p>
                  <p className="text-white">
                    Each additional hour: <span className="text-gold font-bold">$26</span> each
                  </p>
                  <p className="text-gray-500 text-sm mt-3">
                    4 to 6 passengers required
                  </p>
                  <p className="text-gray-500 text-sm">
                    Venue à la carte is an option — meals and entrées are excluded
                  </p>
                </div>
              </div>

              {/* Wineries */}
              <div>
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Wine className="text-gold" size={20} />
                  Package Includes
                </h4>
                <ul className="space-y-2">
                  {wineries.map((winery) => (
                    <li
                      key={winery}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                      {winery}
                    </li>
                  ))}
                  <li className="text-gold font-semibold mt-4">
                    ✓ Free wine tastings at all wineries
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* How it works */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-darker p-6 rounded-lg border border-white/5 text-center">
              <div className="w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <p className="text-gray-300 text-sm">
                You will be picked up by an Erix Coach and Car Limousine at a pre-specified time.
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-white/5 text-center">
              <div className="w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <p className="text-gray-300 text-sm">
                You will be driven to each of the wineries (wine tasting is included).
              </p>
            </div>
            <div className="bg-darker p-6 rounded-lg border border-white/5 text-center">
              <div className="w-10 h-10 bg-gold text-black rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <p className="text-gray-300 text-sm">
                Enjoy the ride home safely with your friends and family!
              </p>
            </div>
          </div>

          {/* Scheduling Info */}
          <div className="bg-darker rounded-lg border border-gold/20 p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="text-gold" size={20} />
              <h4 className="text-lg font-bold text-white">
                Just pick your date and call or text
              </h4>
            </div>
            <p className="text-gray-400 mb-4">
              Friday, Saturday and Sunday are optimum hours per winery
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:7632838336"
                className="flex items-center gap-2 bg-gold text-black px-6 py-3 text-sm font-bold rounded hover:bg-gold-light transition-all"
              >
                <Phone size={16} />
                763-283-8336
              </a>
              <a
                href="mailto:info@erixmn.com?subject=We%20would%20like%20to%20go%20on%20the%20Mega%20Wisconsin%20Winery%20Tour&body=The%20Date%20and%20Time%20of%20pickup%20we%20request%20is%20"
                className="border border-gold text-gold px-6 py-3 text-sm font-bold rounded hover:bg-gold hover:text-black transition-all"
              >
                Email Us to Book
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-6">
              Time at each location will determine how many wineries will be visited. À la carte on winery visits is allowed.
            </p>
            <p className="text-gold text-sm mt-2 font-semibold">
              Ask about the EriX Winery Tour EsXape Ride™
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-darker py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <a
            href="https://www.google.com/search?q=erix+coach+and+car+google+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:underline"
          >
            ★★★★★ Check out our Google reviews
          </a>
        </div>
      </section>
    </>
  );
}
