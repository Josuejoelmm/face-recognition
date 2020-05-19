const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: '4c824092f7bf445f99525636795e9439'
});

export default Clarifai;

// app.models.predict("4c824092f7bf445f99525636795e9439", "https://samples.clarifai.com/face-det.jpg").then(
//     function(response) {
//       // do something with response
//     },
//     function(err) {
//       // there was an error
//     }
//   );