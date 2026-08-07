import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoHead } from "@/lib/seo";
import heroImg from "@/assets/hero-infra.jpg";

export const Route = createFileRoute("/terms")({
  head: () =>
    buildSeoHead({
      title: "Terms & Conditions — Shreeji Enterprises",
      description: "Terms and conditions governing the use of Shreeji Enterprises services and products.",
      path: "/terms",
      image: "/og-default.jpg",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" image={heroImg} crumb="Terms & Conditions" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="prose prose-neutral max-w-none space-y-8 text-ink-soft">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

            <Section title="1. Introduction">
              These Terms & Conditions (“Terms”) govern your use of the Shreeji Enterprises website and any orders, enquiries or services obtained through it. By accessing this website or engaging with us, you agree to be bound by these Terms.
            </Section>

            <Section title="2. About Us">
              Shreeji Enterprises is an infrastructure supply and premium bathroom solutions company based in MP, India. We supply HDPE systems, MDP systems, borewell products, faucets, sanitaryware and related plumbing materials to contractors, developers, architects and residential customers.
            </Section>

            <Section title="3. Products & Availability">
              All products displayed on this website — including catalogues, images, brands and specifications — are indicative and are subject to availability, market demand and manufacturer supply. Colours, finishes and dimensions may vary slightly from what is shown online. Product availability is confirmed only at the time of order acceptance.
            </Section>

            <Section title="4. Enquiries & Quotations">
              Enquiries submitted through the website are treated as a request for information and do not constitute a binding contract. Prices, delivery timelines and stock are confirmed in a written quotation. Quotations are valid for the duration mentioned on them and are subject to change based on market rates.
            </Section>

            <Section title="5. Orders, Payments & Delivery">
              Orders are confirmed only upon receipt of the applicable advance payment as per the quotation. Delivery timelines are estimates and may be affected by logistics, availability or project site conditions. Risk in goods passes to the customer upon delivery at the agreed location.
            </Section>

            <Section title="6. Warranty & Returns">
              Manufacturer warranty applies as per the terms of the respective brand. Shreeji Enterprises does not offer any additional warranty beyond that of the original manufacturer. Returns are accepted only for damaged or defective goods, reported within 48 hours of delivery, and are subject to inspection and approval by the manufacturer.
            </Section>

            <Section title="7. Intellectual Property">
              All content on this website — including logos, text, images, brand marks and design — is owned by Shreeji Enterprises or the respective rights holders and may not be copied, reproduced or used for commercial purposes without prior written permission.
            </Section>

            <Section title="8. Third-Party Brands">
              We supply products from third-party manufacturers. All third-party trademarks, brand names and logos referenced on this website are the property of their respective owners and are used solely to identify the products we distribute.
            </Section>

            <Section title="9. Limitation of Liability">
              Shreeji Enterprises shall not be liable for any indirect, incidental, consequential or special damages arising from the use of our products or services, including installation-related issues, project delays or loss of profit. Our maximum liability in any circumstance is limited to the value of the specific goods supplied.
            </Section>

            <Section title="10. Governing Law & Jurisdiction">
              These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts at MP.
            </Section>

            <Section title="11. Changes to These Terms">
              We may update these Terms from time to time. Continued use of our website or services after any changes constitutes acceptance of the revised Terms.
            </Section>

            <Section title="12. Contact">
              For any questions about these Terms, please contact us at{" "}
              <a className="text-saffron" href="mailto:shreejienterprises1806@gmail.com">shreejienterprises1806@gmail.com</a>{" "}
              or call +91 88825 97076.
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl text-ink">{title}</h2>
      <p className="mt-3 text-base leading-relaxed">{children}</p>
    </div>
  );
}