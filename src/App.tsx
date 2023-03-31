import "./App.css";
import { AboutPage, TogheterPage, WhatIDoPage, AwardsPage } from "src/pages";
import { useTranslation } from "react-i18next";
import LanguageSelection from "src/features/LanguageSelection";
import "./i18n";

function App() {
  const { t } = useTranslation("home");

  return (
    <div>
      <div className="header">
        <a className="link-header" href="url">
          BLOG
        </a>
        <LanguageSelection />
        <a className="link-header" href="url">
          {t("PROJETOS")}
        </a>
      </div>
      <div className="container">
        <AboutPage />
        <WhatIDoPage />
        <TogheterPage />
        <AwardsPage />
      </div>
    </div>
  );
}

export default App;
