import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import userAPI from "../apis/userAPI";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setAuth } = useContext(AuthenticationContext);
  const [inputsValues, setInputsValues] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputsValues({ ...inputsValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userAPI.post("/auth/login", {
        email: inputsValues.email,
        password: inputsValues.password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        toast.success("Logged in Successfully");
      } else {
        setAuth(false);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputsValues.email}
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-3"
        />
        <input
          onChange={handleChange}
          value={inputsValues.password}
          type="password"
          name="password"
          placeholder="Password"
          className="form-control my-3"
        />
        <button type="submit" className="btn btn-success btn-block">
          Login
        </button>
      </form>
      <Link to="/register">Register</Link>
    </Fragment>
  );
};

export default Login;
