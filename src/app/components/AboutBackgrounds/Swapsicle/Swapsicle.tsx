import React from "react";

import Image from "next/image";
import backdrop from "@public/Swapsicle/backdrop.svg";
import coffee from "@public/Swapsicle/coffee.svg";
import hands from "@public/Swapsicle/hands.svg";
import popUps from "@public/Swapsicle/popUps.svg";

import styles from "./swapsicle.module.scss";

export default function Swapsicle() {
  return (
    <div className={styles.background}>
      <Image
        className={styles.backdrop}
        src={backdrop}
        alt="computer monitor and plant"
      />
      <Image className={styles.coffee} src={coffee} alt="coffee" />
      <Image className={styles.hands} src={hands} alt="hands" />
      <Image className={styles.popUps} src={popUps} alt="popUps" />
    </div>
  );
}
