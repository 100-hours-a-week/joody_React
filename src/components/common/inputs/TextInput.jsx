import { Label, Input } from "../../../styles/login/form.style";
import React, { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
  {
    label,
    id,
    name,
    defaultValue,
    type = "text",
    placeholder,
    onChange,
    onBlur,
    onKeyDown,
    className,
  },
  ref
) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <Input
        ref={ref}
        className={className}
        id={id}
        name={name}
        type={type}
        defaultValue={defaultValue} // uncontrolled
        placeholder={placeholder}
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </>
  );
});

export default React.memo(TextInput);
