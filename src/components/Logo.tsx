import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo.png";

export function Logo({ className = "h-14 w-auto", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className="flex items-center group cursor-pointer"
    >
      <img
        src={logoImg}
        alt="ALL PRO Logo"
        className={`${className} object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
}
