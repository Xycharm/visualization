import React from 'react';
import ReactEcharts from "echarts-for-react";

export default function FirstGraph(){
    const getOption = () => {
        return {
            title: {
                text: '一天之内使用量的波动',//标题
                subtext: '预留'//副标题
            },
            tooltip: {
                trigger: 'axis'//鼠标悬停时显示详细数据
            },
            legend: {
                data: ['member', 'casual']//表头数据种类。注意与series里面的name保持一致
            },
            toolbox: {
                show: true,//显示右上角工具栏
                feature: {
                  dataView: { show: true, readOnly: false },//数据预览
                  magicType: { show: true, type: ['line', 'bar'] },//样式：线状/条形
                  restore: { show: true },//重新加载：开
                  saveAsImage: { show: false }//保存为图像：关
                }
            },
            calculable: true,
            xAxis: [
                {
                  type: 'category',
                  // 下面填小时
                  data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                }
            ],
            yAxis: [
                {
                  type: 'value'
                }
            ],
            series: [
                {
                  color: '#a90000',
                  name: 'member',
                  type: 'bar',
                  //下面填会员人数
                  data: [
                    2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
                  ],
                },

                {
                  name: 'casual',
                  type: 'bar',
                  //下面填散客人数
                  data: [
                    2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
                  ],
                }
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>
    
}