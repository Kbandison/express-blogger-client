import React from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/auth";
import axios from "axios";

const SignUpForm = () => {
  const serverData = useOutletContext();
  const navigate = useNavigate();
  const auth = useAuth();

  const [signUp, setSignUp] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerMessage, setRegisterMessage] = React.useState("");

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

    const registerResult = await auth.register(
      signUp.firstName,
      signUp.lastName,
      signUp.email,
      signUp.password,
      signUp.confirmPassword
    );

    if (registerResult.success) {
      navigate("/user-login");
    } else {
      setRegisterMessage(registerResult.message);
      console.log(registerResult.message);
    }

    // axios
    //   .post(`${serverData}/users/register`, signUp)
    //   .then((res) => {
    //     console.log(res.data);
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
