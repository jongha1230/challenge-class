import { useDispatch, useSelector } from "react-redux";
import {
  editMemo,
  selectMemosAndSelectedMemoId,
} from "../../../redux/reducers/memo.reducer";
import { NowTime } from "../NowTime/NowTime";
import { CurrentTime, StrMemoArticle } from "./MemoArticle.styled";

function MemoArticle() {
  const dispatch = useDispatch();
  const { memos, selectedMemoId } = useSelector(selectMemosAndSelectedMemoId);
  const memo = memos.find((memo) => memo.id === selectedMemoId) || {};

  const handleContentChange = (e) => {
    dispatch(editMemo(memo.id, e.target.value));
  };

  return (
    <StrMemoArticle>
      <CurrentTime>{NowTime("datetime")}</CurrentTime>
      <textarea
        value={memo.content}
        name="memo"
        id={memo.id}
        onChange={handleContentChange}
      ></textarea>
    </StrMemoArticle>
  );
}

export default MemoArticle;
