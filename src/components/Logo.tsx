import { Link } from "@tanstack/react-router";

export function Logo({ className = "h-8 w-auto", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center gap-3.5 group cursor-pointer"
    >
      <div className="relative flex items-center justify-center">
        {/* SVG Logo Icon */}
        <svg
          className={`${className} transition-transform duration-300 group-hover:scale-105`}
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Accent Roof/Peak (Brand Primary - Orange/Rust) */}
          <path
            d="M4 16L16 4L28 16"
            stroke="var(--brand-primary)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Foundation/Walls (Brand Secondary - Dark Navy/Slate) */}
          <path
            d="M8 15V25C8 26.1046 8.89543 27 10 27H22C23.1046 27 24 26.1046 24 25V15"
            stroke="var(--brand-secondary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Nested Checkmark/Pro Symbol (Brand Primary - Orange/Rust) */}
          <path
            d="M12 18L15 21L20 14"
            stroke="var(--brand-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="font-display font-extrabold text-2xl tracking-tight text-brand-secondary group-hover:text-brand-primary transition-colors">
        ALL PRO<span className="text-brand-primary">.</span>
      </span>
    </Link>
  );
}
