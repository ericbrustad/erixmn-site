import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const footerLinks = [
  { href: "/wine-tours", label: "Wine Tours" },
  { href: "/transportation-to-amtrak", label: "Transportation to Amtrak" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

const socialLinks = [
  { href: "https://www.facebook.com/2185241338215371", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/erix.llc", icon: Instagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/erixcoach", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.youtube.com/@erixcoach", icon: Youtube, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-darker border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold tracking-wider mb-4">
              ERIX
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Erix Coach and Car Transportation — Safety, Reliability,
              Communication &amp; Quality = TRUST
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@erixcoachandcar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-xs font-bold"
                aria-label="TikTok"
              >
                TT
              </a>
              {/* X */}
              <a
                href="https://www.x.com/erixcar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-xs font-bold"
                aria-label="X"
              >
                X
              </a>
              {/* Yelp */}
              <a
                href="https://www.yelp.com/biz/erix-coach-and-car-transportation-minneapolis-3"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-black transition-all text-xs font-bold"
                aria-label="Yelp"
              >
                Y!
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://erixmn.addons.la/m/portal/?k=6ycYDgvrBmXpcbrsfkbx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold text-sm transition-colors"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gold mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                10019 Fremont Avenue South, Bloomington, Minnesota 55431
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:+19522084920" className="hover:text-gold transition-colors">
                  952-208-4920
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a href="tel:7632838336" className="hover:text-gold transition-colors">
                  763-283-8336
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a href="mailto:info@erixmn.com" className="hover:text-gold transition-colors">
                  info@erixmn.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Erix Coach and Car Transportation — All Rights Reserved.
          </p>
          <a
            href="https://www.google.com/search?q=erix+coach+and+car+google+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold text-xs hover:underline"
          >
            Check out our Google Reviews ★★★★★
          </a>
        </div>
      </div>
    </footer>
  );
}
