import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rehearsals from "./PageRoute/Rehearsals/Rehearsals";
import Landing from "./PageRoute/Landing/Landing";
import ViewRehearsal from "./PageRoute/ViewRehearsal/ViewRehearsal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/rehearsals" element={<Rehearsals />} />
        <Route path="/rehearsals/:id" element={<ViewRehearsal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
