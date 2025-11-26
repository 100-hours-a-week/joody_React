import { useNavigate } from "react-router-dom";
import { HeaderWrapper, BackButton } from "../../styles/signup/signupHeader";

function SignupHeader({ backTo }) {
  const navigate = useNavigate();
  return (
    <HeaderWrapper>
      <BackButton
        src="/img/back.png"
        alt="뒤로가기"
        onClick={() => navigate(backTo)}
      />
    </HeaderWrapper>
  );
}

export default SignupHeader;
