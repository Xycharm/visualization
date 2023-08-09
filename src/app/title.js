import React from 'react';
import styles from './title.css'

export default function Title(){
    return <div className={styles.outline}>
        <h5>Data Visualization</h5>
        <h2>for Usage in July, 2020 of</h2>
        <h1>Divvy</h1>
        <p>Bike Sharing System</p>
        <h4>in Chicago, IL</h4>
    </div>
};