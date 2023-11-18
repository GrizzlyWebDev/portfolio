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
import Link from "next/link";

const projects = [
  {
    title: "Quirkies Home Page",
    img: quirkies,
    description:
      "A home page for a large NFT project that boasts 4 collections, an Ecommerce brand, and staking capabilities.",
    tools: ["next.js", "TypeScript", "SCSS"],
    link: "https://quirkies.io",
  },
  {
    title: "Swapsicle Launch Page",
    img: swapsicle,
    description:
      "A page for a large exchange that started on Avalanche network. This page allows users to launch their own token on the platform.",
    tools: ["next.js", "Typescript", "Tailwind"],
    link: "https://www.google.com",
  },
  {
    title: "Quirk n' Co. Donuts",
    img: quirkncodonuts,
    description:
      "A custom Ecommerce site for a donut shop. I created one custom plugin that enables coupon discounts for Quirkie and Quirkilings NFT holders, and another that enables payment with cryptocurrency.",
    tools: ["WooCommerce", "Elementor", "JavaScript", "PHP"],
    link: "https://www.google.com",
  },
  {
    title: "Metaverse Expo",
    img: metaExpo,
    description:
      "A website for a Metaverse Expo that took place in 2022 that was hosted by TCG World.",
    tools: ["React.js", "JavaScript", "Tailwind"],
    link: "https://www.google.com",
  },
  {
    title: "REV3AL Dashboard",
    img: rev3al,
    description:
      "A dashboard for a blockchain security company that allows users to view stats on the REV3AL token, stake their tokens, farm, and more.",
    tools: ["React.js", "JavaScript", "wagmi.sh", "ethers.js", "SCSS"],
    link: "https://www.google.com",
  },
  {
    title: "DrivenX Dashboard",
    img: drivenX,
    description:
      "A dashboard for holders of the DrivenX token, that displays the stats of the token, developer wallet transactions, and more.",
    tools: ["Vue.js", "JavaScript", "SCSS"],
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
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.project}
            key={index}
          >
            <Image
              className={styles.projectImg}
              src={project.img}
              alt={project.title}
            />
            <div className={styles.projectInfo}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.tools}>
                {project.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
            </div>
            <Link
              className={styles.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </Link>
          </Link>
        ))}
      </div>
    </section>
  );
}
