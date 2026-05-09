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
  { label: "Products & Services", href: "/products-services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const productsAndServices = [
  {
    name: "Retroslate Portfolios",
    summary:
      "Free hosted portfolios at retroslate.com/username, with paid design and deployment services available.",
  },
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
  {
    name: "Web Development Services",
    summary:
      "Strategy, design, development, deployment, maintenance, and adjacent website services.",
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
