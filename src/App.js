import React from 'react';
import Navbar from './ui/components/Navbar';
import Home from './ui/components/Home';
import { Provider } from 'react-redux';
import store from './redux/store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Navbar />
                    <Home />
                </div>
            </Provider>
        );
    }
}

export default App;