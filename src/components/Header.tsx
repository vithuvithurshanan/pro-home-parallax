import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function Header() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-secondary/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="font-display font-extrabold text-2xl tracking-tight text-brand-secondary"
        >
          ALL PRO<span className="text-brand-primary">.</span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium text-sm uppercase tracking-wider">
          <NavLink to="/" exact>
            Home
          </NavLink>
          <NavLink to="/about" exact>
            About
          </NavLink>
          <NavLink to="/" hash="services" exact>
            Services
          </NavLink>
          <NavLink to="/" hash="work" exact>
            Our Work
          </NavLink>
          <NavLink to="/" hash="contact" exact>
            Contact
          </NavLink>
        </div>


        <Link
          to="/"
          hash="contact"
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
  children,
}: {
  to: string;
  hash?: string;
  exact?: boolean;
  children: ReactNode;
}) {
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      {...(exact ? { activeOptions: { exact: true } as const } : {})}
      className="text-brand-secondary hover:text-brand-primary transition-colors data-[status=active]:text-brand-primary data-[status=active]:font-bold"
    >
      {children}
    </Link>
  );
}


