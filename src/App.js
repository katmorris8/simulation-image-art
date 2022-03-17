import { useState, useEffect } from 'react/cjs/react.production.min';
import './App.css';
import image from './images/test-pic.jpg'

function App() {
  const newImage = new Image()
  newImage.src = image;
  const scale = 4;
  const height = newImage.height / scale;
  const width = newImage.width / scale;

  console.log('image dimensions', width, height);
  const { src } = newImage;
  const imageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: `${width}px ${height}px`,
    width: `${width / 4}px`,
    height: `${height / 4}px`,
  }

  return (
    <div className="App">
      <div style={imageStyle} />
    </div>
  );
}

export default App;
