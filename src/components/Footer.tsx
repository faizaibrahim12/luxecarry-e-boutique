import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="luxe-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-xl font-semibold tracking-wider mb-4">LUXECARRY</h3>
            <p className="font-sans text-sm leading-relaxed opacity-80">
              Crafting timeless luxury bags for the modern woman. Every piece tells a story of elegance and quality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-60">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[{ to: "/shop", label: "Shop" }, { to: "/about", label: "About Us" }, { to: "/contact", label: "Contact" }].map((l) => (
                <Link key={l.to} to={l.to} className="font-sans text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-60">Customer Care</h4>
            <div className="flex flex-col gap-2 font-sans text-sm opacity-80">
              <span>Shipping & Returns</span>
              <span>Size Guide</span>
              <span>FAQ</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs uppercase tracking-widest mb-4 opacity-60">Get in Touch</h4>
            <p className="font-sans text-sm opacity-80 mb-4">hello@luxecarry.com</p>
            <div className="flex gap-4">
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-sans text-xs opacity-50">© 2026 LuxeCarry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
