import styled from "styled-components";
import GlobalStyles from "./GlobalStyle";
import MemoArticle from "./assets/components/MemoArticle";
import MemoSide from "./assets/components/MemoSide";

function App() {
  return (
    <>
      <GlobalStyles />
      <AppContainer>
        <StrMain>
          <MemoSide />
          <MemoArticle />
        </StrMain>
      </AppContainer>
    </>
  );
}

export default App;

const StrMain = styled.main`
  display: grid;
  grid-template-columns: 240px 1fr;
  max-width: 1024px;
  width: 100%;
  height: 500px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
