import Invite from "./components/Invite";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Invite />} />
        <Route path="/:slug" element={<Invite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
