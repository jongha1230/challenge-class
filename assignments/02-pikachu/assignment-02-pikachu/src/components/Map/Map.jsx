import PropTypes from "prop-types";
import "./Map.css";

function Map({ mapWidth, mapHeight, tileSize, handleKeyDown, renderPikachu }) {
  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="map-container"
      style={{
        gridTemplateColumns: `repeat(${mapHeight}, ${tileSize}px)`,
        gridTemplateRows: `repeat(${mapWidth}, ${tileSize}px)`,
        width: mapWidth * tileSize,
        height: mapHeight * tileSize,
      }}
    >
      {Array.from({ length: mapWidth * mapHeight }).map((_, i) => (
        <div
          key={i}
          className="map-tile"
          style={{
            width: tileSize,
            height: tileSize,
          }}
        >
          {renderPikachu(i)}
        </div>
      ))}
    </div>
  );
}

Map.propTypes = {
  mapWidth: PropTypes.number.isRequired,
  mapHeight: PropTypes.number.isRequired,
  tileSize: PropTypes.number.isRequired,
  handleKeyDown: PropTypes.func.isRequired,
  renderPikachu: PropTypes.func.isRequired,
};

export default Map;
