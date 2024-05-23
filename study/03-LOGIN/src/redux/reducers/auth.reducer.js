// 관습적으로 상수로 선언하고 값에 Reduce이름을 앞에 붙여줌
export const LOG_IN = "auth/LOG_IN";
export const LOG_OUT = "auth/LOG_OUT";

const initialState = {
  isLoggedIn: false,
};

function authReducer(prevState = initialState, action) {
  // 작업 공간
  // 작업의 종류에 따라서 다른 작업을 해야 한다.

  switch (action.type) {
    case LOG_IN:
      // 뚝딱뚝딱

      // 작업이 다 반영된 상태를 리턴
      return { ...prevState, isLoggedIn: true };
    case LOG_OUT:
      // 뚝딱뚝딱2
      // 작업이 다 반영된 상태를 리턴
      return { ...prevState, isLoggedIn: false };
    default:
      return prevState;
  }
}

export default authReducer;
