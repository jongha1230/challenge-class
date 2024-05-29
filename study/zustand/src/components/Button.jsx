import React from "react";
import { useShallow } from "zustand/react/shallow";
import useLoginStore from "../zustand/login.store";

function Button() {
  // const logIn = useLoginStore((state) => state.logIn);
  // const logOut = useLoginStore((state) => state.logOut);
  const { logIn, logOut } = useLoginStore(
    useShallow((state) => ({
      logIn: state.logIn,
      logOut: state.logOut,
    }))
  );
  /*
  zustand는 state.logIn 함수가 바뀔 때 리렌더링 됌.
  불필요한 리렌더링을 막기 위해선
  1. 따로 따로 꺼내는 방법
  2. 구조분해 사용 시 useShallow 사용
  */
  console.log("버튼 리렌더링");

  return (
    <div>
      <button onClick={logIn}>로그인하기</button>
      <button onClick={logOut}>로그인하기</button>
    </div>
  );
}

export default Button;
