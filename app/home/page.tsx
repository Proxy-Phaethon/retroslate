import { PageFrame } from "@/components/page-frame";

export default function HomePage() {
  return (
    <PageFrame>
      <main className="page-shell">
        <section className="section snap-section snap-section--screen">
          <p className="eyebrow">Home</p>
          <h1>Goals, history, and company direction.</h1>
          <p className="muted">
            This page is reserved for the broader Retroslate story, operating
            principles, milestones, and long-term goals.
          </p>
        </section>
      </main>
    </PageFrame>
  );
}
