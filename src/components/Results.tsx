import clientBefore from "@/assets/client-before.jpg";
import clientTreatment from "@/assets/client-treatment.jpg";
import clientAfter from "@/assets/client-after.jpg";
import client2Before from "@/assets/client2-before.jpg";
import client2Treatment from "@/assets/client2-treatment.jpg";
import client2After from "@/assets/client2-after.jpg";
import client3Before from "@/assets/client3-before.jpg";
import client3Treatment from "@/assets/client3-treatment.jpg";
import client3After from "@/assets/client3-after.jpg";

const Results = () => {
  const transformations = [
    {
      before: clientBefore,
      treatment: clientTreatment,
      after: clientAfter,
      name: "Client 1",
      procedure: "FUE Hair Transplant",
      grafts: "3,500 Grafts"
    },
    {
      before: client2Before,
      treatment: client2Treatment,
      after: client2After,
      name: "Client 2",
      procedure: "FUE Hair Transplant",
      grafts: "4,000 Grafts"
    },
    {
      before: client3Before,
      treatment: client3Treatment,
      after: client3After,
      name: "Client 3",
      procedure: "FUE Hair Transplant",
      grafts: "3,800 Grafts"
    }
  ];

  return (
    <section id="results" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Real <span className="text-primary">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the incredible transformations of our clients. These authentic before, during treatment, and after photos showcase the quality of our work.
          </p>
        </div>

        <div className="space-y-16">
          {transformations.map((transformation, index) => (
            <div key={index} className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Before */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} before treatment`}
                      className="w-full h-80 md:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-destructive/90 text-destructive-foreground px-4 py-2 rounded-full text-sm font-semibold mb-2">
                        Before
                      </span>
                      <p className="text-white/90 text-sm">Initial consultation</p>
                    </div>
                  </div>
                </div>

                {/* During Treatment */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={transformation.treatment}
                      alt={`${transformation.name} during treatment`}
                      className="w-full h-80 md:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-2">
                        Treatment
                      </span>
                      <p className="text-white/90 text-sm">{transformation.grafts}</p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} after treatment`}
                      className="w-full h-80 md:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block bg-green-600/90 text-white px-4 py-2 rounded-full text-sm font-semibold mb-2">
                        After
                      </span>
                      <p className="text-white/90 text-sm">12 months post-procedure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">{transformation.procedure}</span> • {transformation.grafts}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
