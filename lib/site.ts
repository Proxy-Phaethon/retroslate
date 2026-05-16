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
  { label: "Animal Welfare", href: "/non-profits/animal-welfare" },
  { label: "Wildlife Conservation", href: "/non-profits/wildlife-conservation" },
  { label: "Ocean Protection", href: "/non-profits/ocean-protection" },
  { label: "Clean Energy", href: "/non-profits/clean-energy" },
  { label: "Humane Technology", href: "/non-profits/humane-technology" },
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
    href: "https://github.com/retroslateco",
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
    name: "Zia Hawwa",
    handle: "ziahawwa",
    role: "Founder",
    href: "/ziahawwa",
  },
] as const;
