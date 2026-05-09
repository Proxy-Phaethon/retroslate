import Link from "next/link";
import { company, navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="brand" href="/" aria-label="Retroslate home">
          {company.name}
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
