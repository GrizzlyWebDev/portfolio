import React from "react";

import styles from "./SharedNav.module.scss";
import Link from "next/link";
import Github from "../Icons/Github";
import LinkedIn from "../Icons/Linkedin";
import Resume from "../Icons/Resume";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function SharedNav({ pathname }: { pathname: string }) {
  return (
    <div className={styles.gridLeft}>
      <nav className={styles.nav}>
        {links.map((link) => {
          if (pathname !== link.href.toLowerCase()) {
            return (
              <Link
                prefetch={false}
                className={styles.navLink}
                href={link.href}
                key={link.name}
              >
                {link.name}
              </Link>
            );
          }
        })}
      </nav>
      <div className={styles.links}>
        <Link
          prefetch={false}
          className={styles.link}
          href="https://github.com/GrizzlyWebDev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className={styles.githubLogo} />
        </Link>
        <Link
          prefetch={false}
          className={styles.link}
          href="https://www.linkedin.com/in/phillblakedev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className={styles.linkedinLogo} />
        </Link>
        <Link
          prefetch={false}
          className={styles.link}
          href="phillBlakeResume.pdf"
          download="phillBlakeResume.pdf"
        >
          <Resume className={styles.resumeLogo} />
        </Link>
      </div>
    </div>
  );
}
