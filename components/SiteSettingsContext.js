import { createContext, useContext, useEffect, useMemo, useState } from "react";

const SiteSettingsContext = createContext({
  theme: "dark",
  language: "ar",
  setTheme: () => {},
  setLanguage: () => {},
});

export function SiteSettingsProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("ar");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("panda-theme") || "dark";
    const savedLanguage = window.localStorage.getItem("panda-language") || "ar";

    setTheme(savedTheme);
    setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
    window.localStorage.setItem("panda-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-language", language);
    window.localStorage.setItem("panda-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      theme,
      language,
      setTheme,
      setLanguage,
    }),
    [theme, language]
  );

  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>;
}

export function useSiteSettings() {
  return useContext(SiteSettingsContext);
}
