import React, { Fragment, useContext } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { toast } from "react-toastify";

const Logout = () => {
  const { setAuth } = useContext(AuthenticationContext);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setAuth(false);
    toast.success("You logged out");
  };
  return (
    <Fragment>
      <button onClick={handleLogout} className="btn btn-primary">
        Logout
      </button>
    </Fragment>
  );
};

export default Logout;
