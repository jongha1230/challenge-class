import React from "react";
import { useSelector } from "react-redux";

function Display() {
  const count = useSelector((state) => state.counter.count);
  return <div>{count}</div>;
}

export default Display;
