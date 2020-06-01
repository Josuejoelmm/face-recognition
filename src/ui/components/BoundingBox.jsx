import React from 'react';
import '../styles/BoundingBox.css';
import calculateFaceLocation from '../../utils/utilsFunctions';

function BoundingBox(props) {
    const box = calculateFaceLocation(props.faceArea);
    const style = {
        top: box.topRow, 
        bottom: box.bottomRow, 
        left: box.leftCol, 
        right: box.rightCol
    }
    return (<div className="bounding-box" style={style}></div>)
}

export default BoundingBox;