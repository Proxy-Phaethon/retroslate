"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { company, navItems } from "@/lib/site";

function navLinkActive(pathname: string, href: string) {
  return pathname === href;
}

export function SiteHeader() {
  const pathname = usePathname() ?? "";

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="site-header">
      <div className="page-shell header-inner">
        <Link className="brand" href="/" aria-label="Retroslate home">
          {company.name}
        </Link>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map((item) => {
            const active = navLinkActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                data-active={active ? "true" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
