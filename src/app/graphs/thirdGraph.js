import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function ThirdGraph(){


  const getOption = () => {
    return {
      






//下面是多选项的内容

      
      
      timeline: {
          show:true,
          axisType:'category',
          realtime:true,
          autoPlay:false,
          symbolSize:10,
          label:{
            fontSize:12,
            rotate:45,
          },
          controlStyle:{
            show:false,
          },
          // `timeline.data` 中的每一项，对应于 `options`
          // 数组中的每个 `option`
          data: ['0-3', '4-7', '8-11','12-15','16-19','20-23']
      },
      // `baseOption` 的属性：有待填写
      grid: {  },
      xAxis: [  ],
      yAxis: [  ],
      series: [{
          // 其他配置
      }],

      // `switchableOption`的属性:下面这些数据有待填写

      options: [{
          // 这是'0-3' 对应的 option
          title: {
              text: '0-3时'
          },
          series: [
              { data: [] }
          ]
      }, {
          // 这是'4-7' 对应的 option
          title: {
              text: '4-7时'
          },
          series: [
              { data: [] }
          ]
      }, {
          // 这是'8-11' 对应的 option
          title: {
              text: '8-11时'
          },
          series: [
              { data: [] }
          ]
      }, {
          // 这是'12-15' 对应的 option
          title: {
             text: '12-15时'
          },
          series: [
              { data: [] }
          ]
      }, {
          // 这是'16-19' 对应的 option
          title: {
              text: '16-19时'
          },
          series: [
              { data: [] }
          ]
      }, {
          // 这是'20-23' 对应的 option
          title: {
              text: '20-23时'
          },
          series: [
              { data: [] }
          ]
      }]
      
    };
  };

  return <div>
    <br />
  <ReactEcharts option={getOption()} />
  </div>
}