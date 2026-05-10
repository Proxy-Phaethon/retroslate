import { PageFrame } from "@/components/page-frame";
import { company, socialLinks } from "@/lib/site";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <PageFrame showFooter={false}>
      <main className={styles.contactPage}>
        <div className={styles.panel}>
          <div className={styles.panelCopy}>
            <p className={styles.eyebrow}>Let&apos;s build something useful.</p>
            <h1>
              Need a website, digital product, redesign, or custom solution? Tell
              us what you&apos;re working on and we&apos;ll help you plan the right
              next step.
            </h1>
            <p className={styles.lede}>
              We work with businesses, professionals, creators, and early-stage
              ideas through a remote-first process designed for clear communication
              and efficient delivery.
            </p>
          </div>
          <div className={styles.panelMeta}>
            <div>
              <a href={`https://www.${company.domain}`}>www.{company.domain}</a>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={`tel:${company.phone.replaceAll(" ", "")}`}>{company.phone}</a>
            </div>
            <div className={styles.social}>
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.formColumn}>
          <form
            action={`https://formsubmit.co/${company.email}`}
            className={styles.form}
            method="POST"
          >
            <input type="hidden" name="_subject" value="New Retroslate contact inquiry" />
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
              Company/Brand
              <textarea name="company" rows={4} />
            </label>

            <label>
              Project Type
              <input name="project_type" type="text" />
            </label>

            <label>
              Budget Range
              <input name="budget" type="text" />
            </label>

            <label>
              Timeline
              <input name="timeline" type="text" />
            </label>

            <button type="submit">Send Inquiry</button>

            <p className={styles.disclaimer}>
              Your profile details won&apos;t be shared. Never submit passwords.
            </p>
          </form>
        </div>
      </main>
    </PageFrame>
  );
}
