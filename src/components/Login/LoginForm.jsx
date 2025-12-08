import TextInput from "../common/inputs/TextInput";
import InputHelper from "../common/inputs/InputHelper";
import LoginButton from "./LoginButton";
import useLoginForm from "../../hooks/useLoginForm";
import { Link } from "react-router-dom";

import {
  LoginWrapper,
  LoginFormBox,
  SignupLink,
} from "../../styles/login/form.style";

function LoginForm() {
  const {
    email,
    password,
    helper,
    isActive,
    isLoading,
    onEmailChange,
    onPasswordChange,
    onEmailBlur,
    onPasswordBlur,
    onSpacePrevent,
    handleLogin,
  } = useLoginForm();

  return (
    <LoginWrapper>
      <LoginFormBox onSubmit={(e) => e.preventDefault()}>
        <TextInput
          label="이메일"
          type="email"
          value={email}
          placeholder="이메일을 입력하세요."
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          onKeyDown={onSpacePrevent}
        />

        <TextInput
          label="비밀번호"
          type="password"
          value={password}
          placeholder="비밀번호를 입력하세요."
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
          onKeyDown={onSpacePrevent}
        />

        <InputHelper message={helper} />
      </LoginFormBox>

      <LoginButton
        isActive={isActive}
        isLoading={isLoading}
        onClick={handleLogin}
      />

      <SignupLink as={Link} to="/signup/step1">
        회원가입
      </SignupLink>
    </LoginWrapper>
  );
}

export default LoginForm;
