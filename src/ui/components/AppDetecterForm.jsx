import React from 'react';
import '../styles/AppDetecterForm.css';

class AppDetecterForm extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
        this.onInputChangeValue = this.onInputChangeValue.bind(this);
    }

    onInputChangeValue(e) {
        this.props.updateInputValue(e.target.value)
    }

    onButtonSubmit() {
        this.props.detectFace(this.props.inputUrl)
    }
    render() {
        return(
            <section className="detecter-section">
                <div className="innner-form">
                    <h2>Hi user, your currect rank is...</h2>
                    <h3>#1</h3>
                    <p>Let me detect faces on your picture, give me a try.</p>
                    <div>
                        <div>
                            <label htmlFor="detect-input">Image URL</label>
                            <br />
                            <input value={this.props.inputUrl} onChange={this.onInputChangeValue} id="detect-input" placeholder="https://your-image-example/url.jpg" />
                            <button onClick={this.onButtonSubmit}>DETECT</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default AppDetecterForm;