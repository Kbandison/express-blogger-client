import React from "react";
// import { useAuth } from "../Hooks/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  // const auth = useAuth();

  // console.log(auth);

  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    const userInfo = localStorage.getItem("user");

    if (userInfo) {
      setUser(JSON.parse(userInfo));
    }
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
