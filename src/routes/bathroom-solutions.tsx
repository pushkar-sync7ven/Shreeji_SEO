import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Droplets, ShieldCheck, Award } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoHead } from "@/lib/seo";
import { buildRouteGraph, jsonLdString } from "@/lib/structured-data";
import hero from "@/assets/hero-bathroom.jpg";
import sanitary from "@/assets/bath-sanitaryware.jpg";
import faucets from "@/assets/bath-faucets.jpg";
import bathware from "@/assets/bath-bathware.jpg";
import shower from "@/assets/bath-shower.jpg";

export const Route = createFileRoute("/bathroom-solutions")({
  head: () =>
    buildSeoHead({
      title: "Premium Bathroom Solutions in Satna | ShreeJi Enterprises",
      description: "Luxury sanitaryware, designer faucets and premium bathware in Satna, Madhya Pradesh. Curated brands for builders and homeowners.",
      path: "/bathroom-solutions",
      image: "/og-default.jpg",
    }),
  component: BathroomSolutions,
});

const LOGO_DEV_KEY = import.meta.env.VITE_LOVABLE_CONNECTOR_LOGO_DEV_API_KEY;
const logoUrl = (domain: string) =>
  `https://img.logo.dev/${domain}?token=${LOGO_DEV_KEY}&size=240&format=png&retina=true`;

type Brand = {
  index: string;
  name: string;
  tagline: string;
  since: string;
  domain: string;
  intro: string;
  story: string;
  ranges: { title: string; desc: string; img: string }[];
  highlights: { icon: typeof Sparkles; label: string }[];
  accent: string;
  heroImg: string;
  sectionBg: string;
  blobA: string;
  blobB: string;
};

const brands: Brand[] = [
  {
    index: "01",
    name: "Jaquel",
    tagline: "The Complete Bathing Experience",
    since: "Since 1960",
    domain: "jaquelfaucet.com",
    intro:
      "India's most awarded bathware house — a global brand present in over 55 countries, celebrated for design, engineering and finish.",
    story:
      "From the flagship Artize couture collection to Lyric and Fonte, Jaquel brings together European design sensibility with meticulous Indian craftsmanship. Every product is engineered for silent, drip-free performance and finished to jewellery-grade standards.",
    ranges: [
      { title: "Sanitaryware", desc: "Vitreous china basins, wall-hung WCs and bidets from the Continental and Opal series.", img: sanitary },
      { title: "Designer Faucets", desc: "Chrome, gold, black-matt and rose-gold finishes across Artize, Fonte and Lyric collections.", img: faucets },
      { title: "Luxury Baths", desc: "Freestanding acrylic tubs, whirlpool and air-spa baths for private sanctuaries.", img: bathware },
      { title: "Shower Systems", desc: "Rainfall panels, thermostatic mixers and body-jet columns from the Aquamax range.", img: shower },
    ],
    highlights: [
      { icon: Award, label: "55+ countries" },
      { icon: Sparkles, label: "Jewellery-grade finish" },
      { icon: ShieldCheck, label: "10-year warranty" },
      { icon: Droplets, label: "Silent, drip-free" },
    ],
    accent: "from-[#c9a04a] via-[#b8863d] to-[#8a5a1a]",
    heroImg: sanitary,
    sectionBg: "bg-[#F8F5EF]",
    blobA: "bg-[#F2E8D9]",
    blobB: "bg-[#EEDBC3]",
  },
  {
    index: "02",
    name: "Dutron",
    tagline: "Piping Systems, Perfected",
    since: "Since 1970",
    domain: "dutronindia.com",
    intro:
      "Gujarat-headquartered pioneers of composite piping in India — the trusted specification for hot & cold water, gas and industrial fluid handling.",
    story:
      "Dutron manufactures a complete portfolio of PPR, CPVC, UPVC and HDPE systems in ISO-certified facilities. Every pipe is pressure-tested and every fitting engineered for leak-proof, corrosion-free service life exceeding fifty years.",
    ranges: [
      { title: "PPR-C Hot & Cold", desc: "Fusion-welded polypropylene systems for potable hot and cold water lines.", img: bathware },
      { title: "CPVC Plumbing", desc: "Chlorinated PVC systems for high-temperature residential and commercial plumbing.", img: faucets },
      { title: "UPVC Column & Casing", desc: "Threaded column pipes for submersible pumps and borewell casings.", img: shower },
      { title: "HDPE Networks", desc: "PE 80 / PE 100 pipes for water supply, irrigation and industrial mains.", img: sanitary },
    ],
    highlights: [
      { icon: Award, label: "50+ years legacy" },
      { icon: ShieldCheck, label: "ISO 9001 certified" },
      { icon: Droplets, label: "Leak-proof jointing" },
      { icon: Sparkles, label: "50-year service life" },
    ],
    accent: "from-[#1e3a5f] via-[#2a4d75] to-[#0f2947]",
    heroImg: bathware,
    sectionBg: "bg-[#EBE0C9]",
    blobA: "bg-[#DDC9A0]",
    blobB: "bg-[#D2B989]",
  },
];

function BathroomSolutions() {
  const jsonLd = jsonLdString(
    buildRouteGraph({
      page: {
        path: "/bathroom-solutions",
        name: "Premium Bathroom Solutions in Satna",
        description:
          "Luxury sanitaryware, designer faucets and premium bathware in Satna, Madhya Pradesh.",
      },
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Exclusive Bathware", path: "/bathroom-solutions" },
      ],
    }),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <PageHero
        eyebrow="Exclusive Bathware"
        title="Two Icons. One Experience."
        image={hero}
        crumb="Exclusive Bathware"
      />

      <section className="bg-background py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-saffron">
            Curated Portfolio
          </p>
          <h2 className="mt-5 font-display text-4xl text-ink md:text-5xl">
            Two houses. Two philosophies.
            <br />
            One uncompromising standard.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-ink-soft">
            We exclusively channel the finest of Indian bathware and piping — Jaquel for the
            visible luxury of the bath, Dutron for the invisible integrity of the plumbing behind it.
          </p>
        </div>
      </section>

      {brands.map((b, index) => (
        <BrandSection
          key={b.name}
          brand={b}
          reverse={index % 2 === 1}
        />
      ))}

      <section className="bg-charcoal py-24 text-center text-ink">
        <div className="mx-auto max-w-3xl px-6">
          <h3 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Expert Product Consultation
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/90">
            Get personalized guidance to choose the right plumbing, piping,
            sanitaryware, bathroom fittings, and water infrastructure solutions
            for your residential, commercial, or infrastructure project.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-saffron px-8 py-4 text-sm font-semibold transition hover:bg-saffron-deep"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}

function BrandSection({
  brand,
  reverse = false,
}: {
  brand: Brand;
  reverse?: boolean;
}) {
  return (
    <section className={`relative overflow-hidden ${brand.sectionBg} text-ink`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#ffffff_0%,transparent_45%)]" />
      <div className={`absolute -left-40 top-20 h-96 w-96 rounded-full ${brand.blobA} opacity-70 blur-3xl`} />
      <div className={`absolute -right-40 bottom-10 h-96 w-96 rounded-full ${brand.blobB} opacity-70 blur-3xl`} />

      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <div
          className={`grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-20 ${
            reverse ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="flex items-baseline gap-4">
              <span className="font-display text-7xl leading-none text-ink-soft">{brand.index}</span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-ink-soft">
                {brand.since} · Exclusive Range
              </span>
            </div>

            {/* <div className="mt-8 flex h-20 w-56 items-center justify-start rounded-2xl bg-white/95 px-6 shadow-2xl ring-1 ring-white/40">
              <img
                src={logoUrl(brand.domain)}
                alt={`${brand.name} logo`}
                loading="lazy"
                className="max-h-12 max-w-full object-contain"
              />
            </div> */}

            <h3 className="mt-8 font-display text-5xl leading-[1.05] md:text-6xl">{brand.name}</h3>
            <p className="mt-3 font-display text-xl italic text-ink/70">{brand.tagline}</p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft">{brand.intro}</p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft">{brand.story}</p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {brand.highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-xl border border-[#E7DDD0] bg-white p-4 shadow-sm transition hover:shadow-lg"
                >
                  <Icon className="h-4 w-4 text-saffron" />
                  <p className="mt-2 text-xs font-medium leading-snug text-ink">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-saffron-deep"
              >
                Enquire about {brand.name} <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://${brand.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-saffron px-7 py-3.5 text-sm font-semibold text-saffron transition hover:bg-saffron hover:text-white"
              >
                Visit Brand Site
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl ring-1 ring-[#E7DDD0] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)]">
              <img
                src={brand.heroImg}
                alt={`${brand.name} showcase`}
                loading="lazy"
                className="h-[560px] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white px-6 py-4 shadow-xl backdrop-blur md:block">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-ink-soft">
                Authorised Channel Partner
              </p>
              <p className="mt-1 font-display text-lg text-ink">ShreeJi Enterprises</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {brand.ranges.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-[#E7DDD0] shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h4 className="font-display text-lg text-ink">{r.title}</h4>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-soft">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
