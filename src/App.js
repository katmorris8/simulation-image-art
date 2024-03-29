import { useEffect, useState } from "react";
import "./App.css";
import imagePath from "./images/test-pic.jpg";
import MuiSlider from "./MuiSlider";
import Row from "./Row";

function App() {
  const [imageData, setImageData] = useState();
  const [imageDimensions, setImageDimensions] = useState({});
  const [gapSliderValue, SetGapSliderValue] = useState(1);

  const loadImage = (setImageDimensions, imageUrl) => {
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setImageDimensions({
        height: img.height,
        width: img.width,
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
  };

  useEffect(() => {
    if (!imageDimensions.width) {
      loadImage(setImageDimensions, imagePath);
    }

    if (imageDimensions.width) {
      const scale = 10;
      const width = imageDimensions.width / scale;
      const height = imageDimensions.height / scale;

      const numberOfTilesHigh = Math.floor(height / (width / scale));
      const rowsArray = Array(numberOfTilesHigh).fill(<div />);

      setImageData({
        scale: scale,
        width: width,
        height: height,
        rowsArray: rowsArray,
      });
    }
  }, [imageDimensions]);

  const doubleRowArray = Array(2).fill(<div />);

  console.log('gapSliderValue', gapSliderValue);

  return (
    <div className="App">
      <MuiSlider name='Tile Gap' gap={gapSliderValue} onChange={(event) => SetGapSliderValue(event.target.value)} />
      <div className="image-preview">
        {imageData &&
          imageData.rowsArray.map((item, index) => {
            return doubleRowArray.map((item, i) => {
              return (
                <Row
                  key={`row ${(imagePath, index, i)}`}
                  src={imagePath}
                  scale={imageData.scale}
                  width={imageData.width}
                  height={imageData.height}
                  rowIndex={index}
                  gap={gapSliderValue}
                />
              );
            });
          })}
      </div>
    </div>
  );
}

export default App;
