import { ModalType } from "../types/ModalType";

export const ModalButton = ({ onClickToggle }: ModalType) => {
  return (
    <button onClick={onClickToggle} className="p-5 m-10 border">
      モーダル
    </button>
  );
};
