"use client";

import styles from "./page.module.css";
import FirstGraph from "./graphs/firstGraph";
import SecondGraph from "./graphs/secondGraph";
import ThirdGraph from "./graphs/thirdGraph";
import ExcelReader from "./components/ExcelReader";
import Title from "./title";

import React from "react";
import ReactECharts from "echarts-for-react";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.title}>
          {/* 这里展示标题、文字说明以及被选中的点的详细数据 */}
          <Title />
        </div>
        <div className={styles.demo}>
          <h6>Details:</h6>
          Dataset Origin:{" "}
          <a href="https://divvybikes.com/system-data">Divvy Data</a>
          <br />
          GitHub Site:{" "}
          <a href="https://github.com/xycharm/visualization/">Here</a>
        </div>
        <div className={styles.developer}>
          Develper's Tool：
          <br />
          xlsx-json Transformer
          <ExcelReader name="thirdGraphData6" />
        </div>
        <div className={styles.firstGraph}>
          <FirstGraph />
        </div>

        <div className={styles.secondGraph}>
          <SecondGraph />
        </div>

        <div className={styles.thirdGraph}>
          <h3>
            <br />
            全城车辆流动情况
          </h3>
          {/*注意此处的CSS在title.css中*/}
          <ThirdGraph />
        </div>
      </main>
    </>
  );
}
