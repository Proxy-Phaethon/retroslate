import Link from "next/link";
import { company, socialLinks } from "@/lib/site";
import styles from "./page.module.css";

export default function LandingPage() {
  return (
    <main className={styles.landing}>
      <section
        className={`${styles.hero} snap-section snap-section--screen`}
        aria-labelledby="landing-title"
      >
        <Link className={styles.brand} href="/" aria-label="Retroslate home">
          {company.legalName}
        </Link>

        <div className={styles.heroTitleBlock}>
          <h1 id="landing-title">RetroSlate</h1>
          <p>Design. Build. Deploy. Digital products without the chaos.</p>
        </div>

        <div className={styles.heroPitch}>
          <p>
            A remote-first digital studio crafting websites, tools, and software
            for businesses and creators worldwide.
          </p>
          <Link className={styles.primaryButton} href="/services">
            Start a Project
          </Link>
        </div>
      </section>

      <section className={`${styles.services} snap-section snap-section--screen`} aria-label="Core services">
        <article>
          <h2>Web Development</h2>
          <p>Fast, responsive websites built for performance and clarity.</p>
        </article>
        <article>
          <h2>Product Design</h2>
          <p>Interfaces designed to feel simple, intuitive, and intentional.</p>
        </article>
        <article>
          <h2>Full-Stack Solutions</h2>
          <p>From frontend to backend - complete systems, not just pages.</p>
        </article>
        <article>
          <h2>Deployment &amp; Support</h2>
          <p>We don&apos;t just build it. We launch it and keep it running.</p>
        </article>
      </section>

      <section
        className={`${styles.outcomes} snap-section snap-section--screen`}
        aria-labelledby="outcomes-title"
      >
        <div className={styles.outcomesCopy}>
          <p>We focus on shipping usable products, not just designs or ideas.</p>
          <h2 id="outcomes-title">Real work. Real outcomes.</h2>
        </div>

        <div className={styles.statsCard} aria-label="Retroslate project stats">
          <p>Projects Built: 8</p>
          <p>Websites Delivered: 3</p>
          <p>
            Tools in
            <br />
            Development: 2
          </p>
          <p>
            Clients Collaborated
            <br />
            With: 5
          </p>
        </div>
      </section>

      <section
        className={`${styles.contact} snap-section snap-section--screen`}
        aria-labelledby="contact-title"
      >
        <div className={styles.contactPanel}>
          <p className={styles.panelBrand}>{company.legalName}</p>
          <h2 id="contact-title">Let&apos;s build something useful.</h2>
          <p>
            Have an idea, a business, or a product? We&apos;ll help you design,
            build, and launch it.
          </p>

          <div className={styles.contactMeta}>
            <div>
              <a href={`https://www.${company.domain}`}>www.{company.domain}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`}>
                {company.phone}
              </a>
            </div>
            <div>
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} rel="noreferrer" target="_blank">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          action={`https://formsubmit.co/${company.email}`}
          className={styles.contactForm}
          method="POST"
        >
          <input type="hidden" name="_subject" value="New Retroslate project inquiry" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <label>
            Full Name
            <input name="name" type="text" required />
          </label>

          <label>
            Email address
            <input name="email" type="email" required />
          </label>

          <label>
            Message
            <textarea name="message" required rows={4} />
          </label>

          <fieldset className={styles.rating}>
            <legend>Rate Us</legend>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating}>
                  <input name="rating" type="radio" value={rating} />
                  <span aria-hidden="true">☆</span>
                  <span className={styles.srOnly}>{rating} stars</span>
                </label>
              ))}
            </div>
          </fieldset>

          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  );
}
