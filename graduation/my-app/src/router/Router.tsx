import { Route, Routes } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />}>
        <Route path="setting" element={<Setting />} />
        <Route path="userManagement" element={<UserManagement />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
