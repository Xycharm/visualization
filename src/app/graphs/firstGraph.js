import React from 'react';
import ReactEcharts from "echarts-for-react";
import Data from './data.json'

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
            dataset:{
                dimensions:['time','member','casual'],
                source:Data
            },
            xAxis: [
                {
                  type: 'category',
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
                },
                {
                    name: 'casual',
                  type: 'bar',
                },
            ]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />
    </div>
    
}