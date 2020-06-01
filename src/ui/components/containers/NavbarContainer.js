import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions';

export default connect(
    state => {
        return {
            isModalOpen: state.isModalOpen
        }
    },
    {
        showModal
    }
)(Navbar);