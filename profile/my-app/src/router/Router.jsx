import { Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Top } from "../pages/Top";
import { PageBicycle } from "../pages/PageBicycle";
import { PageAbout } from "../pages/PageAbout";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/page/about" element={<PageAbout />} />
        <Route path="/page/bicycle" element={<PageBicycle />} />
      </Routes>
    </>
  );
};
