import { NavLink } from "react-router-dom";
import { useLanguage } from "../hooks/useLanguage";
import { translations } from "../utils/i18n";

export default function Sidebar() {
  const { language } = useLanguage();

  const t = translations[language];

  return (
    <aside className="w-64 bg-slate-900 text-white p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-10 tracking-wide">{t.portfolio}</h2>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `
            px-4 py-3 rounded-xl transition
            ${isActive ? "bg-white text-slate-900" : "hover:bg-slate-800"}
          `
          }
        >
          {t.dashboard}
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `
            px-4 py-3 rounded-xl transition
            ${isActive ? "bg-white text-slate-900" : "hover:bg-slate-800"}
          `
          }
        >
          {t.projects}
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `
            px-4 py-3 rounded-xl transition
            ${isActive ? "bg-white text-slate-900" : "hover:bg-slate-800"}
          `
          }
        >
          {t.settings}
        </NavLink>
      </nav>
    </aside>
  );
}
