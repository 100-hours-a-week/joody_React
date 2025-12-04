import { useState, useCallback, useMemo } from "react";
import { loginRequest } from "../api/auth";
import {
  validateEmailValue,
  validatePasswordValue,
  EMAIL_REGEX,
  PASSWORD_REGEX,
} from "../../utils/InputValidators";

export default function useLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [helper, setHelper] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 입력 핸들러
  // 자식에게 내려가므로 useCallback 필요
  const onEmailChange = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setEmail(v);
    setHelper(validateEmailValue(v));
  }, []);

  const onPasswordChange = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    setPassword(v);
    setHelper(validatePasswordValue(v));
  }, []);

  // blur 핸들러
  const onEmailBlur = () => validateEmailValue(email);
  const onPasswordBlur = () => validatePasswordValue(password);

  // 의존하는 값에 따라 결정되는 값 => useMemo
  const isActive = useMemo(
    () => EMAIL_REGEX.test(email) && PASSWORD_REGEX.test(password),
    [email, password]
  );

  // 로그인
  const handleLogin = useCallback(async () => {
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

      console.log(msg);

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
  }, [email, password, isActive]);

  // 스페이스 방지
  const onSpacePrevent = (e) => {
    if (e.key === " ") {
      e.preventDefault();
      setHelper("* 공백은 입력할 수 없습니다.");
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
