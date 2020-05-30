import AppDetecterForm from '../AppDetecterForm';
import { connect } from 'react-redux';
import { detectFace, updateInputValue } from '../../../redux/actions';

export default connect(
    state => {
        return {
            inputUrl: state.inputUrl
        }
    },
    {
        detectFace,
        updateInputValue
    }
)(AppDetecterForm);