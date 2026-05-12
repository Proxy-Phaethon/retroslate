import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

export default function ProductsPage() {
  return (
    <PageFrame>
        <main className={styles.productsPage}>
          <section
            className={styles.hero}
            aria-labelledby="products-hero-title"
          >
            <div className={styles.heroInner}>
              <h1 id="products-hero-title">
                Tools built to solve real problems
              </h1>
              <p>
                Alongside client services, RetroSlate develops products designed to
                help professionals, businesses, and everyday users work smarter
                online and offline.
              </p>
            </div>
          </section>

          <section
            className={styles.productSection}
            aria-labelledby="hosting-title"
          >
            <div className={styles.sectionInner}>
              <h2 id="hosting-title">RetroSlate Hosting</h2>
              <p className={styles.subtitle}>
                Professional portfolios online, without the usual barriers.
              </p>
              <div className={styles.productBox}>
                <div className={styles.productCol}>
                  <h3>Launch Your Portfolio</h3>
                  <p>
                    A simple hosting platform that allows users to publish portfolio
                    websites under the RetroSlate ecosystem.
                  </p>
                </div>
                <div className={styles.productCol}>
                  <ul>
                    <li>Fast hosting</li>
                    <li>Easy launch process</li>
                    <li>Mobile-ready layouts</li>
                    <li>Editable structure</li>
                    <li>Optional custom portfolio development</li>
                  </ul>
                </div>
                <div className={styles.productCol}>
                  <h3>Examples:</h3>
                  <ul>
                    <li>retroslate.com/username</li>
                    <li>Custom portfolio pages</li>
                    <li>Creator-friendly hosting</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            className={styles.productSection}
            aria-labelledby="rearview-title"
          >
            <div className={styles.sectionInner}>
              <h2 id="rearview-title">Rearview</h2>
              <p className={styles.subtitle}>
                Make your second screen feel native.
              </p>
              <p className={styles.tagline}>Open-Source Project</p>
              <div className={styles.productBox}>
                <div className={styles.productCol}>
                  <p>
                    Designed for users who want to extend productivity across
                    systems without friction. Rearview is an open-source RetroSlate
                    project focused on seamless dual-monitor connectivity between
                    macOS and Windows devices.
                  </p>
                </div>
                <div className={styles.productCol}>
                  <ul>
                    <li>Mac ↔ Windows display extension</li>
                    <li>Smooth cross-platform experience</li>
                    <li>Low-latency connection</li>
                    <li>Clean setup process</li>
                    <li>Productivity-first workflow</li>
                  </ul>
                </div>
                <div className={styles.productCol}>
                  <h3>Ideal For:</h3>
                  <ul>
                    <li>Students</li>
                    <li>Remote workers</li>
                    <li>Developers</li>
                    <li>Multi-device users</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            className={styles.productSection}
            aria-labelledby="slate-title"
          >
            <div className={styles.sectionInner}>
              <h2 id="slate-title">Slate</h2>
              <p className={styles.subtitle}>
                Your identity essentials, in one place.
              </p>
              <p className={styles.tagline}>In Development</p>
              <div className={styles.productBox}>
                <div className={styles.productCol}>
                  <p>
                    Instead of managing multiple apps, wallets, and sign-up
                    systems, Slate aims to simplify access through secure
                    authentication and biometrics. Slate is a secure mobile app
                    designed to centralize everyday essentials such as documents,
                    IDs, cards, and personal credentials in one protected space.
                  </p>
                </div>
                <div className={styles.productCol}>
                  <ul>
                    <li>Document storage</li>
                    <li>Card organization</li>
                    <li>Secure autofill / identity tools</li>
                    <li>Biometric access</li>
                    <li>Simplified onboarding flows</li>
                    <li>Private, user-controlled access</li>
                  </ul>
                </div>
                <div className={styles.productCol}>
                  <h3>Ideal For:</h3>
                  <ul>
                    <li>Professionals</li>
                    <li>Students</li>
                    <li>Frequent travelers</li>
                    <li>Everyday users seeking simplicity</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section
            className={styles.future}
            aria-labelledby="future-title"
          >
            <div className={styles.sectionInner}>
              <h2 id="future-title">Future Projects</h2>
              <p className={styles.subtitle}>Always building what&apos;s next.</p>
              <p className={styles.tagline}>Stay Tuned</p>
              <div className={styles.futureBox}>
                <p>
                  RetroSlate continues to explore software, utilities, and
                  practical digital products shaped by real-world user frustrations
                  and unmet needs.
                </p>
                <Link className={styles.joinButton} href="/contact">
                  Join Us
                </Link>
              </div>
            </div>
          </section>
        </main>
    </PageFrame>
  );
}
