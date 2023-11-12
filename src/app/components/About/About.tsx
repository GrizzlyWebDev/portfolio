"use client";
import { useState } from "react";
import styles from "./About.module.scss";
import Background from "../AboutBackgrounds/Background/Background";
import AAA from "../AboutBackgrounds/AAA/AAA";
import LineWork from "../AboutBackgrounds/LineWork/LineWork";
import Appliance from "../AboutBackgrounds/Appliance/Appliance";
import Dev from "../AboutBackgrounds/Dev/Dev";
import Link from "next/link";
import Github from "../Icons/Github";
import LinkedIn from "../Icons/Linkedin";
import Resume from "../Icons/Resume";

const background = [
  {
    title: "My Background",
    description:
      "I have worked in many different industries and have a wide range of skills. I am a self taught developer and have been coding for over 3 years. I am a fast learner and I am always looking to learn new things.",
    component: <Background />,
  },
  {
    title: "AAA Roadside Assistance",
    description:
      "I was responsible for diagnosing and repairing vehicles that were broken down on the side of the road. Pulling vehicles out from ditches, changing tires, and jump starting vehicles were also part of my job description. I was also responsible for keeping my truck and tools clean and organized.",
    component: <AAA />,
  },
  {
    title: "White Mountain Cable Construction",
    description:
      "I installed telephone poles and fiber optic cable both aerial and underground.",
    component: <LineWork />,
  },
  {
    title: "Appliance Repair Technician",
    description: "I diagnosed and repaired appliances in customers homes.",
    component: <Appliance />,
  },
  {
    title: "Freelance Blockchain Developer",
    description:
      "I taught myself how to code with Udemy, Youtube, StackOverflow, and other online resources. I have worked on over 15 projects for multiple clients from around the globe.",
    component: <Dev />,
  },
];

export default function About() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    if (step === background.length - 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step === 0) {
      setStep(background.length - 1);
    } else {
      setStep(step - 1);
    }
  };

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.gridLeft}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
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
        <button className={styles.prevButton} onClick={handlePrev}>
          Prev
        </button>
        <button className={styles.nextButton} onClick={handleNext}>
          Next
        </button>
        <div className={styles.aboutSphereUpper}>
          {background[step].component}
        </div>
        <div className={styles.aboutSphereLower}>
          <h3>{background[step].title}</h3>
          <p>{background[step].description}</p>
        </div>
      </div>
    </section>
  );
}
