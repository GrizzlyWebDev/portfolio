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
      <Image className={styles.backdrop} src={backdrop} alt="background" />
      <Image className={styles.items} src={items} alt="background" />
      <Image
        className={styles.washingMachines}
        src={washingMachines}
        alt="background"
      />
      <Image className={styles.clothes} src={clothes} alt="background" />
    </div>
  );
}
