import { createContext, useEffect, useState } from "react";
import api from "../services/axios";

const { Provider } = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(function () {});
  return <Provider value={user}>{children}</Provider>;
}
