import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { buildSeoHead } from "@/lib/seo";
import heroImg from "@/assets/hero-infra.jpg";

export const Route = createFileRoute("/privacy")({
  head: () =>
    buildSeoHead({
      title: "Privacy Policy — Shreeji Enterprises",
      description: "How Shreeji Enterprises collects, uses and protects your personal information.",
      path: "/privacy",
      image: "/og-default.jpg",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" image={heroImg} crumb="Privacy Policy" />
      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <div className="space-y-8 text-ink-soft">
            <p className="text-sm">Last updated: {new Date().toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</p>

            <Section title="1. Introduction">
              Shreeji Enterprises (“we”, “us”, “our”) respects your privacy and is committed to protecting the personal information you share with us through this website, WhatsApp, phone, email or any other channel.
            </Section>

            <Section title="2. Information We Collect">
              We collect information you provide directly to us — such as your name, phone number, email address, project requirement, delivery location and any other details submitted through our enquiry form or shared over WhatsApp, email or phone. We may also collect basic technical information (browser type, device, pages visited) automatically when you use our website.
            </Section>

            <Section title="3. How We Use Your Information">
              Your information is used only for legitimate business purposes, including responding to enquiries, preparing quotations, processing orders, arranging deliveries, providing after-sales support, and sending occasional updates about our products and services. We do not sell or rent your personal information to third parties.
            </Section>

            <Section title="4. Sharing of Information">
              We may share limited information with logistics partners, manufacturers or service providers strictly to fulfil your order or enquiry. We may also disclose information where required by law or to protect our legal rights.
            </Section>

            <Section title="5. Data Security">
              We take reasonable technical and organisational measures to protect the information you share with us. However, no method of transmission over the internet is completely secure and we cannot guarantee absolute security.
            </Section>

            <Section title="6. Cookies & Analytics">
              Our website may use cookies or similar technologies to improve user experience and understand how the site is used. You can disable cookies through your browser settings; some parts of the site may not function as intended without them.
            </Section>

            <Section title="7. Third-Party Links">
              Our website may contain links to third-party websites (such as Google Maps or WhatsApp). We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies.
            </Section>

            <Section title="8. Your Rights">
              You may request access to, correction of, or deletion of the personal information we hold about you by writing to us at the contact details below. We will respond within a reasonable time in accordance with applicable law.
            </Section>

            <Section title="9. Retention">
              We retain your information only for as long as necessary to fulfil the purposes for which it was collected, comply with our legal obligations, resolve disputes and enforce our agreements.
            </Section>

            <Section title="10. Changes to This Policy">
              We may update this Privacy Policy from time to time. The revised version will be posted on this page with an updated “Last updated” date.
            </Section>

            <Section title="11. Contact Us">
              For any privacy-related questions or requests, please contact us at{" "}
              <a className="text-saffron" href="mailto:Shrijienterprises9755@gmail.com">Shrijienterprises9755@gmail.com</a>{" "}
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