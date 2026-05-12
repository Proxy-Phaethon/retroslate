export const palette = {
  void: "#1b1b21",
  wine: "#8e0b23",
  milk: "#f2f0ed",
} as const;

export const company = {
  name: "RetroSlate",
  legalName: "RetroSlate Co.",
  domain: "retroslate.com",
  email: "ziahawwa@retroslate.com",
  phone: "+91 9496050818",
} as const;

/** Inbox for all FormSubmit-powered forms across the site */
export const formRecipientEmail = "ziahawwa@retroslate.com";

export const commitmentLinks = [
  { label: "Work-life balance", href: "/company-commitments/work-life-balance" },
  {
    label: "Career growth and learning",
    href: "/company-commitments/career-growth-learning",
  },
  {
    label: "Diversity, equity, and inclusion (DEI)",
    href: "/company-commitments/diversity-equity-inclusion",
  },
  {
    label: "Environmental sustainability",
    href: "/company-commitments/environmental-sustainability",
  },
  { label: "Social impact", href: "/company-commitments/social-impact" },
] as const;

export const charityLinks = [
  { label: "Education Access", href: "/non-profits/education-access" },
  { label: "Digital Literacy", href: "/non-profits/digital-literacy" },
  { label: "Climate Action", href: "/non-profits/climate-action" },
  { label: "Community Care", href: "/non-profits/community-care" },
] as const;

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/retroslate",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/retroslateco",
  },
  {
    label: "GitHub",
    href: "https://github.com/Proxy-Phaethon",
  },
] as const;

export const navItems = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
] as const;

export const teamMembers = [
  {
    name: "Ziah Awwa",
    handle: "ziahawwa",
    role: "Founder",
    href: "/ziahawwa",
  },
] as const;
