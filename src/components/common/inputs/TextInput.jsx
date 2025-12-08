import { Label, Input } from "../../../styles/login/form.style";
import React from "react";

const TextInput = React.memo(function TextInput({
  label,
  id,
  name,
  value,
  type = "text",
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
  className,
}) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Input
        className={className}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </>
  );
});

export default TextInput;
