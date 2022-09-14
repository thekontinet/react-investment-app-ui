import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClipboardInput from "./components/ClipboardInput";
import Refer from "./components/Refer";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<ClipboardInput />} /> */}
        {/* <Route path="/" element={<Refer />} /> */}
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
