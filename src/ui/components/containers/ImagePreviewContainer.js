import ImagePreview from '../ImagePreview';
import { connect } from 'react-redux';

export default connect(
    state => {
        return {
            faceDetectedData: state.faceDetectedData,
            isLoading: state.isLoading,
            imageUrl: state.imageUrl,
        }
    })(ImagePreview);