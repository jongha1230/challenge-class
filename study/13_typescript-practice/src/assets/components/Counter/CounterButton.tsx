import { PropsWithChildren } from "react";

// props의 타입은 7:3 으로 interface을 사용
interface CounterButtonProps {
  onClick: () => void;
}

function CounterButton({
  onClick: handleClick,
  children,
}: PropsWithChildren<CounterButtonProps>) {
  return <button onClick={handleClick}>{children}</button>;
}

export default CounterButton;
