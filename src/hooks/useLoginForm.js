import { useState } from "react";
import { loginRequest } from "../api/auth";

export default function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helper, setHelper] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  // 이메일 검증
  const validateEmail = (value) => {
    if (!value.trim()) {
      setHelper("* 이메일을 입력해주세요.");
      return false;
    }
    if (!emailRegex.test(value.trim())) {
      setHelper("* 올바른 이메일 형식을 입력해주세요.");
      return false;
    }
    setHelper("");
    return true;
  };

  // 비밀번호 검증
  const validatePassword = (value) => {
    if (!value.trim()) {
      setHelper("* 비밀번호를 입력해주세요.");
      return false;
    }
    if (!passwordRegex.test(value.trim())) {
      setHelper("* 비밀번호는 대문자/소문자/숫자/특수문자 포함해야 합니다.");
      return false;
    }
    setHelper("");
    return true;
  };

  // 입력 핸들러
  const onEmailChange = (e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setEmail(v);
    validateEmail(v);
  };

  const onPasswordChange = (e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setPassword(v);
    validatePassword(v);
  };

  // blur 핸들러
  const onEmailBlur = () => validateEmail(email);
  const onPasswordBlur = () => validatePassword(password);

  // 스페이스 방지
  const onSpacePrevent = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setHelper("* 공백은 입력할 수 없습니다.");
    }
  };

  // 로그인 버튼 활성화 여부
  const isActive = emailRegex.test(email) && passwordRegex.test(password);

  // 로그인
  const handleLogin = async () => {
    if (!isActive) return;

    setIsLoading(true);
    setHelper("");

    try {
      const json = await loginRequest(email.trim(), password.trim());

      console.log(json);

      // 로그인 실패
      if (json?.message === "invalid_credentials") {
        setHelper("* 아이디 또는 비밀번호를 확인해주세요.");
        return;
      }

      // 저장
      localStorage.setItem("access_token", json.data.accessToken);
      const user = json.data.user;
      localStorage.setItem("userId", user.id);
      localStorage.setItem("nickname", user.nickname);
      localStorage.setItem("profileImage", user.profileImage);

      window.location.href = "/postList.html";
    } catch (error) {
      //   console.error(error);
      const msg = error.message;

      //   console.log(msg);

      if (msg === "invalid_credentials") {
        setHelper("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else {
        setHelper("서버 오류입니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    helper,
    isLoading,
    isActive,
    onEmailChange,
    onPasswordChange,
    onEmailBlur,
    onPasswordBlur,
    onSpacePrevent,
    handleLogin,
  };
}
