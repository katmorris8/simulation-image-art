// import './style.css';

const Tile = ({ src, scale, width, height, count }) => {
  const styles = {
      backgroundImage: `url(${src})`,
      backgroundSize: `${width}px ${height}px`,
      width: `${width / scale}px`,
      height: `${width / scale}px`,
      backgroundPosition: `-${(width / scale) * count}px 0`,
    }
  return (
      <div style={styles} />
  );
}

export default  Tile;
