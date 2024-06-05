import { useMutation } from "@tanstack/react-query";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function LoginPage() {
  const navigate = useNavigate();
  const { mutateAsync: logIn } = useMutation({
    mutationFn: (data) => api.auth.logIn(data),
  });

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleClickLogIn = async () => {
    try {
      const email = emailInputRef.current.value;
      const password = passwordInputRef.current.value;
      const data = { email, password };

      await logIn(data);

      alert("로그인 완료");
      navigate("/");
    } catch (error) {
      alert("로그인 실패");
    }
  };
  return (
    <div>
      <input ref={emailInputRef} placeholder="이메일 입력" type="email" />
      <input
        ref={passwordInputRef}
        placeholder="비밀번호 입력"
        type="password"
      />
      <button onClick={handleClickLogIn}>로그인하기</button>
    </div>
  );
}

export default LoginPage;
