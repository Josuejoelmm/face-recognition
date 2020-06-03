import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { showModal } from '../../../redux/actions';

export default connect(
    null,
    {
        showModal
    }
)(Navbar);