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
import nitro from "@public/Projects/nitrodome.jpg"
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Swapsicle",
    img: swapsicle,
    description:
      "A website for a large cryptocurrency exchange across multiple blockchains. I worked on many features and bug fixes for the site, including the launchpad, bridge, and Earn pages.",
    tools: ["next.js", "Typescript", "Tailwind", "Jira", "Github"],
    link: "https://app.swapsicle.io/launchpad?status=finished",
  },
  {
    title: "Nirodome Landing Page",
    img: nitro,
    description:
      "A home page for an NFT gaming startup for investors to learn more about the project and the team behind it.",
    tools: ["react.js", "JavaScript", "SCSS"],
    link: "https://nitrodome.com/",
  },
  {
    title: "Quirkies Home Page",
    img: quirkies,
    description:
      "A home page for a large NFT project that boasts 4 collections, an Ecommerce brand, and staking capabilities.",
    tools: ["next.js", "TypeScript", "SCSS"],
    link: "https://quirkies.io",
  },
  {
    title: "Quirk n' Co. Donuts",
    img: quirkncodonuts,
    description:
      "A custom Ecommerce site for a donut shop. I created one custom plugin that enables coupon discounts for Quirkie and Quirkilings NFT holders, and another that enables payment with cryptocurrency.",
    tools: ["WooCommerce", "Elementor", "JavaScript", "PHP"],
    link: "https://quirkncodonuts.com/",
  },
  {
    title: "Metaverse Expo",
    img: metaExpo,
    description:
      "A website for a Metaverse Expo that took place in 2022 that was hosted by TCG World.",
    tools: ["React.js", "JavaScript", "Tailwind"],
    link: "https://themetaverseexpo.io/",
  },
  {
    title: "REV3AL Dashboard",
    img: rev3al,
    description:
      "A dashboard for a blockchain security company that allows users to view stats on the REV3AL token, stake their tokens, farm, and more.",
    tools: ["React.js", "JavaScript", "wagmi.sh", "ethers.js", "SCSS"],
    link: "https://rev3al-dapp.vercel.app/",
  },
  {
    title: "DrivenX Dashboard",
    img: drivenX,
    description:
      "A dashboard for holders of the DrivenX token, that displays the stats of the token, developer wallet transactions, and more.",
    tools: ["Vue.js", "JavaScript", "SCSS"],
    link: "https://drivenx-dashboard.netlify.app/",
  },
];

export default function Projects() {
  const pathname = usePathname();
  return (
    <section className={styles.projectsContainer}>
      <SharedNav pathname={pathname} />
      <div className={styles.gridRight}>
        <span className={styles.swipe}>
          <span className={styles.path} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4.021 10.688c1.208.172 2.51 1.312 2.979 1.781v-10.514c0-1.08.92-1.955 2-1.955s2 .875 2 1.955v6.058c0 .784.814.885.919.103.216-1.604 2.519-1.817 2.693.399.043.546.726.655.866.027.326-1.444 2.501-1.458 2.758.758.066.579.796.696.848.034.051-.67.281-.934.607-.934 1.098 0 2.309 2.019 2.309 4.41 0 4.295-3 4.306-3 11.19h-10c-.332-3.942-3.462-7.431-6.271-10.241-.488-.488-.729-1.052-.729-1.564 0-.93.759-1.688 2.021-1.507z" />
          </svg>
        </span>
        {projects.map((project, index) => (
          <div className={styles.project} key={index}>
            <Image
              className={styles.projectImg}
              src={project.img}
              alt={project.title}
            />
            <Link
              prefetch={false}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className={styles.projectInfo}
            >
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.tools}>
                {project.tools.map((tool, index) => (
                  <span key={index}>{tool}</span>
                ))}
              </div>
            </Link>
            <Link
              prefetch={false}
              className={styles.link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
