import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import HelperText from "./HelperText";
import LoginButton from "./LoginButton";
import useLoginForm from "../../hooks/useLoginForm";

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

        <HelperText message={helper} />
      </LoginFormBox>

      <LoginButton
        isActive={isActive}
        isLoading={isLoading}
        onClick={handleLogin}
      />

      <SignupLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/signup_1.html";
        }}
      >
        회원가입
      </SignupLink>
    </LoginWrapper>
  );
}

export default LoginForm;
