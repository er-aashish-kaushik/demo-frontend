import React, { createContext, useState, useEffect } from 'react';
import { clearLocalStorage, getLocalStorage } from '../utils/localstorage';
import { GENERAL } from '../configs/constants';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getLocalStorage(GENERAL.ACCESS_TOKEN_KEY) || false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    clearLocalStorage()
    setIsLoggedIn(false);
  };
  useEffect(() => {
    let accessToken = getLocalStorage(GENERAL.ACCESS_TOKEN_KEY)
    if (accessToken) {
      setIsLoggedIn(true)
    }
    else {
      setIsLoggedIn(false)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
