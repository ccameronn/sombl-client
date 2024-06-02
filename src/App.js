import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Rehearsals from "./PageRoute/Rehearsals/Rehearsals";
import Landing from "./PageRoute/Landing/Landing";
import ViewRehearsal from "./PageRoute/ViewEvent/ViewEvent";
import EditRehearsal from "./PageRoute/EditEvent/EditEvent";
import DeleteRehearsal from "./PageRoute/DeleteEvent/DeleteEvent";
import AddRehearsal from "./PageRoute/AddRehearsal/AddRehearsal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Landing />} />
        <Route path="/rehearsals" element={<Rehearsals />} />
        <Route path="/rehearsals/:id" element={<ViewRehearsal />} />
        <Route path="/rehearsals/add" element={<AddRehearsal />} />
        <Route path="/rehearsals/:id/edit" element={<EditRehearsal />} />
        <Route path="/rehearsals/:id/delete" element={<DeleteRehearsal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
