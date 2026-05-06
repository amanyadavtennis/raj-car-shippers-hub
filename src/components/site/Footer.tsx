import { Link } from "react-router-dom";
import { Truck, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-tight grid gap-10 py-14 md:grid-cols-4">
      <div>
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <Truck className="h-5 w-5 text-accent-foreground" />
          </div>
          <div>
            <div className="text-lg font-extrabold">Raj Logistics</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">Packers</div>
          </div>
        </div>
        <p className="mt-4 text-sm text-primary-foreground/70">
          Trusted Car Transport &amp; Packers and Movers across India. Safe, reliable, and on-time delivery — every time.
        </p>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Services</h4>
        <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/services" className="hover:text-accent">Car Transportation</Link></li>
          <li><Link to="/services" className="hover:text-accent">Bike Transportation</Link></li>
          <li><Link to="/services" className="hover:text-accent">Household Shifting</Link></li>
          <li><Link to="/services" className="hover:text-accent">Commercial Transport</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Company</h4>
        <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
          <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
          <li><Link to="/coverage" className="hover:text-accent">Coverage</Link></li>
          <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          <li><Link to="/#faq" className="hover:text-accent">FAQ</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-sm font-bold uppercase tracking-wider text-accent">Get in Touch</h4>
        <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
          <li className="flex gap-2"><Phone className="h-4 w-4 text-accent" /> +91 99999 99999</li>
          <li className="flex gap-2"><Mail className="h-4 w-4 text-accent" /> info@rajlogisticspackers.com</li>
          <li className="flex gap-2"><MapPin className="h-4 w-4 text-accent" /> New Delhi, India</li>
        </ul>
        <div className="mt-4 flex gap-3">
          {[Facebook, Instagram, Twitter].map((Icon, i) => (
            <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-accent transition-smooth">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10">
      <div className="container-tight flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
        <p>© {new Date().getFullYear()} Raj Logistics Packers. All rights reserved.</p>
        <p>rajlogisticspackers.com</p>
      </div>
    </div>
  </footer>
);

export default Footer;
