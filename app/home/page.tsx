import { PageFrame } from "@/components/page-frame";
import { company, formRecipientEmail, socialLinks } from "@/lib/site";
import styles from "./page.module.css";

const testimonials = [
  {
    quote:
      "The process was smooth, professional, and the final website exceeded expectations.",
    attribution: "Business Owner",
  },
  {
    quote: "Clear communication, modern design, and quick delivery.",
    attribution: "Independent Professional",
  },
  {
    quote: "RetroSlate understood exactly what we needed and made it simple.",
    attribution: "Hospitality Client",
  },
] as const;

const featuredProjects = [
  {
    title: "Luxury Homestay Website",
    description:
      "A warm, editorial site for a boutique stay: room stories, local guides, and a calm booking path that matches the property.",
  },
  {
    title: "Business Presence Website",
    description:
      "A confident company site with crisp service pages, case highlights, and contact flows built for credibility and speed.",
  },
  {
    title: "Health Coaching Website",
    description:
      "A personal brand site for coaching services: programs, testimonials, and a clear way for clients to get started.",
  },
] as const;

const whyPoints = [
  "Remote-first and efficient workflows",
  "Custom solutions, not templates forced everywhere",
  "Fast communication and transparent process",
  "Design + development under one roof",
  "Long-term support available",
] as const;

export default function HomePage() {
  return (
    <PageFrame>
      <main className={styles.home}>
          <section
            className={styles.hero}
            aria-labelledby="home-hero-title"
          >
            <div className={styles.heroInner}>
              <div className={styles.heroHead}>
                <h1 id="home-hero-title">
                  Modern websites and software built to grow with you.
                </h1>
                <div className={styles.heroArrow} aria-hidden>
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

              <ul className={styles.testimonials}>
                {testimonials.map((t) => (
                  <li key={t.attribution}>
                    <blockquote>
                      <p>{t.quote}</p>
                      <footer>— {t.attribution}</footer>
                    </blockquote>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={styles.featured}
            aria-labelledby="featured-title"
          >
            <div className={styles.featuredInner}>
              <h2 id="featured-title" className={styles.featuredTitle}>
                Featured Projects
              </h2>
              <ul className={styles.projectGrid}>
                {featuredProjects.map((project) => (
                  <li key={project.title}>
                    <article>
                      <p>{project.description}</p>
                      <h3>{project.title}</h3>
                    </article>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={styles.why}
            aria-labelledby="why-title"
          >
            <div className={styles.whyInner}>
              <div className={styles.whyIntro}>
                <h2 id="why-title">Why Choose Us</h2>
                <p className={styles.whySub}>Why RetroSlate?</p>
              </div>
              <ul className={styles.whyList}>
                {whyPoints.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className={styles.contact}
            aria-labelledby="home-contact-title"
          >
            <div className={styles.contactInner}>
              <div className={styles.contactPanel}>
                <p className={styles.panelBrand}>{company.legalName}</p>
                <h2 id="home-contact-title">Let&apos;s build something useful.</h2>
                <p className={styles.contactLead}>
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
                action={`https://formsubmit.co/${encodeURIComponent(formRecipientEmail)}`}
                className={styles.contactForm}
                method="POST"
              >
                <input type="hidden" name="_subject" value="New Retroslate project inquiry" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <label>
                  Full Name
                  <input name="name" type="text" required autoComplete="name" />
                </label>

                <label>
                  Email address
                  <input name="email" type="email" required autoComplete="email" />
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

                <p className={styles.formPrivacy}>
                  Your profile name won&apos;t be shared. Never submit passwords.
                </p>
              </form>
            </div>
          </section>
      </main>
    </PageFrame>
  );
}
