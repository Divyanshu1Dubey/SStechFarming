import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  onSelect: (lang: string) => void;
};

const languages = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "bn", label: "বাংলা" },
];

export default function LanguageModal({ onSelect }: Props) {
  const { t } = useTranslation();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 text-center shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {t("site.choose_language", "Select Language / भाषा चुनें")}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className="px-4 py-2 border rounded hover:bg-gray-100 transition"
              onClick={() => onSelect(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
