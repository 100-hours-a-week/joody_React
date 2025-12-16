import TextInput from "../../common/inputs/TextInput";
import InputHelper from "../../common/inputs/InputHelper";
import NextButton from "./NextButton";
import { SignupTitle } from "../../../styles/signup/signupLayout";
import useSignupStep1 from "../../../hooks/useSignupStep1";

import styled from "styled-components";

function SignupFormStep1() {
  const {
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
  } = useSignupStep1();

  return (
    <>
      <SignupTitle>
        이메일과 비밀번호를 <br /> 입력해주세요.
      </SignupTitle>

      <StyledInputPassword
        label="이메일"
        type="email"
        placeholder="이메일을 입력하세요."
        onChange={onEmailChange}
        onBlur={onEmailBlur}
      />
      <InputHelper message={helperEmail} />

      <StyledInputPassword
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력하세요."
        onChange={onPasswordChange}
        onBlur={onPasswordBlur}
      />
      <InputHelper message={helperPassword} />

      <StyledInputPassword
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 입력하세요."
        onChange={onPasswordCheckChange}
        onBlur={onPasswordCheckBlur}
      />
      <InputHelper message={helperPasswordCheck} />

      <NextButton isActive={isNextActive} onClick={handleNext} />
    </>
  );
}

export default SignupFormStep1;

const StyledInputPassword = styled(TextInput)`
  margin-bottom: 0 !important;

  input {
    margin-bottom: 0 !important; /* 내부 인풋 마진 강제 제거 */
  }
`;
