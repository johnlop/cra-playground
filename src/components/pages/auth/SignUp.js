import React from "react";
import { useAuth } from "../../../hooks/useAuth";
import Form from "../../shared/Form";
import Input from "../../shared/Input";

const SignUp = () => {
  const { register } = useAuth();

  return (
    <Form onSubmit={register}>
      <Input label="Name" name="name" type="text" />
      <Input label="Email" name="email" type="text" />
      <Input label="Password" name="password" type="password" />
      <button>Sign Up</button>
    </Form>
  );
};

export default SignUp;
