import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  PackageOpen,
  Boxes,
  Compass,
  ShieldCheck,
  Truck,
  HeartHandshake,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

import { PageHero } from "@/components/site/PageHero";
import { buildSeoHead } from "@/lib/seo";
import aboutHero from "@/assets/about-hero.jpg";


export const Route = createFileRoute("/about")({
  head: () =>
    buildSeoHead({
      title: "About Us — ShreeJi Enterprises",
      description: "Your trusted partner for complete plumbing, sanitary and water infrastructure solutions across MP and Central India.",
      path: "/about",
      image: "/og-default.jpg",
    }),
  component: AboutPage,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
} as const;

const whyPoints = [
  { icon: PackageOpen, title: "Complete Solutions", desc: "Plumbing, sanitary and water infrastructure solutions under one roof." },
  { icon: Boxes, title: "Wide Product Range", desc: "Products for projects of every scale and budget." },
  { icon: Compass, title: "Technical Guidance", desc: "Helping customers select the right solution with practical knowledge." },
  { icon: ShieldCheck, title: "Reliable Availability", desc: "Organized supply network ensuring dependable product availability." },
  { icon: Truck, title: "Delivery Assistance", desc: "Local and project-specific delivery support when you need it." },
  { icon: HeartHandshake, title: "Trusted Relationships", desc: "Built through knowledge, reliability and dependable long-term service." },
];

const stats = [
  { n: "15+", l: "Years of Experience" },
  { n: "5K+", l: "Projects Served" },
  { n: "1000+", l: "Products" },
  { n: "1000+", l: "Happy Clients" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Your Trusted Partner"
        image={aboutHero}
        crumb="About Us"
      />

      {/* Intro Statement */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-saffron">
              Who We Are
            </p>
            <h2 className="font-display text-3xl leading-snug text-ink md:text-5xl">
              Your Trusted Partner for Complete Plumbing, Sanitary & Water Infrastructure Solutions
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-soft">
              Every successful project begins with the right products, dependable guidance and a reliable supply partner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Image Split */}
      <section className="bg-surface py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-6 text-base leading-relaxed text-ink-soft"
          >
            <p>
              At <span className="font-semibold text-ink">ShreeJi Enterprises</span>, we work alongside architects, engineers, contractors, government project contractors, infrastructure developers, interior designers and property owners to deliver complete plumbing, sanitary and water infrastructure solutions for projects of every scale.
            </p>
            <p>
              Our comprehensive portfolio includes <span className="font-semibold text-ink">HDPE systems, Electrofusion fittings, MDP systems, GI & CI piping systems and fittings, premium sanitaryware, faucets, bathroom solutions, borewell products</span> and a wide range of plumbing essentials — carefully selected to meet the needs of residential, commercial and water distribution projects.
            </p>
            <p>
              We believe our responsibility extends far beyond supplying materials. Our real value lies in helping customers choose the right solutions, simplify procurement, reduce uncertainty and ensure dependable supply throughout every stage of their project.
            </p>
            <p>
              Today, ShreeJi Enterprises proudly supports private contractors, infrastructure developers, government project contractors, architects, engineers, interior designers and property owners across <span className="font-semibold text-ink">MP and surrounding regions</span> by providing trusted products, technical guidance and dependable project support.
            </p>
            <div className="pt-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-white shadow-[0_12px_32px_-10px_rgba(217,122,22,0.6)] transition hover:bg-saffron-deep"
              >
                Explore Our Products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={aboutHero}
              alt="Shreeji Enterprises warehouse and infrastructure supply team"
              loading="lazy"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
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
            <h2 className="font-display text-4xl text-ink md:text-5xl">
              Why Choose Shreeji Enterprises?
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyPoints.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="rounded-2xl border border-border/60 bg-card p-8 transition hover:-translate-y-1 hover:border-saffron/40 hover:shadow-[0_20px_50px_-20px_rgba(42,42,42,0.18)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron/10 text-saffron">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-display text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-charcoal py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-2 lg:gap-12 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 lg:p-12"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron/15 text-saffron">
              <Target className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-3xl">Our Mission</h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              To simplify plumbing, sanitary and water infrastructure procurement by providing the right solutions, practical guidance and dependable supply — helping every customer bring their project to life with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-10 lg:p-12"
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-saffron/15 text-saffron">
              <Eye className="h-5 w-5" />
            </span>
            <h3 className="mt-6 font-display text-3xl">Our Vision</h3>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              To become Central India's most trusted name in plumbing, sanitaryware and water infrastructure solutions by combining technical expertise, quality products and exceptional customer service under one trusted brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl text-saffron md:text-6xl">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-ink-soft">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
