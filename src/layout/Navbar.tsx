import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../utils/i18n";

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between">
      <h1 className="font-bold">{t.dashboard}</h1>

      <button
        onClick={toggleLanguage}
        className="bg-slate-900 text-white px-4 py-2 rounded"
      >
        {language === "en" ? "AR" : "EN"}
      </button>
    </header>
  );
}
