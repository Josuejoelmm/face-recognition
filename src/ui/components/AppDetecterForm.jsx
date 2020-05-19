import React from 'react';
import '../styles/AppDetecterForm.scss';
import Clarifai from '../../api/index';

class AppDetecterForm extends React.Component {
    constructor() {
        super();
        this.onButtonSubmit = this.onButtonSubmit.bind(this);
    }
    onButtonSubmit() {
        console.log('click');
        
        // Clarifai.app.models.predict("4c824092f7bf445f99525636795e9439", "https://samples.clarifai.com/face-det.jpg")
        //     .then(response => {
        //         console.log('click');
                
        //         console.log(response, 'clarifai response');
        //       // do something with response
        //     },
        //     err => console.log(err)
        //   );
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
                            <input id="detect-input" placeholder="put some image URL to preview" />
                            <button onClick={this.onButtonSubmit}>DETECT</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
};

export default AppDetecterForm;