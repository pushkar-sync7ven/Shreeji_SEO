import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  image,
  crumb,
}: {
  eyebrow?: string;
  title: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-charcoal">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/70 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-6 pb-16 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl text-white"
        >
          {eyebrow && (
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.32em] text-saffron">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-5xl leading-[1.05] md:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 flex items-center gap-2 text-sm text-white/60">
            <Link to="/" className="hover:text-saffron">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{crumb}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}