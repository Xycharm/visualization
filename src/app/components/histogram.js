import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";
import Data1 from "../dataset/firstGraphData_oneday.json";
import Data2 from "../dataset/firstGraphDataII_everyday.json";

export default function FirstGraph({
  dataset,
  dimensions,
  values,
  titleText,
  subTitle,
}) {
  // State to toggle between oneday and everyday graphs
  var series = dataset.value.map((item) => {
    return { name: item, type: "bar" };
  });
  const getGraphOption = () => {
    return {
      title: {
        text: titleText,
        subtext: subTitle,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: values,
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: false },
        },
      },
      grid: {
        top: "20%",
        bottom: "0%",
        left: "2%",
        right: "5%",
        containLabel: true,
      },
      dataset: {
        dimensions: dimensions,
        source: dataset,
      },
      xAxis: [
        {
          type: "category",
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: series,
    };
  };

  function onChartReady(echarts) {}

  function onChartClick(param, echarts) {
    console.log(param);
    console.log(echarts);
  }

  function onChartLegendselectchanged(param, echarts) {
    console.log(param);
    console.log(2);
  }
  return (
    <>
      <ReactEcharts
        option={getGraphOption()}
        onChartReady={onChartReady}
        onEvents={{
          click: onChartClick,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
    </>
  );
}
