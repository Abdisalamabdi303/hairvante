import clientBefore from "@/assets/client-before.jpg";
import clientTreatment from "@/assets/client-treatment.jpg";
import clientAfter from "@/assets/client-after.jpg";

const Results = () => {
  const transformations = [
    {
      before: clientBefore,
      treatment: clientTreatment,
      after: clientAfter,
      name: "Client Transformation",
      procedure: "FUE Hair Transplant",
      grafts: "3,500 Grafts"
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

        {transformations.map((transformation, index) => (
          <div key={index} className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Before */}
              <div className="group relative">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={transformation.before}
                    alt="Before treatment"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
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
                    alt="During treatment"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
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
                    alt="After treatment"
                    className="w-full h-80 md:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
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
    </section>
  );
};

export default Results;
