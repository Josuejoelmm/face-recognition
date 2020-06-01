export default function calculateFaceLocation(data) {
    const clarifaiFace = data;
    const image = document.getElementById('image-to-detect');
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width - (clarifaiFace.right_col * width));
    const result = {
        topRow: clarifaiFace.top_row * height,
        bottomRow: height - (clarifaiFace.bottom_row * height),
        rightCol: width - (clarifaiFace.right_col * width) ,
        leftCol: clarifaiFace.left_col * width,
    }
    console.log(result, 'BOOOOX');
    
    return result;
}