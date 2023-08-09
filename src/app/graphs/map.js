import { MapContainer, TileLayer,LayerGroup,Circle,Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Data1 from './thirdGraphData1.json'

const Data=Data1;
//跟据净流入设计颜色
function GetColor( sum ){
  let color;
  if(sum<-500){
    color='rgba(0,0,255,0.8)';
    return color;
  }else if(sum<-200){
    color='rgba(51,0,204,0.8)';
    return color;
  }else if(sum<0){
    color='rgba(102,0,153,0.8)';
    return color;
  }else if(sum<200){
    color='rgba(153,0,102,0.8)';
    return color;
  }else if (sum<500){
    color='rgba(204,0,51,0.8)';
    return color;
  }else{
    color='rgba(255,0,0,0.8)';
    return color;
  }
}

const MetaCircle=(props)=>{
  console.log("Hello!");
  return <Circle
  center={[props.arr.lat,props.arr.lon]}
  pathOptions={{fillColor :GetColor(props.arr.sum),fillOpacity:0.8} }
  radius={500}
  stroke={false}
>
  <Tooltip><p>id:{props.arr.id}<br/>净流入：{props.arr.sum}</p></Tooltip>
</Circle>
}

const AllCircles=()=>{
  return (
    Data.map((item)=><MetaCircle arr={item}/>)
  );
}

const center=[41.8755, -87.624];
const Map = () => {
  return (
    <MapContainer 
      center={center} //地图中心位置
      zoom={10} //地图大小
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
  )
}

export default Map;