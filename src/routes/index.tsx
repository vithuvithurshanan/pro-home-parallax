import { createFileRoute } from "@tanstack/react-router";

import heroKitchen from "@/assets/hero-kitchen.jpg";
import parallaxTools from "@/assets/parallax-tools.jpg";
import portfolioBath from "@/assets/portfolio-bath.jpg";
import portfolioExterior from "@/assets/portfolio-exterior.jpg";

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
      {/* Sticky Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-secondary/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-extrabold text-2xl tracking-tight">
            ALL PRO<span className="text-brand-primary">.</span>
          </div>
          <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
            <a
              href="#services"
              className="hover:text-brand-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#work"
              className="hover:text-brand-primary transition-colors"
            >
              Our Work
            </a>
            <a
              href="#contact"
              className="hover:text-brand-primary transition-colors"
            >
              Contact
            </a>
          </div>
          <a
            href="#contact"
            className="bg-brand-secondary text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors"
          >
            Estimate
          </a>
        </div>
      </nav>

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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 bg-brand-primary text-white text-xs font-bold uppercase tracking-widest mb-6">
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
            <div className="text-brand-primary font-bold text-sm uppercase tracking-widest border-b-2 border-brand-primary pb-1">
              View All Capabilities
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-secondary/10 border border-brand-secondary/10">
            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary/10 text-brand-primary grid place-items-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <span className="font-bold">01</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Kitchen & Bath
              </h3>
              <p className="text-brand-secondary/70 leading-relaxed mb-6">
                Full-scale renovations including custom cabinetry, tiling, and
                premium fixture installation.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/50">
                <li>• Custom Countertops</li>
                <li>• Layout Optimization</li>
              </ul>
            </div>

            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary/10 text-brand-primary grid place-items-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <span className="font-bold">02</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Exterior & Roof
              </h3>
              <p className="text-brand-secondary/70 leading-relaxed mb-6">
                Durable siding, professional roofing, and weatherproofing to
                protect your biggest investment.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/50">
                <li>• Slate & Asphalt Roofing</li>
                <li>• Vinyl & Fiber Cement Siding</li>
              </ul>
            </div>

            <div className="bg-white p-10 hover:bg-brand-muted transition-colors group">
              <div className="size-12 bg-brand-primary/10 text-brand-primary grid place-items-center mb-8 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <span className="font-bold">03</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">
                Handyman Pro
              </h3>
              <p className="text-brand-secondary/70 leading-relaxed mb-6">
                Small repairs and maintenance tasks that keep your home running
                smoothly all year long.
              </p>
              <ul className="space-y-2 text-sm font-medium text-brand-secondary/50">
                <li>• Structural Repairs</li>
                <li>• Deck Maintenance</li>
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
              <h4 className="font-display text-xl font-bold">
                The Oak Street Residence
              </h4>
              <p className="text-brand-secondary/60">
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
              <h4 className="font-display text-xl font-bold">Hilltop Estate</h4>
              <p className="text-brand-secondary/60">
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
                    <h5 className="font-bold">Local Headquarters</h5>
                    <p className="text-white/60">
                      123 Contractor Row, Suite 400
                      <br />
                      Professional Park, ST 55401
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-6 bg-brand-primary mt-1" />
                  <div>
                    <h5 className="font-bold">Call Our Lead Foreman</h5>
                    <p className="text-white/60">(555) ALL-PROS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 border border-white/10">
              <form
                className="space-y-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border border-white/20 p-4 focus:border-brand-primary outline-hidden text-white placeholder:text-white/50"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-white/20 p-4 focus:border-brand-primary outline-hidden text-white placeholder:text-white/50"
                  />
                </div>
                <select className="w-full bg-brand-secondary border border-white/20 p-4 focus:border-brand-primary outline-hidden text-white/50">
                  <option>Project Type</option>
                  <option>Kitchen Remodel</option>
                  <option>Roofing/Siding</option>
                  <option>Handyman Services</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your home..."
                  className="w-full bg-transparent border border-white/20 p-4 focus:border-brand-primary outline-hidden text-white placeholder:text-white/50"
                />
                <button className="w-full bg-brand-primary text-white py-4 font-bold uppercase tracking-[0.2em] hover:brightness-110 transition-all">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>&copy; 2024 All Pro Home Improvements. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span>Licensed & Insured</span>
              <span>Privacy Policy</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
