"use client";
import React from "react";
import styles from "./Projects.module.scss";
import SharedNav from "../SharedNav/SharedNav";
import { usePathname } from "next/navigation";

export default function Projects() {
  const pathname = usePathname();
  return (
    <section className={styles.projectsContainer}>
      <SharedNav pathname={pathname} />
      <div className={styles.gridRight}></div>
    </section>
  );
}
