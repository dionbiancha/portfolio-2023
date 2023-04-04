import { useState, useContext } from "react";
import styles from "./styles.module.css";
import {
  IoMdArrowDropright,
  IoIosArrowForward,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MenuContext } from "src/context/MenuContext";
import Animate from "src/components/Animation";

enum SELECTED {
  webdesign,
  webDev,
  mobileDev,
}

const LIST_PROJECTS = [
  {
    year: "2023",
    name: "Adaptour",
    description: "Project idealized for Hackatour Cataratas 2023",
    link: "#",
    type: SELECTED.webDev,
  },
  {
    year: "2022",
    name: "Idea",
    description: "Portfolio version for the year 2021",
    link: "https://idea-portfolio.vercel.app/",
    type: SELECTED.webDev,
  },
  {
    year: "2021",
    name: "Starbucks",
    description: "Starbucks Landing Page Responsive ☕",
    link: "https://dionbiancha.github.io/starbucks-landing-page/",
    type: SELECTED.webDev,
  },
  {
    year: "2021",
    name: "Portfolio",
    description: "Portfolio version for the year 2021",
    link: "https://mature-portfolio.vercel.app/",
    type: SELECTED.webDev,
  },
  {
    year: "2021",
    name: "Definitive",
    description: "Portfolio developed to captivate company recruiters.",
    link: "https://definitive-portfolio.vercel.app/",
    type: SELECTED.webDev,
  },
  {
    year: "2019",
    name: "Devsapp",
    description: "Developer chat app 🤓",
    link: "https://github.com/dionbiancha/devsapp",
    type: SELECTED.mobileDev,
  },
  {
    year: "2023",
    name: "Portfolio",
    description: "Figma Portfolio version for the year 2021",
    link: "https://www.figma.com/file/kmYoH4vdCZmQLtFiseE0YX/portfolio-2023?node-id=0%3A1&t=HN10OlYkYv9YJKPs-1",
    type: SELECTED.webdesign,
  },
  {
    year: "2023",
    name: "Adaptour",
    description: "Figma idealized for Hackatour Cataratas 2023",
    link: "https://www.figma.com/file/ViEREm1iDSwm5ke0cDingE/Design?node-id=615%3A3&t=vHl1XJ0KrNS4rvDY-1",
    type: SELECTED.webdesign,
  },
  {
    year: "2023",
    name: "SOS",
    description:
      "Figma Website of solutions in the area of ​​construction/renovations",
    link: "https://www.figma.com/proto/slPO71A4Tae7B2VsdudfCx/SOS---Portif%C3%B3lio-Digital?page-id=0%3A1&node-id=12-100",
    type: SELECTED.webdesign,
  },
];

function ProjectsPage() {
  const { t } = useTranslation("projects");
  const { projectSelected, setProjectSelected } = useContext(MenuContext);

  const handleSelect = (value: SELECTED) => {
    setProjectSelected(value);
  };

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <Animate.FadeIn>
          <h2 className={styles.title}>{t("Projetos Recentes")}</h2>
        </Animate.FadeIn>
        <div className={styles.buttonArea}>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.webdesign
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.webdesign)}
            >
              WEBDESIGN
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.webDev
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.webDev)}
            >
              WEB DEV.
            </div>
          </Animate.ScaleIn>
          <Animate.ScaleIn>
            <div
              className={
                projectSelected === SELECTED.mobileDev
                  ? styles.buttonSelected
                  : styles.button
              }
              onClick={() => handleSelect(SELECTED.mobileDev)}
            >
              MOBILE DEV.
            </div>
          </Animate.ScaleIn>
        </div>

        <div className={styles.listArea}>
          {LIST_PROJECTS.map((value, index) =>
            value.type === projectSelected ? (
              <li
                key={index}
                className={styles.listItem}
                onClick={() => window.open(value.link, "_blank")}
              >
                <div className={styles.areaName}>
                  <span className={styles.yearItem}>{value.year}</span>
                  <span className={styles.nameItem}>{value.name}</span>
                </div>
                <div className={styles.infoArea}>
                  <IoMdInformationCircleOutline className={styles.infoIcon} />
                  <p className={styles.infoText}>{t(value.description)}</p>
                </div>

                <IoIosArrowForward className={styles.iconItem} />
              </li>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
