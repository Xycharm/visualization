import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function SecondGraph(){
  const getOption = () => {
    return {
      title: {
        text: 'Stacked Line'
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
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7]//这里放小时数
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'member',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210]//这里放会员的数量
        },
        {
          name: 'casual',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310]//这里放散客的数量
        }
      ]
    };
  };
  return <div>
  <ReactEcharts option={getOption()} />
</div>
}