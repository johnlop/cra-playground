import React from "react";
import { useAuth } from "../../../hooks/useAuth";

const SignOut = () => {
  const { logOut } = useAuth();

  logOut();

  return <div>Sign out</div>;
};

export default SignOut;
