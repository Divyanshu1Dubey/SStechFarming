import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("preferredLanguage", lang);
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
