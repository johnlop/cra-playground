import React, { useRef, useLayoutEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Accordion from "../../shared/Accordion";
import About from "../misc/About";

const SignIn = () => {
  const { logIn } = useAuth();
  const inputRef = useRef();

  useLayoutEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <Form onSubmit={logIn}>
        <Input ref={inputRef} label="Email" name="email" type="text" />
        <Input label="Password" name="password" type="password" />
        <button>Sign In</button>
      </Form>

      <Accordion>
        <Accordion.Tab>
          <Accordion.Header>My own title</Accordion.Header>
          <Accordion.Content>Tab content is here</Accordion.Content>
        </Accordion.Tab>
        <Accordion.Tab>
          <Accordion.Header>My own title</Accordion.Header>
          <Accordion.Content>Tab content is here</Accordion.Content>
        </Accordion.Tab>
        <Accordion.Tab>
          <Accordion.Header>My own title</Accordion.Header>
          <Accordion.Content>Tab content is here</Accordion.Content>
        </Accordion.Tab>
      </Accordion>

      <About />
    </div>
  );
};

export default SignIn;
