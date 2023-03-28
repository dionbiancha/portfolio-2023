import "./App.css";
import { About } from "src/pages";
import { useTranslation } from "react-i18next";
import LanguageSelection from "src/features/LanguageSelection";
import "./i18n";

function App() {
  const { t } = useTranslation("home");
  return (
    <div>
      <div className="header"></div>
      {t("message")}
      <LanguageSelection />
      <About />
    </div>
  );
}

export default App;
