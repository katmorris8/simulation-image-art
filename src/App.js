import { useEffect, useState } from "react";
import "./App.css";
import imagePath from "./images/test-pic.jpg";
import Row from "./Row";

function App() {
  const [imageData, setImageData] = useState();
  const [imageDimensions, setImageDimensions] = useState({});

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

  return (
    <div className="App">
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
              />
            );
          });
        })}
    </div>
  );
}

export default App;
