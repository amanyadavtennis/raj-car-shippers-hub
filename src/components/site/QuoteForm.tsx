import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { ArrowRight, Truck } from "lucide-react";

const schema = z.object({
  pickup: z.string().trim().min(2, "Enter pickup city").max(60),
  drop: z.string().trim().min(2, "Enter drop city").max(60),
  vehicle: z.enum(["Car", "Bike", "Household", "Commercial"]),
  phone: z.string().trim().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian number"),
});

interface Props { compact?: boolean }

const QuoteForm = ({ compact = false }: Props) => {
  const [vehicle, setVehicle] = useState<string>("Car");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      pickup: String(fd.get("pickup") || ""),
      drop: String(fd.get("drop") || ""),
      vehicle: vehicle as "Car" | "Bike" | "Household" | "Commercial",
      phone: String(fd.get("phone") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://formsubmit.co/ajax/amanyadav.exe@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Quote Request - ${parsed.data.vehicle}`,
          _template: "table",
          ...parsed.data,
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast.success("Quote request received! We'll call you within 10 minutes.");
      (e.target as HTMLFormElement).reset();
      setVehicle("Car");
    } catch {
      toast.error("Could not send. Please call +91 92175 14482.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-2xl border border-border bg-background/95 p-5 shadow-elegant backdrop-blur md:p-6 ${
        compact ? "" : ""
      }`}
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-accent">
          <Truck className="h-4 w-4 text-accent-foreground" />
        </div>
        <div>
          <h3 className="text-base font-bold text-primary">Get Instant Quote</h3>
          <p className="text-xs text-muted-foreground">Free • No obligation • Reply in 10 min</p>
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div>
          <Label htmlFor="pickup" className="text-xs font-semibold">Pickup City</Label>
          <Input id="pickup" name="pickup" placeholder="e.g. Delhi" maxLength={60} required />
        </div>
        <div>
          <Label htmlFor="drop" className="text-xs font-semibold">Drop City</Label>
          <Input id="drop" name="drop" placeholder="e.g. Bangalore" maxLength={60} required />
        </div>
        <div>
          <Label className="text-xs font-semibold">Vehicle Type</Label>
          <Select value={vehicle} onValueChange={setVehicle}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="Car">Car</SelectItem>
              <SelectItem value="Bike">Bike</SelectItem>
              <SelectItem value="Household">Household</SelectItem>
              <SelectItem value="Commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs font-semibold">Phone Number</Label>
          <Input id="phone" name="phone" inputMode="numeric" placeholder="10-digit mobile" maxLength={10} required />
        </div>
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="mt-4 w-full gradient-accent font-bold text-accent-foreground shadow-accent hover:opacity-95"
        size="lg"
      >
        {loading ? "Sending..." : "Get Free Quote"} <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default QuoteForm;
