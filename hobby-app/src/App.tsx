import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Messages from "./pages/Messages";
import MessageDetail from "./pages/MessageDetail.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/:id" element={<MessageDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
