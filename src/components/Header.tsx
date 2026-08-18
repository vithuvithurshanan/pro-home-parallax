import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header height

      // If at the very top of the page, set to home
      if (window.scrollY < 100) {
        setActiveSection("home");
        return;
      }

      // Check each section's offset top position
      const sections = ["services", "about", "work", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger initial calculation
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-secondary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          onClick={() => setActiveSection("home")}
          className="font-display font-extrabold text-2xl tracking-tight text-brand-secondary"
        >
          ALL PRO<span className="text-brand-primary">.</span>
        </Link>

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

        <Link
          to="/"
          hash="contact"
          onClick={() => setActiveSection("contact")}
          className="bg-brand-secondary text-white px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-brand-primary transition-colors"
        >
          Estimate
        </Link>
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



