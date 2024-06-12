import { useState } from "react";
import CounterButton from "./CounterButton";
import CounterDisplay from "./CounterDisplay";

function Counter() {
  const [count, SetCount] = useState<number>(0);
  const [unit, setUnit] = useState<number>(1);

  const handleChangeUnit: React.ChangeEventHandler<HTMLInputElement> = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUnit(Number(e.target.value));
  };

  const decrement = () => {
    SetCount(count - 1);
  };
  const increment = () => {
    SetCount(count + 1);
  };

  return (
    <div>
      <CounterDisplay value={count} />

      <input
        className="border-solid border bottom-2 border-black"
        type="number"
        value={unit}
        onChange={handleChangeUnit}
        placeholder="이곳에 숫자를 입력"
      />

      <div className="flex">
        <CounterButton onClick={decrement}>[-]</CounterButton>
        <CounterButton onClick={increment}>[+]</CounterButton>
      </div>
    </div>
  );
}

export default Counter;
