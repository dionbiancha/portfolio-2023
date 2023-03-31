import styles from "./styles.module.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { IconCard } from "src/assets";

const AWARDS_LIST = [
  {
    year: "2023",
    logo: <img alt="icon" className={styles.iconCard} src={IconCard} />,
    text: "O Hackatour Cataratas é um espaço incentivador para o surgimento de novas soluções para o turismo, uma maratona de criação e desenvolvimento para que ideias possam ser concretizadas em bons negócios.",
  },
  {
    year: "2023",
    logo: <img alt="icon" className={styles.iconCard} src={IconCard} />,
    text: "O Hackatour Cataratas é um espaço incentivador para o surgimento de novas soluções para o turismo, uma maratona de criação e desenvolvimento para que ideias possam ser concretizadas em bons negócios.",
  },
];

function AwardsPage() {
  const clickButton = (id: string) => {
    const botao = document.getElementById(id);
    if (botao === null) return;
    botao.click();
  };
  return (
    <div className={styles.container}>
      <div className={styles.dashLine} />
      <div className={styles.content}>
        <div>
          <div className={styles.count}>1/1</div>
          <div className={styles.title}>
            Personal <br /> Awards
          </div>
          <div>
            <IoIosArrowDropleftCircle
              onClick={() => clickButton("back")}
              className={styles.button}
            />
            <IoIosArrowDroprightCircle
              onClick={() => clickButton("next")}
              className={styles.button}
            />
          </div>
        </div>
        <div className={styles.carousel}>
          <AliceCarousel
            autoWidth={true}
            mouseTracking
            disableDotsControls={true}
            renderPrevButton={() => {
              return <div id="back" />;
            }}
            renderNextButton={() => {
              return <div id="next" />;
            }}
          >
            {AWARDS_LIST.map((info, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.year}>{info.year}</div>
                {info.logo}
                <div className={styles.text}>{info.text}</div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}

export default AwardsPage;
