import "./App.css";
import { Button } from "./components/Button";
import { Display } from "./components/Display";
import { Accordion } from "./components/Accordion";
import { useState } from "react";
import { ModalButton } from "./components/ModalButton";
import { Modal } from "./components/Modal";

function App() {
  // カウントアップ
  const [count, setCount] = useState<number>(1);
  const onClickAdd = () => {
    setCount(count + 1);
  };
  // モーダル
  const [modalToggle, setModalToggle] = useState(false);
  const onClickToggle = () => {
    setModalToggle(!modalToggle);
  };

  return (
    <>
      <Display count={count} />
      <Button onClickAdd={onClickAdd} />
      <Accordion />
      <ModalButton onClickToggle={onClickToggle} />
      {modalToggle && <Modal onClickToggle={onClickToggle} />}
    </>
  );
}

export default App;
