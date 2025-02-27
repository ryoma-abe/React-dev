import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { User } from "../components/pages/User";
import { DefalutLayout } from "../components/templets/DefalutLayout";
import { HeaderOnly } from "../components/templets/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DefalutLayout>
              <Top />
            </DefalutLayout>
          }
        />
        <Route
          path="/users"
          element={
            <HeaderOnly>
              <User />
            </HeaderOnly>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
