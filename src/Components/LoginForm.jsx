import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../Hooks/auth";

const LoginForm = () => {
  const serverData = useOutletContext();
  const navigate = useNavigate();
  const auth = useAuth();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [loginMessage, setLoginMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLogin((login) => {
      return {
        ...login,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginResult = auth.login(login.email, login.password);

    if (loginResult.success) {
      navigate("/");
    } else {
      setLoginMessage(loginResult.message);
      console.log(loginResult);
    }

    // axios
    //   .post(`${serverData}/users/user-login`, login)
    //   .then((res) => {
    //     console.log(res.data);
    //     navigate("/create-blog");

    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <br />
        <br />
        <h1>Login</h1>
        <br />
        <br />
        <h2>{loginMessage ? loginMessage : ""}</h2>
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          id="email"
          value={login.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={login.password}
          onChange={handleChange}
        />
        <br />
        <h4>
          Don't Have an Account? <Link to={"/user-signup"}>Sign-up</Link>
        </h4>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
