import { PageFrame } from "@/components/page-frame";
import { company } from "@/lib/site";

export default function ContactPage() {
  return (
    <PageFrame>
      <main className="page-shell">
        <section className="section snap-section snap-section--screen">
          <p className="eyebrow">Contact</p>
          <h1>Start with an email.</h1>
          <p className="muted">
            Retroslate’s primary company inbox is ready. More contact channels can
            be added once the page design is locked.
          </p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </section>
      </main>
    </PageFrame>
  );
}
