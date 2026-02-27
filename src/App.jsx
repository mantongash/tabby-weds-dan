import Invite from "./components/Invite";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Invite />} />
        <Route path="/:slug" element={<Invite />} />
      </Routes>
      <Invite />
    </BrowserRouter>
  );
}

export default App;
