import { MapContainer, TileLayer,LayerGroup,Circle,Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Data1 from './thirdGraphData1.json'

const Data=Data1;
//跟据净流入设计颜色

 function GetColor(sum) {
      if (Math.abs(sum) > 200) {
        sum = sum > 0 ? 200 : -200;
      }
      sum = Math.round((sum * 255) / 200);
      if (sum < 0) {
        return "rgb(" + (255 + sum) + ",255,255)";
     } else return "rgb(" + sum + ",0,0)";
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

const AllCircles=()=>{
  return (
    Data.map((item)=><MetaCircle arr={item}/>)
  );
}

const center=[41.90, -87.624];
const Map = () => {
  return (
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
  )
}

export default Map;