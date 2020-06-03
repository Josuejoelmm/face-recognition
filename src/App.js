import React from 'react';
import NavbarContainer from './ui/components/containers/NavbarContainer';
import Home from './ui/components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ModalContainer from './ui/components/containers/ModalContainer';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <>
                    <NavbarContainer to="/" />
                    <Switch>
                        <Route exact path={["/", "/register"]} component={ModalContainer} />
                        <Route path="/dashboard" component={Home} />
                    </Switch>
                    </>
                </Router>
            </Provider>
        );
    }
}

export default App;