import React, { Fragment, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import userAPI from "../apis/userAPI";
import { AuthenticationContext } from "../context/AuthenticationContext";

const Register = () => {
  const { setAuth } = useContext(AuthenticationContext);
  const [inputsValues, setInputsValues] = useState({
    name: "",
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
      const response = await userAPI.post("/auth/register", {
        name: inputsValues.name,
        email: inputsValues.email,
        password: inputsValues.password,
      });
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setAuth(true);
        toast.success("Registered Succesfully");
      } else {
        setAuth(false);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputsValues.name}
          type="text"
          name="name"
          placeholder="Name"
          className="form-control my-3"
        />
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
          Submit
        </button>
      </form>
      <Link to="/login">Login</Link>
    </Fragment>
  );
};

export default Register;
