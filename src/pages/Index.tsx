import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, IndianRupee, Users, MapPin, Clock, CheckCircle2, Phone, Star, Bike, Home, Building2, FileText, CalendarCheck, PackageCheck, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import QuoteForm from "@/components/site/QuoteForm";
import SectionHeading from "@/components/site/SectionHeading";
import hero from "@/assets/hero-car-carrier.jpg";
import serviceCar from "@/assets/service-car.jpg";
import serviceBike from "@/assets/service-bike.jpg";
import serviceHousehold from "@/assets/service-household.jpg";
import serviceCommercial from "@/assets/service-commercial.jpg";

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", "Noida", "Gurgaon",
];

const whyUs = [
  { icon: ShieldCheck, title: "100% Safe Delivery", desc: "Insured transit with trained handlers." },
  { icon: Home, title: "Door-to-Door Service", desc: "Pickup and drop at your address." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Best market rates, no hidden fees." },
  { icon: Users, title: "Experienced Team", desc: "5+ years of moving expertise." },
  { icon: MapPin, title: "Pan India Coverage", desc: "All major cities & routes covered." },
  { icon: Clock, title: "On-Time Delivery", desc: "Guaranteed timelines, real updates." },
];

const steps = [
  { icon: FileText, title: "Request a Quote", desc: "Share pickup, drop & vehicle details." },
  { icon: CalendarCheck, title: "Schedule Pickup", desc: "Pick a date, we arrive on time." },
  { icon: Truck, title: "Safe Transportation", desc: "Secure carrier, full insurance." },
  { icon: PackageCheck, title: "On-Time Delivery", desc: "Doorstep delivery, every time." },
];

const testimonials = [
  { name: "Amit Sharma", city: "Delhi → Bangalore", text: "Got my Honda City delivered in 4 days, zero scratches. Super professional team!", rating: 5 },
  { name: "Priya Iyer", city: "Mumbai → Pune", text: "Quick quote, fair pricing. The car carrier driver kept me updated throughout.", rating: 5 },
  { name: "Rahul Verma", city: "Gurgaon → Hyderabad", text: "Best car transport company I've used. Door-to-door, fully insured. Highly recommend.", rating: 5 },
  { name: "Sneha Kapoor", city: "Noida → Chennai", text: "Household shifting was smooth — packing was top-notch. Nothing damaged.", rating: 5 },
];

const faqs = [
  { q: "How much does car transport cost in India?", a: "Pricing depends on distance, vehicle type, and carrier (open vs enclosed). Typical intercity car transport ranges from ₹6,000 to ₹18,000. Get a free quote in minutes." },
  { q: "How long does delivery take?", a: "Most intercity car transports take 3–7 days door-to-door. Long-distance deliveries (e.g., Delhi to Bangalore) are usually completed within 5–7 days." },
  { q: "Is my vehicle insured during transit?", a: "Yes. Every vehicle transported by Raj Logistics Packers is covered under comprehensive transit insurance for complete peace of mind." },
  { q: "Do you provide door-to-door service?", a: "Absolutely. We pick up from your address and deliver right to your destination doorstep across India." },
  { q: "How do I book a car transport service?", a: "Fill the quote form, call us, or message on WhatsApp. We confirm pickup within 10 minutes." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={hero}
          alt="Car carrier truck transporting cars across India highway"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="container-tight relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-7 text-primary-foreground animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent ring-1 ring-accent/30">
              <ShieldCheck className="h-3.5 w-3.5" /> India's Trusted Car Transport
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">
              Safe &amp; Reliable <span className="text-accent">Car Transport</span> Across India
            </h1>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Door-to-door vehicle transportation with 100% safety assurance. Open &amp; enclosed carriers, fully insured, on-time delivery — pan-India.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#quote">
                <Button size="lg" className="gradient-accent font-bold text-accent-foreground shadow-accent hover:opacity-95">
                  Get Instant Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a href="tel:+919999999999">
                <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 font-bold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/85">
              {["Insured Transit", "Door-to-Door", "Pan India", "On-Time"].map((t) => (
                <span key={t} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div id="quote" className="lg:col-span-5">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-secondary/50">
        <div className="container-tight grid grid-cols-2 gap-6 py-8 md:grid-cols-4">
          {[
            { k: "10,000+", v: "Vehicles Moved" },
            { k: "5+ Yrs", v: "Industry Experience" },
            { k: "50+", v: "Cities Covered" },
            { k: "98%", v: "Happy Customers" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-2xl font-extrabold text-primary md:text-3xl">{s.k}</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24 gradient-section">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Our Services"
            title="Complete Logistics Solutions"
            subtitle="From premium car transport to household shifting — one trusted partner for every move."
          />

          {/* Featured Car Transport */}
          <Card className="overflow-hidden border-0 shadow-elegant">
            <div className="grid lg:grid-cols-2">
              <div className="relative min-h-[300px]">
                <img src={serviceCar} alt="Car transport carrier" loading="lazy" width={1280} height={896} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute left-4 top-4 rounded-full gradient-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-foreground shadow-accent">
                  Most Popular
                </div>
              </div>
              <CardContent className="flex flex-col justify-center p-8 md:p-12">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary shadow-soft">
                    <Truck className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Primary Service</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary md:text-3xl">Car Transportation in India</h3>
                <p className="mt-3 text-muted-foreground">
                  India's most trusted door-to-door car transport service. Open and enclosed carriers, full insurance coverage, and real-time updates from pickup to delivery.
                </p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {["Door-to-door pickup & drop", "Open & enclosed carriers", "Transit insurance included", "Real-time tracking", "Long-distance & intercity", "Pan-India network"].map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#quote">
                    <Button className="gradient-accent font-bold text-accent-foreground shadow-accent">Get Car Transport Quote</Button>
                  </a>
                  <Link to="/services">
                    <Button variant="outline" className="font-semibold">Learn More <ArrowRight className="ml-1 h-4 w-4" /></Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Other services */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { icon: Bike, img: serviceBike, title: "Bike Transportation", desc: "Safe packing and secure transport at affordable pricing." },
              { icon: Home, img: serviceHousehold, title: "Household Shifting", desc: "Packing, loading, unloading & unpacking — local & intercity." },
              { icon: Building2, img: serviceCommercial, title: "Commercial Transport", desc: "Office shifting, bulk goods & warehouse movement." },
            ].map((s) => (
              <Card key={s.title} className="group overflow-hidden border-border shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
                </div>
                <CardContent className="p-6">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-bold text-primary">{s.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  <Link to="/services" className="mt-4 inline-flex items-center text-sm font-semibold text-accent hover:underline">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Why Choose Us" title="The Trusted Logistics Partner" subtitle="Six promises that set Raj Logistics Packers apart." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="group rounded-2xl border border-border bg-card p-6 transition-smooth hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-soft transition-smooth group-hover:gradient-accent">
                  <w.icon className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-bold text-primary">{w.title}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container-tight">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-block rounded-full bg-accent/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">How It Works</span>
            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Simple. Fast. Reliable.</h2>
            <p className="mt-3 text-primary-foreground/75">Four easy steps from quote to delivery.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur">
                <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full gradient-accent text-sm font-extrabold text-accent-foreground shadow-accent">
                  {i + 1}
                </div>
                <s.icon className="mt-2 h-8 w-8 text-accent" />
                <h4 className="mt-4 text-lg font-bold">{s.title}</h4>
                <p className="mt-1 text-sm text-primary-foreground/75">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-16 md:py-24 gradient-section">
        <div className="container-tight">
          <SectionHeading eyebrow="Coverage" title="Pan-India Network" subtitle="We deliver across all major Indian cities and routes." />
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((c) => (
              <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary shadow-soft transition-smooth hover:border-accent hover:text-accent">
                <MapPin className="h-3.5 w-3.5 text-accent" /> {c}
              </span>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">Serving across all major cities in India.</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24">
        <div className="container-tight">
          <SectionHeading eyebrow="Testimonials" title="Loved by 10,000+ Customers" subtitle="Real reviews from people who trusted us with their move." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t) => (
              <div key={t.name} className="relative rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:shadow-elegant">
                <Quote className="absolute right-4 top-4 h-8 w-8 text-accent/15" />
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-3 text-sm text-foreground/85">"{t.text}"</p>
                <div className="mt-4 border-t border-border pt-3">
                  <div className="text-sm font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.city}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12">
        <div className="container-tight">
          <div className="relative overflow-hidden rounded-3xl gradient-primary p-8 text-primary-foreground shadow-elegant md:p-12">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative grid items-center gap-6 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-extrabold md:text-3xl">Need to Transport Your Car? Get a Free Quote Today!</h3>
                <p className="mt-2 text-primary-foreground/80">No obligations. Get the best rate in 10 minutes.</p>
              </div>
              <div className="flex flex-wrap gap-3 lg:justify-end">
                <a href="#quote">
                  <Button size="lg" className="gradient-accent font-bold text-accent-foreground shadow-accent">Get Free Quote</Button>
                </a>
                <a href="tel:+919999999999">
                  <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-primary-foreground/10 font-bold text-primary-foreground hover:bg-primary-foreground/20">
                    <Phone className="mr-2 h-4 w-4" /> Call Now
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 gradient-section">
        <div className="container-tight max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="rounded-xl border border-border bg-card px-5 shadow-soft">
                <AccordionTrigger className="text-left text-base font-bold text-primary hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Index;
