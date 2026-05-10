import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { teamMembers } from "@/lib/site";

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="page-shell">
        <section className="section snap-section snap-section--screen">
          <p className="eyebrow">About</p>
          <h1>The Retroslate team.</h1>
        </section>
        {teamMembers.map((member) => (
          <section key={member.handle} className="section snap-section snap-section--screen">
            <article>
              <h2>{member.name}</h2>
              <p className="muted">{member.role}</p>
              <Link href={member.href}>retroslate.com/{member.handle}</Link>
            </article>
          </section>
        ))}
      </main>
    </PageFrame>
  );
}
