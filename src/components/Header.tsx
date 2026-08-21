import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./Logo";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const sectionIds = ["services", "about", "work", "contact"];
    const sectionElements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (window.scrollY < 80) {
          setActiveSection("home");
          return;
        }

        const intersecting = entries.filter((e) => e.isIntersecting);
        if (intersecting.length > 0) {
          intersecting.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(intersecting[0].target.id);
        }
      },
      {
        rootMargin: "-96px 0px -40% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 80) {
            setActiveSection("home");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-secondary/5">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Logo
          onClick={() => {
            setActiveSection("home");
            setIsMobileMenuOpen(false);
          }}
        />

        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
          <NavLink
            to="/"
            exact
            isActive={isHomePage && activeSection === "home"}
            onClick={() => setActiveSection("home")}
          >
            Home
          </NavLink>
          
          <NavLink
            to="/"
            hash="services"
            exact
            isActive={isHomePage && activeSection === "services"}
            onClick={() => setActiveSection("services")}
          >
            Services
          </NavLink>
          <NavLink
            to="/"
            hash="about"
            exact
            isActive={isHomePage && activeSection === "about"}
            onClick={() => setActiveSection("about")}
          >
            About
          </NavLink>
          <NavLink
            to="/"
            hash="work"
            exact
            isActive={isHomePage && activeSection === "work"}
            onClick={() => setActiveSection("work")}
          >
            Our Work
          </NavLink>
          <NavLink
            to="/"
            hash="contact"
            exact
            isActive={isHomePage && activeSection === "contact"}
            onClick={() => setActiveSection("contact")}
          >
            Contact
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/"
            hash="contact"
            onClick={() => setActiveSection("contact")}
            className="bg-brand-secondary text-white px-4 py-2 md:px-6 md:py-2.5 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors whitespace-nowrap"
          >
            Estimate
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className="p-2 text-brand-secondary hover:text-brand-primary transition-colors cursor-pointer"
                  aria-label="Open Menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full h-auto bg-white p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-6 mt-4">
                  <div className="flex items-center justify-between border-b pb-4 border-brand-secondary/5">
                    <Logo
                      onClick={() => {
                        setActiveSection("home");
                        setIsMobileMenuOpen(false);
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-5 font-medium text-lg uppercase tracking-wider pl-2">
                    <NavLink
                      to="/"
                      exact
                      isActive={isHomePage && activeSection === "home"}
                      onClick={() => {
                        setActiveSection("home");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/"
                      hash="services"
                      exact
                      isActive={isHomePage && activeSection === "services"}
                      onClick={() => {
                        setActiveSection("services");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/"
                      hash="about"
                      exact
                      isActive={isHomePage && activeSection === "about"}
                      onClick={() => {
                        setActiveSection("about");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      About
                    </NavLink>
                    <NavLink
                      to="/"
                      hash="work"
                      exact
                      isActive={isHomePage && activeSection === "work"}
                      onClick={() => {
                        setActiveSection("work");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Our Work
                    </NavLink>
                    <NavLink
                      to="/"
                      hash="contact"
                      exact
                      isActive={isHomePage && activeSection === "contact"}
                      onClick={() => {
                        setActiveSection("contact");
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t pt-4 border-brand-secondary/5 pb-2">
                  <Link
                    to="/"
                    hash="contact"
                    onClick={() => {
                      setActiveSection("contact");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-brand-secondary text-white text-center py-3 text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors"
                  >
                    Get Estimate
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  to,
  hash,
  exact,
  isActive,
  onClick,
  children,
}: {
  to: string;
  hash?: string;
  exact?: boolean;
  isActive: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      {...(exact
        ? { activeOptions: { exact: true, includeHash: true } as const }
        : {})}
      onClick={onClick}
      className={`text-brand-secondary hover:text-brand-primary transition-colors ${
        isActive ? "text-brand-primary! font-bold" : ""
      }`}
    >
      {children}
    </Link>
  );
}



