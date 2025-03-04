import { ButtonArea } from "./components/molecules/ButtonArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CompleteTodoList } from "./components/molecules/CompleteTodoList";
import { IncompleteTodoList } from "./components/molecules/IncompleteTodoList";
import { InputArea } from "./components/molecules/InputArea";
import { Default } from "./components/templates/Default";
import { ListProvider } from "./provider/ListProvider";

export const App = () => {
  return (
    <BrowserRouter>
      <ListProvider>
        <Default>
          <InputArea />
          <ButtonArea />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IncompleteTodoList />
                  <CompleteTodoList />
                </>
              }
            />
            <Route path="/Incomplete" element={<IncompleteTodoList />} />
            <Route path="/complete" element={<CompleteTodoList />} />
          </Routes>
        </Default>
      </ListProvider>
    </BrowserRouter>
  );
};
