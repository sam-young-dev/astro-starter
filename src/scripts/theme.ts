export type Mode = "light" | "dark";

const KEY = "theme";
const root = document.documentElement;
const query = window.matchMedia("(prefers-color-scheme: dark)");

const readStored = (): Mode | null => {
  try {
    const value = localStorage.getItem(KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
};

/** The mode currently applied to the page. */
export const getMode = (): Mode =>
  root.dataset.mode === "dark" ? "dark" : "light";

const apply = (mode: Mode) => {
  root.dataset.mode = mode;
  root.style.colorScheme = mode;
  root.dispatchEvent(new Event("themechange"));
};

/** Pin the mode as an explicit user choice. It wins over the OS setting from now on. */
export const setStoredMode = (mode: Mode) => {
  try {
    localStorage.setItem(KEY, mode);
  } catch {
    // Storage unavailable: the choice still applies for this page view.
  }
  apply(mode);
};

// Follow the OS setting live, but only until the user has made a choice.
query.addEventListener("change", (event) => {
  if (!readStored()) apply(event.matches ? "dark" : "light");
});
