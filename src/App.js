import './App.css';
import image from './images/test-pic.jpg'
import Row from './Row';

function App() {
  const newImage = new Image()
  newImage.src = image;
  const scale = 4;
  const width = newImage.width / scale;
  const height = newImage.height / scale;

  console.log('image dimensions', width, height);
  const { src } = newImage;

  // const styles = {
  //   backgroundImage: `url(${src})`,
  //   backgroundSize: `${width}px ${height}px`,
  //   width: `${width / scale}px`,
  //   height: `${width / scale}px`,
  //   backgroundPosition: `-${(width / scale) * count}px 0`,
  // }
  // const imageStyle2 = {
  //   backgroundPosition: `-${width / scale}px 0`,
  // }
  // const imageStyle3 = {
  //   backgroundPosition: `-${(width / scale) * 2}px 0`,
  // }
  // const imageStyle4 = {
  //   backgroundPosition: `-${(width / scale) * 3}px 0`,
  // }

  return (
    <div className="App">
      <Row src={src} scale={scale} width={width} height={height} />
    </div>
  );
}

export default App;
