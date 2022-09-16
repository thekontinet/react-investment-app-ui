import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Deposit from "./pages/Deposit";
import ForgotPassword from "./pages/ForgotPassword";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Transfer from "./pages/Transfer";
import Withdrawal from "./pages/Withdrawal";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="transactions" element={<Transactions />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="withdrawal" element={<Withdrawal />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
