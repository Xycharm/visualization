import React, { useContext } from 'react';
import ReactEcharts from "echarts-for-react";
// import { store } from "../store";
// import arryData from './data.json'

export default function FirstGraph(){
    // let arry=arryData['arryList'];
    // console.log(arry);
    // var arr=arry.map(x => eval(x));
    // console.log(arr);
    const getOption = () => {
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [100,200,300,400,100,300,500],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };
    };

    return <div>
        <ReactEcharts option={getOption()} />;
    </div>
    
}