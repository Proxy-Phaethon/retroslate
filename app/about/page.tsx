import Link from "next/link";
import { PageFrame } from "@/components/page-frame";
import { teamMembers } from "@/lib/site";

export default function AboutPage() {
  return (
    <PageFrame>
      <main className="section page-shell">
        <p className="eyebrow">About</p>
        <h1>The Retroslate team.</h1>
        <div>
          {teamMembers.map((member) => (
            <article key={member.handle} className="section">
              <h2>{member.name}</h2>
              <p className="muted">{member.role}</p>
              <Link href={member.href}>retroslate.com/{member.handle}</Link>
            </article>
          ))}
        </div>
      </main>
    </PageFrame>
  );
}
