import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const commitments = {
  "work-life-balance": {
    title: "Work-Life Balance",
    intro: [
      "At RetroSlate, we believe great work should support life — not consume it.",
      "We are building a flexible, remote-first culture that values outcomes over unnecessary hours. Our approach encourages healthy schedules, personal time, and sustainable productivity rather than burnout-driven work habits.",
      "We aim to create an environment where people can do meaningful work while still making time for family, health, rest, and personal growth.",
    ],
    listTitle: "Our Commitment",
    points: [
      "Flexible remote work structure",
      "Respect for personal time and boundaries",
      "Focus on results, not performative busyness",
      "Sustainable workloads whenever possible",
      "A culture that values wellbeing",
    ],
  },
  "career-growth-learning": {
    title: "Career Growth and Learning",
    intro: [
      "We believe growth happens when people are trusted, challenged, and supported.",
      "RetroSlate encourages continuous learning across technical, creative, and professional skills. As we grow, we aim to create opportunities for collaborators to build portfolios, gain real project experience, and expand their capabilities.",
      "We value curiosity, initiative, and people who want to keep improving.",
    ],
    listTitle: "Our Focus",
    points: [
      "Hands-on learning through real projects",
      "Cross-functional collaboration",
      "Skill development in design, development, and operations",
      "Encouragement for certifications and self-learning",
      "Opportunities to grow with the company",
    ],
  },
  "diversity-equity-inclusion": {
    title: "Diversity, Equity & Inclusion (DEI) - Pledge",
    intro: [
      "We believe good ideas can come from anywhere and anyone.",
      "RetroSlate is committed to building an inclusive environment where people are treated with fairness, dignity, and respect regardless of background, identity, location, or experience level.",
      "We aim to create opportunities based on talent, effort, and potential.",
    ],
    listTitle: "Our Pledge",
    points: [
      "Respect every individual",
      "Support fair opportunities",
      "Encourage diverse perspectives",
      "Maintain a safe and professional environment",
      "Continue learning and improving as we grow",
    ],
  },
  "environmental-sustainability": {
    title: "Environmental Sustainability - Pledge",
    intro: [
      "We believe growth should be responsible.",
      "As a digital-first company, RetroSlate aims to operate efficiently and mindfully while reducing unnecessary waste where possible.",
      "As we expand, we intend to support practical sustainability efforts and make choices that reduce negative environmental impact.",
    ],
    listTitle: "Our Pledge",
    points: [
      "Operate remotely to reduce unnecessary commuting impact",
      "Prefer efficient digital workflows over wasteful processes",
      "Minimize unnecessary consumption",
      "Support environmental initiatives when possible",
      "Improve our practices over time",
    ],
  },
  "social-impact": {
    title: "Social Impact - Pledge",
    intro: [
      "We believe business should contribute positively beyond profit.",
      "RetroSlate aims to support communities, meaningful causes, and people building better futures. As we grow, we hope to contribute through skills, opportunities, partnerships, and charitable support.",
      "We are especially passionate about humane causes, community upliftment, and responsible progress.",
    ],
    listTitle: "Our Pledge",
    points: [
      "Support causes that create real impact",
      "Help people through useful skills and opportunities",
      "Contribute where we can as we grow",
      "Approach giving with sincerity, not performance",
      "Build a company that creates value beyond revenue",
    ],
  },
} as const;

type CommitmentSlug = keyof typeof commitments;

type CommitmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getCommitment(slug: string) {
  return commitments[slug as CommitmentSlug];
}

export function generateStaticParams() {
  return Object.keys(commitments).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CommitmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const commitment = getCommitment(slug);

  if (!commitment) {
    return {
      title: "Company Commitment",
    };
  }

  return {
    title: commitment.title,
    description: commitment.intro[0],
  };
}

export default async function CommitmentPage({ params }: CommitmentPageProps) {
  const { slug } = await params;
  const commitment = getCommitment(slug);

  if (!commitment) {
    notFound();
  }

  return (
    <PageFrame>
      <main className={styles.page}>
        <article className={styles.article}>
          <p className={styles.eyebrow}>Company Commitments</p>
          <h1>{commitment.title}</h1>
          <div className={styles.copy}>
            {commitment.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <section className={styles.commitmentList}>
            <h2>{commitment.listTitle}</h2>
            <ul>
              {commitment.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>
        </article>
      </main>
    </PageFrame>
  );
}
