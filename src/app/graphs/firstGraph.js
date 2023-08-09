import React, { useState } from 'react';
import ReactEcharts from "echarts-for-react";
import Data1 from './firstGraphData_oneday.json';
import Data2 from './firstGraphDataII_everyday.json';

export default function FirstGraph() {
    const [visible, setVisible] = useState(true); // State to toggle between oneday and everyday graphs

    const getGraphOption = () => {
        const data = visible ? Data1 : Data2;
        const titleText = visible ? '一天之内使用量的波动' : '每天使用量的波动';

        return {
            title: {
                text: titleText,
                subtext: '人次/月'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['会员', '散客']
            },
            toolbox: {
                show: true,
                feature: {
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: false }
                }
            },
            grid: {
                top: '20%',
                bottom: '0%',
                left: '2%',
                right: '5%',
                containLabel: true
            },
            dataset: {
                dimensions: visible ? ['起始时间-时', '会员', '散客']: ['日期', '会员', '散客'],
                source: data
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
                    name: '会员',
                    type: 'bar',
                },
                {
                    name: '散客',
                    type: 'bar',
                },
            ]
        };
    };

    const chartBackgroundColor = '#f5f5f5'; // ECharts typical background color
    const buttonStyle = {
        backgroundColor: '#409eff',
        color: 'white',
        border: 'none',
        padding: '6px 12px',
        cursor: 'pointer',
        borderRadius: '4px',
        fontSize: '14px',
    };

    const containerStyle = {
        marginTop: '-5px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    };

    const buttonText = visible ? 'Everyday' : 'Oneday';

    return (
        <div style={containerStyle}>
            <button style={buttonStyle} onClick={() => setVisible(!visible)}>
                Toggle Graph ({buttonText})
            </button>
            <ReactEcharts option={getGraphOption()} style={{ width: '100%', height: '300px' }} />
        </div>
    );
}
