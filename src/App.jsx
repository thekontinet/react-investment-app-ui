import { BrowserRouter, Route, Routes } from "react-router-dom";
import TransactionCard from "./components/TransactionCard";
import About from "./pages/About";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <TransactionCard />
    </>
  );
}
