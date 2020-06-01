import AppDetecterForm from '../AppDetecterForm';
import { connect } from 'react-redux';
import { detectFace, updateInputValue, setImageUrl } from '../../../redux/actions';

export default connect(
    state => {
        return {
            inputUrl: state.inputUrl
        }
    },
    {
        detectFace,
        updateInputValue,
        setImageUrl
    }
)(AppDetecterForm);