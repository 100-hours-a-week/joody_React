import {
  ModalOverlay,
  ModalContainer,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "../../styles/profileEdit/profileEdit.style";

function DeleteModal({ open, onCancel, onConfirm }) {
  if (!open) return null; // hidden 처리 대신 컴포넌트 자체 제거

  return (
    <ModalOverlay>
      <ModalContainer>
        <h2>회원탈퇴 하시겠습니까?</h2>
        <p>작성된 게시글과 댓글은 삭제됩니다.</p>

        <ModalButtons>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
}

export default DeleteModal;
