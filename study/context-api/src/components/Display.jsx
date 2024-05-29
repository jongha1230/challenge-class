import { useContext } from "react";
import { AuthContext } from "../contexts/auth.context";

function Display() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  return <div>로그인 여부 ({isLoggedIn.toString()})</div>;
}

export default Display;
