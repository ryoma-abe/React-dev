import { CompleteArea } from "./components/CompleteArea";
import { IncompleteArea } from "./components/IncompleteArea";
import { InputArea } from "./components/InputArea";
import "./Todo.css";

export const Todo = () => {
  return (
    <div className="container">
      {/* 入力エリア */}
      <InputArea />
      {/* 未完了のTODO */}
      <IncompleteArea />
      {/* 完了したTODO */}
      <CompleteArea />
    </div>
  );
};
