import { useTranslation } from "react-i18next";
import styles from "./styles.module.css";
import { CharacterSketchScreen } from "src/assets";

function TogheterPage() {
  const { t } = useTranslation("together");

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>
          {t("Como podemos")} <br />
          <span style={{ color: "#F2ECD6" }}>{t("trabalhar")}</span>{" "}
          {t("juntos")}
        </h2>
        <img
          alt="character-sketch"
          className={styles.character}
          src={CharacterSketchScreen}
        />
        <div className={styles.column}>
          <div className={styles.textArea}>
            <span className={styles.number}>1</span>
            <p className={styles.text}>
              <span className={styles.span}>{t("Detalhes")}: </span>{" "}
              {t(
                "Venha com um resumo do projeto ou detalhes curtos do projeto que você tem atualmente para dar uma ideia do seu projeto ou produto."
              )}
            </p>
          </div>
          <div className={styles.textArea}>
            <span className={styles.number}>2</span>
            <p className={styles.text}>
              <span className={styles.span}>{t("Perguntas")}: </span>
              {t(
                "Depois de obter os detalhes de você, farei perguntas relacionadas ao seu projeto para entender a duração e o escopo do projeto."
              )}
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textArea}>
            <span className={styles.number}>3</span>
            <p className={styles.text}>
              <span className={styles.span}>{t("Orçamento")}: </span>
              {t(
                "Estarei fornecendo-lhe uma cotação para o projeto depois de ter as respostas de você."
              )}
            </p>
          </div>
          <div className={styles.textArea}>
            <span className={styles.number}>4</span>
            <p className={styles.text}>
              <span className={styles.span}>{t("Inicio")}: </span>{" "}
              {t(
                "Se o orçamento funcionar para nós dois, podemos ter uma breve reunião ou podemos entrar diretamente no processo inicial."
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogheterPage;
