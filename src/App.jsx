import Invite from "./components/Invite";
import { BrowserRouter, Routes, Route } from "react-router";
import Messages from "./components/Messages";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Invite />} />
        <Route path="/:slug" element={<Invite />} />
        <Route path="messages" element={<Messages />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
