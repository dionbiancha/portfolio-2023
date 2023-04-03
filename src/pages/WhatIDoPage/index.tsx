import styles from "./styles.module.css";
import { MdDesignServices, MdWebAsset, MdMobileFriendly } from "react-icons/md";
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import MenuContext, { SELECTED } from "src/context/MenuContext";
import { useState, useContext } from "react";

const INFO_CARDS = [
  {
    context: SELECTED.webdesign,
    type: "UI Designer",
    number: "01",
    icon: <MdDesignServices className={styles.iconCard} />,
    title: "Encante seus usuários",
    text: "Criação de designs visuais atraentes e funcionais que proporcionam uma experiência de usuário excepcional em produtos ou serviços digitais, tornando a usabilidade intuitiva e mantendo a identidade de marca consistente.",
  },
  {
    context: SELECTED.webDev,
    type: "Mobile Developer",
    number: "02",
    icon: <MdMobileFriendly className={styles.iconCard} />,
    title: "Aplicação de sucesso",
    text: "Soluções inovadoras e personalizadas em aplicativos móveis, desde a ideia até a publicação na loja de aplicativos, garantindo uma experiência de usuário intuitiva e atraente.",
  },
  {
    context: SELECTED.mobileDev,
    type: "Web Developer",
    number: "03",
    icon: <MdWebAsset className={styles.iconCard} />,
    title: "Presença online eficiente",
    text: "Foco no desenvolvimento de alto desempenho e escalabilidade, entregando soluções web personalizadas para sua empresa.",
  },
];

function WhatIDoPage() {
  const { t } = useTranslation("whatIdo");
  const { setProjectSelected } = useContext(MenuContext);
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{t("O que eu faço")}</h2>
      <div className={styles.cardArea}>
        <AliceCarousel
          autoWidth={true}
          mouseTracking
          disableDotsControls={true}
          disableButtonsControls={true}
        >
          {INFO_CARDS.map((info, index) => (
            <div key={index} className={styles.marginCard}>
              <div className={styles.card}>
                <div className={styles.internCard}>
                  <div>
                    <div className={styles.internCardNumber}>{info.number}</div>
                    <div className={styles.internCardType}>{info.type}</div>
                  </div>
                  {info.icon}
                </div>
                <h3 className={styles.titleCard}>{t(info.title)}</h3>
                <p className={styles.textCard}>{t(info.text)}</p>
                <a
                  href="#projects"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <BsFillCloudArrowDownFill
                    className={styles.iconRol}
                    onClick={() => setProjectSelected(info.context)}
                  />
                </a>
              </div>
            </div>
          ))}
        </AliceCarousel>
      </div>
    </div>
  );
}

export default WhatIDoPage;
