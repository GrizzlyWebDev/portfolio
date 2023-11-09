import Image from "next/image";

import styles from "./Landing.module.scss";

import portfolioPic from "@public/portfolioPic.png";
import Ide from "../Ide/Ide";
import Next from "../Icons/Next";
import ReactLogo from "../Icons/ReactLogo";
import CSS from "../Icons/CSS";
import SASS from "../Icons/SASS";
import Tailwind from "../Icons/Tailwind";
import JS from "../Icons/JS";
import TS from "../Icons/TS";
import AnimatedText from "../AnimatedText/AnimatedText";
import Github from "../Icons/Github";
import Link from "next/link";
import LinkedIn from "../Icons/Linkedin";
import Resume from "../Icons/Resume";

export default function Landing() {
  return (
    <section>
      <div className={styles.landingGrid}>
        <div className={styles.gridLeft}>
          <div className={styles.hello}>
            <h1>
              <AnimatedText text="Hello." delay={0} />
            </h1>
            <h2>
              <AnimatedText text="I am" delay={2000} />
            </h2>
            <h2>
              <AnimatedText text="Phill" delay={3800} />
            </h2>
          </div>
          <div className={styles.links}>
            <Link
              className={styles.link}
              href="https://github.com/GrizzlyWebDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={styles.githubLogo} />
            </Link>
            <Link
              className={styles.link}
              href="https://www.linkedin.com/in/phillblakedev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={styles.linkedinLogo} />
            </Link>
            <Link
              className={styles.link}
              href="phillBlakeResume.pdf"
              download="phillBlakeResume.pdf"
            >
              <Resume className={styles.resumeLogo} />
            </Link>
          </div>
        </div>

        <div className={styles.gridRight}>
          <Image
            className={styles.portfolioPic}
            src={portfolioPic}
            alt="photo of Phill Blake"
          />
          <Ide />
        </div>
      </div>
      <div className={styles.overviewOuter}>
        <div className={styles.overviewInner}>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h3>3</h3>
              <p>Years of Experience</p>
            </div>
            <div className={styles.stat}>
              <h3>15+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
          <div className={styles.tech}>
            <JS className={styles.jsLogo} />
            <TS className={styles.tsLogo} />
            <ReactLogo className={styles.reactLogo} />
            <Next className={styles.nextLogo} />
            <CSS className={styles.cssLogo} />
            <SASS className={styles.sassLogo} />
            <Tailwind className={styles.tailwindLogo} />
          </div>
        </div>
      </div>
    </section>
  );
}
