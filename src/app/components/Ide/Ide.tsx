import styles from "./Ide.module.scss";

const classes = [styles.mediumText, styles.smallText, styles.largeText];

export default function Ide() {
  const createDiv = (key: number) => {
    const rndm = Math.floor(Math.random() * 3);
    return <div className={classes[rndm]} key={key} />;
  };

  const createRandomDivs = () => {
    const divs = [];
    for (let i = 0; i < 250; i++) {
      divs.push(createDiv(i));
    }
    return divs;
  };

  return (
    <div className={styles.ideContainer}>
      <div className={styles.fileName}>
        <h2>phillBlake.tsx</h2>
      </div>
      <div className={styles.ideButtons}>
        <div className={styles.ideButton} />
        <div className={styles.ideButton} />
        <div className={styles.ideButton} />
      </div>
      <div className={styles.ide}>
        <div className={styles.ideText}>{createRandomDivs()}</div>
      </div>
    </div>
  );
}
