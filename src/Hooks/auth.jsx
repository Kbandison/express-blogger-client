import { useState, useEffect, createContext, useContext, useMemo } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const serverData = process.env.REACT_APP_ENDPOINT;

  const [userToken, setUserToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUserToken(user.token);
      setUserEmail(user.email);
    }
  }, [isLoading]);

  const register = async (
    firstName,
    lastName,
    email,
    password,
    confirmPassword
  ) => {
    setIsLoading(true);
    const registerResult = await registerUser(
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    );
    setIsLoading(false);
    return registerResult;
  };

  const login = async (email, password) => {
    setIsLoading(true);
    const loginResult = await loginUser(email, password);

    if (loginResult.success) {
      setUserToken(loginResult.token);
      setUserEmail(loginResult.email);
      localStorage.setItem("user", JSON.stringify(loginResult));
    }
    setIsLoading(false);
    return loginResult;
  };

  const logout = async () => {
    setUserToken(null);
    setUserEmail(null);
    localStorage.removeItem("user");
  };

  const value = useMemo(
    () => ({
      userToken,
      userEmail,
      register,
      login,
      logout,
    }),
    [userToken, userEmail]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const registerUser = async (
  firstName,
  lastName,
  email,
  password,
  confirmPassword
) => {
  const serverData = `${process.env.REACT_APP_ENDPOINT}/users/register`;

  // const response = await axios.post(serverData, {
  //   email,
  //   password,
  // });

  const response = await fetch(serverData, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};

const loginUser = async (email, password) => {
  const serverData = process.env.REACT_APP_ENDPOINT;

  const response = await fetch(`${serverData}/users/user-login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const responseJSON = await response.json();
  return responseJSON;
};
