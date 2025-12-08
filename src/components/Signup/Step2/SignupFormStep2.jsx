import AvatarUpload from "./AvatarUpload";
<<<<<<< HEAD
import NicknameInput from "./NicknameInput";
=======
import TextInput from "../../common/inputs/TextInput";
>>>>>>> feature/dev1
import ConfirmButton from "./ConfirmButton";
import { SignupTitle } from "../../../styles/signup/signupLayout";
import useSignupStep2 from "../../../hooks/useSignupStep2";

function SignupFormStep2() {
  const {
    avatarPreview,
    nickname,
<<<<<<< HEAD
    helperAvatar,
    helperNickname,
    onAvatarChange,
=======
    helperNickname,
    helperAvatar,
    onAvatarChange,
    onNicknameBlur,
>>>>>>> feature/dev1
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

<<<<<<< HEAD
      <NicknameInput
        nickname={nickname}
        onChange={onNicknameChange}
        helper={helperNickname}
=======
      <TextInput
        {...nickname.bind}
        helper={helperNickname || nickname.error}
        onChange={onNicknameChange}
        onBlur={onNicknameBlur}
>>>>>>> feature/dev1
      />

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
