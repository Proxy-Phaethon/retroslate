export const palette = {
  void: "#23212c",
  wine: "#7f011f",
  milk: "#f8f5f2",
} as const;

export const company = {
  name: "Retroslate",
  legalName: "RetroSlate Co.",
  domain: "retroslate.com",
  email: "ziahawwa@retroslate.com",
  phone: "+91 9496050818",
} as const;

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

export const services = [
  {
    name: "Web Development Services",
    summary:
      "Strategy, design, development, deployment, maintenance, and adjacent website services.",
  },
  {
    name: "Retroslate Portfolios",
    summary:
      "Free hosted portfolios at retroslate.com/username, with paid design and deployment services available.",
  },
] as const;

export const products = [
  {
    name: "Rearview",
    summary:
      "An open-source desktop app for dual-monitor workflows across macOS and Windows.",
  },
  {
    name: "Slate",
    summary:
      "A mobile app planned around extreme high-security features, with details to follow.",
  },
] as const;

export const teamMembers = [
  {
    name: "Ziah Awwa",
    handle: "ziahawwa",
    role: "Founder",
    href: "/ziahawwa",
  },
] as const;
