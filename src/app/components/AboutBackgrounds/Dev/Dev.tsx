import React from "react";

import Image from "next/image";
import backdrop from "@public/Dev/backdrop.svg";
import coffee from "@public/Dev/coffee.svg";
import hands from "@public/Dev/hands.svg";
import popUps from "@public/Dev/popUps.svg";

import styles from "./Dev.module.scss";

export default function Dev() {
  return (
    <div className={styles.background}>
      <Image className={styles.backdrop} src={backdrop} alt="background" />
      <Image className={styles.coffee} src={coffee} alt="coffee" />
      <Image className={styles.hands} src={hands} alt="hands" />
      <Image className={styles.popUps} src={popUps} alt="popUps" />
    </div>
  );
}
