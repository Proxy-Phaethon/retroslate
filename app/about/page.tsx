import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const beliefPoints = [
  "Clear, not confusing",
  "Useful, not decorative",
  "Fast, not frustrating",
  "Flexible, not limiting",
  "Built to grow, not rebuild constantly",
] as const;

const remoteMeans = [
  "Flexible and responsive communication",
  "Access to diverse talent and perspectives",
  "Efficient delivery without unnecessary overhead",
  "Modern collaboration tools and transparent process",
] as const;

const focusAreas = [
  "Website Design & Development",
  "Portfolio & Personal Brand Websites",
  "Business Websites",
  "Hospitality & Booking Websites",
  "Web Applications & Tools",
  "Ongoing Support & Maintenance",
] as const;

export default function AboutPage() {
  return (
    <PageFrame>
      <main className={styles.about}>
        <section className={styles.hero} aria-labelledby="about-hero-title">
          <div className={styles.heroInner}>
            <h1 id="about-hero-title">Built for the modern way of working.</h1>
            <div className={styles.heroAside}>
              <p>
                RetroSlate is a remote-first digital studio creating websites,
                software, and online experiences for businesses, professionals,
                and growing brands.
              </p>
              <Link className={styles.button} href="/services">
                Start Now
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="started-title">
          <div className={styles.sectionInner}>
            <h2 id="started-title">How it Started</h2>
            <div className={styles.prose}>
              <p>
                RetroSlate began with a simple idea: great digital work should be
                accessible, efficient, and built with purpose.
              </p>
              <p>
                What started as a vision for helping professionals establish a
                strong online presence has grown into a broader studio focused on
                design, development, and scalable digital solutions.
              </p>
              <p>
                Today, we help clients turn ideas into polished products - from
                websites and portfolios to tools and custom platforms.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="believe-title">
          <div className={styles.sectionInner}>
            <h2 id="believe-title">What we Believe</h2>
            <p className={styles.lead}>We believe good digital products should be:</p>
            <ul className={styles.bulletList}>
              {beliefPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="remote-title">
          <div className={styles.sectionInner}>
            <h2 id="remote-title">Remote-first by Design</h2>
            <div className={styles.prose}>
              <p>
                Our distributed workflow allows us to collaborate across locations,
                move efficiently, and focus on results rather than rigid schedules.
              </p>
              <p className={styles.lead}>This means:</p>
            </div>
            <ul className={styles.bulletList}>
              {remoteMeans.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="focus-title">
          <div className={styles.sectionInner}>
            <h2 id="focus-title">Our Focus</h2>
            <ul className={styles.bulletList}>
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="people-title">
          <div className={styles.sectionInner}>
            <h2 id="people-title">Built by people who care about the work</h2>
            <div className={styles.prose}>
              <p>
                RetroSlate is growing through a network of creative and technical
                collaborators who value quality, learning, and meaningful results.
              </p>
              <p>
                We combine design, development, strategy, and communication to
                deliver work that lasts.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cta} aria-labelledby="about-cta-title">
          <div className={styles.ctaInner}>
            <h2 id="about-cta-title">Let&apos;s build what&apos;s next.</h2>
            <p>
              If you need a website, digital product, or a better online presence,
              we&apos;d love to hear about it.
            </p>
            <Link className={styles.button} href="/services">
              Start a Project
            </Link>
          </div>
        </section>
      </main>
    </PageFrame>
  );
}
