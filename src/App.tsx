import LoginPage from "./pages/login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
