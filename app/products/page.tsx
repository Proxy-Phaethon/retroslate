import { PageFrame } from "@/components/page-frame";
import { products } from "@/lib/site";

export default function ProductsPage() {
  return (
    <PageFrame>
      <main className="page-shell">
        {products.map((item) => (
          <section key={item.name} className="section snap-section snap-section--screen">
            <h2>{item.name}</h2>
            <p className="muted">{item.summary}</p>
          </section>
        ))}
      </main>
    </PageFrame>
  );
}
