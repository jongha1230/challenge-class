import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addMemo,
  deleteMemo,
  selectMemo,
  selectMemosAndSelectedMemoId,
} from "../../../redux/reducers/memo.reducer";
import { NowTime } from "../NowTime/NowTime";
import {
  MemoAside,
  MemoItem,
  MemoList,
  MemoSideHeader,
} from "./MemoSide.styled";

function MemoSide() {
  console.log("MemoSide 리랜더링");
  const dispatch = useDispatch();
  const { memos, selectedMemoId } = useSelector(selectMemosAndSelectedMemoId);

  const handleSelectMemo = (id) => {
    dispatch(selectMemo(id));
  };

  const handleAddMemo = () => {
    dispatch(addMemo());
  };

  const handleDeleteMemo = () => {
    if (memos.length <= 1) {
      alert("하나 이상의 메모는 남겨두어야 합니다.");
      return;
    }
    dispatch(deleteMemo(selectedMemoId));
  };

  return (
    <MemoAside>
      <MemoSideHeader>
        <button onClick={handleAddMemo}>새 메모 작성하기</button>
        <button onClick={handleDeleteMemo}>삭제</button>
      </MemoSideHeader>
      <MemoList>
        {memos.map((memo) => (
          <Link key={memo.id} to={`/memo/${memo.id}`}>
            <MemoItem
              key={memo.id}
              onClick={() => handleSelectMemo(memo.id)}
              $isSelected={memo.id === selectedMemoId}
            >
              <h6>{memo.content || "새로운 메모"}</h6>
              <time>{NowTime("time", memo.id)}</time>
            </MemoItem>
          </Link>
        ))}
      </MemoList>
    </MemoAside>
  );
}

export default MemoSide;
