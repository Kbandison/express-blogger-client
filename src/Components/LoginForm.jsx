import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, reset } from "../Features/auth/authSlice";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const [loginMessage, setLoginMessage] = useState("");
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
      setLoginMessage(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginUser((login) => {
      return {
        ...login,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(loginUser));
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
