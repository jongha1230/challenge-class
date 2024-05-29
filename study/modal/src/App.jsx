import "./App.css";
import { useModal } from "./contexts/modal.context";
import "./custom.css";

function App() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open({ title: "샘플 타이틀", content: "샘플 컨텐츠" });
  };
  return (
    <main>
      <button onClick={handleClickButton}>모달 띄우기</button>
      {Array(5000)
        .fill(0)
        .map((_, index) => (
          <div key={index}>{index + 1}</div>
        ))}
    </main>
  );
}

export default App;
