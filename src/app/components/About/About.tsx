"use client";
import { useState } from "react";
import styles from "./About.module.scss";
import Background from "../AboutBackgrounds/Background/Background";
import AAA from "../AboutBackgrounds/AAA/AAA";
import LineWork from "../AboutBackgrounds/LineWork/LineWork";
import Appliance from "../AboutBackgrounds/Appliance/Appliance";
import Dev from "../AboutBackgrounds/Dev/Dev";
import SharedNav from "../SharedNav/SharedNav";
import { usePathname } from "next/navigation";

const background = [
  {
    title: "My Background",
    description:
      "I have a versatile background, from emergency services to cable construction and appliance repair. As a self-taught freelance web developer for over 3 years, I specialize in JavaScript, React, and blockchain enabled projects. My skills extend from traditional web development to client-side blockchain interaction.",
    component: <Background />,
  },
  {
    title: "Emergency Roadside Driver",
    years: "2018 - 2019",
    description:
      "Excelled in managing high-stakes emergencies, swiftly diagnosing issues, and assisting customers under pressure. Conducted on-the-spot battery replacements, tire changes, and fuel deliveries on busy interstates, showcasing adaptability and quick problem-solving skills.",
    component: <AAA />,
  },
  {
    title: "Aerial Fiber Optic Lineman",
    years: "2019 - 2020",
    description:
      "I operated as an Aerial Lineman, specializing in the intricate work of installing and maintaining fiber optic lines. Climbing telephone poles, maneuvering bucket trucks, and executing precise installations in various environments were second nature. I faced challenges head-on, from clearing trees off lines to installing underground cables, showcasing my meticulous approach to complex tasks.",
    component: <LineWork />,
  },
  {
    title: "Appliance Repair Technician",
    years: "2020 - 2021",
    description:
      "In my role as an Appliance Repair Technician at Sears Home Services, I delved into diagnosing and repairing a diverse range of equipment. I honed expertise in hands-on troubleshooting, meticulously executing precise part replacements to ensure the effective resolution of appliance issues.",
    component: <Appliance />,
  },
  {
    title: "Freelance Developer",
    years: "2021 - Present",
    description:
      "As a freelance Frontend and Blockchain Developer, I fused creativity in crafting user interfaces with expertise in blockchain technology. I navigated dynamic landscapes, honing technical prowess to deliver tailored solutions in web and decentralized systems.",
    component: <Dev />,
  },
];

export default function About() {
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(false);

  const handleNext = () => {
    if (step === background.length - 1) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
    setAnimate(true);

    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <section className={styles.aboutContainer}>
      <SharedNav pathname={pathname} />
      <div className={styles.gridRight}>
        <button className={styles.nextButton} onClick={handleNext}></button>
        <div className={styles.aboutSphereUpper}>
          {background[step].component}
        </div>
        <div className={styles.aboutSphereLower}>
          <div
            className={!animate ? styles.details : styles.details + " animate"}
          >
            <h2>{background[step].title}</h2>
            <h4>{background[step].years}</h4>
          </div>
          <p className={!animate ? "" : "animate"}>
            {background[step].description}
          </p>
          <button className={styles.nextButtonMobile} onClick={handleNext}>
            NEXT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
