import Link from "next/link";
import { MandatorySectionSnap } from "@/components/mandatory-section-snap";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const processSteps = [
  "Discovery",
  "Proposal",
  "Design",
  "Development",
  "Launch",
  "Support",
] as const;

const whyRetroslate = [
  "Design + development in one place",
  "Fast communication",
  "Tailored builds",
  "Service-first efficiency",
  "Long-term support",
] as const;

const designToDeploymentCopy =
  "From first sketches to launch day, we align design, engineering, and content so your site or product ships with a coherent story, solid performance, and room to grow—not a patchwork of one-off fixes.";

type ServiceCard = {
  title: string;
  variant: "dark" | "wine" | "milk";
  items: readonly string[];
  rounded?: boolean;
  titleWine?: boolean;
};

const serviceCards: readonly ServiceCard[] = [
  {
    title: "Website Design & Development",
    variant: "dark" as const,
    items: [
      "Business websites",
      "Company websites",
      "Landing pages",
      "Marketing sites",
      "Content-driven builds",
    ],
  },
  {
    title: "Portfolio Websites",
    variant: "wine" as const,
    rounded: true,
    items: [
      "Project showcases",
      "Contact forms",
      "Personal branding",
      "Case study layouts",
      "Media-rich galleries",
    ],
  },
  {
    title: "Personal Brand Websites",
    variant: "wine" as const,
    rounded: true,
    items: [
      "Service pages",
      "Booking & contact setup",
      "Testimonials",
      "Offerings & pricing blocks",
      "Newsletter or lead capture",
    ],
  },
  {
    title: "Hospitality & Booking Websites",
    variant: "milk" as const,
    rounded: true,
    items: [
      "Property galleries",
      "Room & package details",
      "Inquiry forms",
      "Location & amenities",
      "Seasonal or promo sections",
    ],
  },
  {
    title: "Web Applications & Internal Tools",
    variant: "milk" as const,
    rounded: true,
    items: [
      "Dashboards",
      "Admin panels",
      "Booking systems",
      "Workflow tools",
      "Client or staff portals",
    ],
  },
  {
    title: "Website Redesigns",
    variant: "dark" as const,
    titleWine: true,
    items: [
      "Visual redesign",
      "UX improvements",
      "Speed optimization",
      "Information architecture",
      "Accessibility upgrades",
    ],
  },
  {
    title: "Deployment & Technical Setup",
    variant: "dark" as const,
    items: [
      "Domain connection",
      "Hosting setup",
      "Deployment pipelines",
      "SSL & basics",
      "Analytics & monitoring hooks",
    ],
  },
  {
    title: "Ongoing Maintenance & Support",
    variant: "wine" as const,
    rounded: true,
    items: [
      "Content edits",
      "Bug fixes",
      "Security updates",
      "Small feature additions",
      "Performance checks",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <MandatorySectionSnap />
      <PageFrame>
        <main className={styles.servicesPage}>
          <section
            className={`${styles.intro} snap-section snap-section--screen`}
            aria-labelledby="services-intro-title"
          >
            <div className={styles.introInner}>
              <div className={styles.introHead}>
                <h1 id="services-intro-title">
                  Digital services built around real results.
                </h1>
                <div className={styles.introArrow} aria-hidden>
                  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M140 24L28 136M28 136H68M28 136V96"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                </div>
              </div>

              <div className={styles.infoGrid}>
                <div className={styles.infoCol}>
                  <h2>Simple process, clear delivery.</h2>
                  <ol className={styles.stepList}>
                    {processSteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className={styles.infoCol}>
                  <h2>Why RetroSlate</h2>
                  <ul className={styles.valueList}>
                    {whyRetroslate.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.infoCol}>
                  <h2>Design to Deployment.</h2>
                  <p className={styles.infoProse}>{designToDeploymentCopy}</p>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.gridSection} snap-section snap-section--screen`}
            aria-label="Service offerings"
          >
            <div className={styles.gridInner}>
              <ul className={styles.cardGrid}>
                {serviceCards.map((card) => (
                  <li
                    key={card.title}
                    className={[
                      styles.card,
                      styles[`card--${card.variant}`],
                      card.rounded ? styles.cardRounded : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <h3
                      className={
                        card.titleWine ? styles.cardTitleWine : styles.cardTitle
                      }
                    >
                      {card.title}
                    </h3>
                    <ul className={styles.cardList}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={`${styles.cta} snap-section snap-section--screen`}
            aria-labelledby="services-cta-title"
          >
            <div className={styles.ctaInner}>
              <h2 id="services-cta-title">Need something built?</h2>
              <p>
                Tell us what you need, and we&apos;ll help you plan the right
                solution.
              </p>
              <div className={styles.ctaButtons}>
                <Link className={styles.button} href="/contact">
                  Start a Project
                </Link>
                <Link className={styles.button} href="/contact">
                  Get a Quote
                </Link>
              </div>
            </div>
          </section>
        </main>
      </PageFrame>
    </>
  );
}
