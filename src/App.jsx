import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Deposit from "./pages/Deposit";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
<<<<<<< HEAD
import Transfer from "./pages/Transfer";
import Withdrawal from "./pages/Withdrawal";
=======
import Dashboard from "./pages/Dashboard";
>>>>>>> 2647fe5f8126d1b38fa0408aab926a27963436ce

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
<<<<<<< HEAD
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="transfer" element={<Transfer />} />
=======
        <Route path="deposit" element={<Deposit />} />
        <Route path="dashboard" element={<Dashboard />} />
>>>>>>> 2647fe5f8126d1b38fa0408aab926a27963436ce
      </Routes>
    </BrowserRouter>
  );
}
