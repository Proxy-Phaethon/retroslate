import { PageFrame } from "@/components/page-frame";
import { productsAndServices } from "@/lib/site";

export default function ProductsServicesPage() {
  return (
    <PageFrame>
      <main className="section page-shell">
        <p className="eyebrow">Products & Services</p>
        <h1>Software, portfolios, and web development.</h1>
        <div>
          {productsAndServices.map((item) => (
            <section key={item.name} className="section">
              <h2>{item.name}</h2>
              <p className="muted">{item.summary}</p>
            </section>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
