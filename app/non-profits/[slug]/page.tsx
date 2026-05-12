import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const pages = {
  "animal-welfare": {
    eyebrow: "Animal Rescue & Welfare",
    title: "Supporting those without a voice.",
    intro:
      "RetroSlate believes compassion should extend beyond people. We aim to support rescue shelters, rehabilitation centers, and organizations protecting abandoned, injured, and vulnerable animals.",
    sections: [
      {
        title: "Why We Support This",
        items: [
          "Animal welfare reflects societal compassion",
          "Shelters often operate with limited resources",
          "Rescue work creates immediate, visible impact",
          "Humane treatment matters everywhere",
        ],
      },
      {
        title: "Organizations We Admire",
        items: [
          { label: "Blue Cross of India", href: "https://bluecrossofindia.org/" },
          {
            label: "People For Animals",
            href: "https://www.peopleforanimalsindia.org/",
          },
          "Local shelters and rescue networks",
        ],
      },
      {
        title: "Future Contributions",
        items: [
          "Donations: Coming Soon",
          "Sponsored rescue cases: Coming Soon",
          "Volunteer support: Coming Soon",
        ],
      },
    ],
  },
  "wildlife-conservation": {
    eyebrow: "Wildlife & Habitat Conservation",
    title: "Protecting life in the wild.",
    intro:
      "We support efforts that preserve biodiversity, protect endangered species, and restore habitats for future generations.",
    sections: [
      {
        title: "Why We Support This",
        items: [
          "Wildlife loss affects ecosystems globally",
          "Conservation protects long-term planetary balance",
          "Many species face preventable decline",
          "Nature deserves stewardship, not exploitation",
        ],
      },
      {
        title: "Organizations We Admire",
        items: [
          { label: "World Wildlife Fund", href: "https://www.worldwildlife.org/" },
          { label: "Wildlife SOS", href: "https://wildlifesos.org/" },
          { label: "The Nature Conservancy", href: "https://www.tncindia.in/" },
        ],
      },
      {
        title: "Future Contributions",
        items: [
          "Conservation donations: Coming Soon",
          "Awareness campaigns: Coming Soon",
          "Partnerships: Coming Soon",
        ],
      },
    ],
  },
  "ocean-protection": {
    eyebrow: "Ocean & Marine Protection",
    title: "Defending the oceans.",
    intro:
      "Healthy oceans are essential to life on Earth. We aim to support organizations protecting marine wildlife, fighting pollution, and preserving ocean ecosystems.",
    sections: [
      {
        title: "Why We Support This",
        items: [
          "Oceans regulate climate and biodiversity",
          "Marine life faces pollution and overexploitation",
          "Ocean protection benefits everyone",
          "Future generations deserve living seas",
        ],
      },
      {
        title: "Organizations We Admire",
        items: [
          {
            label: "Sea Shepherd Conservation Society",
            href: "https://www.seashepherdglobal.org/",
          },
          { label: "Ocean Conservancy", href: "https://www.oceanconservation.org/" },
        ],
      },
      {
        title: "Future Contributions",
        items: [
          "Marine donations: Coming Soon",
          "Awareness support: Coming Soon",
          "Campaign backing: Coming Soon",
        ],
      },
    ],
  },
  "clean-energy": {
    eyebrow: "Clean Energy & Sustainability",
    title: "Backing a cleaner future.",
    intro:
      "We believe innovation should move toward renewable energy, efficient systems, and responsible growth.",
    sections: [
      {
        title: "Why We Support This",
        items: [
          "Cleaner energy improves public health",
          "Sustainable systems reduce long-term harm",
          "Innovation should solve real environmental problems",
          "Responsible growth matters",
        ],
      },
      {
        title: "Organizations We Admire",
        items: [
          { label: "350.org", href: "https://350.org/?r=IN&c=AS" },
          { label: "Ashden", href: "https://ashden.org/" },
          "Local renewable initiatives",
        ],
      },
      {
        title: "Future Contributions",
        items: [
          "Sustainability fund: Coming Soon",
          "Clean energy support: Coming Soon",
          "Efficiency initiatives: Coming Soon",
        ],
      },
    ],
  },
  "humane-technology": {
    eyebrow: "Humane Technology & Digital Wellbeing",
    title: "Technology that respects people.",
    intro:
      "RetroSlate believes digital tools should improve life, not dominate it. We support efforts that promote healthier, safer, and more ethical relationships with technology.",
    sections: [
      {
        title: "Why We Support This",
        items: [
          "Attention is valuable",
          "Healthy boundaries matter",
          "Technology should serve people",
          "Ethical design creates better futures",
        ],
      },
      {
        title: "Organizations We Admire",
        items: [
          { label: "Center for Humane Technology", href: "https://www.humanetech.com/" },
          {
            label: "Mozilla Foundation",
            href: "https://www.mozillafoundation.org/en/",
          },
        ],
      },
      {
        title: "Future Contributions",
        items: [
          "Digital wellbeing initiatives: Coming Soon",
          "Open-source support: Coming Soon",
          "Educational content: Coming Soon",
        ],
      },
    ],
  },
} as const;

type PageSlug = keyof typeof pages;

type NonProfitPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getPage(slug: string) {
  return pages[slug as PageSlug];
}

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: NonProfitPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    return {
      title: "Non-Profits and Charities",
    };
  }

  return {
    title: page.eyebrow,
    description: page.intro,
  };
}

export default async function NonProfitPage({ params }: NonProfitPageProps) {
  const { slug } = await params;
  const page = getPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <PageFrame>
      <main className={styles.page}>
        <article className={styles.article}>
          <p className={styles.eyebrow}>Non-Profits and Charities</p>
          <h1>{page.title}</h1>
          <p className={styles.intro}>{page.intro}</p>
          <div className={styles.sections}>
            {page.sections.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2>{section.title}</h2>
                <ul>
                  {section.items.map((item) => (
                    <li key={typeof item === "string" ? item : item.label}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <a href={item.href} target="_blank" rel="noreferrer">
                          {item.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </main>
    </PageFrame>
  );
}
