import { useState, useContext } from "react";
import styles from "./styles.module.css";
import { useTranslation } from "react-i18next";
import { lala, riri, vivi } from "src/assets";

const TEAM_LIST = [
  {
    img: lala,
    name: "Laercio Bubiak",
    work: "P.O and Devops",
    link: "https://www.labub.com.br/",
  },
  {
    img: vivi,
    name: "Vinicios Engelage",
    work: "UI/UX Full Stack",
    link: "https://www.viniengelage.com/en-US",
  },
  {
    img: riri,
    name: "Riad Younes",
    work: "Full Stack",
    link: "https://www.linkedin.com/in/riad-younes-6a5348187/",
  },
];

function TeamPage() {
  const { t } = useTranslation("team");

  return (
    <div id="projects" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t("Equipe que ja trabalhei!")}</h2>
        <div className={styles.team}>
          {TEAM_LIST.map((value, index) => (
            <li
              key={index}
              className={styles.item}
              onClick={() => window.open(value.link, "_blank")}
            >
              <img alt="img" className={styles.image} src={value.img} />
              <div className={styles.name}>{value.name}</div>
              <div className={styles.work}>{value.work}</div>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
