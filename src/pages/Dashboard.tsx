import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../utils/i18n";

export default function Dashboard() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <div>
      <h1 className="text-3xl font-bold">{t.dashboard}</h1>

      <div className="grid grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">{t.totalProjects}</h2>

          <p className="text-4xl font-bold mt-3">12</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">{t.activeTasks}</h2>

          <p className="text-4xl font-bold mt-3">8</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-gray-500">{t.completed}</h2>

          <p className="text-4xl font-bold mt-3">24</p>
        </div>
      </div>
    </div>
  );
}
