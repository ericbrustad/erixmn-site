import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Erix Coach and Car Limo Service",
  description:
    "Contact Erix Coach and Car Transportation. Call 952-208-4920 or email info@erixmn.com. Located in Bloomington, Minnesota.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-black to-dark py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Connect With Us
          </h1>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-dark py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="bg-darker p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Phone</h3>
                    <a
                      href="tel:+19522084920"
                      className="text-gray-400 hover:text-gold transition-colors block"
                    >
                      952-208-4920
                    </a>
                    <a
                      href="tel:7632838336"
                      className="text-gray-400 hover:text-gold transition-colors block"
                    >
                      763-283-8336
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-darker p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <a
                      href="mailto:info@erixmn.com"
                      className="text-gray-400 hover:text-gold transition-colors"
                    >
                      info@erixmn.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-darker p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-gray-400">
                      10019 Fremont Avenue South
                      <br />
                      Bloomington, Minnesota 55431
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-darker p-6 rounded-lg border border-white/5 hover:border-gold/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="text-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Availability</h3>
                    <p className="text-gray-400">
                      Available 7 days a week. Call or text anytime for
                      reservations and quotes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-darker rounded-xl border border-gold/20 p-8 sm:p-10 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Ride?
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Whether you need airport transportation, a wine tour, or special
                event service, we&apos;re here to help. Book online or give us a call
                to get started.
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold text-black px-6 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold-light transition-all text-center"
                >
                  Book Now Online
                </a>
                <a
                  href="tel:+19522084920"
                  className="border border-gold text-gold px-6 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-gold hover:text-black transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={16} />
                  Call 952-208-4920
                </a>
                <a
                  href="https://ai-chat-for-lead-generation-b28cd4.zapier.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 text-white px-6 py-4 text-sm font-bold uppercase tracking-wider rounded hover:bg-white/10 transition-all text-center"
                >
                  Chat With Us
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider">
                  Follow Us
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: "Facebook", url: "https://www.facebook.com/2185241338215371" },
                    { name: "Instagram", url: "https://www.instagram.com/erix.llc" },
                    { name: "LinkedIn", url: "https://www.linkedin.com/in/erixcoach" },
                    { name: "TikTok", url: "https://www.tiktok.com/@erixcoachandcar" },
                    { name: "X", url: "https://www.x.com/erixcar" },
                    { name: "Yelp", url: "https://www.yelp.com/biz/erix-coach-and-car-transportation-minneapolis-3" },
                    { name: "YouTube", url: "https://www.youtube.com/@erixcoach" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-white/5 hover:bg-gold/20 text-gray-400 hover:text-gold rounded text-xs transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="bg-darker py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="rounded-lg overflow-hidden border border-white/10 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2828.5!2d-93.265!3d44.8408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f625d7198f4077%3A0xeb9b7344d60d0003!2sErix%20Coach%20and%20Car%20Transportation!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Erix Coach and Car Transportation location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
