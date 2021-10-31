import React, { useEffect, useState } from "react";
import styles from "@/styles/History.module.css";

const History = (): JSX.Element => {
  const [count, setCount] = useState<number>(0);
  const cells: React.ReactNode[] = [];
  for (let i = 1; i < 10; i++) {
    cells.push(
      <div key={i} data-count={i} className={i <= count ? styles.active : ""} />
    );
  }

  useEffect(() => {
    const getCount: string | null = localStorage.getItem("count");
    const count = getCount === null ? 0 : Number(getCount);
    setCount(count);
    return;
  }, []);

  return (
    <div>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
        ご利用3回ごとにスイーツ1品の寄付をお願いします
      </p>
      <div className={styles.cells}>{cells.map((cell) => cell)}</div>
    </div>
  );
};

export default History;
