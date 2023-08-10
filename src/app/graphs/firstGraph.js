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
    if(visible==false)setDate(-1);
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
      {!visible && (
        <SubHistogram
          mainDataset={MainData}
          dimensions={["起始时间-时", "会员", "散客"]}
          values={["会员", "散客"]}
          titleText={"第" + date + "天使用量的波动"}
          subTitle={"人次"}
          date={date - 1}
        />
      )}
    </div>
  );
}
