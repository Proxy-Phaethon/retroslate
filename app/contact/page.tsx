"use client";

import { useState } from "react";
import { PageFrame } from "@/components/page-frame";
import { company, formRecipientEmail, socialLinks } from "@/lib/site";
import styles from "./page.module.css";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(formRecipientEmail)}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <PageFrame>
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
            onSubmit={handleSubmit}
            className={styles.form}
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

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send Inquiry"}
            </button>

            <p className={styles.disclaimer}>
              Your profile details won&apos;t be shared. Never submit passwords.
            </p>
          </form>
        </div>
      </main>

      {/* Success modal */}
      {(status === "success" || status === "error") && (
        <div className={styles.modalBackdrop} onClick={() => setStatus("idle")}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            {status === "success" ? (
              <>
                <h2>Message sent.</h2>
                <p>Check your inbox for updates — we&apos;ll be in touch shortly.</p>
              </>
            ) : (
              <>
                <h2>Something went wrong.</h2>
                <p>Please try again or reach us directly at <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
              </>
            )}
            <button onClick={() => setStatus("idle")}>Close</button>
          </div>
        </div>
      )}
    </PageFrame>
  );
}