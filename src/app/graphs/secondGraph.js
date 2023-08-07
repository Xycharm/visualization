import React from 'react';
import ReactEcharts from "echarts-for-react";
import Data from './secondGraphData.json'

export default function SecondGraph(){
  const getOption = () => {
    return {
      title: {
        text: '骑行时间分布'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['member', 'casual']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        show:'true',
        feature: {
          dataView: { show: true, readOnly: false },//数据预览
          magicType: { show: true, type: ['line', 'bar'] },//样式：线状/条形
          restore: { show: true },//重新加载：开
          saveAsImage: { show: false }//保存为图像：开
        }
      },
      dataset:{
        dimensions:['time','member','casual'],
        source:Data
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'member',
          type: 'line',
          symbol: 'none',
        },
        {
          name: 'casual',
          type: 'line',
          symbol: 'none',
        }
      ]
    };
  };
  return <div>
    <br />
  <ReactEcharts option={getOption()} />
</div>
}