import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/language.context";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  );
}
