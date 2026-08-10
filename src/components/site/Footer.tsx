import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "./Logo";
import {
  WhatsappIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
} from "./WhatsappIcon";

const WHATSAPP_URL =
  "https://wa.me/918882597076?text=" +
  encodeURIComponent("Hi! I have a query regarding your services. Looking forward to your response.");

const productCats = [
  { key: "hdpe", label: "HDPE Systems" },
  { key: "mdp", label: "MDP Systems" },
  { key: "bathroom", label: "Exclusive Bathware" },
  { key: "faucets", label: "Faucets & Fittings" },
  { key: "borewell", label: "Borewell Products" },
  { key: "gi", label: "GI Products" },
  { key: "residential", label: "Residential Products" },
] as const;

const socials = [
  { Icon: FacebookIcon, label: "Facebook", href: "#" },
  { Icon: InstagramIcon, label: "Instagram", href: "#" },
  { Icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { Icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-4 lg:px-10">
        <div className="space-y-5">
          <Logo variant="light" />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            Infrastructure Supply & Premium Bathroom Solutions for projects in Madhya Pradesh.
          </p>
          <div className="flex gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-saffron hover:text-saffron"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/products", label: "Products" },
              { to: "/bathroom-solutions", label: "Exclusive Bathware" },
              { to: "/about", label: "About" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/60 transition hover:text-saffron">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Product Categories
          </h4>
          <ul className="space-y-3 text-sm text-white/60">
            {productCats.map((c) => (
              <li key={c.key}>
                <Link
                  to="/products"
                  search={{ category: c.key }}
                  className="text-white/60 transition hover:text-saffron"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li>
              <a href="tel:+918882597076" className="flex gap-3 text-white/70 transition hover:text-saffron">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> +91 88825 97076
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 text-white/70 transition hover:text-saffron"
              >
                <WhatsappIcon className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> +91 88825 97076 (WhatsApp)
              </a>
            </li>
            <li>
              <a
                href="mailto:shreejienterprises1806@gmail.com"
                className="flex gap-3 text-white/70 transition hover:text-saffron"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-saffron" /> shreejienterprises1806@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-saffron" />
              Shreeji Enterprise, Bus Stand, Navrang Park Colony, Madhya Pradesh — 485005
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-white/50 lg:flex-row lg:px-10">
          <p>© {new Date().getFullYear()} ShreeJi Enterprises. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-saffron"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-saffron"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}