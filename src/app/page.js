'use client'

import styles from './page.module.css'
import FirstGraph from './graphs/firstGraph'
import SecondGraph from './graphs/secondGraph'
import ThirdGraph from './graphs/thirdGraph'

import React from 'react';
import ReactECharts from 'echarts-for-react';

import test from 'test.json'

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.demo}>
        这里展示标题、文字说明以及被选中的点的详细数据
        <br />
        {test['name']}
      </div>
      <div className={styles.firstGraph}>
       <FirstGraph />
      </div>

      <div className={styles.secondGraph}>
        这里展示骑行时间的分布
        <SecondGraph />
      </div>

      <div className={styles.thirdGraph}>
        这里结合地图展示某日某时段车辆的流动情况
        <ThirdGraph />
      </div>
    </main>
    </>
  )
}