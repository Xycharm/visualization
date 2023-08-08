'use client'

import styles from './page.module.css'
import FirstGraph from './graphs/firstGraph'
import SecondGraph from './graphs/secondGraph'
import ThirdGraph from './graphs/thirdGraph'
import ExcelReader from './ExcelReader'

import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function Home() {
  return (
    <>
    <main className={styles.main}>
      <div className={styles.demo}>
        这里展示标题、文字说明以及被选中的点的详细数据

      </div>
      <div className={styles.developer}>
        开发者工具：xlsx-json转换器
        <ExcelReader name='thirdGraphData6'/>
      </div>
      <div className={styles.firstGraph}>
       <FirstGraph />
      </div>

      <div className={styles.secondGraph}>
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