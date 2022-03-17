import { useState, useEffect } from 'react/cjs/react.production.min';
import './App.css';
import image from './images/test-pic.jpg'

function App() {
  const [img, setImg] = useState(new Image());
  useEffect(() => {
    // const img = new Image();
    img.src = image;
    return img;
  })
  console.log('image dimensions', img.width, img.height);
  return (
    <div className="App">
      <img src={img} alt="poppy fields" />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
