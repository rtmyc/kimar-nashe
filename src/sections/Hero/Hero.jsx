import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img300.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedLight from "../../assets/linkedin-light.svg";
import linkedDark from "../../assets/linkedin-dark.svg";
import waLight from "../../assets/whatsapp-light.svg";
import waDark from "../../assets/whatsapp-dark.svg";
import gitLight from "../../assets/github-light.svg";
import gitDark from "../../assets/github-dark.svg";
import CV from "../../assets/Kimar N Matanganyidze_Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const whatsappIcon = theme === "light" ? waLight : waDark;
  const linkedinIcon = theme === "light" ? linkedLight : linkedDark;
  const githubIcon = theme === "light" ? gitLight : gitDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Kimar Nashe."
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kimar
          <br />
          Nashe
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/kimar-matanganyidze-623217212/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn icon" />
          </a>

          <a href="https://wa.me/+263786227821" target="_blank">
            <img src={whatsappIcon} alt="Facebook icon" />
          </a>

          <a href="https://github.com/rtmyc" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>

        <p className={styles.description}>
          CS Student with a passion for engineering modern app solutions for
          commercial use.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
