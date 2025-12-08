import {
  PostModalOverlay,
  ModalBox,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "../../styles/postDetail/postDetail.style";

export default function DeletePostModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <PostModalOverlay>
      <ModalBox>
        <h2>게시글을 삭제하시겠습니까?</h2>
        <p>삭제한 내용은 복구할 수 없습니다.</p>
        <ModalButtons>
          <CancelButton onClick={onCancel}>취소</CancelButton>
          <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
        </ModalButtons>
      </ModalBox>
    </PostModalOverlay>
  );
}
