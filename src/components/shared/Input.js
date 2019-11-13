import React from "react";

const Input = ({ name, type = "text", label, updateField }, ref) => (
  <div>
    <label>{label}</label>
    <input name={name} type={type} onChange={updateField} ref={ref}></input>
  </div>
);

export default React.forwardRef(Input);
