import styles from "./styles.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CharacterSketch } from "src/assets";

const LINK_LINKEDIN = "https://www.linkedin.com/in/dionbiancha/";
const LINK_GITHUB = "https://github.com/dionbiancha";

function AboutPage() {
  return (
    <div className={styles.content}>
      <div className={styles.backgroundRadial} />
      <img
        alt="character-sketch"
        className={styles.characterSketch}
        src={CharacterSketch}
      />

      <p>HELLO, I AM</p>
      <h1>DIONEI</h1>
      <h1>BIANCHATI</h1>
      <h2>ReactJS | NextJS | TypesScript | Cypress</h2>
      <div className={styles.socialLinks}>
        <BsLinkedin
          className={styles.icon}
          onClick={() => window.open(LINK_LINKEDIN, "_blank")}
        />
        <BsGithub
          className={styles.icon}
          onClick={() => window.open(LINK_GITHUB, "_blank")}
        />
      </div>
    </div>
  );
}

export default AboutPage;
