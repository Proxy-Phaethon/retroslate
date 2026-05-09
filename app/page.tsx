import { PageFrame } from "@/components/page-frame";
import { company, productsAndServices } from "@/lib/site";

export default function LandingPage() {
  return (
    <PageFrame>
      <main>
        <section className="section page-shell">
          <p className="eyebrow">Parent company</p>
          <h1>{company.name}</h1>
          <p className="muted">
            Secure apps, open-source tools, hosted portfolios, and web systems
            built with a long memory.
          </p>
        </section>
        <section className="section page-shell" aria-labelledby="services">
          <p className="eyebrow" id="services">
            Services
          </p>
          <ul>
            {productsAndServices.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span className="muted"> — {item.summary}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="section page-shell">
          <p className="eyebrow">Clients</p>
          <p className="muted">Client and case-study space is ready for design.</p>
        </section>
        <section className="section page-shell">
          <p className="eyebrow">Contact</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </section>
      </main>
    </PageFrame>
  );
}
