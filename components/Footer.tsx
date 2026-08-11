import Link from "next/link";
import { BUSINESS } from "@/data/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 pt-16 pb-8">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C47A44, #E9A15B)" }}
              >
                <span className="text-white text-sm font-bold font-heading">B</span>
              </div>
              <span className="font-heading font-bold text-lg text-cream">Blend Align Cafe</span>
            </div>
            <p className="text-sm leading-relaxed text-cream/60 max-w-xs">
              Where cravings meet their match. Coffee, coolers, momos, pasta & more — in the heart of Tiruvottiyur.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-bold text-cream uppercase tracking-widest mb-5">Navigate</h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-cream/60 hover:text-caramel transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold text-cream uppercase tracking-widest mb-5">Find Us</h3>
            <address className="not-italic text-sm text-cream/60 leading-relaxed mb-5">
              {BUSINESS.address.street}<br />
              {BUSINESS.address.area}<br />
              {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.pincode}
            </address>
            <div className="flex flex-col gap-2.5">
              <a
                href={BUSINESS.phone.tel}
                id="footer-call"
                className="text-sm text-cream/60 hover:text-caramel transition-colors duration-200 flex items-center gap-2"
              >
                <span>📞</span> {BUSINESS.phone.display}
              </a>
              <a
                href={BUSINESS.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-directions"
                className="text-sm text-cream/60 hover:text-caramel transition-colors duration-200 flex items-center gap-2"
              >
                <span>📍</span> Get Directions
              </a>
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-instagram"
                className="text-sm text-cream/60 hover:text-caramel transition-colors duration-200 flex items-center gap-2"
              >
                <span>📸</span> {BUSINESS.social.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream/40">
            © {new Date().getFullYear()} Blend Align Cafe. All rights reserved.
          </p>
          <p className="text-xs text-cream/40">
            ⭐ {BUSINESS.rating.score} on Google · {BUSINESS.address.area}
          </p>
        </div>
      </div>
    </footer>
  );
}
