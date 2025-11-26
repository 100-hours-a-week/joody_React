import {
  SignupLayoutWrapper,
  SignupContainer,
} from "../styles/signup/signupLayout";
import SignupHeader from "../components/Signup/SignupHeader";
import SignupFormStep1 from "../components/Signup/Step1/SignupFormStep1";

function SignupStep1Page() {
  return (
    <SignupLayoutWrapper>
      <SignupHeader backTo="/login" />

      <SignupContainer>
        <SignupFormStep1 />
      </SignupContainer>
    </SignupLayoutWrapper>
  );
}

export default SignupStep1Page;
