import React from 'react';

class BoundBoxes extends React.Component {
    render() {
        return(
            <div className="bounding-boxes">
                <div className="bounding-box-set">
                    {this.props.children}
                </div>
            </div>
        );
    }
};

export default BoundBoxes;