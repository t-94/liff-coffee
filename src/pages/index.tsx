import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Progress from "../components/Progress";

const Home: NextPage = (): JSX.Element => {
  const [cancel, setCancel] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      if (cancel) return;
      const getCount: string | null = localStorage.getItem("count");
      const count = getCount === null ? 0 : Number(getCount);
      localStorage.setItem("count", `${count + 1}`);
      router.replace("/progress");
    }, 10000);
    return;
  }, []);

  const router = useRouter();

  const cancelOrder = () => {
    setCancel(true);
    router.replace("/cancel");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Time</title>
        <meta name="description" content="コーヒーの時間ですよ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.isOrder}>
        <p>注文しています...</p>
        <Progress />
      </div>
      <button className={styles.button} onClick={cancelOrder}>
        キャンセルする
      </button>
    </div>
  );
};

export default Home;
