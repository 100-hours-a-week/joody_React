import AvatarUpload from "./AvatarUpload";
import TextInput from "../../common/inputs/TextInput";
import ConfirmButton from "./ConfirmButton";
import InputHelper from "../../common/inputs/InputHelper";
import { SignupTitle } from "../../../styles/signup/signupLayout";
import useSignupStep2 from "../../../hooks/useSignupStep2";

function SignupFormStep2() {
  const {
    avatarPreview,
    nickname,
    helperNickname,
    helperAvatar,
    onAvatarChange,
    onNicknameBlur,
    onNicknameChange,
    handleSubmit,
    isConfirmActive,
    isLoading,
  } = useSignupStep2();

  return (
    <>
      <SignupTitle>
        프로필 사진과 <br /> 닉네임을 설정해주세요.
      </SignupTitle>

      <AvatarUpload
        preview={avatarPreview}
        onChange={onAvatarChange}
        helper={helperAvatar}
      />
      <TextInput
        label="닉네임"
        id="nickname"
        name="nickname"
        placeholder="닉네임을 입력해주세요."
        onChange={onNicknameChange}
        onBlur={onNicknameBlur}
      />
      <InputHelper message={helperNickname} />

      <ConfirmButton
        disabled={!isConfirmActive || isLoading}
        onClick={handleSubmit}
      >
        {isLoading ? "등록 중..." : "완료"}
      </ConfirmButton>
    </>
  );
}

export default SignupFormStep2;
