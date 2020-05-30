import React from 'react';
import AppDetecterFormContainer from './containers/AppDetecterFormContainer';
import ImagePreviewContainer from './containers/ImagePreviewContainer';
import '../styles/Home.css';

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
                    <AppDetecterFormContainer />
                    <ImagePreviewContainer />
                </div>
            </section>
        );
    }
}

export default Home;