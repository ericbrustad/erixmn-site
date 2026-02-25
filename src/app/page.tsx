import { Phone, Shield, Users, Car, Star, Gift, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-black via-darker to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Minneapolis Luxury Transportation
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Erix Coach &amp; Car
            <span className="block text-gold mt-2">Limo Service</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            Safety, Reliability, Communication &amp; Quality = <span className="text-gold font-semibold">TRUST</span>
          </p>
          <p className="text-gray-400 mb-10">
            Call or text{" "}
            <a href="tel:+19522084920" className="text-gold hover:underline font-semibold">
              +1-952-208-4920
            </a>{" "}
            &bull; Email{" "}
            <a href="mailto:info@erixmn.com" className="text-gold hover:underline">
              info@erixmn.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-black px-8 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all shadow-lg shadow-gold/20"
            >
              Book Now Online
            </a>
            <a
              href="tel:+19522084920"
              className="border border-gold text-gold px-8 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-black transition-all flex items-center gap-2"
            >
              <Phone size={16} />
              Call for Quote
            </a>
            <a
              href="https://ai-chat-for-lead-generation-b28cd4.zapier.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-8 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <MessageCircle size={16} />
              Chat Now
            </a>
          </div>
        </div>
      </section>

      {/* AC by Marriott Section */}
      <section className="bg-dark py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            AC by Marriott Bloomington Mall of America
          </h2>
          <p className="text-gray-400 mb-8">
            Please provide the Street address, City, State and Zip
          </p>
          <a
            href="https://erixmn.addons.la/m/portal/?k=Z8xVyqWoPtWrWCfH1jRr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all"
          >
            Admin Booking
          </a>
        </div>
      </section>

      {/* Gift Cards Section */}
      <section className="bg-darker py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6">
            <Gift className="text-gold" size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Erix Gift Cards
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Send the Gift of Transportation with an instant gift card to friends
            and family or buy it now for your future use.
          </p>
          <a
            href="https://squareup.com/gift/7V1TEXYKW0ZNF/order"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold text-black px-8 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all"
          >
            Buy Now
          </a>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            What We Do
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-darker p-8 rounded-lg border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <Shield className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Professional Car Service Provider
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                As one of our state&apos;s top trusted luxury transportation providers,
                we pride ourselves on professionalism and punctuality. Don&apos;t chance
                a ride to the airport with the others. Let us take the hassle out
                of your black car trip with our award winning limo service.
              </p>
            </div>

            <div className="bg-darker p-8 rounded-lg border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <Users className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Trusted Experts
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We hand pick our team of local limousine drivers to ensure you get
                to where you&apos;re going safe and on time. We guarantee that you will
                be pleased with your driver&apos;s knowledge of the area and ability to
                safeguard you on your travels. You are important so don&apos;t settle
                for less.
              </p>
            </div>

            <div className="bg-darker p-8 rounded-lg border border-white/5 hover:border-gold/30 transition-all group">
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-all">
                <Car className="text-gold" size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Luxury Vehicles
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our top of the line SUV Limousines offer an enjoyable experience.
                Fine tuned, clean, and given the care they deserve, every vehicle
                offers the comfort you deserve. We are a Minneapolis based car
                service trusted Nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-darker py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4">
            About Erix Coach LLC
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl font-bold text-gold mb-3">30+</div>
              <h3 className="text-lg font-bold text-white mb-3">Our Experience</h3>
              <p className="text-gray-400 text-sm">
                With over 30 years of Hospitality and Customer Service experience.
                EriX Coach™ will always be the comfortable and reliable way to ride
                from start to finish.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-3">
                <Star className="text-gold" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Our Approach</h3>
              <p className="text-gray-400 text-sm">
                Our service includes a comprehensive consult to help identify your
                transportation requirements. We provide a personal customized
                portal for easy booking.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-3">
                <Shield className="text-gold" size={32} />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Why Us?</h3>
              <p className="text-gray-400 text-sm">
                We believe that black car service is more than just a shiny black
                vehicle. Our drivers are always in suit and tie, onsite and ready
                at your convenience.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/quote"
              className="bg-gold text-black px-6 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all"
            >
              Get an Instant Quote
            </Link>
            <Link
              href="/wine-tours"
              className="border border-gold text-gold px-6 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-black transition-all"
            >
              Wine Tours
            </Link>
            <a
              href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="bg-dark py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold text-lg mb-4">★★★★★</p>
          <a
            href="https://www.google.com/search?q=erix+coach+and+car+google+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gold transition-colors text-lg font-semibold underline underline-offset-4"
          >
            Check out our black car airport ride Google reviews
          </a>
        </div>
      </section>
    </>
  );
}
