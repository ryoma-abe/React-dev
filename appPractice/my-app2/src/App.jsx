import { List } from "./components/atoms/List";
import { ButtonArea } from "./components/molecules/ButtonArea";
import { InputArea } from "./components/molecules/InputArea";
import { Default } from "./components/templates/Default";

export const App = () => {
  return (
    <Default>
      <InputArea />
      <ButtonArea />
      <List />
    </Default>
  );
};
