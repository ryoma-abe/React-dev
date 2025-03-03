import { List } from "./components/atoms/List";
import { ButtonArea } from "./components/molecules/ButtonArea";
import { InputArea } from "./components/molecules/InputArea";
import { Default } from "./components/templates/Default";
import { ListProvider } from "./provider/ListProvider";

export const App = () => {
  return (
    <ListProvider>
      <Default>
        <InputArea />
        <ButtonArea />
        <List />
      </Default>
    </ListProvider>
  );
};
