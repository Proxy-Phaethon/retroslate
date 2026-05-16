"use client";

import { useState } from "react";
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

type PriceLine = {
  label: string;
  price: string;
};

type FeatureGroup = {
  title: string;
  items: readonly PriceLine[];
};

type ServiceCard = {
  id: string;
  title: string;
  subtitle: string;
  baseTitle: string;
  basePrice: string;
  includes: readonly string[];
  additionalPages?: string;
  groups: readonly FeatureGroup[];
};

const serviceCards: readonly ServiceCard[] = [
  {
    id: "web-development",
    title: "Web Development",
    subtitle:
      "Fast, scalable websites and web platforms designed for modern businesses.",
    baseTitle: "Landing Page",
    basePrice: "₹3,000",
    includes: [
      "responsive landing page",
      "deployment",
      "hosting setup",
      "contact form",
      "analytics setup",
      "SEO basics",
      "domain connection",
    ],
    additionalPages: "+₹1,000 per page",
    groups: [
      {
        title: "Database & Backend",
        items: [
          { label: "MongoDB integration", price: "₹2,000" },
          { label: "User authentication/login", price: "₹3,000" },
          { label: "Admin dashboard", price: "₹4,000-₹8,000" },
          { label: "Role-based access", price: "₹3,000" },
          { label: "User profiles", price: "₹2,000" },
        ],
      },
      {
        title: "Media & Storage",
        items: [
          { label: "Cloudinary integration", price: "₹1,500" },
          { label: "File uploads", price: "₹2,000" },
          { label: "Gallery/media systems", price: "₹2,000-₹4,000" },
        ],
      },
      {
        title: "Payments & Commerce",
        items: [
          { label: "Razorpay integration", price: "₹3,000" },
          { label: "Subscription billing", price: "₹4,000" },
          { label: "Shopping cart", price: "₹4,000" },
          { label: "Product listing system", price: "₹3,000" },
          { label: "Full e-commerce setup", price: "₹10,000-₹25,000" },
          { label: "Order management dashboard", price: "₹5,000+" },
        ],
      },
      {
        title: "Booking & Scheduling",
        items: [
          { label: "Calendar integration", price: "₹2,000" },
          { label: "Booking systems", price: "₹4,000-₹8,000" },
          { label: "Appointment management", price: "₹3,000" },
          { label: "Email reminders", price: "₹1,500" },
        ],
      },
      {
        title: "Communication",
        items: [
          { label: "Live chat integration", price: "₹1,500" },
          { label: "WhatsApp integration", price: "₹1,000" },
          { label: "Newsletter/email signup", price: "₹1,500" },
          { label: "Automated emails", price: "₹2,000-₹5,000" },
        ],
      },
      {
        title: "Optimization & Security",
        items: [
          { label: "CAPTCHA", price: "₹500" },
          { label: "Rate limiting", price: "₹1,000" },
          { label: "Performance optimization", price: "₹2,000" },
          { label: "SEO optimization", price: "₹2,000-₹5,000" },
        ],
      },
      {
        title: "Maintenance",
        items: [
          { label: "Basic", price: "₹1,000/month" },
          { label: "Standard", price: "₹2,500/month" },
          { label: "Advanced", price: "₹5,000+/month" },
        ],
      },
    ],
  },
  {
    id: "app-development",
    title: "App Development",
    subtitle:
      "Cross-platform mobile applications focused on usability, performance, and scalability.",
    baseTitle: "MVP Mobile App",
    basePrice: "starting at ₹15,000",
    includes: [
      "responsive mobile UI",
      "authentication setup",
      "deployment guidance",
      "backend integration support",
      "app architecture setup",
    ],
    groups: [
      {
        title: "Core Functionality",
        items: [
          { label: "Authentication system", price: "₹3,000" },
          { label: "Push notifications", price: "₹3,000" },
          { label: "User profiles", price: "₹2,000" },
          { label: "Settings system", price: "₹1,500" },
          { label: "Search functionality", price: "₹2,000" },
        ],
      },
      {
        title: "Media & Cloud",
        items: [
          { label: "Cloudinary integration", price: "₹1,500" },
          { label: "Media uploads", price: "₹2,000" },
          { label: "Gallery/media systems", price: "₹3,000+" },
        ],
      },
      {
        title: "Payments",
        items: [
          { label: "Razorpay integration", price: "₹4,000" },
          { label: "Subscription billing", price: "₹5,000" },
          { label: "In-app purchases", price: "₹5,000+" },
        ],
      },
      {
        title: "Location & Maps",
        items: [
          { label: "Maps integration", price: "₹3,000" },
          { label: "Geolocation features", price: "₹3,000" },
          { label: "Route/tracking systems", price: "₹5,000+" },
        ],
      },
      {
        title: "Real-Time Features",
        items: [
          { label: "Chat systems", price: "₹5,000+" },
          { label: "Live updates", price: "₹4,000+" },
          { label: "Notification systems", price: "₹3,000" },
        ],
      },
      {
        title: "Backend & APIs",
        items: [
          { label: "MongoDB backend", price: "₹3,000" },
          { label: "REST API integration", price: "₹2,000+" },
          { label: "Admin dashboard", price: "₹5,000+" },
        ],
      },
      {
        title: "Maintenance",
        items: [
          { label: "Basic", price: "₹2,000/month" },
          { label: "Standard", price: "₹5,000/month" },
          { label: "Advanced", price: "₹10,000+/month" },
        ],
      },
    ],
  },
  {
    id: "software-development",
    title: "Software Development",
    subtitle:
      "Custom desktop and specialized software solutions built for workflow efficiency and long-term scalability.",
    baseTitle: "Custom Software Project",
    basePrice: "starting at ₹20,000",
    includes: [
      "architecture planning",
      "core functionality setup",
      "deployment guidance",
      "performance optimization basics",
    ],
    groups: [
      {
        title: "Desktop Applications",
        items: [
          { label: "Cross-platform support", price: "₹5,000+" },
          { label: "Installer/package builds", price: "₹2,000" },
          { label: "Local database systems", price: "₹3,000" },
          { label: "File system integrations", price: "₹3,000+" },
        ],
      },
      {
        title: "Advanced Features",
        items: [
          { label: "Real-time sync", price: "₹5,000+" },
          { label: "Cloud sync", price: "₹4,000+" },
          { label: "User authentication", price: "₹3,000" },
          { label: "Encryption/security layers", price: "₹5,000+" },
          { label: "Automation systems", price: "₹4,000+" },
        ],
      },
      {
        title: "Productivity Features",
        items: [
          { label: "Data dashboards", price: "₹4,000+" },
          { label: "Reporting/export systems", price: "₹3,000" },
          { label: "Multi-user systems", price: "₹5,000+" },
          { label: "Role permissions", price: "₹3,000" },
        ],
      },
      {
        title: "API & Integrations",
        items: [
          { label: "External API integrations", price: "₹2,000+" },
          { label: "Payment integrations", price: "₹4,000" },
          { label: "AI integrations", price: "₹5,000+" },
        ],
      },
      {
        title: "Maintenance",
        items: [
          { label: "Basic", price: "₹3,000/month" },
          { label: "Standard", price: "₹7,000/month" },
          { label: "Advanced", price: "₹15,000+/month" },
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = useState(serviceCards[0].id);

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
                <li key={card.id}>
                  <article
                    className={[
                      styles.serviceCard,
                      expandedCard === card.id ? styles.serviceCardExpanded : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <button
                      className={styles.cardToggle}
                      type="button"
                      aria-expanded={expandedCard === card.id}
                      aria-controls={`${card.id}-panel`}
                      onClick={() =>
                        setExpandedCard((current) =>
                          current === card.id ? "" : card.id,
                        )
                      }
                    >
                      <span className={styles.cardKicker}>service</span>
                      <span className={styles.cardTitle}>{card.title}</span>
                      <span className={styles.cardSubtitle}>{card.subtitle}</span>
                      <span className={styles.cardPrice}>
                        {card.baseTitle} - {card.basePrice}
                      </span>
                      <span className={styles.cardIndicator} aria-hidden>
                        {expandedCard === card.id ? "-" : "+"}
                      </span>
                    </button>

                    <div
                      className={styles.cardPanel}
                      id={`${card.id}-panel`}
                      aria-hidden={expandedCard !== card.id}
                    >
                      <div className={styles.panelInner}>
                        <div className={styles.baseBlock}>
                          <div>
                            <h4>Base Pricing</h4>
                            <p>
                              {card.baseTitle} - {card.basePrice}
                            </p>
                            {card.additionalPages ? (
                              <p>Additional Pages - {card.additionalPages}</p>
                            ) : null}
                          </div>
                          <div>
                            <h4>Includes</h4>
                            <ul className={styles.includeList}>
                              {card.includes.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className={styles.featureGrid}>
                          {card.groups.map((group) => (
                            <section className={styles.featureGroup} key={group.title}>
                              <h4>{group.title}</h4>
                              <ul className={styles.priceList}>
                                {group.items.map((item) => (
                                  <li key={`${group.title}-${item.label}`}>
                                    <span>{item.label}</span>
                                    <strong>{item.price}</strong>
                                  </li>
                                ))}
                              </ul>
                            </section>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
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
