import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editMemo,
  selectMemosAndSelectedMemoId,
} from "../../../redux/reducers/memo.reducer";
import { NowTime } from "../NowTime/NowTime";
import { CurrentTime, StrMemoArticle } from "./MemoArticle.styled";

function MemoArticle() {
  console.log("리렌더링");
  const dispatch = useDispatch();
  const { memos, selectedMemoId } = useSelector(selectMemosAndSelectedMemoId);
  const memo = memos.find((memo) => memo.id === selectedMemoId) || {};

  const [content, setContent] = useState(memo.content);

  useEffect(() => {
    setContent(memo.content);
  }, [memo.content]);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (content !== memo.content) {
        dispatch(editMemo(memo.id, content));
      }
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [content, dispatch, memo.id, memo.content]);

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <StrMemoArticle>
      <CurrentTime>{NowTime("datetime")}</CurrentTime>
      <textarea
        value={content}
        name="memo"
        id={memo.id}
        onChange={handleContentChange}
      ></textarea>
    </StrMemoArticle>
  );
}

export default MemoArticle;
