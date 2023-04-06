import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminDashBoard, LoginPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashBoard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
