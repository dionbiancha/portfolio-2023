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
import React, {
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
import ReactPlayer from "react-player";

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

    //MANUTENÇÃO
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     backgroundColor: "black",
    //     color: "white",
    //     textAlign: "center",
    //     overflow: "hidden",
    //   }}
    // >
    //   <div>
    //     <h1>Em manutenção</h1>
    //     <iframe
    //       style={{ border: "none" }}
    //       width="560"
    //       height="315"
    //       src={`https://www.youtube.com/embed/kEBTfJPYqnk?autoplay=1&loop=1&controls=0&mute=0&volume=100`}
    //       title="Vídeo do YouTube"
    //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //       allowFullScreen
    //     ></iframe>
    //   </div>
    // </div>
  );
}

export default App;
