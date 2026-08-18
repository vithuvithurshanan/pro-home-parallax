import { createFileRoute } from "@tanstack/react-router";
import parallaxTools from "@/assets/parallax-tools.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | All Pro Home Improvements" },
      {
        name: "description",
        content:
          "Learn about All Pro Home Improvements — a trusted Buffalo-area contractor delivering expert kitchen remodeling, roofing, siding, and handyman services since 1998.",
      },
      {
        property: "og:title",
        content: "About Us | All Pro Home Improvements",
      },
      {
        property: "og:description",
        content:
          "Trusted Buffalo-area contractor for kitchen remodeling, roofing, siding, and handyman services since 1998.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="font-sans text-brand-secondary selection:bg-brand-primary/30">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div
            className="parallax-bg absolute inset-0 w-full h-full bg-slate-400"
            style={{ backgroundImage: `url(${parallaxTools})` }}
          >
            <div className="absolute inset-0 bg-brand-secondary/60" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <span className="inline-block py-1 px-3 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest mb-6">
            Est. 1998
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[0.95] max-w-3xl">
            BUILT ON TRUST, <br />
            <span className="text-brand-primary italic">CRAFTED BY HAND.</span>
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-brand-secondary/70 leading-relaxed mb-6">
                All Pro Home Improvements is a locally owned and operated home
                improvement company serving Buffalo, Clarence, and the surrounding
                Western New York communities. Since 1998, we have helped
                homeowners transform houses into homes they are proud of — one
                project, one detail, one handshake at a time.
              </p>
              <p className="text-lg text-brand-secondary/70 leading-relaxed mb-6">
                From kitchen and bath renovations to roofing, siding, and
                handyman services, our team combines old-school craftsmanship with
                modern techniques. We believe every job deserves a professional
                finish, clear communication, and a respect for your time and
                budget.
              </p>
              <p className="text-lg text-brand-secondary/70 leading-relaxed">
                We are fully licensed and insured, and every project is backed by
                our commitment to doing the job right the first time.
              </p>
            </div>

            <div className="bg-brand-muted p-10 lg:p-12">
              <h3 className="font-display text-2xl font-bold mb-8">
                Why Homeowners Choose Us
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-white grid place-items-center font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Local Expertise</h4>
                    <p className="text-brand-secondary/60">
                      Buffalo-area winters and homes need a crew that knows the
                      climate. We do.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-white grid place-items-center font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Transparent Pricing</h4>
                    <p className="text-brand-secondary/60">
                      No hidden fees. We walk you through every line of the
                      estimate before we start.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-white grid place-items-center font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Quality Materials</h4>
                    <p className="text-brand-secondary/60">
                      We use proven products and brands built to last in Western
                      New York conditions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 bg-brand-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-12">
            GET IN <span className="text-brand-primary">TOUCH.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h5 className="font-bold text-lg mb-2">Local Office</h5>
              <p className="text-white/60">
                9950 County Road
                <br />
                Clarence, Buffalo, NY 14032
              </p>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Call or Text</h5>
              <a
                href="tel:716-710-0002"
                className="text-white/60 hover:text-brand-primary transition-colors"
              >
                716-710-0002
              </a>
            </div>
            <div>
              <h5 className="font-bold text-lg mb-2">Email Us</h5>
              <a
                href="mailto:allprohomebuffalo@gmail.com"
                className="text-white/60 hover:text-brand-primary transition-colors"
              >
                allprohomebuffalo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
