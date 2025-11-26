import {
  SignupLayoutWrapper,
  SignupContainer,
} from "../styles/signup/signupLayout";
import SignupHeader from "../components/Signup/SignupHeader";
import SignupFormStep2 from "../components/Signup/Step2/SignupFormStep2";

function SignupStep2Page() {
  return (
    <SignupLayoutWrapper>
      <SignupHeader backTo="/signup/step1" />
      <SignupContainer>
        <SignupFormStep2 />
      </SignupContainer>
    </SignupLayoutWrapper>
  );
}

export default SignupStep2Page;
