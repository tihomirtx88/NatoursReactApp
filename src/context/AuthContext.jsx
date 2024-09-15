import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useLogout } from "../features/authentication/useLogout";
import { apiLogin, apiRegister } from "../services/apiAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(() => localStorage.getItem("jwt"));

  const { logoutFn, isLogoutLoading } = useLogout();


  useEffect(() => {
    if (user || token) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);


  const login = async (email, password) => {
    try {
      const response = await apiLogin({ email, password });
      const { token, data: { user } } = response;

      setToken(token); 
      setUser(user);  

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const register = async (registerData) => {
    const result = await apiRegister(registerData);
    if (result) {
      setToken(result.token);
      setUser(result.user);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("jwt");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        logoutFn,
        setUser,
        isLogoutLoading,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};