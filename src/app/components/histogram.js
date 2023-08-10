import React, { useState } from "react";
import ReactEcharts from "echarts-for-react";

export default function Histogram({
  dataset,
  dimensions,
  values,
  titleText,
  subTitle,
  isMain = false,
  subGraph = null,
}) {
  if (dataset == null || values == null || dimensions == null) return;
  // State to toggle between oneday and everyday graphs
  var series = values.map((item) => {
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
      animationEasing: "elasticOut",
      animationDelay: 0,
    };
  };

  function onChartReady(echarts) {}

  function onChartClick(param, echarts) {
    console.log(param);
    if (subGraph == null) return;
    subGraph(param["data"]);
  }

  function onChartLegendselectchanged(param, echarts) {}
  return (
    <>
      <ReactEcharts
        option={getGraphOption()}
        onChartReady={onChartReady}
        onEvents={{
          click: isMain ? onChartClick : null,
          legendselectchanged: onChartLegendselectchanged,
        }}
      />
    </>
  );
}
