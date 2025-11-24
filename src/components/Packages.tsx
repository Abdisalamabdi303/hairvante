import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Packages = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/905438611089", "_blank");
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-foreground">
            All-Inclusive <span className="text-primary">HAIRVANTE</span> Package
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for a successful hair restoration journey, all in one comprehensive package
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.3)] overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-primary/80 p-8 text-center">
              <CardTitle className="font-playfair text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                €3,000
              </CardTitle>
              <CardDescription className="text-primary-foreground/90 text-xl">
                Complete Hair Restoration Package
              </CardDescription>
            </div>
            
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
                <Sparkles className="h-5 w-5" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
            </CardHeader>

            <CardContent className="space-y-8 pb-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Luxury Accommodation</h4>
                      <p className="text-muted-foreground text-sm">Premium hotel stay with full amenities and comfort</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">VIP Transfer Service</h4>
                      <p className="text-muted-foreground text-sm">Airport-Hotel-Clinic transfers with luxury vehicles</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Premium After Care Kit</h4>
                      <p className="text-muted-foreground text-sm">Medical-grade shampoo, nourishing cream, and prescribed medications</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Expert Surgical Team</h4>
                      <p className="text-muted-foreground text-sm">Experienced surgeons specialized in FUE & DHI techniques</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">24/7 Patient Support</h4>
                      <p className="text-muted-foreground text-sm">Round-the-clock assistance in your preferred language</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Lifetime Guarantee</h4>
                      <p className="text-muted-foreground text-sm">We stand behind our results with comprehensive warranty</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Blood Tests & Analysis</h4>
                      <p className="text-muted-foreground text-sm">Comprehensive pre-operative health screening</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Post-Op Follow-ups</h4>
                      <p className="text-muted-foreground text-sm">Regular check-ins and progress monitoring for 12 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-primary/20 pt-6">
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 rounded-lg">
                  <div className="flex items-start gap-3 mb-4">
                    <Gift className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-foreground mb-2">Exclusive Bonus Treatments</h4>
                      <p className="text-muted-foreground mb-3">Enhance your results with our complimentary premium treatments</p>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-background p-4 rounded-lg">
                      <h5 className="font-semibold text-foreground mb-1">Special Gift</h5>
                      <p className="text-sm text-muted-foreground">Mesotherapy treatment set for the first 10 clients - promotes healing and growth</p>
                    </div>
                    <div className="bg-background p-4 rounded-lg">
                      <h5 className="font-semibold text-foreground mb-1">Bonus Treatment</h5>
                      <p className="text-sm text-muted-foreground">One PRP session + Deep Sleep therapy - accelerates natural hair regeneration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-12 py-6 shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.5)] hover:shadow-[0_20px_50px_-10px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all"
                  onClick={handleWhatsAppClick}
                >
                  Book Your Transformation Today
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Contact us now for a free consultation and personalized treatment plan
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
