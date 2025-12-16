import MainHeader from "../../src/components/common/header/MainHeader";
import PasswordEditForm from "../components/PasswordEdit/PasswordEditForm";
import { usePasswordEdit } from "../hooks/usePasswordEdit";
import Toast from "../components/ProfileEdit/Toast";
import {
  PasswordEditTitle,
  PasswordEditContainer,
} from "../styles/passwordEdit/passwordEdit.style";

function PasswordEditPage() {
  const { state, toast, passwordRef, passwordCheckRef, handlers } =
    usePasswordEdit();

  return (
    <>
      <MainHeader />
      <PasswordEditTitle>비밀번호 변경</PasswordEditTitle>
      <PasswordEditContainer>
        <PasswordEditForm
          state={state}
          handlers={handlers}
          passwordRef={passwordRef}
          passwordCheckRef={passwordCheckRef}
        />
      </PasswordEditContainer>
      <Toast show={toast.show} message={toast.message} />
    </>
  );
}

export default PasswordEditPage;
