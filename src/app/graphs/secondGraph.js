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
        data: ['会员', '散客']
      },
      grid: {
        left: '2%',
        right: '5%',
        bottom: '0px',
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
        dimensions:['骑行时长-分','会员','散客'],
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
          name: '会员',
          type: 'line',
          symbol: 'none',
        },
        {
          name: '散客',
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