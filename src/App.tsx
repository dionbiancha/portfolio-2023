import "./App.css";
import { About } from "src/pages";
import { useTranslation } from "react-i18next";
import LanguageSelection from "src/features/LanguageSelection";
import "./i18n";

function App() {
  const { t } = useTranslation("home");
  return (
    <>
      <div className="header">
        <a className="link-header" href="url">
          BLOG
        </a>
        <LanguageSelection />
        <a className="link-header" href="url">
          {t("PROJETOS")}
        </a>
      </div>
      <div className="content">
        <About />
      </div>
    </>
  );
}

export default App;
