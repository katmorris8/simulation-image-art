import "./App.css";
import image from "./images/test-pic.jpg";
import Row from "./Row";

function App() {
  const newImage = new Image();
  newImage.src = image;
  const { src } = newImage;
  const scale = 4;
  const width = newImage.width / scale;
  const height = newImage.height / scale;

  const numberOfTilesHigh = Math.floor(height / (width / scale));
  const rowsArray = Array(numberOfTilesHigh).fill(<div />);

  return (
    <div className="App">
      {rowsArray.map((item, index) => {
        return (
          <Row
            key={`row ${(src, index)}`}
            src={src}
            scale={scale}
            width={width}
            height={height}
            rowIndex={index}
          />
        );
      })}
    </div>
  );
}

export default App;
