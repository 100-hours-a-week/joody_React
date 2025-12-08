import TextInput from "../common/inputs/TextInput";
import FormButton from "../common/buttons/FormButton";
import AvatarUploader from "./AvatarUploader";
import InputHelper from "../common/inputs/InputHelper";
import {
  EditForm,
  ProfileImage,
  WithdrawLink,
  EmailLabel,
  EmailDisplay,
} from "../../styles/profileEdit/profileEdit.style";
import styled from "styled-components";

function ProfileEditForm({ state, handlers }) {
  const { profileImage, uploading, email, nickname, helper, editEnabled } =
    state;
  const {
    handleFileSelect,
    handleNicknameInput,
    submitProfile,
    openWithdrawModal,
  } = handlers;

  const canSubmit = editEnabled || !!state.pendingFile;

  return (
    <EditForm encType="multipart/form-data">
      <ProfileImage>프로필 사진*</ProfileImage>

      <AvatarUploader
        image={profileImage}
        uploading={uploading}
        setImage={handleFileSelect}
      />

      <EmailLabel>이메일</EmailLabel>
      <EmailDisplay>{email}</EmailDisplay>

      <InputGroup>
        {/* 닉네임 입력 */}
        <StyledInputForProfile
          label="닉네임*"
          id="nickname"
          name="nickname"
          value={nickname}
          placeholder="닉네임을 입력하세요."
          onChange={handleNicknameInput}
        />

        {/* 헬퍼 텍스트 */}
        <InputHelper message={helper} />
      </InputGroup>

      {/* 수정 버튼 */}
      <FormButton disabled={!canSubmit} onClick={submitProfile}>
        수정하기
      </FormButton>

      {/* 회원탈퇴 */}
      <WithdrawLink onClick={openWithdrawModal}>회원탈퇴</WithdrawLink>
    </EditForm>
  );
}

export default ProfileEditForm;

// 스타일 따로 적용
const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputForProfile = styled(TextInput)`
  margin-bottom: 0 !important;

  input {
    margin-bottom: 0 !important; /* 내부 인풋 마진 강제 제거 */
  }
`;
