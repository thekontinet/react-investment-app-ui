import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/axios";

const authContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}

export default authContext;
