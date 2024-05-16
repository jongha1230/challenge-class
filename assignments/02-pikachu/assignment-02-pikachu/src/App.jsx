import { useState } from "react";
import "./App.css";
import pikachuImage from "./assets/pikachu.png";
import Map from "./components/Map";

function App() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    direction: "right",
    prevDirection: "right",
  });

  const handleKeyDown = (event) => {
    const newPosition = { ...position };

    switch (event.key) {
      case "ArrowLeft":
        newPosition.x = Math.max(newPosition.x - 1, 0);
        newPosition.direction = "left";

        console.log(newPosition);
        break;
      case "ArrowRight":
        newPosition.x = Math.min(newPosition.x + 1, MAP_WIDTH - 1);
        newPosition.direction = "right";

        console.log(newPosition);
        break;
      case "ArrowUp":
        newPosition.y = Math.max(newPosition.y - 1, 0);
        console.log(newPosition);
        break;
      case "ArrowDown":
        newPosition.y = Math.min(newPosition.y + 1, MAP_HEIGHT - 1);
        console.log(newPosition);
        break;
      case " ":
        setPosition(newPosition);
        setTimeout(() => {
          setPosition({ ...newPosition, y: newPosition.y - 1 });
          setTimeout(() => {
            setPosition(newPosition);
          }, 300);
        }, 300);
        break;
    }

    setPosition((prevState) => ({
      ...newPosition,
      prevDirection: prevState.direction,
    }));
  };

  const renderPikachu = (index) => {
    const x = index % MAP_WIDTH;
    const y = Math.floor(index / MAP_WIDTH);
    if (x === position.x && y == position.y) {
      let flipClass = "";
      if (position.direction !== position.prevDirection) {
        flipClass = " flip";
      }
      return (
        <img
          src={pikachuImage}
          alt="Pikachu"
          className={`rotate-${position.direction}${flipClass}`}
          style={{
            width: "50px",
            height: "50px",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      );
    }
  };

  const MAP_WIDTH = 10;
  const MAP_HEIGHT = 10;
  const TILE_SIZE = 50;

  return (
    <>
      <div>
        <Map
          mapWidth={MAP_WIDTH}
          mapHeight={MAP_HEIGHT}
          tileSize={TILE_SIZE}
          handleKeyDown={handleKeyDown}
          renderPikachu={renderPikachu}
        />
      </div>
    </>
  );
}

export default App;
