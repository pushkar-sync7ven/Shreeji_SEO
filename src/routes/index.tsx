import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  MapPin,
  Wrench,
  Users,
  Briefcase,
  PackageOpen,
  Boxes,
  Compass,
  HeartHandshake,
  Phone,
} from "lucide-react";
import { WhatsappIcon } from "@/components/site/WhatsappIcon";
import { buildSeoHead } from "@/lib/seo";

import heroInfra from "@/assets/hero-infra.jpg";
import catHdpe from "@/assets/cat-hdpe.jpg";
import catMdp from "@/assets/MDP/MDP_Fitting.png";
import catBath from "@/assets/cat-bathroom.jpg";
import catFaucet from "@/assets/cat-faucets.jpg";
import catBore from "@/assets/cat-borewell.jpg";
import catGI from "@/assets/GI/gifittings.jpeg";

export const Route = createFileRoute("/")({
  head: () =>
    buildSeoHead({
      title: "Shree Ji Enterprises — Infrastructure Supply & Premium Bathroom Solutions",
      description:
        "Complete solutions for HDPE Systems, MDP, Borewell Products, Premium Bathware, Faucets & Project Supply across MP.",
      path: "/",
      image: "/og-default.jpg",
    }),
  component: Index,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
} as const;

//hello
const categories = [
  {
    key: "hdpe",
    title: "HDPE Systems",
    desc: "Pipes & fittings for water, gas & irrigation.",
    img: catHdpe,
  },
  {
    key: "mdp",
    title: "MDP Systems",
    desc: "Multi-layer composite plumbing for modern projects.",
    img: catMdp,
  },
  {
    key: "bathroom",
    title: "Exclusive Bathware",
    desc: "Luxury bathware, sanitaryware & accessories.",
    img: catBath,
  },
  {
    key: "faucets",
    title: "Faucets & Fittings",
    desc: "Designer faucets from leading premium brands.",
    img: catFaucet,
  },
  {
    key: "borewell",
    title: "Borewell Products",
    desc: "Submersible pumps, pipes & complete kits.",
    img: catBore,
  },
  {
    key: "gi",
    title: "GI Products",
    desc: "Galvanised iron pipes & fittings for every application.",
    img: catGI,
  },
  {
    key: "residential",
    title: "Residential Products",
    desc: "Dutron pipes & fittings for modern homes.",
    img: catMdp,
  },
] as const;

const whyUs = [
  {
    icon: PackageOpen,
    title: "Complete Solutions",
    desc: "Plumbing, sanitary and water infrastructure solutions under one roof.",
  },
  {
    icon: Boxes,
    title: "Wide Product Range",
    desc: "Products for projects of every scale and budget.",
  },
  {
    icon: Compass,
    title: "Technical Guidance",
    desc: "Helping customers select the right solution with practical knowledge.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Availability",
    desc: "Organised supply network ensuring dependable product availability.",
  },
  {
    icon: Truck,
    title: "Delivery Assistance",
    desc: "Local and project-specific delivery support when you need it.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Relationships",
    desc: "Built through knowledge, reliability and dependable long-term service.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/918882597076?text=" +
  encodeURIComponent(
    "Hi! I have a query regarding your services. Looking forward to your response.",
  );

const LOGO_DEV_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;
// const logoUrl = (domain: string) =>
//   `https://img.logo.dev/${domain}?token=${LOGO_DEV_KEY}&size=200&format=png&retina=true`;

const logoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;

const brands: { name: string; domain: string }[] = [
  { name: "Han Plasto", domain: "hanplasto.com" },
  { name: "Dutron", domain: "dutrongroup.com" },
  { name: "Jaquar", domain: "jaquar.com" },
  { name: "Prayag", domain: "prayagpolymers.com" },
  { name: "Havit", domain: "havitpipes.com" },
  { name: "Konark", domain: "konarkplastic.com" },
  { name: "Rainson", domain: "rainson.co.in" },
  { name: "Sona", domain: "sonapipes.com" },
  { name: "Raksha Flo", domain: "rakshaflo.com" },
  { name: "Polyworld", domain: "polyworld.in" },
  { name: "Polo", domain: "polopipes.com" },
  { name: "Swastik", domain: "swastikpipes.com" },
  { name: "Kisan", domain: "kisanmouldings.com" },
  { name: "Solvi", domain: "solvipipes.com" },
  { name: "Pidilite", domain: "pidilite.com" },
  { name: "Thames", domain: "thameswater.co.uk" },
];

function Index() {
  return (
    <>
      <Hero />
      <WhatWeProvide />
      <WhyChoose />
      <Brands />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal text-white">
      <motion.img
        src={heroInfra}
        alt="Infrastructure supply at project site"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/40" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.35em] text-saffron"
        >
          Established Trust · Engineered Supply
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]"
        >
          Infrastructure Supply <br />
          <span className="text-saffron">& Premium Bathroom</span> Solutions
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
        >
          Complete solutions for HDPE Systems, MDP Systems, GI Products, Borewell Solutions,
          Bathroom Products, Faucets & Fittings, and Residential Plumbing Solutions — serving
          projects across Madhya Pradesh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(217,122,22,0.7)] transition hover:bg-saffron-deep"
          >
            Explore Products
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10"
          >
            Request Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-20 grid max-w-3xl grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3"
        >
          {[
            { icon: MapPin, t: "Serving Projects", s: "MP" },
            { icon: ShieldCheck, t: "Quality Products", s: "From trusted brands" },
            { icon: Wrench, t: "Technical Support", s: "& after-sales assistance" },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-saffron/40 bg-saffron/10 text-saffron">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{t}</p>
                <p className="text-xs text-white/60">{s}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-saffron">{eyebrow}</p>
      <h2 className="font-display text-4xl text-ink md:text-5xl">{title}</h2>
      {lead && <p className="mx-auto mt-5 max-w-xl text-base text-ink-soft">{lead}</p>}
    </motion.div>
  );
}

function WhatWeProvide() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="What We Provide"
          title="End-to-end infrastructure & bathware supply"
          lead="From HDPE pipelines on a project site to designer faucets in a residence — one trusted partner for all."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.slice(0, 6).map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card transition hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(42,42,42,0.25)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <h3 className="font-display text-2xl text-ink">{c.title}</h3>

                <p className="mt-2 text-sm text-ink-soft">{c.desc}</p>

                <Link
                  to="/products"
                  search={{ category: c.key }}
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-saffron"
                >
                  View Products
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/products"
            className="group inline-flex items-center gap-3 rounded-full bg-saffron px-8 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_-12px_rgba(217,122,22,0.65)] transition-all duration-300 hover:-translate-y-1 hover:bg-saffron-deep hover:shadow-[0_24px_50px_-12px_rgba(217,122,22,0.75)]"
          >
            View All Products
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 text-white">
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-saffron/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-brass/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-saffron">
            Why Shreeji Enterprises
          </p>
          <h2 className="font-display text-4xl md:text-5xl">
            Engineering trust, delivered at project scale.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-saffron/50 hover:bg-white/[0.06]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron/15 text-saffron transition group-hover:bg-saffron group-hover:text-white">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-2xl">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Brands() {
  const loop = [...brands, ...brands];
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          eyebrow="Brands We Supply"
          title="Authorised channels of India's leading manufacturers"
        />
      </div>
      <div className="relative mt-14 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex w-max marquee-track items-center gap-10 px-6">
          {loop.map((b, i) => (
            <div
              key={`${b.name}-${i}`}
              className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl bg-white px-5 shadow-[0_4px_18px_-8px_rgba(42,42,42,0.15)] ring-1 ring-border/50 transition hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-10px_rgba(42,42,42,0.25)]"
              title={b.name}
            >
              <img
                src={logoUrl(b.domain)}
                alt={`${b.name} logo`}
                loading="lazy"
                className="max-h-12 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {[Users, Briefcase].map((Icon, i) => (
          <span key={i} className="hidden" aria-hidden>
            <Icon />
          </span>
        ))}
      </div>
    </section>
  );
}

function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-charcoal via-charcoal to-[#1a0f06] py-28 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-32 left-1/3 h-96 w-96 animate-pulse rounded-full bg-saffron/40 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-brass/30 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-saffron">
          Let's Build Together
        </p>
        <h2 className="font-display text-4xl leading-tight md:text-6xl">
          Ready to start your next project?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-white/70">
          Whether you're sourcing for a large-scale infrastructure project or designing a premium
          residence — talk to our team for technical consultation and pricing.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="tel:+918882597076"
            className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-4 text-sm font-semibold text-white transition hover:bg-saffron-deep"
          >
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <WhatsappIcon className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
