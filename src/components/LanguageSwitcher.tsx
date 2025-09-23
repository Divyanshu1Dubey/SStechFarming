import React from "react";
import { useTranslation } from "react-i18next";
import analytics from "@/lib/analytics";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    const currentLang = i18n.language;
    i18n.changeLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
    
    // Track language change in analytics
    analytics.trackLanguageChange(currentLang, lang);
    analytics.trackCustomEvent('language_switcher_used', {
      fromLanguage: currentLang,
      toLanguage: lang,
      location: 'navigation_menu'
    });
  };

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLang(e.target.value)}
      className="border rounded px-2 py-1 text-sm"
    >
      <option value="en">English</option>
      <option value="hi">हिंदी</option>
      <option value="bn">বাংলা</option>
    </select>
  );
}
