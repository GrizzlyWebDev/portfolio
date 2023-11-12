import React from "react";

import Image from "next/image";
import clouds from "@public/Background/clouds.svg";
import mountains from "@public/Background/mountains.svg";
import sun from "@public/Background/sun.svg";
import trees from "@public/Background/trees.svg";

import styles from "./Background.module.scss";

export default function Background() {
  return (
    <div className={styles.background}>
      <Image className={styles.clouds} src={clouds} alt="background" />
      <Image className={styles.mountains} src={mountains} alt="background" />
      <Image className={styles.sun} src={sun} alt="background" />
      <Image className={styles.trees} src={trees} alt="background" />
    </div>
  );
}
