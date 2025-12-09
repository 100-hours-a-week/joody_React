import React from "react";
import ModalPortal from "../portal/ModalPortal";

import {
  CommentModelOverlay,
  ModalBox,
  ModalButtons,
  CancelButton,
  ConfirmButton,
} from "../../styles/postDetail/postDetail.style";

function DeleteCommentModal({ open, onCancel, onConfirm }) {
  if (!open) return null;

  return (
    <ModalPortal>
      <CommentModelOverlay>
        <ModalBox>
          <h2>댓글을 삭제하시겠습니까?</h2>
          <p>삭제한 내용은 복구할 수 없습니다.</p>
          <ModalButtons>
            <CancelButton onClick={onCancel}>취소</CancelButton>
            <ConfirmButton onClick={onConfirm}>확인</ConfirmButton>
          </ModalButtons>
        </ModalBox>
      </CommentModelOverlay>
    </ModalPortal>
  );
}

export default React.memo(DeleteCommentModal);
