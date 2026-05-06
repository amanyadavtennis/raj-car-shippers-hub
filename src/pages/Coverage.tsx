import { MapPin, Globe2 } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";

const cities = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", "Noida", "Gurgaon",
];

const Coverage = () => (
  <>
    <section className="border-b border-border gradient-section py-14 md:py-20">
      <div className="container-tight max-w-3xl text-center">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Coverage</span>
        <h1 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">Pan-India Logistics Network</h1>
        <p className="mt-3 text-muted-foreground md:text-lg">
          From metros to tier-2 cities, Raj Logistics Packers delivers across India — safely, reliably, and on time.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-tight">
        <SectionHeading eyebrow="Major Cities" title="Cities We Serve" />
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((c) => (
            <div key={c} className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-elegant">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="font-bold text-primary">{c}</div>
                <div className="text-xs text-muted-foreground">Pickup &amp; Delivery</div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">Serving across all major cities in India.</p>
      </div>
    </section>

    <section className="py-16 md:py-24 gradient-section">
      <div className="container-tight">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <Globe2 className="h-10 w-10 text-accent" />
              <h2 className="mt-4 text-3xl font-extrabold text-primary">India-wide Network</h2>
              <p className="mt-3 text-muted-foreground">
                Our trusted partner network spans 50+ cities and major highways across India — including the Delhi–Mumbai, Bangalore–Chennai, Delhi–Kolkata and Mumbai–Hyderabad corridors.
                Wherever you need to move a car, bike, household or business cargo, we've got the route covered.
              </p>
            </div>
            <div className="relative min-h-[280px] bg-secondary">
              <iframe
                title="India Map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=68%2C7%2C97%2C36&layer=mapnik"
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Coverage;
