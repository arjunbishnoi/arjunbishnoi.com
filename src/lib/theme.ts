export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";
export const DEFAULT_THEME: Theme = "light";

export function getThemeInitScript() {
  return `(() => {
    const storageKey = "${THEME_STORAGE_KEY}";
    const defaultTheme = "${DEFAULT_THEME}";
    const root = document.documentElement;

    let theme = defaultTheme;

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        theme = storedTheme;
      }
    } catch {}

    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
  })();`;
}
