import React from "react";

const Input = ({ name, type = "text", label, updateField }) => (
  <div>
    <label>{label}</label>
    <input name={name} type={type} onChange={updateField}></input>
  </div>
);

export default Input;
