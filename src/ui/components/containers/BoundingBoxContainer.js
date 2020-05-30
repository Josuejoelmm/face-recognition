import BoundingBox from '../BoundingBox';
import { connect } from 'react-redux';

export default connect(
    state => {
        return {
            faceDetectedData: state.faceDetectedData
        }
    },
    null
)(BoundingBox);