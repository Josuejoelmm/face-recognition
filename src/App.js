import React from 'react';
import NavbarContainer from './ui/components/containers/NavbarContainer';
import Home from './ui/components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import ModalContainer from './ui/components/containers/ModalContainer';
import SignIn from './ui/components/SignIn';
import Register from './ui/components/Register';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <>
                    <NavbarContainer />
                    <Home />
                    <ModalContainer>
                        {/* <SignIn /> */}
                        <Register />
                    </ModalContainer>
                </>
            </Provider>
        );
    }
}

export default App;