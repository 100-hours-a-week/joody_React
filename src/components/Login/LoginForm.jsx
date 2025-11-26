import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import LoginButton from "./LoginButton";
import useLoginForm from "../../hooks/useLoginForm";
import { Link } from "react-router-dom";

import {
  LoginWrapper,
  LoginFormBox,
  SignupLink,
} from "../../styles/login/form.style";

import InputHelper from "../common/inputs/InputHelper";

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
        <EmailInput
          value={email}
          onChange={onEmailChange}
          onBlur={onEmailBlur}
          onKeyDown={onSpacePrevent}
        />

        <PasswordInput
          value={password}
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
