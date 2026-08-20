import { Link } from "@tanstack/react-router";
import logoWebp from "@/assets/logo.webp";
import logoPng from "@/assets/logo.png";

export function Logo({ className = "h-16 md:h-22 w-auto", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center group cursor-pointer"
    >
      <picture>
        <source srcSet={logoWebp} type="image/webp" />
        <img
          src={logoPng}
          alt="ALL PRO Logo"
          width={400}
          height={289}
          loading="eager"
          decoding="async"
          className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
        />
      </picture>
    </Link>
  );
}
