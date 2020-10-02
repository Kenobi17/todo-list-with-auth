import React, { useState, createContext } from "react";
import userAPI from "../apis/userAPI";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  const getUser = async () => {
    try {
      const response = await userAPI.get("/dashboard", {
        headers: { token: localStorage.token },
      });
      setUser(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        setAuth,
        getUser,
      }}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
