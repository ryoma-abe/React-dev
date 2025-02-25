import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Top } from "./pages/Top";

import { PageBicycle } from "./pages/PageBicycle";
import { PageAbout } from "./pages/PageAbout";

function App() {
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
}

export default App;
