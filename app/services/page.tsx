import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const processSteps = [
  "Discovery - understand goals and scope",
  "Proposal - timeline and pricing",
  "Design - structure and visuals",
  "Development - build and refine",
  "Launch - deploy and test",
  "Support - optional maintenance plans",
] as const;

const whyRetroslate = [
  "Design + development in one place",
  "Fast and transparent communication",
  "Tailored builds, not generic templates",
  "Remote-first efficiency",
  "Long-term support",
] as const;

const designToDeploymentCopy =
  "From websites to custom systems, we help businesses and professionals build a stronger online presence through thoughtful design, reliable development, and ongoing support.";

type ServiceCard = {
  slug: string;
  title: string;
  variant: "dark" | "wine" | "milk";
  description: string;
  listLabel: string;
  items: readonly string[];
  rounded?: boolean;
  outlined?: boolean;
};

const serviceCards: readonly ServiceCard[] = [
  {
    slug: "website-design-development",
    title: "Website Design & Development",
    variant: "dark" as const,
    description: "Custom websites built for speed, clarity, and growth.",
    listLabel: "Includes:",
    items: [
      "Business websites",
      "Company websites",
      "Landing pages",
      "Multi-page websites",
      "Responsive mobile design",
      "Performance optimization",
    ],
    outlined: true,
  },
  {
    slug: "portfolio-websites",
    title: "Portfolio Websites",
    variant: "wine" as const,
    description:
      "Professional portfolio websites for individuals and creatives who need a strong online presence.",
    listLabel: "Includes:",
    rounded: true,
    items: [
      "Project showcases",
      "Contact forms",
      "Personal branding",
      "Clean layouts",
      "Mobile responsiveness",
    ],
  },
  {
    slug: "personal-brand-websites",
    title: "Personal Brand Websites",
    variant: "wine" as const,
    description:
      "For coaches, trainers, educators, consultants, and professionals offering services directly.",
    listLabel: "Includes:",
    rounded: true,
    items: [
      "Service pages",
      "Booking/contact setup",
      "Testimonials",
      "Trust-building content",
      "Lead generation design",
    ],
  },
  {
    slug: "hospitality-booking-websites",
    title: "Hospitality & Booking Websites",
    variant: "milk" as const,
    description:
      "Websites for homestays, guest houses, stays, and service-based hospitality businesses.",
    listLabel: "Includes:",
    rounded: true,
    items: [
      "Property galleries",
      "Room or package details",
      "Inquiry / booking forms",
      "Maps & location",
      "Direct booking setup",
      "Trust-focused design",
    ],
  },
  {
    slug: "web-applications-internal-tools",
    title: "Web Applications & Internal Tools",
    variant: "milk" as const,
    description: "Custom web solutions built around your workflow.",
    listLabel: "Examples:",
    rounded: true,
    items: [
      "Dashboards",
      "Admin panels",
      "Booking systems",
      "Internal management tools",
      "MVP product builds",
    ],
  },
  {
    slug: "website-redesigns",
    title: "Website Redesigns",
    variant: "dark" as const,
    description:
      "Upgrade outdated websites into modern, fast, and effective digital experiences.",
    listLabel: "Includes:",
    outlined: true,
    items: [
      "Visual redesign",
      "UX improvements",
      "Speed optimization",
      "Better mobile experience",
      "Conversion-focused updates",
    ],
  },
  {
    slug: "deployment-technical-setup",
    title: "Deployment & Technical Setup",
    variant: "dark" as const,
    description: "We handle launch so you don't have to.",
    listLabel: "Includes:",
    outlined: true,
    items: [
      "Domain connection",
      "Hosting setup",
      "Deployment",
      "Forms/email integrations",
      "Basic analytics setup",
    ],
  },
  {
    slug: "ongoing-maintenance-support",
    title: "Ongoing Maintenance & Support",
    variant: "wine" as const,
    description: "Keep your website secure, updated, and performing well after launch.",
    listLabel: "Plans may include:",
    rounded: true,
    items: [
      "Content edits",
      "Bug fixes",
      "Performance checks",
      "Security updates",
      "Monthly support requests",
    ],
  },
];

export default function ServicesPage() {
  return (
    <PageFrame>
      <main className={styles.servicesPage}>
        <section className={styles.intro} aria-labelledby="services-intro-title">
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
                <ul className={styles.stepList}>
                  {processSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
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

        <section className={styles.gridSection} aria-label="Service offerings">
          <div className={styles.gridInner}>
            <ul className={styles.cardGrid}>
              {serviceCards.map((card) => (
                <li key={card.title}>
                  <Link
                    className={[
                      styles.cardLink,
                      styles[`cardLink--${card.variant}`],
                      card.rounded ? styles.cardRounded : "",
                      card.outlined ? styles.cardOutlined : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    href={`/services/${card.slug}`}
                  >
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    <h4>{card.listLabel}</h4>
                    <ul className={styles.cardList}>
                      {card.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="services-cta-title">
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
  );
}
