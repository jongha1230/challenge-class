import { createSelector } from "@reduxjs/toolkit";

// Action Types
const ADD_MEMO = "memo/ADD_MEMO";
const DELETE_MEMO = "memo/DELETE_MEMO";
const EDIT_MEMO = "memo/EDIT_MEMO";
const SELECT_MEMO = "memo/SELECT_MEMO";

// Action Creators
export const addMemo = () => ({
  type: ADD_MEMO,
  payload: { id: Date.now(), content: "" },
});

export const deleteMemo = (id) => ({
  type: DELETE_MEMO,
  payload: id,
});

export const editMemo = (id, content) => ({
  type: EDIT_MEMO,
  payload: { id, content },
});

export const selectMemo = (id) => ({
  type: SELECT_MEMO,
  payload: id,
});
const selectMemos = (state) => state.memo.memos;
const selectSelectedMemoId = (state) => state.memo.selectedMemoId;

export const selectMemosAndSelectedMemoId = createSelector(
  [selectMemos, selectSelectedMemoId],
  (memos, selectedMemoId) => ({ memos, selectedMemoId })
);

const initialMemoId = Date.now();
const initialState = {
  memos: [{ id: initialMemoId, content: "", date: initialMemoId }],
  selectedMemoId: null,
};

const memoReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case ADD_MEMO: {
      const newMemo = action.payload;
      return {
        ...prevState,
        memos: [newMemo, ...prevState.memos],
        selectedMemoId: newMemo.id,
      };
    }
    case DELETE_MEMO: {
      if (prevState.memos.length <= 1) {
        alert("하나 이상의 메모는 남겨두어야 합니다.");
        return prevState;
      }
      const memosAfterDeletion = prevState.memos.filter(
        (memo) => memo.id !== action.payload
      );
      return {
        ...prevState,
        memos: memosAfterDeletion,
        selectedMemoId: memosAfterDeletion.length
          ? memosAfterDeletion[0].id
          : null,
      };
    }
    case EDIT_MEMO: {
      return {
        ...prevState,
        memos: prevState.memos.map((memo) =>
          memo.id === action.payload.id
            ? { ...memo, content: action.payload.content }
            : memo
        ),
      };
    }
    case SELECT_MEMO: {
      return {
        ...prevState,
        selectedMemoId: action.payload,
      };
    }
    default:
      return prevState;
  }
};

export default memoReducer;
