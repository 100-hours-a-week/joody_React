import TextInput from "../../common/inputs/TextInput";
import InputHelper from "../../common/inputs/InputHelper";
import NextButton from "./NextButton";
import { SignupTitle } from "../../../styles/signup/signupLayout";
import useSignupStep1 from "../../../hooks/useSignupStep1";

function SignupFormStep1() {
  const {
    email,
    password,
    passwordCheck,
    onEmailBlur,
    onPasswordBlur,
    onPasswordCheckBlur,
    handleNext,
    isNextActive,
  } = useSignupStep1();

  return (
    <>
      <SignupTitle>
        이메일과 비밀번호를 <br /> 입력해주세요.
      </SignupTitle>

      <TextInput
        label="이메일"
        type="email"
        placeholder="이메일을 입력하세요."
        {...email.bind}
        onBlur={onEmailBlur}
      />
      <InputHelper message={email.error} />

      <TextInput
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력하세요."
        {...password.bind}
        onBlur={onPasswordBlur}
      />
      <InputHelper message={password.error} />

      <TextInput
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 입력하세요."
        {...passwordCheck.bind}
        onBlur={onPasswordCheckBlur}
      />
      <InputHelper message={passwordCheck.error} />

      <NextButton isActive={isNextActive} onClick={handleNext} />
    </>
  );
}

export default SignupFormStep1;
