import "./App.css";
import {
  AboutPage,
  TogheterPage,
  WhatIDoPage,
  AwardsPage,
  ProjectsPage,
  FooterPage,
  TeamPage,
} from "src/pages";
import { useTranslation } from "react-i18next";
import LanguageSelection from "src/features/LanguageSelection";
import "./i18n";
import {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties,
  StrictMode,
} from "react";
import { MenuProvider } from "./context/MenuContext";

function App() {
  const { t } = useTranslation("home");
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <MenuProvider>
      <div className={navbar ? "header-active" : "header"}>
        <a
          className="link-header"
          target="_blank"
          href="https://medium.com/@dion.biancha"
        >
          BLOG
        </a>
        <LanguageSelection />
        <a className="link-header" href="#projects">
          {t("PROJETOS")}
        </a>
      </div>
      <div className="container">
        <AboutPage />
        <WhatIDoPage />
        <TogheterPage />
        <ProjectsPage />
        <TeamPage />
        <AwardsPage />
        <FooterPage />
      </div>
    </MenuProvider>
  );
}

export default App;
