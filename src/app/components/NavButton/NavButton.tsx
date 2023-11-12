"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";
import AnimatedText from "../AnimatedText";
import styles from "./NavButton.module.scss";

type Props = {
  visited: boolean;
  displayText: string;
  delay: number;
  linkText: string;
  link: string;
};

export default function NavButton({
  visited,
  displayText,
  delay,
  linkText,
  link,
}: Props) {
  const [change, setChange] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      setChange(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <span className={styles.navButtonWrapper}>
      {visited ? (
        <Link href={link}>
          <h2>{linkText}</h2>
        </Link>
      ) : change ? (
        <Link href={link}>
          <AnimatedText text={linkText} delay={0} />
        </Link>
      ) : (
        <AnimatedText text={displayText} delay={delay} />
      )}
    </span>
  );
}
