import "./App.css";
import image from "./images/test-pic.jpg";
import Row from "./Row";

function App() {
  const newImage = new Image();
  newImage.src = image;
  const { src } = newImage;
  const scale = 10;
  const width = newImage.width / scale;
  const height = newImage.height / scale;

  const numberOfTilesHigh = Math.floor(height / (width / scale));
  const rowsArray = Array(numberOfTilesHigh).fill(<div />);

  const doubleRowArray = Array(2).fill(<div />);

  return (
    <div className="App">
      {rowsArray.map((item, index) => {
        return doubleRowArray.map((item, i) => {
          return (
            <Row
              key={`row ${(src, index, i)}`}
              src={src}
              scale={scale}
              width={width}
              height={height}
              rowIndex={index}
            />
          );
        })
      })}
    </div>
  );
}

export default App;
