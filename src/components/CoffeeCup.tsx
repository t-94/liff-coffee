import styles from "../styles/components/CoffeeCup.module.css";

const CoffeeCup = (): JSX.Element => {
  return (
    <div className={styles.cup}>
      <div className={styles.handle}></div>
    </div>
  );
};

export default CoffeeCup;
