import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit number"),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Please describe your requirement").max(800),
});

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) { toast.error(parsed.error.issues[0].message); return; }
    setLoading(true);
    try {
      const form = e.target as HTMLFormElement;
      const res = await fetch("https://formsubmit.co/ajax/amanyadav.exe@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Contact Message - Raj Logistics Packers",
          _template: "table",
          ...parsed.data,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Message sent! We'll reach out within 10 minutes.");
      form.reset();
    } catch {
      toast.error("Could not send. Please call +91 92175 14482.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="border-b border-border gradient-section py-14 md:py-20">
        <div className="container-tight max-w-3xl text-center">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-accent">Contact Us</span>
          <h1 className="mt-4 text-4xl font-extrabold text-primary md:text-5xl">Get in Touch</h1>
          <p className="mt-3 text-muted-foreground md:text-lg">Talk to a logistics expert. We typically reply within 10 minutes.</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-tight grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Phone, title: "Call Us", desc: "+91 92175 14482", href: "tel:+919217514482" },
              { icon: MessageCircle, title: "WhatsApp", desc: "Chat with our team instantly", href: "https://wa.me/919217514482" },
              { icon: Mail, title: "Email", desc: "info@rajlogisticspackers.com", href: "mailto:info@rajlogisticspackers.com" },
              { icon: MapPin, title: "Office", desc: "Guwahati, Assam, India" },
            ].map((c) => {
              const Comp: any = c.href ? "a" : "div";
              return (
                <Comp key={c.title} href={c.href} target={c.href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-smooth hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-elegant">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl gradient-primary text-primary-foreground shadow-soft">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </Comp>
              );
            })}
          </div>

          <form onSubmit={onSubmit} className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-elegant md:p-8">
            <h2 className="text-2xl font-extrabold text-primary">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">Tell us about your move — we'll send a free quote.</p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" maxLength={80} placeholder="Your name" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" inputMode="numeric" maxLength={10} placeholder="10-digit number" required />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="email">Email <span className="text-muted-foreground">(optional)</span></Label>
                <Input id="email" name="email" type="email" maxLength={120} placeholder="you@email.com" />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={5} maxLength={800} placeholder="Pickup city, drop city, vehicle/goods type, preferred date..." required />
              </div>
            </div>

            <Button type="submit" size="lg" disabled={loading} className="mt-5 w-full gradient-accent font-bold text-accent-foreground shadow-accent md:w-auto">
              {loading ? "Sending..." : "Send Message"} <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-tight overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Office Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=91.5%2C26.05%2C91.95%2C26.30&layer=mapnik&marker=26.1445%2C91.7362"
            className="h-[360px] w-full border-0"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
