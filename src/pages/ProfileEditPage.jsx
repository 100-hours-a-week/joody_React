import MainHeader from "../components/common/header/MainHeader";
import ProfileEditForm from "../components/ProfileEdit/ProfileEditForm";
import DeleteModal from "../components/ProfileEdit/DeleteModal";
import Toast from "../components/ProfileEdit/Toast";
import { useProfileEdit } from "../hooks/useProfileEdit";
import {
  ProfileEditContainer,
  ProfileEditTitle,
} from "../styles/profileEdit/profileEdit.style";

function ProfileEditPage() {
  const { state, toast, modalOpen, handlers } = useProfileEdit();

  return (
    <>
      <MainHeader />
      <ProfileEditTitle>회원정보수정</ProfileEditTitle>

      <ProfileEditContainer>
        <ProfileEditForm state={state} handlers={handlers} />
      </ProfileEditContainer>

      <DeleteModal
        open={modalOpen}
        onCancel={handlers.closeWithdrawModal}
        onConfirm={handlers.confirmWithdraw}
      />

      <Toast show={toast.show} message={toast.message} />
    </>
  );
}

export default ProfileEditPage;
