import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const products = [
  {
    id: "slategeo",
    title: "SlateGEO",
    href: "https://www.slategeo.com",
    subtitle: "AI visibility analysis for modern businesses.",
    status: "Live",
    description:
      "SlateGEO helps businesses understand how effectively AI systems can interpret, trust, summarize, and recommend their websites. It combines GEO scoring, AI readability analysis, recommendation readiness, and multi-model evaluation into one dashboard.",
    features: [
      "GEO scoring system",
      "AI readability analysis",
      "Recommendation readiness",
      "Multi-model interpretation",
      "Website scan reports",
      "Actionable optimization suggestions",
    ],
    idealFor: [
      "Startups",
      "Agencies",
      "Businesses",
      "SaaS platforms",
      "Personal brands",
    ],
  },
  {
    id: "rearview",
    title: "RearView",
    subtitle: "Cross-platform workflows, simplified.",
    status: "In Development",
    description:
      "RearView is an open-source productivity utility focused on seamless interoperability between operating systems and devices. The goal is to simplify multi-device workflows and reduce friction between ecosystems.",
    features: [
      "Cross-platform workflows",
      "Multi-device utility tools",
      "OS interoperability",
      "Productivity-focused systems",
      "Lightweight performance",
      "Open-source ecosystem",
    ],
    idealFor: [
      "Developers",
      "Remote workers",
      "Power users",
      "Multi-device users",
      "Productivity enthusiasts",
    ],
  },
  {
    id: "retroslateco",
    title: "RetroSlateCo",
    subtitle: "Technology with purpose.",
    status: "Active Initiative",
    description:
      "RetroSlateCo is the mission-driven branch of RetroSlate focused on animal welfare, environmental awareness, humane technology, and long-term sustainability initiatives.",
    features: [
      "Animal welfare support",
      "Rescue and sterilization initiatives",
      "Environmental awareness",
      "Humane technology advocacy",
      "Community-driven support",
      "Future restoration initiatives",
    ],
    idealFor: [
      "Volunteers",
      "Animal welfare advocates",
      "Non-profits",
      "Environmental initiatives",
      "Community collaborations",
    ],
  },
] as const;

export default function ProductsPage() {
  return (
    <PageFrame>
      <main className={styles.productsPage}>
        <section className={styles.hero} aria-labelledby="products-hero-title">
          <div className={styles.heroInner}>
            <h1 id="products-hero-title">Tools built to solve real problems</h1>
            <p>
              RetroSlate builds products and initiatives shaped around AI
              visibility, cross-platform productivity, and humane technology.
            </p>
          </div>
        </section>

        {products.map((product) => (
          <section
            className={styles.productSection}
            aria-labelledby={`${product.id}-title`}
            key={product.id}
          >
            <div className={styles.sectionInner}>
              <h2 id={`${product.id}-title`}>
                {"href" in product ? (
                  <a
                    className={styles.productTitleLink}
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {product.title}
                  </a>
                ) : (
                  product.title
                )}
              </h2>
              <p className={styles.subtitle}>{product.subtitle}</p>
              <p className={styles.tagline}>{product.status}</p>
              <div className={styles.productBox}>
                <div className={styles.productCol}>
                  <h3>Overview</h3>
                  <p>{product.description}</p>
                </div>
                <div className={styles.productCol}>
                  <h3>Features</h3>
                  <ul>
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.productCol}>
                  <h3>Ideal For</h3>
                  <ul>
                    {product.idealFor.map((audience) => (
                      <li key={audience}>{audience}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </PageFrame>
  );
}
