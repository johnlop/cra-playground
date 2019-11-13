import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

const SignIn = () => {
  const { logIn } = useAuth();

  return (
    <Form onSubmit={logIn}>
      <Input label="Email" name="email" type="text" />
      <Input label="Password" name="password" type="password" />
      <button>Sign In</button>
    </Form>
  );
};

export default SignIn;
