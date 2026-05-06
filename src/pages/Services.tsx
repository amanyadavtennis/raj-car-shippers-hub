import { Link } from "react-router-dom";
import { Truck, Bike, Home, Building2, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/site/SectionHeading";
import serviceCar from "@/assets/service-car.jpg";
import serviceBike from "@/assets/service-bike.jpg";
import serviceHousehold from "@/assets/service-household.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

const services = [
  {
    id: "car",
    icon: Truck,
    title: "Car Transportation",
    primary: true,
    img: serviceCar,
    intro: "India's most trusted door-to-door car transport service. We move cars safely across cities with full insurance and on-time delivery.",
    features: [
      "Door-to-door car transport",
      "Open and enclosed carriers",
      "Comprehensive insurance coverage",
      "Real-time tracking updates",
      "Long-distance and intercity transport",
      "Trained handlers & GPS-enabled fleet",
    ],
  },
  {
    id: "bike",
    icon: Bike,
    title: "Bike Transportation",
    img: serviceBike,
    intro: "Safe and affordable two-wheeler transportation for every motorcycle and scooter, anywhere in India.",
    features: ["Safe packing & secure tie-downs", "Affordable pricing", "Insured transit", "Door-to-door delivery"],
  },
  {
    id: "household",
    icon: Home,
    title: "Household Shifting",
    img: serviceHousehold,
    intro: "Hassle-free home relocations — from packing to unpacking — handled by trained professionals.",
    features: ["Professional packing", "Loading & unloading", "Unpacking & rearrangement", "Local and intercity relocation"],
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Transport",
    img: serviceCommercial,
    intro: "Reliable logistics for businesses — office shifting, bulk goods and warehouse movement.",
    features: ["Office shifting", "Bulk goods logistics", "Warehouse movement", "Custom B2B solutions"],
  },
];

const Services = () => (
  <>
    <section className="border-b border-border gradient-section py-14 md:py-20">
      <div className="container-tight max-w-3xl text-center">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Our Services</span>
        <h1 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">Logistics Services Built on Trust</h1>
        <p className="mt-3 text-muted-foreground md:text-lg">
          From premium car transport to commercial logistics — Raj Logistics Packers delivers reliable solutions across India.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-tight space-y-16">
        {services.map((s, i) => (
          <div id={s.id} key={s.id} className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 ? "lg:[&>div:first-child]:order-last" : ""}`}>
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
              {s.primary && (
                <span className="absolute left-4 top-4 rounded-full gradient-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-accent">
                  Primary Service
                </span>
              )}
            </div>
            <div>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                <s.icon className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-extrabold text-primary md:text-4xl">{s.title}</h2>
              <p className="mt-3 text-muted-foreground">{s.intro}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/contact">
                  <Button className="gradient-accent font-bold text-accent-foreground shadow-accent">Get Quote <ArrowRight className="ml-1 h-4 w-4" /></Button>
                </Link>
                <a href="tel:+919999999999">
                  <Button variant="outline" className="font-semibold">Call Now</Button>
                </a>
              </div>
              {s.primary && (
                <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-2 text-xs font-semibold text-accent">
                  <ShieldCheck className="h-4 w-4" /> Fully insured transit on every car shipment
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Services;
