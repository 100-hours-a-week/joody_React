import { useState, useCallback, useMemo, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../api/auth";
import {
  validateEmailValue,
  validatePasswordValue,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../utils/InputValidators";

export default function useLoginForm() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [helper, setHelper] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // 입력 핸들러
  const onEmailChange = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    emailRef.current = v;
    setHelper(validateEmailValue(v));
  }, []);

  const onPasswordChange = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    passwordRef.current = v;
    setHelper(validatePasswordValue(v));
  }, []);

  // blur 핸들러
  const onEmailBlur = useCallback(
    () => validateEmailValue(emailRef.current),
    []
  );
  const onPasswordBlur = useCallback(
    () => validatePasswordValue(passwordRef.current),
    []
  );

  // 버튼 활성화 조건 -> useMemo
  const isActive = useMemo(() => {
    return (
      EMAIL_REGEX.test(emailRef.current) &&
      PASSWORD_REGEX.test(passwordRef.current)
    );
  }, [helper]); // helper만 바뀔 때 재연산

  // 로그인
  const handleLogin = async () => {
    if (!isActive) return;

    setIsLoading(true);
    setHelper("");

    try {
      const json = await loginRequest(
        emailRef.current.trim(),
        passwordRef.current.trim()
      );

      if (json?.message === "invalid_credentials") {
        setHelper("* 아이디 또는 비밀번호를 확인해주세요.");
        return;
      }

      localStorage.setItem("access_token", json.data.accessToken);
      const user = json.data.user;
      localStorage.setItem("userId", user.id);
      localStorage.setItem("nickname", user.nickname);
      localStorage.setItem("profileImage", user.profileImage);

      navigate("/postlist");
    } catch (error) {
      const msg = error.message;

      if (msg === "invalid_credentials") {
        setHelper("이메일 또는 비밀번호가 일치하지 않습니다.");
      } else if (msg === "deleted_or_not_found_user") {
        setHelper("탈퇴한 계정입니다.");
      } else {
        setHelper("서버 오류입니다. 다시 시도해주세요.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // 스페이스 방지
  const onSpacePrevent = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setHelper("* 공백은 입력할 수 없습니다.");
    }
  };

  return {
    helper,
    isLoading,
    isActive,
    onEmailChange,
    onPasswordChange,
    onEmailBlur,
    onPasswordBlur,
    onSpacePrevent,
    handleLogin,
    emailRef,
    passwordRef,
  };
}
