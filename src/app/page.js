"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import FirstGraph from "./graphs/firstGraph";
import SecondGraph from "./graphs/secondGraph";
import ThirdGraph from "./graphs/thirdGraph";
import ExcelReader from "./components/ExcelReader";
import Title from "./title";

export default function Home() {
  const [date, setDate] = useState(0);
  let secondGraphStyle=(date===0)?secondGraphStyle1:secondGraphStyle2;
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
          Develper's Tool:
          <br />
          xlsx-json Transformer
          <ExcelReader name="thirdGraphData6" />
        </div>
        <div className={styles.firstGraph}>
          <FirstGraph date={date} setDate={setDate}/>
        </div>

        <div style={secondGraphStyle}>
          <SecondGraph />
        </div>

      <div className={styles.thirdGraph}>
        <h3><br />全城车辆流动情况</h3>{/*注意此处的CSS在title.css中*/}
        <ThirdGraph />
      </div>
    </main>
    </>
  );
}

const secondGraphStyle1={
  borderWidth:'0px',
  borderRadius: '10px',
  position:'absolute',
  overflow:'hidden',

  backgroundColor:'rgba(255,255,255,1)',
  padding:'10px',
  boxShadow:"0px 5px 15px 0px rgba(0,0,0,0.3)",

  top :'415px',
  left:'370px',
  width:'750px',
  bottom:'50px',
}

const secondGraphStyle2={
  borderWidth:'0px',
  borderRadius: '10px',
  position:'absolute',
  overflow:'hidden',

  backgroundColor:'rgba(255,255,255,1)',
  padding:'10px',
  boxShadow:"0px 5px 15px 0px rgba(0,0,0,0.3)",

  top :'710px',
  left:'370px',
  width:'750px',
}