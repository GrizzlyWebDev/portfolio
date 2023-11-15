import React from "react";

import Image from "next/image";
import clouds from "@public/AAA/clouds.svg";
import trees from "@public/AAA/trees.svg";
import buildings from "@public/AAA/buildings.svg";
import truck from "@public/AAA/truck.svg";

import styles from "./AAA.module.scss";

export default function AAA() {
  return (
    <div className={styles.background}>
      <Image className={styles.clouds} src={clouds} alt="clouds" />
      <Image
        className={styles.buildings}
        src={buildings}
        alt="city buildings"
      />
      <Image className={styles.trees} src={trees} alt="trees" />
      <Image className={styles.truck} src={truck} alt="tow truck" />
    </div>
  );
}
