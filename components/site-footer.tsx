import Link from "next/link";
import { company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>&copy; 2026 Retroslate Co. All rights reserved.</p>
        <Link href={`mailto:${company.email}`}>{company.email}</Link>
      </div>
    </footer>
  );
}
