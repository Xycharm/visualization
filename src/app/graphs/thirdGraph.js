import React from 'react';
import ReactEcharts from "echarts-for-react";
import dynamic from 'next/dynamic';

export default function ThirdGraph(){
    const Map = React.useMemo(() => dynamic(
        () => import('./map.js'), // replace '@components/map' with your component's location
        { 
          loading: () => <p>A map is loading</p>,
          ssr: false // This line is important. It's what prevents server-side render
        }
      ), [/* list variables which should trigger a re-render here */])
      return <Map />
}