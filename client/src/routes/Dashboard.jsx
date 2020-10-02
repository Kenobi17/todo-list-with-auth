import React, { Fragment, useContext, useEffect } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import Logout from "../components/Logout";

const Dashboard = () => {
  const { user, getUser } = useContext(AuthenticationContext);

  useEffect(() => {
    getUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <h1>Dashboard {user.name}</h1>
      <Logout />
    </Fragment>
  );
};

export default Dashboard;
