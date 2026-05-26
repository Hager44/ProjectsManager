import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../utils/i18n";

export default function Settings() {
  const { language, toggleLanguage } = useLanguage();

  const t = translations[language];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{t.settings}</h1>

      <div className="bg-white p-6 rounded-xl shadow">
        <div className="flex items-center justify-between">
          <p>
            {t.currentLanguage}: {language}
          </p>

          <button
            onClick={toggleLanguage}
            className="bg-slate-900 text-white px-4 py-2 rounded"
          >
            {t.toggleLanguage}
          </button>
        </div>
      </div>
    </div>
  );
}
