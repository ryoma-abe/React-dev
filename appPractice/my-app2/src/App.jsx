import { ButtonArea } from "./components/molecules/ButtonArea";
import { CompleteTodoList } from "./components/molecules/CompleteTodoList";
import { IncompleteTodoList } from "./components/molecules/IncompleteTodoList";
import { InputArea } from "./components/molecules/InputArea";
import { Default } from "./components/templates/Default";
import { ListProvider } from "./provider/ListProvider";

export const App = () => {
  return (
    <ListProvider>
      <Default>
        <InputArea />
        <ButtonArea />
        <IncompleteTodoList />
        <h3 className="mt-10">完了のTodoエリアです</h3>
        <CompleteTodoList />
      </Default>
    </ListProvider>
  );
};
