import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import heroKitchen from "@/assets/hero-kitchen.jpg";
import parallaxTools from "@/assets/parallax-tools.jpg";
import portfolioBath from "@/assets/portfolio-bath.jpg";
import portfolioExterior from "@/assets/portfolio-exterior.jpg";

// Lazy-loads the contact form iframe only when the section scrolls into view.
// This prevents the third-party __cf_bm Cloudflare cookie from being set on
// initial page load, fixing the Lighthouse Best Practices warning.
function LazyFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // start loading 200px before it enters viewport
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Once the iframe loads, inject the embed script
  useEffect(() => {
    if (!shouldLoad) return;
    const script = document.createElement("script");
    script.src = "https://app.allprocontractingny.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="bg-white rounded-lg p-4 border border-white/10 overflow-hidden"
      style={{ minHeight: "831px" }}
    >
      {shouldLoad ? (
        <iframe
          src="https://app.allprocontractingny.com/widget/form/iv0oB5dSgv3pFewRVoWs"
          style={{ width: "100%", height: "831px", border: "none", borderRadius: "4px" }}
          id="inline-iv0oB5dSgv3pFewRVoWs"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Optin Claim"
          data-height="831"
          data-layout-iframe-id="inline-iv0oB5dSgv3pFewRVoWs"
          data-form-id="iv0oB5dSgv3pFewRVoWs"
          title="Optin Claim"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center h-full" style={{ minHeight: "831px" }}>
          <div className="text-center text-brand-secondary/80">
            <div className="w-10 h-10 border-2 border-brand-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm font-semibold">Loading form…</p>
          </div>
        </div>
      )}
    </div>
  );
}


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "All Pro Home Improvements | Built to Last Longer",
      },
      {
        name: "description",
        content:
          "All Pro Home Improvements delivers expert kitchen remodeling, roofing, siding, and handyman services with precision craftsmanship and local reliability. Get your free estimate today.",
      },
      {
        property: "og:title",
        content: "All Pro Home Improvements | Built to Last Longer",
      },
      {
        property: "og:description",
        content:
          "Expert kitchen remodeling, roofing, siding, and handyman services for homeowners who value precision craftsmanship and local reliability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {

  return (
    <div className="font-sans text-brand-secondary selection:bg-brand-primary/30">
      {/* Hero Section with Parallax Effect */}

      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="parallax-bg absolute inset-0 w-full h-full bg-slate-200"
            style={{ backgroundImage: `url(${heroKitchen})` }}
          >
            <div className="absolute inset-0 bg-brand-secondary/40" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-brand-primary text-brand-secondary text-xs font-bold uppercase tracking-widest mb-6">
              Est. 1998
            </span>
            <h1 className="font-display text-6xl md:text-8xl font-extrabold text-white leading-[0.9] mb-8">
              BUILT TO <br />
              LAST <span className="text-brand-primary italic">LONGER.</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl mb-10 leading-relaxed">
              Expert remodeling, roofing, and handyman services for homeowners
              who value precision craftsmanship and local reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-8 py-4 bg-white text-brand-secondary font-bold uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all"
              >
                Explore Services
              </a>
              <div className="flex items-center gap-4 px-6 text-white">
                <div className="size-12 rounded-full border border-white/30 grid place-items-center font-bold">
                  4.9
                </div>
                <div className="text-sm font-medium">
                  Google Rated <br />
                  Local Business
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-brand-secondary">
                Complete Home Mastery
              </h2>
              <p className="text-lg text-brand-secondary/60">
                From the foundation to the roof ridge, we handle every detail of
                your home's evolution.
              </p>
            </div>
            <div className="text-brand-secondary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1">
              View All Capabilities
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-secondary/10 border border-brand-secondary/10">
            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary text-brand-secondary grid place-items-center mb-8 font-black text-lg transition-colors">
                <span>01</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Kitchen & Bath
              </h3>
              <p className="text-brand-secondary/80 leading-relaxed mb-6">
                Full-scale renovations including custom cabinetry, tiling, and
                premium fixture installation.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/80">
                <li>• Custom Countertops</li>
                <li>• Layout Optimization</li>
              </ul>
            </div>

            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary text-brand-secondary grid place-items-center mb-8 font-black text-lg transition-colors">
                <span>02</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Exterior & Roof
              </h3>
              <p className="text-brand-secondary/80 leading-relaxed mb-6">
                Durable siding, professional roofing, and weatherproofing to
                protect your biggest investment.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/80">
                <li>• Slate & Asphalt Roofing</li>
                <li>• Vinyl & Fiber Cement Siding</li>
              </ul>
            </div>

            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary text-brand-secondary grid place-items-center mb-8 font-black text-lg transition-colors">
                <span>03</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Handyman Pro
              </h3>
              <p className="text-brand-secondary/80 leading-relaxed mb-6">
                Small repairs and maintenance tasks that keep your home running
                smoothly all year long.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/80">
                <li>• Structural Repairs</li>
                <li>• Deck Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="inline-block py-1 px-3 bg-brand-primary text-brand-secondary text-xs font-bold uppercase tracking-widest mb-6">
                Est. 1998
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-brand-secondary/80 leading-relaxed mb-6">
                All Pro Home Improvements is a locally owned and operated home
                improvement company serving Buffalo, Clarence, and the surrounding
                Western New York communities. Since 1998, we have helped
                homeowners transform houses into homes they are proud of — one
                project, one detail, one handshake at a time.
              </p>
              <p className="text-lg text-brand-secondary/80 leading-relaxed mb-6">
                From kitchen and bath renovations to roofing, siding, and
                handyman services, our team combines old-school craftsmanship with
                modern techniques. We believe every job deserves a professional
                finish, clear communication, and a respect for your time and
                budget.
              </p>
              <p className="text-lg text-brand-secondary/80 leading-relaxed">
                We are fully licensed and insured, and every project is backed by
                our commitment to doing the job right the first time.
              </p>
            </div>

            <div className="bg-white p-10 lg:p-12">
              <h3 className="font-display text-2xl font-bold mb-8">
                Why Homeowners Choose Us
              </h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-brand-secondary grid place-items-center font-black shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Local Expertise</h4>
                    <p className="text-brand-secondary/80">
                      Buffalo-area winters and homes need a crew that knows the
                      climate. We do.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-brand-secondary grid place-items-center font-black shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Transparent Pricing</h4>
                    <p className="text-brand-secondary/80">
                      No hidden fees. We walk you through every line of the
                      estimate before we start.
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="size-10 bg-brand-primary text-brand-secondary grid place-items-center font-black shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Quality Materials</h4>
                    <p className="text-brand-secondary/80">
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

      {/* Mid-Page Parallax Banner */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="parallax-bg absolute inset-0 w-full h-full bg-slate-400"
            style={{ backgroundImage: `url(${parallaxTools})` }}
          >
            <div className="absolute inset-0 bg-brand-primary/20 mix-blend-multiply" />
          </div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="bg-brand-secondary p-12 max-w-2xl">
            <h2 className="font-display text-4xl font-bold text-white mb-4">
              Quality You Can Touch.
            </h2>
            <p className="text-white/70">
              We don't cut corners. We build them to be perfect. Get your free
              project walkthrough today.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section id="work" className="py-24 bg-brand-muted">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-4xl font-bold mb-12">
            Recent Transformations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="w-full aspect-[4/5] bg-white mb-6 overflow-hidden">
                <img
                  src={portfolioBath}
                  alt="Oak Street Residence master bathroom renovation"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-bold">
                The Oak Street Residence
              </h3>
              <p className="text-brand-secondary/80">
                Master Bath & Spa Conversion
              </p>
            </div>
            <div className="group cursor-pointer pt-0 md:pt-12">
              <div className="w-full aspect-[4/5] bg-white mb-6 overflow-hidden">
                <img
                  src={portfolioExterior}
                  alt="Hilltop Estate exterior siding and decking"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <h3 className="font-display text-xl font-bold">Hilltop Estate</h3>
              <p className="text-brand-secondary/80">
                Exterior Siding & Decking System
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-brand-secondary text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-display text-5xl font-extrabold mb-8">
                START YOUR <br />
                <span className="text-brand-primary">PROJECT.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-6 bg-brand-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Local Headquarters</h3>
                    <p className="text-white/80">
                      9950 County Road
                      <br />
                      Clarence, Buffalo, NY 14032
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-6 bg-brand-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Call or Text</h3>
                    <a
                      href="tel:716-710-0002"
                      className="text-white/80 hover:text-brand-primary transition-colors"
                    >
                      716-710-0002
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-6 bg-brand-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <a
                      href="mailto:allprohomebuffalo@gmail.com"
                      className="text-white/80 hover:text-brand-primary transition-colors"
                    >
                      allprohomebuffalo@gmail.com
                    </a>
                  </div>
                </div>

              </div>
            </div>
            <LazyFormEmbed />
          </div>
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>&copy; 2024 All Pro Home Improvements. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span>Licensed & Insured</span>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
