import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/coverage", label: "Coverage" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary shadow-soft">
            <Truck className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-base font-extrabold text-primary md:text-lg">Raj Logistics</div>
            <div className="text-[10px] font-semibold uppercase tracking-widest text-accent">Packers</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 text-sm font-semibold transition-smooth ${
                  isActive ? "text-accent" : "text-foreground/80 hover:text-primary"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a href="tel:+919999999999">
            <Button variant="outline" size="sm" className="border-primary/20 font-semibold">
              <Phone className="mr-2 h-4 w-4" /> +91 99999 99999
            </Button>
          </a>
          <Link to="/contact">
            <Button size="sm" className="gradient-accent font-semibold text-accent-foreground shadow-accent hover:opacity-95">
              Get Quote
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-tight flex flex-col gap-1 py-4">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-sm font-semibold ${
                    isActive ? "bg-secondary text-accent" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className="mt-2 flex gap-2">
              <a href="tel:+919999999999" className="flex-1">
                <Button variant="outline" className="w-full"><Phone className="mr-2 h-4 w-4" /> Call</Button>
              </a>
              <Link to="/contact" className="flex-1">
                <Button className="w-full gradient-accent text-accent-foreground">Get Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
