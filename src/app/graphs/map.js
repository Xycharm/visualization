import {useState} from 'react';
import { MapContainer, TileLayer,LayerGroup,Circle,Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Data1 from './thirdGraphData1.json';
import Data2 from './thirdGraphData2.json';
import Data3 from './thirdGraphData3.json';
import Data4 from './thirdGraphData4.json';
import Data5 from './thirdGraphData5.json';
import Data6 from './thirdGraphData6.json';


let Data=Data1;
//跟据净流入设计颜色

function GetColor(sum) {
  //the sum is range from -348 to 324, first normalize it to -1 to 1
      let normalizedSum = sum / 348;
      //use function
      let color;
      let power = 1/5;
      if (normalizedSum > 0) {
          color = Math.pow(normalizedSum, power);
      }
      else {
          color = -Math.pow(-normalizedSum, power);
      }
      let r, g, b;
      if (color > 0) {
          r = 255;
          g = 255 - Math.round(255 * color);
          b = 255 - Math.round(255 * color);
      }
      else {
          r = 255 + Math.round(255 * color);
          g = 255 + Math.round(255 * color);
          b = 255;
      }
      return "rgb(" + r + "," + g + "," + b + ")";
  }

function ChangeImport(value){
  switch(value){
    case 1:Data=Data1;break;
    case 2:Data=Data2;break;
    case 3:Data=Data3;break;
    case 4:Data=Data4;break;
    case 5:Data=Data5;break;
    case 6:Data=Data6;break;
  };
}

function GetTime(value){
  let time1=4*value-4;
  let time2=4*value-1;
  time1=String(time1);
  time2=String(time2);
  let text=time1+':00 - '+time2+':59';
  return text;
}
const MetaCircle=(props)=>{
  console.log("Hello!");
  return <Circle
  center={[props.arr.lat,props.arr.lon]}
  pathOptions={{fillColor :GetColor(props.arr.sum),fillOpacity:0.8} }
  radius={200}
  stroke={false}
>
  <Tooltip><p>id:{props.arr.id}<br/>净流入：{props.arr.sum}</p></Tooltip>
</Circle>
}

const AllCircles = () => {
    return (
        Data.map((item) => <MetaCircle arr={item}/>)
    );
}

const center=[41.90, -87.624];

const leftStyle={
  marginLeft:'50px',
  marginTop:'10px',
  backgroundColor:'#FFFFFF',
  color:'#00FFFF',
  float:'left',
  fontSize:'40px',
  width:'40px',
  height:'40px',
  borderWidth:'1px',
  borderRadius: '4px',
  cursor: 'pointer',
};

const rightStyle={
  marginTop:'10px',
  backgroundColor:'#FFFFFF',
  color:'#00FFFF',
  float:'left',
  fontSize:'40px',
  width:'40px',
  height:'40px',
  borderWidth:'1px',
  borderRadius: '4px',
  cursor: 'pointer',
};
const textStyle={
  textAlign:'center',
  float:'left',
  marginTop:'18px',
  marginLeft:'30px',
  marginRight:'30px',
  fontSize:'20px',
}
const Map = () => {
  const [value,setValue]=useState(1);

  function handleDecrease(){
    value==1?setValue(6):setValue(value-1);
    ChangeImport(value);
  }
  function handleIncrease(){
    value==6?setValue(1):setValue(value+1);
    ChangeImport(value);
  }

  ChangeImport(value);
  return (
    <>
    <MapContainer 
      center={center} //地图中心位置
      zoom={11} //地图大小
      scrollWheelZoom={true} 
      style={{height: '80%', width: "100%"}}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LayerGroup>
        <AllCircles />
      </LayerGroup>
    </MapContainer>
    <button style={leftStyle} onClick={handleDecrease}>&#60;</button>
    <h7 style={textStyle} >{GetTime(value)}</h7>
    <button style={rightStyle} onClick={handleIncrease}> &#62; </button>
    </>
  )
}

export default Map;