import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import Progress from "../components/Progress";

const Home: NextPage = (): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/progress");
    }, 10000);
    return;
  }, []);

  const router = useRouter();

  const cancelOrder = () => {
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
