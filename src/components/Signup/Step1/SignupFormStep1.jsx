import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import PasswordInputCheck from "./PasswordInputCheck";
import NextButton from "./NextButton";
import { SignupTitle } from "../../../styles/signup/signupLayout";
import useSignupStep1 from "../../../hooks/useSignupStep1";

function SignupFormStep1() {
  const {
    email,
    password,
    passwordCheck,
    helperEmail,
    helperPassword,
    helperPasswordCheck,
    onEmailChange,
    onPasswordChange,
    onPasswordCheckChange,
    handleNext,
    isNextActive,
  } = useSignupStep1();

  return (
    <>
      <SignupTitle>
        이메일과 비밀번호를 <br /> 입력해주세요.
      </SignupTitle>

      <EmailInput email={email} onChange={onEmailChange} helper={helperEmail} />

      <PasswordInput
        password={password}
        onChange={onPasswordChange}
        helper={helperPassword}
      />

      <PasswordInputCheck
        passwordCheck={passwordCheck}
        onChange={onPasswordCheckChange}
        helper={helperPasswordCheck}
      />

      <NextButton disabled={!isNextActive} onClick={handleNext} />
    </>
  );
}

export default SignupFormStep1;
