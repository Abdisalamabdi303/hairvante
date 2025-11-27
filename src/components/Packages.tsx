import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Packages = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/905438611089", "_blank");
  };

  return (
    <section id="packages" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#070504] via-[#050505] to-[#090806]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,216,140,0.08),transparent_65%)]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">Signature Package</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            All-Inclusive <span className="text-primary">HairVante</span> Experience
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/70">
            One curated package covering every touchpoint of your stay—from arrival to long-term aftercare.
          </p>
        </div>

        <div className="mx-auto mt-16">
          <Card className="overflow-hidden rounded-[32px] border border-white/15 bg-white/5 text-white shadow-[0_45px_120px_-60px_rgba(0,0,0,1)]">
            <div className="bg-gradient-to-r from-[#f8d88d] via-[#dfb25a] to-[#b8802a] p-8 text-center text-black">
              <CardTitle className="font-playfair text-4xl font-bold md:text-5xl">€3,000</CardTitle>
              <CardDescription className="text-base text-black/80">
                Complete Hair Restoration Package
              </CardDescription>
            </div>

            <CardHeader className="text-center pb-4">
              <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/10 px-4 py-2 text-primary">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-10 pb-10">
              <div className="grid gap-6 md:grid-cols-2">
                {[ 
                  "Luxury Accommodation",
                  "VIP Transfer Service",
                  "Premium After Care Kit",
                  "Expert Surgical Team",
                  "24/7 Patient Support",
                  "Lifetime Guarantee",
                  "Blood Tests & Analysis",
                  "Post-Op Follow-ups",
                ].map((item, idx) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                    <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item}</h4>
                      <p className="text-sm text-white/70">
                        {
                          [
                            "Premium hotel stay with full amenities and comfort",
                            "Airport-hotel-clinic transfers in chauffeured vehicles",
                            "Medical-grade shampoo, nourishing serum, and prescriptions",
                            "Surgeons dedicated to FUE & DHI artistry",
                            "Round-the-clock multilingual coordinators",
                            "Comprehensive warranty on graft survival",
                            "Detailed laboratory screening on arrival",
                            "12 months of virtual follow-ups and growth tracking",
                          ][idx]
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6 rounded-[24px] border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-3">
                  <Gift className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-playfair text-2xl text-white">Complimentary Enhancements</h4>
                    <p className="text-white/70">
                      Thoughtful add-ons that accelerate healing and elevate comfort.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Mesotherapy Set",
                      copy: "Specialized treatment kit for the first 10 clients to boost recovery.",
                    },
                    {
                      title: "PRP + Deep Sleep Therapy",
                      copy: "A restorative session designed to maximize graft retention.",
                    },
                  ].map((bonus) => (
                    <div key={bonus.title} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <h5 className="font-semibold text-white">{bonus.title}</h5>
                      <p className="text-sm text-white/70">{bonus.copy}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#f8d88d] via-[#dfb25a] to-[#b8802a] px-12 py-6 text-black shadow-[0_25px_80px_-40px_rgba(248,216,141,1)] transition hover:scale-105"
                  onClick={handleWhatsAppClick}
                >
                  Book Your Transformation Today
                </Button>
                <p className="mt-4 text-sm text-white/70">
                  Contact us for a free consultation and bespoke treatment plan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Packages;
