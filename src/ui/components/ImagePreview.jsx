import React from 'react';
import '../styles/ImagePreview.css';
import Loader from './Loader';
import BoundBoxes from './BoundBoxes';
import BoundingBoxContainer from './containers/BoundingBoxContainer';

class ImagePreview extends React.Component {
    render() {
        const { faceDetectedData, isLoading } = this.props;
		if (isLoading) {
			return(
				<Loader />
			);
		};
		if (Object.keys(faceDetectedData).length) {
			return(
				<section className="section-img-preview">
					<div className="inner-preview">
						<figure>
							<div className="image-preview">
								<img id="image-to-detect" src={ faceDetectedData.input ? faceDetectedData.input.data.image.url : null } alt="preview"/>
							</div>
							<BoundBoxes>
								{
									faceDetectedData.data ?
									faceDetectedData.data.regions.map(boundBox => (
										<BoundingBoxContainer 
											key={boundBox.id}
											faceArea={boundBox.region_info.bounding_box}
											imgRef={this.imgToBeDisplayReference}
										/>
									)) 
									: null
								}
							</BoundBoxes>
						</figure>
					</div>
				</section>
			);
		}
		return null;
    }
}

export default ImagePreview;