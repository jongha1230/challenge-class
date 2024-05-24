import styled from "styled-components";

const MemoSideHeader = styled.header`
  border-bottom: 1px solid #ccc;
  display: flex;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  button {
    font-size: 13px;
    font-weight: 500;
    padding: 4px 8px;
    color: rgb(128, 128, 128);
    transition: all 120ms ease 0s;
    line-height: 1.15;

    &:hover {
      color: rgb(18, 18, 18);
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const MemoAside = styled.aside`
  height: 100%;
  border-right: 1px solid #ccc;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
`;

const MemoList = styled.ul`
  padding: 20px 12px;
  display: grid;
  grid-template-columns: 1fr;
  align-content: flex-start;
  row-gap: 8px;
  margin: 0;
  overflow-x: hidden;
`;
const MemoItem = styled.li`
  max-width: 230px;
  box-sizing: border-box; /* Padding 포함 */
  height: 56px;
  padding: 12px 24px;
  cursor: pointer;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "rgb(255, 224, 127)" : "inherit"};

  h6 {
    margin: 0px 0px 2px;
    font-size: 13px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
  }
  time {
    font-size: 12px;
  }
`;
export { MemoAside, MemoItem, MemoList, MemoSideHeader };
