// title and description are edited in Keystatic (Site settings), which writes to site-settings.json.
import settings from "./site-settings.json";

export const siteData = {
  ...settings,
  navItems: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ],
};
