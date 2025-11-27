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
    <section id="results" className="relative isolate overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-[#090604] via-[#050505] to-[#0a0806]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,216,140,0.12),transparent_55%)]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-primary/80">Our Craft</p>
          <h2 className="font-playfair text-4xl text-white md:text-5xl">
            Real <span className="text-primary">Results</span> That Inspire Confidence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Authentic before, treatment, and after journeys highlighting the precision our surgeons bring to every graft.
          </p>
        </div>

        {/* Featured Video */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_45px_120px_-60px_rgba(0,0,0,1)]">
            <video autoPlay loop muted playsInline className="h-full w-full object-cover">
              <source src="/videos/treatment-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <p className="mt-4 text-center text-sm text-white/70">Watch our treatment process in action</p>
        </div>

        <div className="mt-16 space-y-16">
          {transformations.map((transformation, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
                {/* Before */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_30px_80px_-45px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.before}
                      alt={`${transformation.name} before treatment`}
                      className="h-80 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="mb-2 inline-block rounded-full bg-red-500/90 px-4 py-2 text-sm font-semibold text-white">
                        Before
                      </span>
                      <p className="text-sm text-white/85">Initial consultation</p>
                    </div>
                  </div>
                </div>

                {/* During Treatment */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_30px_80px_-45px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.treatment}
                      alt={`${transformation.name} during treatment`}
                      className="h-80 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="mb-2 inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
                        Treatment
                      </span>
                      <p className="text-sm text-white/85">{transformation.grafts}</p>
                    </div>
                  </div>
                </div>

                {/* After */}
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 shadow-[0_30px_80px_-45px_rgba(0,0,0,1)]">
                    <img
                      src={transformation.after}
                      alt={`${transformation.name} after treatment`}
                      className="h-80 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105 md:h-96"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <span className="mb-2 inline-block rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-white">
                        After
                      </span>
                      <p className="text-sm text-white/85">12 months post-procedure</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-white/70">
                  <span className="font-semibold text-white">{transformation.procedure}</span> • {transformation.grafts}
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
