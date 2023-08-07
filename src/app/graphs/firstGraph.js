import React, { useContext } from 'react';
// import { store } from "../store";
import ReactEcharts from "echarts-for-react";

import arryData from './data.json'

export default function FirstGraph(){
    let arry=arryData.arryList;
    var arr=[];
    for(var x in arry)
    {
        arr.push(arry[x]);
    }
    const getOption = () => {
        console.log(arry);
        console.log(arr);
        return {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: arr,
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