import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { WhatsappIcon } from "@/components/site/WhatsappIcon";
import { buildSeoHead } from "@/lib/seo";
import { pageSchema, breadcrumbSchema, jsonLdString } from "@/lib/structured-data";
import contactHero from "@/assets/contact-hero-new.jpg.asset.json";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildSeoHead({
      title: "Contact Us — Satna, Madhya Pradesh | ShreeJi Enterprises",
      description:
        "Get in touch with ShreeJi Enterprises in Satna for plumbing, bathware and infrastructure product enquiries across Madhya Pradesh.",
      path: "/contact",
      image: "/Contact_img.jpeg",
    }),
  component: ContactPage,
});

const WHATSAPP_URL =
  "https://wa.me/918882597076?text=" +
  encodeURIComponent(
    "Hi! I have a query regarding your services. Looking forward to your response.",
  );

const cards = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+91 88825 97076", "+91 97554 80080"],
    href: "tel:+918882597076",
    external: false,
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    lines: ["+91 88825 97076"],
    href: WHATSAPP_URL,
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["shreejienterprises1806@gmail.com"],
    href: "mailto:shreejienterprises1806@gmail.com",
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    lines: [
      "Shreeji Enterprise, Bus Stand,",
      "Navrang Park Colony, Jeevan Jyoti Colony,",
      "Madhya Pradesh — 485005",
    ],
    href: "https://maps.app.goo.gl/apsa7YBL88hRrQ3e6",
    external: true,
  },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const REQUIREMENTS = [
  "HDPE Systems",
  "MDP Systems",
  "Bathroom Solutions",
  "Faucets & Fittings",
  "Borewell Products",
  "Project Supply",
];

function validate(v: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!v.name.trim()) errors.name = "Please enter your name";
  else if (v.name.trim().length < 2) errors.name = "Name is too short";
  else if (v.name.trim().length > 80) errors.name = "Name is too long";

  const phone = v.phone.replace(/\s|-/g, "");

  if (!phone) errors.phone = "Please enter your phone number";
  else if (!/^(\+?\d{10,15})$/.test(phone))
    errors.phone = "Enter a valid phone number";

  if (!v.email.trim()) errors.email = "Please enter your email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
    errors.email = "Enter a valid email address";
  else if (v.email.trim().length > 120) errors.email = "Email is too long";

  if (!v.requirement) errors.requirement = "Select a requirement";

  if (!v.message.trim()) errors.message = "Please write a short message";
  else if (v.message.trim().length < 10)
    errors.message = "Message is too short";
  else if (v.message.trim().length > 1000)
    errors.message = "Message must be under 1000 characters";

  return errors;
}

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [values, setValues] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setValues((s) => ({ ...s, [k]: v }));

    if (errors[k]) {
      setErrors((e) => ({ ...e, [k]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errs = validate(values);
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    try {
      setLoading(true);

      // Mail to Shree Ji Enterprises
      await emailjs.send(
        "service_km12d0j",
        "template_evnp7a9",
        {
          name: values.name,
          phone: values.phone,
          email: values.email,
          requirement: values.requirement,
          message: values.message,
        },
        "Vvy7kdYcaegmxqeZM",
      );

      // Auto Reply to Customer
      await emailjs.send(
        "service_km12d0j",
        "template_i81lqdb",
        {
          name: values.name,
          email: values.email,
          requirement: values.requirement,
        },
        "Vvy7kdYcaegmxqeZM",
      );

      setSent(true);

      setValues({
        name: "",
        phone: "",
        email: "",
        requirement: "",
        message: "",
      });

      setErrors({});
    } catch (error: any) {
      console.error("EmailJS Error:", error);

      if (error?.text) {
        alert(error.text);
      } else if (error?.message) {
        alert(error.message);
      } else {
        alert(JSON.stringify(error));
      }
    } finally {
      setLoading(false);
    }
  };

  const jsonLd = jsonLdString([
    pageSchema({
      path: "/contact",
      name: "Contact Us — Satna, Madhya Pradesh",
      type: "ContactPage",
      description:
        "Get in touch with ShreeJi Enterprises in Satna for plumbing, bathware and infrastructure product enquiries across Madhya Pradesh.",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact Us", path: "/contact" },
    ]),
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
      <PageHero
        eyebrow="Contact Us"
        title="Get In Touch"
        image={contactHero.url}
        crumb="Contact Us"
      />

      <section className="w-full overflow-x-hidden bg-background py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          {/* MAIN CONTACT GRID */}
          <div className="grid w-full grid-cols-1 gap-6 md:gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
            {/* LEFT SIDE */}
            <div className="min-w-0 w-full space-y-5">
              {/* CONTACT CARDS */}
              {cards.map(({ icon: Icon, label, lines, href, external }, i) => {
                const Inner = (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.08,
                    }}
                    className="group flex w-full min-w-0 items-start gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-4 transition hover:-translate-y-0.5 hover:border-saffron/40 hover:shadow-[0_18px_40px_-22px_rgba(42,42,42,0.25)] sm:gap-5 sm:p-6"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-saffron/10 text-saffron transition group-hover:bg-saffron group-hover:text-white sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-soft">
                        {label}
                      </p>

                      <div className="mt-1 space-y-0.5 break-words text-sm font-medium text-ink sm:text-base">
                        {lines.map((l) => (
                          <p key={l} className="break-words">
                            {l}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    className="block w-full min-w-0"
                    {...(external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                  >
                    {Inner}
                  </a>
                ) : (
                  <div key={label} className="w-full min-w-0">
                    {Inner}
                  </div>
                );
              })}

              {/* MAP CARD */}
              <div className="w-full min-w-0 overflow-hidden rounded-2xl border border-border/60 bg-card">
                <iframe
                  title="Shree Ji Enterprises — Location"
                  src="https://maps.google.com/maps?q=Shreeji%20Enterprise%20Bus%20Stand%20Navrang%20Park%20Colony%20Satna%20485005&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="block h-64 w-full border-0 sm:h-72 md:h-80"
                  loading="lazy"
                />
              </div>
            </div>

            {/* RIGHT SIDE — ENQUIRY FORM */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onSubmit={onSubmit}
              noValidate
              className="w-full min-w-0 rounded-3xl border border-border/60 bg-card p-5 shadow-[0_30px_70px_-50px_rgba(42,42,42,0.25)] sm:p-7 lg:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-saffron">
                Enquiry Form
              </p>

              <h2 className="mt-3 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
                Send Us an Enquiry
              </h2>

              <p className="mt-3 text-sm text-ink-soft">
                Share a few details about your project — we'll get back within
                24 hours.
              </p>

              <div className="mt-7 grid gap-5 sm:mt-8">
                {/* NAME */}
                <Field
                  label="Your Name"
                  name="name"
                  value={values.name}
                  onChange={(v) => setField("name", v)}
                  error={errors.name}
                  required
                  maxLength={80}
                />

                {/* PHONE + EMAIL */}
                <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={values.phone}
                    onChange={(v) => setField("phone", v)}
                    error={errors.phone}
                    required
                    maxLength={16}
                    inputMode="tel"
                    pattern="^\\+?\\d{10,15}$"
                  />

                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={(v) => setField("email", v)}
                    error={errors.email}
                    required
                    maxLength={120}
                  />
                </div>

                {/* REQUIREMENT */}
                <div className="min-w-0">
                  <Label>Requirement</Label>

                  <select
                    value={values.requirement}
                    onChange={(e) => setField("requirement", e.target.value)}
                    required
                    className={`mt-2 h-12 w-full min-w-0 rounded-lg border bg-background px-4 text-sm text-ink outline-none transition focus:border-saffron ${
                      errors.requirement ? "border-red-500" : "border-border"
                    }`}
                  >
                    <option value="">Select a requirement</option>

                    {REQUIREMENTS.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>

                  {errors.requirement && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.requirement}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="min-w-0">
                  <Label>Your Message</Label>

                  <textarea
                    rows={4}
                    value={values.message}
                    onChange={(e) => setField("message", e.target.value)}
                    required
                    minLength={10}
                    maxLength={1000}
                    className={`mt-2 w-full resize-none rounded-lg border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-saffron ${
                      errors.message ? "border-red-500" : "border-border"
                    }`}
                  />

                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-saffron px-7 py-4 text-sm font-semibold text-white transition hover:bg-saffron-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>

                {/* SUCCESS MESSAGE */}
                {sent && (
                  <p className="text-center text-sm text-saffron">
                    Thank you — we'll get back to you shortly.
                  </p>
                )}
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-soft">
      {children}
    </label>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
  pattern?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
};

function Field({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  required,
  maxLength,
  pattern,
  inputMode,
}: FieldProps) {
  return (
    <div className="min-w-0">
      <Label>{label}</Label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        maxLength={maxLength}
        pattern={pattern}
        inputMode={inputMode}
        aria-invalid={!!error}
        className={`mt-2 h-12 w-full min-w-0 rounded-lg border bg-background px-4 text-sm text-ink outline-none transition focus:border-saffron ${
          error ? "border-red-500" : "border-border"
        }`}
      />

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
