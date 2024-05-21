import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./PageRoute/Home/Home";
import Landing from "./PageRoute/Landing/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/rehearsals" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
