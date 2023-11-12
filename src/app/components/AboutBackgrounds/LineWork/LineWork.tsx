import React from "react";

import Image from "next/image";
import truck from "@public/LineWork/bucketTruck.svg";
import backdrop from "@public/LineWork/backdrop.svg";
import poles from "@public/LineWork/poles.svg";

import styles from "./LineWork.module.scss";

export default function LineWork() {
  return (
    <div className={styles.background}>
      <Image className={styles.backdrop} src={backdrop} alt="background" />
      <Image className={styles.poles} src={poles} alt="background" />
      <Image className={styles.truck} src={truck} alt="background" />
    </div>
  );
}
