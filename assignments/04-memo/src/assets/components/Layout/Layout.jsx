import { Outlet } from "react-router-dom";
import { AppContainer, StrMain } from "./Layout.styled";

const Layout = () => {
  return (
    <AppContainer>
      <StrMain>
        <Outlet />
      </StrMain>
    </AppContainer>
  );
};

export default Layout;
