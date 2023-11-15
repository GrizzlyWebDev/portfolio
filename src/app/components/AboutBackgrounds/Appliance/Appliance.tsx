import React from "react";

import Image from "next/image";
import backdrop from "@public/Appliance/backdrop.svg";
import items from "@public/Appliance/items.svg";
import washingMachines from "@public/Appliance/washingMachines.svg";
import clothes from "@public/Appliance/clothes.svg";

import styles from "./Appliance.module.scss";

export default function Appliance() {
  return (
    <div className={styles.background}>
      <Image className={styles.backdrop} src={backdrop} alt="brick building" />
      <Image className={styles.items} src={items} alt="plants and clothing" />
      <Image
        className={styles.washingMachines}
        src={washingMachines}
        alt="washing machines"
      />
      <Image
        className={styles.clothes}
        src={clothes}
        alt="clothes spinning in washing machine"
      />
    </div>
  );
}
