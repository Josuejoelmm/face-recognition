import React from 'react';
import '../styles/ImagePreview.css';
import Loader from './Loader';
import BoundingBox from './BoundingBox';

class ImagePreview extends React.Component {
    render() {
        const { faceDetectedData, isLoading, imageUrl } = this.props;
	
		if ( imageUrl ) {
			return(
				<>
				<section className="section-img-preview">
					<div className="inner-preview">
						<figure>
							<div className="image-preview">
								<img id="image-to-detect" src={ imageUrl } alt="preview"/>
								{
									faceDetectedData.data ?
									faceDetectedData.data.regions.map(boundBox => (
										<BoundingBox 
											key={boundBox.id}
											faceArea={boundBox.region_info.bounding_box}
										/>
									)) 
									: null
								}
							</div>
						</figure>
					</div>
				</section>
				{
					isLoading && <Loader />
				}
				</>
			);
		}
		return null;
    }
}

export default ImagePreview;