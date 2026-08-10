import { Link } from "@tanstack/react-router";
import ShreejiLogo from "../../assets/Shreeji_Logo_Light.png";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export function Logo({ variant = "dark", className = "h-24" }: LogoProps) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center"
      aria-label="Shreeji Enterprises Home"
    >
      <img
        src={ShreejiLogo}
        alt="Shreeji Enterprises Logo"
        width={574}
        height={435}
        className={`${className} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </Link>
  );
}
