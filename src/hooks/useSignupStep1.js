// src/hooks/useSignupStep1.js
import { useState, useCallback } from "react";

export default function useSignupStep1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const [helperEmail, setHelperEmail] = useState("");
  const [helperPassword, setHelperPassword] = useState("");
  const [helperPasswordCheck, setHelperPasswordCheck] = useState("");

  // 정규식
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-=[\]{};':"\\|,.<>/?]).{8,20}$/;

  const validateEmail = useCallback((value, fromInput = false) => {
    const v = value.trim();
    if (!v) {
      if (!fromInput) setHelperEmail("* 이메일을 입력해주세요.");
      return false;
    }
    if (!emailRegex.test(v)) {
      setHelperEmail(
        "* 올바른 이메일 주소 형식을 입력해주세요. (예: test@test.com)"
      );
      return false;
    }
    setHelperEmail("");
    return true;
  }, []);

  const validatePassword = useCallback((value, fromInput = false) => {
    const v = value.trim();

    if (!v) {
      setHelperPassword("* 비밀번호를 입력해주세요.");
      return false;
    }

    if (/\s/.test(v)) {
      setHelperPassword("* 비밀번호에는 공백을 포함할 수 없습니다.");
      return false;
    }

    if (!passwordRegex.test(v)) {
      setHelperPassword(
        "* 비밀번호는 8~20자이며 대문자, 소문자, 숫자, 특수문자를 모두 포함해야 합니다."
      );
      return false;
    }

    setHelperPassword("");
    return true;
  }, []);

  const validatePasswordCheck = useCallback(
    (value, fromInput = false) => {
      const v = value.trim();
      if (!v) {
        if (!fromInput)
          setHelperPasswordCheck("* 비밀번호를 한번 더 입력해주세요.");
        return false;
      }
      if (password.trim() !== v) {
        setHelperPasswordCheck("* 비밀번호가 다릅니다.");
        return false;
      }
      setHelperPasswordCheck("");
      return true;
    },
    [password]
  );

  const onEmailChange = (e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setEmail(v);
    validateEmail(v, true);
  };

  const onPasswordChange = (e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setPassword(v);
    validatePassword(v, true);
  };

  const onPasswordCheckChange = (e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setPasswordCheck(v);
    validatePasswordCheck(v, true);
  };

  const isNextActive =
    emailRegex.test(email) &&
    passwordRegex.test(password) &&
    password === passwordCheck;

  const handleNext = () => {
    if (!isNextActive) return;

    localStorage.setItem("signup_email", email.trim());
    localStorage.setItem("signup_password", password.trim());
    localStorage.setItem("signup_password_check", password.trim());

    window.location.href = "/signup/step2";
  };

  return {
    email,
    password,
    passwordCheck,
    helperEmail,
    helperPassword,
    helperPasswordCheck,
    onEmailChange,
    onPasswordChange,
    onPasswordCheckChange,
    validateEmail,
    validatePassword,
    validatePasswordCheck,
    handleNext,
    isNextActive,
  };
}
