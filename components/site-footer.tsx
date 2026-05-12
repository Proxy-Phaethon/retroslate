import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { charityLinks, commitmentLinks, company } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-inner">
        <div className="footer-column">
          <h2>Company Commitments</h2>
          <nav aria-label="Company commitments">
            {commitmentLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer-center">
          <ThemeToggle />
          <p>
            RetroSlate(TM) &copy; 2026 {company.legalName} All rights reserved.
          </p>
        </div>

        <div className="footer-column footer-column--right">
          <h2>Non-Profits and Charities</h2>
          <nav aria-label="Non-profits and charities">
            {charityLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
