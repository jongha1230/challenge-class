import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import Page from "../components/Page";

const ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

function TodoPage() {
  const inputRef = useRef(null);

  const { isPending, mutate } = useMutation({
    mutationFn: () => axios.post(ENDPOINT),
  });

  axios.get(ENDPOINT);
  const handleClickButton = async () => {
    mutate(
      inputRef.current.value,
      {
        onSuccess: (result) => {
          console.log(result);
          alert("성공");
        },
      },
      {
        onError: () => {
          alert("실패");
        },
      }
    );
  };
  return (
    <Page>
      <input
        type="text"
        className="border"
        ref={inputRef}
        disabled={isPending}
      />
      <button
        className="bg-black text-white"
        onClick={handleClickButton}
        disabled={isPending}
      >
        작성하기
      </button>
    </Page>
  );
}

export default TodoPage;
