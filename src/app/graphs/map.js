import {MapContainer, TileLayer, LayerGroup, Circle, Tooltip} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import Data1 from './thirdGraphData1.json'

const Data = Data1;

//跟据净流入设计颜色

function GetColor(sum) {
//the sum is range from -348 to 324, first normalize it to -1 to 1
    let normalizedSum = sum / 348;
    //use function
    let color;
    let power = 1/3;
    if (normalizedSum > 0) {
        color = Math.pow(normalizedSum, power);
    }
    else {
        color = -Math.pow(-normalizedSum, power);
    }
    //use 0.5 as the center of the color scale
    //then map [-1,1] to a degree of [0, 1]
    let degree = (color + 1) / 2;
    //the degree means variation from white to orange, the larger the degree, the more orange, and map it to [0, 255]
    let r = 255 * degree;
    let g = 255 * degree;
    let b = 255 * degree;
    return "rgb(" + r + "," + g + "," + b + ")";
}

const MetaCircle = (props) => {
    console.log("Hello!");
    return <Circle
        center={[props.arr.lat, props.arr.lon]}
        pathOptions={{fillColor: GetColor(props.arr.sum), fillOpacity: 0.8}}
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

const center = [41.90, -87.624];
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
                <AllCircles/>
            </LayerGroup>
        </MapContainer>
    )
}

export default Map;