"use client";
import React from "react";
import styles from "./Projects.module.scss";
import SharedNav from "../SharedNav/SharedNav";
import { usePathname } from "next/navigation";
import quirkies from "@public/Projects/quirkies.png";
import swapsicle from "@public/Projects/swapsicle.png";
import quirkncodonuts from "@public/Projects/Quirknco.png";
import metaExpo from "@public/Projects/MetaverseExpo.png";
import rev3al from "@public/Projects/REV3AL.png";
import drivenX from "@public/Projects/drivenX.png";
import Image from "next/image";

const projects = [
  {
    title: "Quirkies Home Page",
    img: quirkies,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
  {
    title: "Swapsicle Launch Page",
    img: swapsicle,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
  {
    title: "Quirk n Co. Donuts",
    img: quirkncodonuts,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
  {
    title: "Metaverse Expo",
    img: metaExpo,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
  {
    title: "REV3AL Dashboard",
    img: rev3al,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
  {
    title: "DrivenX",
    img: drivenX,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: "https://www.google.com",
  },
];

export default function Projects() {
  const pathname = usePathname();
  return (
    <section className={styles.projectsContainer}>
      <SharedNav pathname={pathname} />
      <div className={styles.gridRight}>
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <Image
              className={styles.projectImg}
              src={project.img}
              alt={project.title}
            />
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
