"use client";
import React from "react";
import SharedNav from "../SharedNav/SharedNav";

import styles from "./Contact.module.scss";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();
  return (
    <section className={styles.contactContainer}>
      <SharedNav pathname={pathname} />
    </section>
  );
}
