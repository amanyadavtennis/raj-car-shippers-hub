import { CheckCircle2, Target, Eye, Heart, Award } from "lucide-react";
import SectionHeading from "@/components/site/SectionHeading";
import serviceCar from "@/assets/service-car.jpg";

const About = () => (
  <>
    <section className="border-b border-border gradient-section py-14 md:py-20">
      <div className="container-tight max-w-3xl text-center">
        <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">About Us</span>
        <h1 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">Driven by Trust. Delivered with Care.</h1>
        <p className="mt-3 text-muted-foreground md:text-lg">
          Raj Logistics Packers is a customer-first logistics company specialising in safe car transportation and reliable packers &amp; movers services across India.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container-tight grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="overflow-hidden rounded-3xl shadow-elegant">
          <img src={serviceCar} alt="Cars loaded onto enclosed carrier" loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold text-primary md:text-4xl">Who We Are</h2>
          <p className="mt-3 text-muted-foreground">
            With 5+ years of experience moving cars, bikes, household goods, and commercial cargo, Raj Logistics Packers has earned the trust of thousands of families and businesses across India.
            Our pan-India network, trained professionals, and commitment to transparency make us a name you can rely on.
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {["5+ years of experience", "10,000+ vehicles moved", "Pan-India network", "Insured transit", "Door-to-door service", "Transparent pricing"].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 gradient-section">
      <div className="container-tight">
        <SectionHeading eyebrow="Our Foundation" title="Mission, Vision & Values" />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Target, title: "Our Mission", desc: "Provide reliable, safe and timely logistics solutions for every customer across India." },
            { icon: Eye, title: "Our Vision", desc: "Become India's most trusted name in car transport and packers & movers." },
            { icon: Heart, title: "Our Values", desc: "Customer-first approach, transparency, accountability and on-time delivery — always." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-accent text-accent-foreground shadow-accent">
                <c.icon className="h-6 w-6" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-primary">{c.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16">
      <div className="container-tight rounded-3xl gradient-primary p-8 text-primary-foreground shadow-elegant md:p-12">
        <div className="flex flex-col items-center gap-3 text-center">
          <Award className="h-10 w-10 text-accent" />
          <h3 className="text-2xl font-extrabold md:text-3xl">Trusted by 10,000+ customers across India</h3>
          <p className="max-w-2xl text-primary-foreground/80">Every move is handled with the same care, professionalism, and dedication — whether it's a single car or an entire household.</p>
        </div>
      </div>
    </section>
  </>
);

export default About;
