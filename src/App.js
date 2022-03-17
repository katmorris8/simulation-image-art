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

  return (
    <div className="App">
      <img src={newImage.src} height={height} width={width} alt="" />
    </div>
  );
}

export default App;
