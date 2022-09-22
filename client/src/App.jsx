import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Deposit from "./pages/Deposit";
import ForgotPassword from "./pages/ForgotPassword";
import Transactions from "./pages/Transactions";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register/Register";
import Transfer from "./pages/Transfer";
import Withdrawal from "./pages/Withdrawal";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/Wallet";
import Transaction from "./pages/Transaction";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmailVerify from "./pages/EmailVerify";

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer
        autoClose={2000}
        position="top-center"
        hideProgressBar={true}
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="verify-email" element={<EmailVerify />} />

        <Route path="forgot" element={<ForgotPassword />} />
        <Route path="withdraw" element={<Withdrawal />} />
        <Route path="transfer" element={<Transfer />} />
        <Route path="deposit" element={<Deposit />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="wallet" element={<Wallet />} />
        <Route path="/transactions">
          <Route index element={<Transactions />} />
          <Route path=":id" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
