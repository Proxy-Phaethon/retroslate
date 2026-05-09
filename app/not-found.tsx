import Link from "next/link";
import { PageFrame } from "@/components/page-frame";

export default function NotFound() {
  return (
    <PageFrame>
      <main className="section page-shell">
        <p className="eyebrow">404</p>
        <h1>Nothing is published here yet.</h1>
        <p className="muted">
          This path may become a Retroslate portfolio later.
        </p>
        <Link href="/">Return to Retroslate</Link>
      </main>
    </PageFrame>
  );
}
