import React from "react";
import { useForm } from "../../hooks/useForm";

const Form = ({ onSubmit, children }) => {
  const { submitForm, updateField } = useForm(onSubmit);

  return (
    <form onSubmit={submitForm}>
      {children.map(child => React.cloneElement(child, { updateField }))}
    </form>
  );
};

export default Form;
