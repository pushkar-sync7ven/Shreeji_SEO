import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowRight, ChevronRight, Info } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoHead } from "@/lib/seo";
import { buildRouteGraph, jsonLdString } from "@/lib/structured-data";
import heroImg from "@/assets/hero-infra.jpg";
import catHdpe from "@/assets/HDPE/HDPE_Fitting.jpeg";
import catElectro from "@/assets/HDPE/Electrofusion.jpeg";
import catMdp from "@/assets/MDP/cat-mdp.jpg";
import catBath from "@/assets/BathroomProduct/cat-bathroom.jpg";
import catFaucet from "@/assets/Faucets&Fittings/Faucets.jpg";
import catBore from "@/assets/BorewellProducts/cat-borewell.jpg";

// HDPE Images
import hdpepipes from "@/assets/HDPE/HDPE_Pipe.jpg";
import hdpeElectrofusion from "@/assets/HDPE/Electrofusion.jpeg";
import hdpeButtFusion from "@/assets/HDPE/HDPE_Butt_Fusion.jpeg";
import hdpeFitting from "@/assets/HDPE/HDPE_Fitting.jpeg";
import hdpeSpigotButtFusion from "@/assets/HDPE/Spigot_Butt_Fusion.jpeg";

// MDP Images
import mdpFitting from "@/assets/MDP/MDP_Fitting.png";
import mdpPipes from "@/assets/MDP/MDP_Pipes.png";

// Bathroom Product Images
import bathTub from "@/assets/BathroomProduct/Bath_Tub.png";
import squattingPan from "@/assets/BathroomProduct/Squatting_pan.jpeg";
import urinal from "@/assets/BathroomProduct/Urinal.png";
import washBasin from "@/assets/BathroomProduct/Wash_Basin.png";
import waterCloset from "@/assets/BathroomProduct/Water_closet.png";

// Faucets & Fittings Images
import diverter from "@/assets/Faucets&Fittings/Diverter.jpeg";
import faucets from "@/assets/Faucets&Fittings/Faucets.jpg";
import shower from "@/assets/Faucets&Fittings/Shower.jpeg";
import accessories from "@/assets/Faucets&Fittings/accessories.jpeg";

// Borewell Product Images
import borewellCables from "@/assets/BorewellProducts/Cables.jpeg";
import borewellPump from "@/assets/BorewellProducts/cat-borewell.jpg";
import columnPipe from "@/assets/BorewellProducts/Column_Pipe.jpeg";
import handPump from "@/assets/BorewellProducts/handpump.jpeg";
import handPumpPipes from "@/assets/BorewellProducts/handpumpPipes.jpeg";

//GI Products
import GIFitting from "@/assets/GI/gifittings.jpeg";
import GIPipes from "@/assets/GI/gipipes.jpeg";

//Residential
import catDutron from "@/assets/Residential/dutron_pipes_fittings.png";

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: typeof search.category === "string" ? search.category : undefined,
  }),
  head: () =>
    buildSeoHead({
      title: "Plumbing & Bathroom Product Catalogue | ShreeJi Enterprises",
      description:
        "Explore HDPE, MDP, GI, borewell, faucets and bathroom products in Satna, Madhya Pradesh. Quality plumbing supplies for every project.",
      path: "/products",
      image: "/og-default.jpg",
    }),
  component: ProductsPage,
});

type Item = {
  name: string;
  tag: string;
  subKey?: string;
  brochure?: string;
  img?: string;
};
type SubGroup = { title: string; items: Item[] };
type Category = {
  title: string;
  desc: string;
  img: string;
  items: Item[];
  subGroups?: Record<string, SubGroup>;
};

const catalog: Record<string, Category> = {
  hdpe: {
    title: "HDPE Systems",
    desc: "High quality HDPE pipes and fittings for water supply, gas distribution, irrigation and industrial applications.",
    img: catHdpe,
    items: [
      { name: "HDPE Pipes", tag: "PE 80 / PE 100", img: hdpepipes },
      {
        name: "HDPE Fittings",
        tag: "Explore range",
        subKey: "fittings",
        img: hdpeFitting,
      },
    ],
    subGroups: {
      fittings: {
        title: "HDPE Fittings",
        items: [
          {
            name: "Butt Fusion",
            tag: "Jointing",
            brochure: "/brochures/ButtFusion.pdf",
            img: hdpeButtFusion,
          },
          {
            name: "Electrofusion",
            tag: "Leak-proof",
            brochure: "/brochures/Electrofusion.pdf",
            img: hdpeElectrofusion,
          },
          {
            name: "Spigot Butt Fusion",
            tag: "Jointing",
            brochure: "/brochures/spigot.pdf",
            img: hdpeSpigotButtFusion,
          },
        ],
      },
    },
  },
  mdp: {
    title: "MDP Systems",
    desc: "Multi-layer composite plumbing systems for hot & cold water lines in modern residential and commercial projects.",
    img: catMdp,
    items: [
      { name: "MDP Pipe", tag: "PEX-AL-PEX", img: mdpPipes },
      {
        name: "MDP Fitting",
        tag: "Press-fit",
        brochure: "/brochures/mdpfittings.pdf",
        img: mdpFitting,
      },
    ],
  },
  bathroom: {
    title: "Bathroom Products",
    desc: "Premium sanitaryware, accessories and complete bathroom solutions for luxury residences and hospitality projects.",
    img: catBath,
    items: [
      { name: "Wash Basins", tag: "Designer", img: washBasin },
      { name: "Bathtubs", tag: "Freestanding", img: bathTub },
      { name: "Water Closets", tag: "Wall-hung", img: waterCloset },
      { name: "Squatting Pans", tag: "Ceramic", img: squattingPan },
      { name: "Urinal", tag: "Wall-mount", img: urinal },
    ],
  },
  faucets: {
    title: "Faucets & Fittings",
    desc: "Designer faucets in chrome, brushed brass and matte black from India's most trusted brands.",
    img: catFaucet,
    items: [
      {
        name: "Faucets",
        tag: "Chrome / Brass",
        brochure: "/brochures/faucets.pdf",
        img: faucets,
      },
      {
        name: "Showers",
        tag: "Rain + Hand",
        brochure: "/brochures/showers.pdf",
        img: shower,
      },
      {
        name: "Diverters and Mixers",
        tag: "Concealed",
        brochure: "/brochures/diverters.pdf",
        img: diverter,
      },
      {
        name: "Bathroom Accessories",
        tag: "Complete Range",
        brochure: "/brochures/bathroom-accessories.pdf",
        img: accessories,
      },
    ],
  },
  borewell: {
    title: "Borewell Products",
    desc: "Submersible pumps, column pipes and complete borewell installation kits for agricultural & residential supply.",
    img: catBore,
    items: [
      { name: "Submersible Pumps", tag: "0.5 – 25 HP", img: borewellPump },
      { name: "Column Pipes", tag: "uPVC / HDPE", img: columnPipe },
      { name: "Cable & Accessories", tag: "Submersible", img: borewellCables },
      { name: "Handpump", tag: "Manual", img: handPump },
      { name: "Handpump Pipes", tag: "GI / uPVC", img: handPumpPipes },
    ],
  },
  gi: {
    title: "GI Products",
    desc: "Galvanised iron pipes and fittings engineered for water supply, structural and industrial applications.",
    img: catHdpe,
    items: [
      { name: "GI Pipes", tag: "Heavy / Medium", img: GIPipes },
      { name: "GI Fittings", tag: "Threaded", img: GIFitting },
    ],
  },
  residential: {
    title: "Residential Products",
    desc: "Curated plumbing systems designed for modern homes — durable, hygienic and easy to install.",
    img: catDutron,
    items: [
      {
        name: "Dutron Pipes and Fittings",
        tag: "Residential Plumbing",
        brochure: "/brochures/dutron.pdf",
      },
    ],
  },
};

// Silence unused import if electrofusion asset is referenced elsewhere.
void catElectro;

function ProductsPage() {
  const { category } = Route.useSearch();
  const initial = (
    category && category in catalog ? category : "hdpe"
  ) as keyof typeof catalog;
  const [active, setActive] = useState<keyof typeof catalog>(initial);
  const [subKey, setSubKey] = useState<string | null>(null);

  useEffect(() => {
    if (category && category in catalog) {
      setActive(category as keyof typeof catalog);
      setSubKey(null);
      if (typeof window !== "undefined") {
        window.scrollTo({ top: window.innerHeight * 0.6, behavior: "smooth" });
      }
    }
  }, [category]);

  const cat = catalog[active];
  const sub = subKey && cat.subGroups ? cat.subGroups[subKey] : null;
  const displayItems = sub ? sub.items : cat.items;

  const jsonLd = jsonLdString(
    buildRouteGraph({
      page: {
        path: "/products",
        name: "Our Product Catalogue",
        type: "CollectionPage",
        description:
          "Explore HDPE, MDP, GI, borewell, faucets and bathroom products in Satna, Madhya Pradesh.",
      },
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
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
        eyebrow="Product Catalogue"
        title="Our Product Catalogue"
        image={heroImg}
        crumb="Products"
      />
      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="mb-12 max-w-2xl text-base text-ink-soft">
            Explore our wide range of infrastructure and plumbing products —
            engineered for long-term performance on residential, commercial and
            large-scale projects.
          </p>

          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
                Categories
              </p>
              <nav className="flex flex-col gap-1.5">
                {Object.entries(catalog).map(([key, c]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActive(key as keyof typeof catalog);
                      setSubKey(null);
                    }}
                    className={`group flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition ${
                      active === key
                        ? "bg-saffron text-white shadow-[0_10px_24px_-12px_rgba(217,122,22,0.55)]"
                        : "text-ink hover:bg-surface"
                    }`}
                  >
                    {c.title}
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100" />
                  </button>
                ))}
              </nav>
            </aside>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${subKey ?? "root"}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  {sub ? (
                    <>
                      <button
                        onClick={() => setSubKey(null)}
                        className="mb-3 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.2em] text-saffron"
                      >
                        ← Back to {cat.title}
                      </button>
                      <h2 className="font-display text-4xl text-ink md:text-5xl">
                        {sub.title}
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2 className="font-display text-4xl text-ink md:text-5xl">
                        {cat.title}
                      </h2>
                      <p className="mt-4 max-w-2xl text-base text-ink-soft">
                        {cat.desc}
                      </p>
                    </>
                  )}

                  <div className="mt-6 flex items-start gap-2 rounded-lg border border-saffron/30 bg-saffron/5 p-3 text-xs text-ink-soft">
                    <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-saffron" />
                    <span>
                      All products represented in catalogues are subject to
                      Availability and Demand.
                    </span>
                  </div>

                  <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {displayItems.map((item, i) => (
                      <motion.article
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.05 }}
                        onClick={() => {
                          if (item.subKey) setSubKey(item.subKey);
                        }}
                        className={`group overflow-hidden rounded-2xl border border-border/60 bg-card transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(42,42,42,0.3)] ${
                          item.subKey ? "cursor-pointer" : ""
                        }`}
                      >
                        <div className="aspect-square overflow-hidden bg-surface">
                          <img
                            src={item.img || cat.img}
                            alt={item.name}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-5">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-saffron">
                            {item.tag}
                          </p>
                          <h3 className="mt-1.5 font-display text-xl text-ink">
                            {item.name}
                          </h3>
                          <div className="mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs">
                            {item.subKey ? (
                              <span className="inline-flex items-center gap-1 font-semibold text-saffron">
                                Explore Range{" "}
                                <ChevronRight className="h-3 w-3" />
                              </span>
                            ) : (
                              <>
                                <Link
                                  to="/contact"
                                  className="font-semibold text-ink-soft transition hover:text-saffron"
                                >
                                  Request Quote
                                </Link>
                                {item.brochure ? (
                                  <a
                                    href={item.brochure}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-semibold text-saffron hover:text-saffron-deep"
                                  >
                                    <Download className="h-3 w-3" />
                                    Download Brochure
                                  </a>
                                ) : (
                                  <button
                                    disabled
                                    className="inline-flex items-center gap-1 text-gray-400 cursor-not-allowed"
                                  >
                                    <Download className="h-3 w-3" />
                                    Brochure
                                  </button>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-center">
                    <p className="text-sm text-ink-soft">
                      Individual product brochures are available above.
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <h2 className="font-display text-3xl text-ink md:text-4xl">
            Explore Our Product Categories
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(catalog).map(([key, c]) => {
              const allItemNames = [
                ...c.items.map((item) => item.name),
                ...(c.subGroups
                  ? Object.values(c.subGroups).flatMap((sg) =>
                      sg.items.map((item) => item.name),
                    )
                  : []),
              ];
              return (
                <div
                  key={key}
                  className="rounded-2xl border border-border/60 bg-card p-6"
                >
                  <h3 className="font-display text-xl text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {c.desc}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {allItemNames.map((name) => (
                      <li key={name} className="text-sm text-ink-soft">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
