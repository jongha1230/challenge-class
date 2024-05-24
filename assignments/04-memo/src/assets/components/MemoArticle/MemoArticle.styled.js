import styled from "styled-components";

const StrMemoArticle = styled.article`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  textarea {
    height: 100%;
    resize: none;
    font-size: 15px;
    line-height: 1.66;
    font-family: inherit;
  }
`;

const CurrentTime = styled.span`
  color: rgb(128, 128, 128);
  font-size: 10px;
  margin: 0px auto 24px;
`;

export { CurrentTime, StrMemoArticle };
