import React, { useState } from "react";
import Data1 from "../dataset/firstGraphData_oneday.json";
import Data2 from "../dataset/firstGraphDataII_everyday.json";
import Histogram from "../components/histogram";
import SubHistogram from "../components/subhistogram";
import MainData from "../dataset/mainGraphData.json";

export default function FirstGraph({date,setDate}) {
  const [visible, setVisible] = useState(true); // State to toggle between oneday and everyday graphs
  
  const buttonStyle = {
    backgroundColor: "#409eff",
    color: "white",
    border: "none",
    padding: "6px 12px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
  };

  const containerStyle = {
    marginTop: "-5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  };
  function subGraph(param) {
    setDate(param["日期"]);
  }
  function onClick(){
    if(visible==false)setDate(0);
    return setVisible(!visible);
  }
  const buttonText = visible ? "Oneday" : "Everyday" ;
  return (
    <div>
      <div style={containerStyle}>
        <button style={buttonStyle} onClick={onClick}>
          Toggle Graph ({buttonText})
        </button>
      </div>
      <Histogram
        dataset={visible ? Data1 : Data2}
        dimensions={
          visible ? ["起始时间-时", "会员", "散客"] : ["日期", "会员", "散客"]
        }
        values={["会员", "散客"]}
        titleText={
          visible ? "日内使用量的波动" : "月内使用量的波动" 
        }
        subTitle={visible ? "人次/时" : "人次/天"}
        isMain={!visible}
        subGraph={subGraph}
      />
      <SubHistogram
        mainDataset={MainData}
        dimensions={["起始时间-时", "会员", "散客"]}
        values={["会员", "散客"]}
        titleText={"当天使用量的波动"}
        subTitle={"人次"}
        date={date - 1}
      />
    </div>
  );
  //   const getGraphOption = () => {
  //     const data = visible ? Data1 : Data2;
  //     const titleText = visible ? "一天之内使用量的波动" : "每天使用量的波动";

  //     return {
  //       title: {
  //         text: titleText,
  //         subtext: "人次/月",
  //       },
  //       tooltip: {
  //         trigger: "axis",
  //       },
  //       legend: {
  //         data: ["会员", "散客"],
  //       },
  //       toolbox: {
  //         show: true,
  //         feature: {
  //           dataView: { show: true, readOnly: false },
  //           magicType: { show: true, type: ["line", "bar"] },
  //           restore: { show: true },
  //           saveAsImage: { show: false },
  //         },
  //       },
  //       grid: {
  //         top: "20%",
  //         bottom: "0%",
  //         left: "2%",
  //         right: "5%",
  //         containLabel: true,
  //       },
  //       dataset: {
  //         dimensions: visible
  //           ? ["起始时间-时", "会员", "散客"]
  //           : ["日期", "会员", "散客"],
  //         source: data,
  //       },
  //       xAxis: [
  //         {
  //           type: "category",
  //         },
  //       ],
  //       yAxis: [
  //         {
  //           type: "value",
  //         },
  //       ],
  //       series: [
  //         {
  //           color: "#a90000",
  //           name: "会员",
  //           type: "bar",
  //         },
  //         {
  //           name: "散客",
  //           type: "bar",
  //         },
  //       ],
  //     };
  //   };

  //   const chartBackgroundColor = "#f5f5f5"; // ECharts typical background color
  //   const buttonStyle = {
  //     backgroundColor: "#409eff",
  //     color: "white",
  //     border: "none",
  //     padding: "6px 12px",
  //     cursor: "pointer",
  //     borderRadius: "4px",
  //     fontSize: "14px",
  //   };

  //   const containerStyle = {
  //     marginTop: "-5px",
  //     display: "flex",
  //     flexDirection: "column",
  //     alignItems: "flex-end",
  //   };

  //   const buttonText = visible ? "Everyday" : "Oneday";
  //   function onChartReady(echarts) {}

  //   function onChartClick(param, echarts) {
  //     console.log(param);
  //     console.log(echarts);
  //   }

  //   function onChartLegendselectchanged(param, echarts) {}
  //   return (
  //     <>
  //       <div style={containerStyle}>
  //         <button style={buttonStyle} onClick={() => setVisible(!visible)}>
  //           Toggle Graph ({buttonText})
  //         </button>
  //       </div>
  //       <ReactEcharts
  //         option={getGraphOption()}
  //         onChartReady={onChartReady}
  //         onEvents={{
  //           click: onChartClick,
  //           legendselectchanged: onChartLegendselectchanged,
  //         }}
  //       />
  //     </>
  //   );
}
