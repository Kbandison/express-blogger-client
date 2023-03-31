import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../Features/auth/authSlice";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const [registerMessage, setRegisterMessage] = useState("");
  const [signUp, setSignUp] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (isError) {
      console.log(message);
      setRegisterMessage(message);
      dispatch(reset());
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignUp((signUp) => {
      return {
        ...signUp,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (signUp.password !== signUp.confirmPassword) {
      setRegisterMessage("Passwords do not match");
    }

    dispatch(register(signUp));
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <br />
        <br />
        <h1>Sign-Up</h1>
        <br />
        <br />
        <h2>{registerMessage ? registerMessage : ""}</h2>
        <br />
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={signUp.firstName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={signUp.lastName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={signUp.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={signUp.password}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password: </label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={signUp.confirmPassword}
          onChange={handleChange}
        />
        <br />
        <h4>
          Already Have an Account? <Link to={"/user-login"}>Sign-In</Link>
        </h4>

        <button type="submit">Sign-Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
