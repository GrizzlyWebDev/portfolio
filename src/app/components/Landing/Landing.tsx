"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Landing.module.scss";

import portfolioPic from "@public/portfolioPic.png";
import Ide from "../Ide/Ide";
import Next from "../Icons/Next";
import ReactLogo from "../Icons/ReactLogo";
import Angular from "../Icons/Angular";
import CSS from "../Icons/CSS";
import Spring from "../Icons/Spring";
import Tailwind from "../Icons/Tailwind";
import JS from "../Icons/JS";
import TS from "../Icons/TS";
import Github from "../Icons/Github";
import Java from "../Icons/Java";
import Link from "next/link";
import LinkedIn from "../Icons/Linkedin";
import Resume from "../Icons/Resume";
import NavButton from "../NavButton/NavButton";
import Node from "../Icons/Node";
import Nest from "../Icons/Nest";

export default function Landing() {
  const [visited, setVisited] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem("visited")) {
      setVisited(true);
    } else {
      setVisited(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.localStorage.setItem("visited", "true");
    }, 7000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section>
      <div className={styles.landingGrid}>
        <div className={styles.gridLeft}>
          <nav className={!visited ? styles.hello : styles.helloVisited}>
            <NavButton
              visited={visited}
              displayText="Hello"
              delay={0}
              linkText="About"
              link="/about"
            />
            <NavButton
              visited={visited}
              displayText="I am"
              delay={2000}
              linkText="Projects"
              link="/projects"
            />
            <NavButton
              visited={visited}
              displayText="Phill"
              delay={3000}
              linkText="Contact"
              link="/contact"
            />
          </nav>
          <div className={styles.links}>
            <Link
              prefetch={false}
              className={!visited ? styles.link : styles.linkVisited}
              href="https://github.com/GrizzlyWebDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className={styles.githubLogo} />
            </Link>
            <Link
              prefetch={false}
              className={!visited ? styles.link : styles.linkVisited}
              href="https://www.linkedin.com/in/phillblakedev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={styles.linkedinLogo} />
            </Link>
            <Link
              prefetch={false}
              className={!visited ? styles.link : styles.linkVisited}
              href="phill-blake-resume.pdf"
              download="phill-blake-resume.pdf"
            >
              <Resume className={styles.resumeLogo} />
            </Link>
          </div>
        </div>

        <div className={styles.gridRight}>
          <Image
            className={
              !visited ? styles.portfolioPic : styles.portfolioPicVisited
            }
            src={portfolioPic}
            alt="photo of Phill Blake"
          />
          <Ide />
        </div>
      </div>
      <div
        className={
          !visited ? styles.overviewOuter : styles.overviewOuterVisited
        }
      >
        <div className={styles.overviewInner}>
          <div className={styles.tech}>
            <JS className={styles.logo} />
            <TS className={styles.logo} />
            <Nest className={styles.logo} />
            <Node className={styles.logo} />
            <Spring className={styles.logo} />
            <Java className={styles.logo} />
            <ReactLogo className={styles.logo} />
            <Angular className={styles.logo} />
            <Next className={styles.logo} />
            <CSS className={styles.logo} />
            <Tailwind className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
}
