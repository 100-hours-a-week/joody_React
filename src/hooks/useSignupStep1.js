import { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  validateEmailValue,
  validatePasswordValue,
  validatePasswordCheckValue,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../utils/InputValidators";

export default function useSignupStep1() {
  const navigate = useNavigate();

  const emailRef = useRef("");
  const passwordRef = useRef("");
  const passwordCheckRef = useRef("");

  const [helperEmail, setHelperEmail] = useState("");
  const [helperPassword, setHelperPassword] = useState("");
  const [helperPasswordCheck, setHelperPasswordCheck] = useState("");
  const [isNextActive, setIsNextActive] = useState(false);

  const validate = useCallback(() => {
    const email = emailRef.current.trim();
    const password = passwordRef.current.trim();
    const passwordCheck = passwordCheckRef.current.trim();

    const valid =
      EMAIL_REGEX.test(email) &&
      PASSWORD_REGEX.test(password) &&
      password === passwordCheck;

    setIsNextActive(valid);
  }, []);

  // 입력 이벤트
  const onEmailChange = (e) => {
    emailRef.current = e.target.value;
    setHelperEmail(validateEmailValue(emailRef.current));
    validate();
  };

  const onPasswordChange = (e) => {
    passwordRef.current = e.target.value;
    setHelperPassword(validatePasswordValue(passwordRef.current));
    validate();
  };

  const onPasswordCheckChange = (e) => {
    passwordCheckRef.current = e.target.value;
    setHelperPasswordCheck(
      validatePasswordCheckValue(passwordRef.current, passwordCheckRef.current)
    );
    validate();
  };

  const onEmailBlur = () => {
    setHelperEmail(validateEmailValue(emailRef.current));
  };

  const onPasswordBlur = () => {
    setHelperPassword(validatePasswordValue(passwordRef.current));
  };

  const onPasswordCheckBlur = () => {
    setHelperPasswordCheck(
      validatePasswordCheckValue(passwordRef.current, passwordCheckRef.current)
    );
  };

  // next step
  const handleNext = () => {
    if (!isNextActive) return;

    localStorage.setItem("signup_email", emailRef.current.trim());
    localStorage.setItem("signup_password", passwordRef.current.trim());
    localStorage.setItem(
      "signup_password_check",
      passwordCheckRef.current.trim()
    );

    navigate("/signup/step2");
  };

  return {
    helperEmail,
    helperPassword,
    helperPasswordCheck,
    onEmailBlur,
    onPasswordBlur,
    onPasswordCheckBlur,
    onEmailChange,
    onPasswordChange,
    onPasswordCheckChange,
    handleNext,
    isNextActive,
  };
}
