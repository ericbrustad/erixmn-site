import { Metadata } from "next";
import { Phone, CheckCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Transportation to Amtrak | Erix Coach and Car",
  description:
    "Luxury transportation to and from the Amtrak station. Comfortable, reliable rides with professional drivers. Book your Amtrak transfer today.",
};

export default function TransportationToAmtrak() {
  const features = [
    "Modern, well-maintained fleet",
    "Professional, safety-trained drivers",
    "Punctual and reliable service",
    "Easy online booking",
    "Competitive pricing",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Erix Coach and Car Transportation
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Transportation to Amtrak
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Traveling to and from the Amtrak station is seamless with our luxury
            transportation services.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Transportation Made Easy
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Traveling to and from the Amtrak station is seamless with our luxury
                transportation services. We ensure a comfortable, reliable
                experience every time.
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <CheckCircle className="text-gold shrink-0" size={18} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.amtrak.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:underline"
              >
                Learn more about Amtrak
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Image placeholder / CTA */}
            <div className="bg-darker rounded-xl border border-gold/20 p-8 text-center">
              <div className="w-20 h-20 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl">🚂</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Book Your Amtrak Transfer
              </h3>
              <p className="text-gray-400 text-sm mb-6">
                Professional black car service to and from the Amtrak station.
                On time, every time.
              </p>
              <a
                href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold text-black px-8 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all mb-4"
              >
                Book Now
              </a>
              <br />
              <a
                href="tel:+19522084920"
                className="inline-flex items-center gap-2 text-gold hover:underline text-sm mt-2"
              >
                <Phone size={14} />
                Or call 952-208-4920
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-darker py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Our Clients Choose Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-8" />
          <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-8">
            Our commitment to quality service makes us the top choice for Amtrak
            patrons. Read what our satisfied customers have to say.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/search?q=erix+coach+and+car+google+reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline font-semibold"
            >
              ★★★★★ View Google Reviews
            </a>
            <span className="text-gray-600 hidden sm:inline">|</span>
            <p className="text-gray-400 text-sm">
              Book your ride today at{" "}
              <a
                href="https://ridethex.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                ridethex.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
