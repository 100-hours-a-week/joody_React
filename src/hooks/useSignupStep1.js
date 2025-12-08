import { useState } from "react";
import { useInput } from "./useInput";
import {
  validateEmailValue,
  validatePasswordValue,
  validatePasswordCheckValue,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../utils/InputValidators";

export default function useSignupStep1() {
  const email = useInput("", validateEmailValue);
  const password = useInput("", validatePasswordValue);
  const passwordCheck = useInput("", (v) =>
    validatePasswordCheckValue(password.value, v)
  );

  const [helperEmail, setHelperEmail] = useState("");
  const [helperPassword, setHelperPassword] = useState("");
  const [helperPasswordCheck, setHelperPasswordCheck] = useState("");

  const onEmailBlur = () => setHelperEmail(email.error || "");
  const onPasswordBlur = () => setHelperPassword(password.error);

  const onPasswordCheckBlur = () => setHelperPasswordCheck(passwordCheck.error);

  const isNextActive =
    EMAIL_REGEX.test(email.value) &&
    PASSWORD_REGEX.test(password.value) &&
    password.value === passwordCheck.value;
  const handleNext = () => {
    if (!isNextActive) return;

    localStorage.setItem("signup_email", email.value.trim());
    localStorage.setItem("signup_password", password.value.trim());
    localStorage.setItem("signup_password_check", password.value.trim());

    window.location.href = "/signup/step2";
  };

  return {
    email,
    password,
    passwordCheck,
    helperEmail,
    helperPassword,
    helperPasswordCheck,
    onEmailBlur,
    onPasswordBlur,
    onPasswordCheckBlur,
    handleNext,
    isNextActive,
  };
}
