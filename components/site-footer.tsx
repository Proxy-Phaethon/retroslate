import Link from "next/link";
import { company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <p>{company.name}</p>
        <Link href={`mailto:${company.email}`}>{company.email}</Link>
      </div>
    </footer>
  );
}
