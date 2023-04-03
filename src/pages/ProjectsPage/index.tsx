import { useState, useContext } from "react";
import styles from "./styles.module.css";
import {
  IoMdArrowDropright,
  IoIosArrowForward,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { useTranslation } from "react-i18next";
import { MenuContext } from "src/context/MenuContext";

enum SELECTED {
  webdesign,
  webDev,
  mobileDev,
}

const LIST_PROJECTS = [
  {
    year: "2023",
    name: "Adaptour",
    description: "Projeto idealizado para o Hackatour Cataratas 2023",
    link: "#",
    type: SELECTED.webDev,
  },
  {
    year: "2023",
    name: "Adaptour",
    description: "Projeto idealizado para o Hackatour Cataratas 2023",
    link: "#",
    type: SELECTED.webDev,
  },
  {
    year: "2023",
    name: "Adaptour",
    description: "Projeto idealizado para o Hackatour Cataratas 2023",
    link: "#",
    type: SELECTED.webdesign,
  },
  {
    year: "2023",
    name: "Adaptour",
    description: "Projeto idealizado para o Hackatour Cataratas 2023",
    link: "#",
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
        <h2 className={styles.title}>{t("Projetos Recentes")}</h2>
        <div className={styles.buttonArea}>
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
        </div>
        <div className={styles.listArea}>
          {LIST_PROJECTS.map((value, index) =>
            value.type === projectSelected ? (
              <li key={index} className={styles.listItem}>
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
