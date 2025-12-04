import { Label, Input } from "../../../styles/login/form.style";
import React from "react";

const TextInput = React.memo(function TextInput({
  label,
  value,
  type = "text",
  placeholder,
  onChange,
  onBlur,
  onKeyDown,
}) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Input
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
