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
import Swapsicle from "../AboutBackgrounds/Swapsicle/Swapsicle";
import Telos from "../AboutBackgrounds/Telos/Telos";
import Image from "next/image";
import { GithubInfoResponseObject } from "@/app/types";

export default function About({
  ghInfo,
}: {
  ghInfo: GithubInfoResponseObject;
}) {
  const pathname = usePathname();
  const [step, setStep] = useState(0);
  const [animate, setAnimate] = useState(false);

  const background = [
    {
      title: "My Background",
      description:
        "Versatile Full Stack Engineer with a hands-on technical background, from fieldwork as an aerial lineman to troubleshooting complex systems as a repair technician. Transitioning into software development, I taught myself to build scalable, efficient systems and now contribute across the entire stack to deliver high-performance solutions.",
      component: <Background />,
    },
    {
      title: "Full Stack Developer",
      years: "Nov 2024 - Feb 2025",
      description:
        "As a Full Stack Developer at Telos Exchange, I built an admin panel for user management with editing, deleting, and role-based admin creation features. I also developed a notification API using NestJS, RabbitMQ, and AWS ECS. My tech stack included React/Next.js with TypeScript, Tailwind CSS, and SwaggerUI.",
      component: <Telos />,
    },
    {
      title: "Software Engineer",
      years: "Dec 2023 - Aug 2023",
      description:
        "Driving innovation as a Frontend Developer at Swapsicle, where I specialized in building dynamic user interfaces for a cutting-edge cryptocurrency exchange platform.",
      component: <Swapsicle />,
    },
    {
      title: "Freelance Developer",
      years: "2021 - 2023",
      description:
        "As a freelance Frontend and Blockchain Developer, I fused creativity in crafting user interfaces with expertise in blockchain technology. I navigated dynamic landscapes, honing technical prowess to deliver tailored solutions in web and decentralized systems.",
      component: <Dev />,
    },
    {
      title: "Appliance Repair Technician",
      years: "2020 - 2021",
      description:
        "In my role as an Appliance Repair Technician at Sears Home Services, I delved into diagnosing and repairing a diverse range of equipment. I honed expertise in hands-on troubleshooting, meticulously executing precise part replacements to ensure the effective resolution of appliance issues.",
      component: <Appliance />,
    },
    {
      title: "Aerial Fiber Optic Lineman",
      years: "2019 - 2020",
      description:
        "I operated as an Aerial Lineman, specializing in the intricate work of installing and maintaining fiber optic lines. Climbing telephone poles, maneuvering bucket trucks, and executing precise installations in various environments were second nature. I faced challenges head-on, from clearing trees off lines to installing underground cables, showcasing my meticulous approach to complex tasks.",
      component: <LineWork />,
    },
    {
      title: "Emergency Roadside Driver",
      years: "2018 - 2019",
      description:
        "Excelled in managing high-stakes emergencies, swiftly diagnosing issues, and assisting customers under pressure. Conducted on-the-spot battery replacements, tire changes, and fuel deliveries on busy interstates, showcasing adaptability and quick problem-solving skills.",
      component: <AAA />,
    },
    {
      title: "Github",
      description: ghInfo.bio,
      component: (
        <Image
          className={styles.ghImg}
          src={ghInfo.img}
          alt="the website owners github profile picture"
          height={250}
          width={250}
        />
      ),
    },
  ];

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
