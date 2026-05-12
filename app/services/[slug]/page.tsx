import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageFrame } from "@/components/page-frame";
import styles from "./page.module.css";

const services = {
  "website-design-development": "Website Design & Development",
  "portfolio-websites": "Portfolio Websites",
  "personal-brand-websites": "Personal Brand Websites",
  "hospitality-booking-websites": "Hospitality & Booking Websites",
  "web-applications-internal-tools": "Web Applications & Internal Tools",
  "website-redesigns": "Website Redesigns",
  "deployment-technical-setup": "Deployment & Technical Setup",
  "ongoing-maintenance-support": "Ongoing Maintenance & Support",
} as const;

type ServiceSlug = keyof typeof services;

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getService(slug: string) {
  return services[slug as ServiceSlug];
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  return {
    title: service ?? "Service",
    description: service
      ? `Details and booking options for ${service}.`
      : "RetroSlate service details.",
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageFrame>
      <main className={styles.page}>
        <article className={styles.article}>
          <p className={styles.eyebrow}>Services</p>
          <h1>{service}</h1>
          <p>
            Service details, package options, and booking flow will be added here.
            For now, you can start the conversation through the contact page.
          </p>
          <div className={styles.actions}>
            <Link href="/contact">Start Booking</Link>
            <Link href="/services">Back to Services</Link>
          </div>
        </article>
      </main>
    </PageFrame>
  );
}
