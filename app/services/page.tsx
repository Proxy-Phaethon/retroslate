import { PageFrame } from "@/components/page-frame";
import { services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <PageFrame>
      <main className="page-shell">
        {services.map((item) => (
          <section key={item.name} className="section snap-section snap-section--screen">
            <h2>{item.name}</h2>
            <p className="muted">{item.summary}</p>
          </section>
        ))}
      </main>
    </PageFrame>
  );
}
