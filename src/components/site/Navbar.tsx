import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/bathroom-solutions", label: "Exclusive Bathware" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (s) => s.location.pathname,
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((link) => {
              const active = pathname === link.to;

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group relative text-[15px] font-medium text-ink transition-colors"
                >
                  <span
                    className={
                      active
                        ? "text-saffron"
                        : "group-hover:text-saffron transition-colors"
                    }
                  >
                    {link.label}
                  </span>

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-saffron transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+918882597076"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>

            <Link
              to="/contact"
              className="rounded-full bg-saffron px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-saffron-deep"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-ink lg:hidden"
            aria-label="Toggle Menu"
          >
            {open ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-5">

              {links.map((link) => {
                const active = pathname === link.to;

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                      active
                        ? "bg-saffron text-white"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <a
                href="tel:+918882597076"
                className="mt-3 rounded-full bg-saffron px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Call Now
              </a>

              <Link
                to="/contact"
                className="rounded-full bg-saffron px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request Quote
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer so page content doesn't go under fixed navbar */}
      <div className="h-20" />
    </>
  );
}