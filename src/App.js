import { useState, useEffect } from 'react/cjs/react.production.min';
import './App.css';
import image from './images/test-pic.jpg'

function App() {
  const newImage = new Image()
  newImage.src = image;
  const scale = 4;
  const width = newImage.width / scale;
  const height = newImage.height / scale;

  console.log('image dimensions', width, height);
  const { src } = newImage;
  const imageStyle = {
    backgroundImage: `url(${src})`,
    backgroundSize: `${width}px ${height}px`,
    width: `${width / 4}px`,
    height: `${width / 4}px`,
    backgroundPosition: `0 0`,
  }
  const imageStyle2 = {
    backgroundPosition: `-${width / 4}px 0`,
  }
  const imageStyle3 = {
    backgroundPosition: `-${(width / 4) * 2}px 0`,
  }
  const imageStyle4 = {
    backgroundPosition: `-${(width / 4) * 3}px 0`,
  }

  console.log(width / 4);

  return (
    <div className="App">
      <div style={imageStyle} />
      <div style={{...imageStyle, ...imageStyle2}} />
      <div style={{...imageStyle, ...imageStyle3}} />
      <div style={{...imageStyle, ...imageStyle4}} />
    </div>
  );
}

export default App;
