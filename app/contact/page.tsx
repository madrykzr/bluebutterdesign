import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import HeroBlobs from "@/components/HeroBlobs";
import Label from "@/components/Label";
import { WhatsAppIcon } from "@/components/Navbar";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell us about your project. We reply on WhatsApp within 24 hours. Free consultation, no obligations.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <HeroBlobs />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-16 md:px-6 md:pt-24">
        <AnimatedSection direction="right" className="max-w-3xl">
          <Label index="06">Contact</Label>
          <h1
            className="mt-5 wordmark text-charcoal"
            style={{ fontSize: "clamp(2.75rem, 9vw, 6.5rem)" }}
          >
            Let&apos;s talk
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/70">
            Tell us a bit about your business and we&apos;ll reply within one
            working day — with honest advice and a clear quote. No pressure, no
            tech-talk.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Form */}
          <AnimatedSection direction="right">
            <div className="rounded-3xl border border-charcoal/5 bg-white p-7 shadow-card md:p-10">
              <ContactForm />
            </div>
            <p className="mt-4 flex items-center gap-2 px-2 font-mono text-[11px] uppercase tracking-mono text-charcoal/50">
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              Your info is private. We never sell or share contact details.
            </p>
          </AnimatedSection>

          {/* Sidebar: WhatsApp, email, socials */}
          <AnimatedSection direction="left" delay={0.12}>
            <div className="space-y-5">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-3xl bg-bluegrey p-7 text-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              >
                <WhatsAppIcon className="h-8 w-8" />
                <h2 className="mt-4 font-heading text-lg font-semibold">
                  Prefer WhatsApp? Same.
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                  Fastest way to reach us. Send a voice note if typing is leceh
                  — we don&apos;t mind.
                </p>
                <p className="mt-4 font-heading text-sm font-semibold">
                  {site.whatsappLabel} →
                </p>
              </a>

              <div className="rounded-3xl border border-charcoal/5 bg-white p-7 shadow-card">
                <h2 className="font-mono text-[11px] font-semibold uppercase tracking-mono text-bluegrey">
                  Phone
                </h2>
                <a
                  href={`tel:${(site.phone ?? "").replace(/\s/g, "")}`}
                  className="mt-2 block font-heading text-base font-medium text-charcoal underline-offset-4 hover:text-bluegrey-dark hover:underline"
                >
                  {site.phone}
                </a>
                <p className="mt-2 text-xs text-charcoal/50">
                  Call or text — Mon–Sat, 9am–7pm Malaysia time.
                </p>
              </div>

              <div className="rounded-3xl border border-charcoal/5 bg-white p-7 shadow-card">
                <h2 className="font-mono text-[11px] font-semibold uppercase tracking-mono text-bluegrey">
                  Email
                </h2>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block font-heading text-base font-medium text-charcoal underline-offset-4 hover:text-bluegrey-dark hover:underline"
                >
                  {site.email}
                </a>
                <p className="mt-2 text-xs text-charcoal/50">
                  Good for sending logos, photos and longer briefs.
                </p>
              </div>

              <div className="rounded-3xl border border-charcoal/5 bg-white p-7 shadow-card">
                <h2 className="font-mono text-[11px] font-semibold uppercase tracking-mono text-bluegrey">
                  Follow along
                </h2>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-charcoal/70 underline-offset-4 hover:text-bluegrey-dark hover:underline">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-charcoal/70 underline-offset-4 hover:text-bluegrey-dark hover:underline">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="text-charcoal/70 underline-offset-4 hover:text-bluegrey-dark hover:underline">
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-butter-dark/30 bg-butter/20 p-7">
                <h2 className="font-heading text-sm font-semibold text-charcoal">
                  ⏱ Our reply promise
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                  Every enquiry gets a reply within one working day. Usually
                  much faster — unless we&apos;re mid-kopi.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
