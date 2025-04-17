export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Таблиця",
      href: "/table",
    },
    {
      label: "Картки",
      href: "/cards",
    },
  ],
  navMenuItems: [
    {
      label: "Таблиця",
      href: "/table",
    },
    {
      label: "Картки",
      href: "/cards",
    },
  ],
  links: {
    github: "https://github.com/AlexBondar298",
  },
};
