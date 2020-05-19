import React from 'react';
import AppDetecterFormConnected from './connectComponents/AppDetecterFormConnected'
import '../styles/Home.scss';

class Home extends React.Component {
    render() {
        return(
            <section className="home-container">
                <div>
                    <div className="brand-logo-container">
                        <div>
                            <figure></figure>
                        </div>
                    </div>
                    <AppDetecterFormConnected />
                </div>
            </section>
        );
    }
}

export default Home;