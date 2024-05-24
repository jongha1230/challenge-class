import MemoArticle from "../../components/MemoArticle";
import MemoSide from "../../components/MemoSide";
import { AppContainer, StrMain } from "./MainPage.styled";

function MainPage() {
  return (
    <>
      <AppContainer>
        <StrMain>
          <MemoSide />
          <MemoArticle />
        </StrMain>
      </AppContainer>
    </>
  );
}

export default MainPage;
