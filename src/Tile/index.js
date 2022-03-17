const Tile = ({ src, scale, width, height, tileIndex, rowIndex }) => {
  const styles = {
    backgroundImage: `url(${src})`,
    backgroundSize: `${width}px ${height}px`,
    width: `${width / scale}px`,
    height: `${width / scale}px`,
    backgroundPosition: `-${(width / scale) * tileIndex}px -${
      (width / scale) * rowIndex
    }px`,
  };
  return <div style={styles} />;
};

export default Tile;
