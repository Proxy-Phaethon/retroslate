import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import { teamMembers } from "@/lib/site";

type PortfolioPageProps = {
  params: Promise<{
    username: string;
  }>;
};

export default async function PortfolioPage({ params }: PortfolioPageProps) {
  const { username } = await params;
  const member = teamMembers.find((item) => item.handle === username);

  if (!member) {
    notFound();
  }

  return (
    <PageFrame>
      <main className="section page-shell">
        <p className="eyebrow">Retroslate Portfolio</p>
        <h1>{member.name}</h1>
        <p className="muted">{member.role}</p>
      </main>
    </PageFrame>
  );
}
