import Tile from "../Tile";
import "./style.css";

const Row = ({ src, scale, width, height, rowIndex }) => {
  const tilesArray = Array(scale).fill(<div />);
  return (
    <div className="row">
      {tilesArray.map((item, index) => (
        <Tile
          key={`tile ${src, index}`}
          src={src}
          scale={scale}
          width={width}
          height={height}
          tileIndex={index}
          rowIndex={rowIndex}
        />
      ))}
    </div>
  );
};

export default Row;
