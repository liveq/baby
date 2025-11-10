import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isResearchAuthenticated, setIsResearchAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on mount
  useEffect(() => {
    const babyAuth = sessionStorage.getItem('baby_authenticated');
    const researchAuth = sessionStorage.getItem('authenticated');

    if (babyAuth === 'true') {
      setIsAuthenticated(true);
    }

    if (researchAuth === 'true') {
      setIsResearchAuthenticated(true);
    }

    setIsLoading(false);
  }, []);

  // Main site authentication (password: 1909)
  const login = (password) => {
    if (password === '1909') {
      sessionStorage.setItem('baby_authenticated', 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  // Research section authentication (same password: 1909)
  const loginResearch = (password) => {
    if (password === '1909') {
      sessionStorage.setItem('authenticated', 'true');
      setIsResearchAuthenticated(true);
      return true;
    }
    return false;
  };

  // Logout functions
  const logout = () => {
    sessionStorage.removeItem('baby_authenticated');
    setIsAuthenticated(false);
  };

  const logoutResearch = () => {
    sessionStorage.removeItem('authenticated');
    setIsResearchAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    isResearchAuthenticated,
    isLoading,
    login,
    loginResearch,
    logout,
    logoutResearch,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
