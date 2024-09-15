import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { useSignIn } from "../features/authentication/useSignIn";
import { useLogout } from "../features/authentication/useLogout";
import { apiRegister } from "../services/apiAuth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem("user")));
  const [token, setToken] = useState(() => localStorage.getItem("jwt"));

  const { loginData, isLoadingLogin } = useSignIn();
  const { logoutFn, isLogoutLoading } = useLogout();

  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);
    } else {
      localStorage.removeItem("jwt");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const login = async (email, password) => {
    loginData(
      { email, password },
      {
        onSuccess: (data) => {
          setToken(data.token);
          setUser(data.user);
        },
        onError: () => {
          setToken(null);
          setUser(null);
        },
      }
    );
  };

  const register = async (registerData) => {
    const result = await apiRegister(registerData);
    if (result) {
      setToken(result.token);
      setUser(result.user);
    }
  };

  const logout = () => {
    logoutFn(
      {},
      {
        onSuccess: () => {
          setToken(null);
          setUser(null);
        },
      }
    );
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        isLoadingLogin,
        isLogoutLoading,
        setUser, // Ensure these methods are exposed
        setToken
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