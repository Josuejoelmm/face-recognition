import React from 'react';
import '../styles/BoundingBox.css';

class BoundingBox extends React.Component {
    constructor(props) {
        super(props);
        this.styleBox = null;
    }
    calculateFace() {
        const image = document.getElementById('image-to-detect');
        const width = Number(image.width);
        const height = Number(image.height);
        this.styleBox = {
            topRow: this.props.faceArea.top_row * height,
            bottomRow: height - (this.props.faceArea.bottom_row * height),
            rightCol: width - (this.props.faceArea.right_col * width),
            leftCol: this.props.faceArea.left_col * width,
        }
    }
    componentDidMount() {
        this.calculateFace();
    }
    // const boxStyle = {
    //     top: props.top_,
    //     bottom:,
    //     left:,
    //     right:,
    // }
    render() {
        console.log(this.props.faceDetectedData);
        console.log(this.props.faceArea);
        
        if (this.styleBox !== null) {
            return (
                <div className="bounding-box" style={{top: this.styleBox.topRow, bottom: this.styleBox.bottomRow, left: this.styleBox.leftCol, right: this.styleBox.leftCol}}>
                    <div className="bounding-box-concepts">
                        <div className="concept bounding-box__concept" title="face (ai_8jtPl3Xj) : 0">
                            <span className="concept__name">face</span>
                            <span className="concept__prediction-val">0.00</span>
                        </div>
                    </div>
                </div>
            )
        }
        return null;
    }
}

export default BoundingBox;