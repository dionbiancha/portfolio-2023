import styles from "./styles.module.css";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { CharacterSketch } from "src/assets";
import Animate from "src/components/Animation";

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
      <Animate.FadeUp>
        <p>HELLO, I AM</p>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <h1>DIONEI</h1>
      </Animate.FadeUp>
      <Animate.FadeUp>
        <h1>BIANCHATI</h1>
      </Animate.FadeUp>
      <Animate.ScaleIn>
        <h2>ReactJS | NextJS | TypesScript | Cypress</h2>
      </Animate.ScaleIn>
      <div className={styles.socialLinks}>
        <Animate.FadeIn>
          <BsLinkedin
            className={styles.icon}
            onClick={() => window.open(LINK_LINKEDIN, "_blank")}
          />
        </Animate.FadeIn>
        <Animate.FadeIn>
          <BsGithub
            className={styles.icon}
            onClick={() => window.open(LINK_GITHUB, "_blank")}
          />
        </Animate.FadeIn>
      </div>
    </div>
  );
}

export default AboutPage;
