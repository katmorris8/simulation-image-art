import Tile from "../Tile";
import "./style.css";

const Row = ({ src, scale, width, height, rowIndex }) => {
  const tilesArray = Array(scale).fill(<div />);
  const doubleTilesArray = Array(2).fill(<div />);
  return (
    <div className="row">
      {tilesArray.map((item, index) => {
        return doubleTilesArray.map((item, i) => {
          return (
            <Tile
              key={`tile ${(src, index, i)}`}
              src={src}
              scale={scale}
              width={width}
              height={height}
              tileIndex={index}
              rowIndex={rowIndex}
            />
          )
        })
      })}
    </div>
  );
};

export default Row;
