import Modal from "./Modal";
import { useModal } from "./Modal.context";

function ModalControls() {
  const modal = useModal();

  const handleClickButton = () => {
    modal.open(<Modal />);
  };

  return (
    <div>
      <button onClick={handleClickButton}>모달 열기</button>
    </div>
  );
}

export default ModalControls;
