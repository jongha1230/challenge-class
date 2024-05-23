import { Link, Outlet } from "react-router-dom";

function DefaultLayout() {
  // 컴포넌트의 생애주기와 의존성 배열에 담긴 값의 변화에 따라
  // 함수를 실행해 주는 훅
  // mount -> update -> unmount
  // useEffect(함수, 의존성배열);

  return (
    <div>
      <Link to="/">홈페이지</Link>
      <br />
      <Link to="/posts">포스트 목록 페이지</Link>
      <br />
      <Link to="/posts/123">포스트 상세 페이지</Link>

      <Outlet />
    </div>
  );
}

export default DefaultLayout;
