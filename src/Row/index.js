import Tile from "../Tile";
import "./style.css";

const Row = ({ src, scale, width, height }) => {
  const scaleArray = Array(scale).fill(<div />);
  return (
    <div className="row">
      {scaleArray.map((item, index) => (
        <Tile
          key={`tile ${src, index}`}
          src={src}
          scale={scale}
          width={width}
          height={height}
          count={index}
        />
      ))}
    </div>
  );
};

export default Row;
