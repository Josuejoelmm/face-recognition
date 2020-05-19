import AppDetecterForm from '../AppDetecterForm';
import { connect } from 'react-redux';

 export default connect(state => {
    return {
        login: state.login
    }
})(AppDetecterForm);