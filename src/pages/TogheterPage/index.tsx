import styles from "./styles.module.css";
import { CharacterSketchScreen } from "src/assets";

function TogheterPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        How we can <br />
        <span style={{ color: "#F2ECD6" }}>work</span> together
      </h2>

      <div className={styles.content}>
        <img
          alt="character-sketch"
          className={styles.character}
          src={CharacterSketchScreen}
        />
        <div className={styles.column}>
          <div className={styles.textArea}>
            <span className={styles.number}>1</span>
            <p className={styles.text}>
              <span className={styles.span}>Brief/Short Details:</span> Come to
              us with a project brief or short project details that you have
              currently to give us an idea of your project or product.
            </p>
          </div>
          <div className={styles.textArea}>
            <span className={styles.number}>2</span>
            <p className={styles.text}>
              <span className={styles.span}>Questions: </span>After having the
              details from you, we'll ask questions related to your project to
              understand the project length and scope.
            </p>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.textArea}>
            <span className={styles.number}>3</span>
            <p className={styles.text}>
              <span className={styles.span}>Providing Quote:</span>We will be
              providing you a quote for the project after having the answers
              from you.
            </p>
          </div>
          <div className={styles.textArea}>
            <span className={styles.number}>4</span>
            <p className={styles.text}>
              <span className={styles.span}>Get Started:</span> If the quote
              works for both of us, we can have a short meeting or we can
              directly jump into the process of getting started.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogheterPage;
