import Image from "next/image";
import SharedNav from "./components/SharedNav/SharedNav";

import styles from "./not-found.module.scss";

import planet from "@public/404/planet.svg";
import stars from "@public/404/stars.svg";
import firstNumber from "@public/404/firstNum.svg";
import secondNumber from "@public/404/secondNum.svg";
import dog from "@public/404/dog.svg";

export default function NotFound() {
  return (
    <section className={styles.notFoundContainer}>
      <SharedNav pathname="/not-found" />
      <div className={styles.gridRight}>
        <Image src={planet} alt="planet" />
        <Image src={stars} alt="stars" />
        <Image src={firstNumber} alt="first number" />
        <Image src={secondNumber} alt="second number" />
        <Image src={dog} alt="dog" />
      </div>
    </section>
  );
}
