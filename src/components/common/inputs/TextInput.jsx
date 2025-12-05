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
    <div className={className}>
      {label && <Label>{label}</Label>}
      <Input
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
    </div>
  );
});

export default TextInput;
