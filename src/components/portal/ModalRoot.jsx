import ModalPortal from "./ModalPortal";
import DeletePostModal from "../PostDetail/DeletePostModal";
import DeleteCommentModal from "../PostDetail/DeleteCommentModal";
import React from "react";

export default function ModalRoot({
  postModal,
  commentModal,
  handleDeletePost,
  handleDeleteComment,
}) {
  return (
    <ModalPortal>
      <DeletePostModal
        open={postModal.open}
        onCancel={postModal.hide}
        onConfirm={() => {
          handleDeletePost();
          postModal.hide();
        }}
      />

      <DeleteCommentModal
        open={commentModal.open}
        onCancel={commentModal.hide}
        onConfirm={() => {
          handleDeleteComment();
          commentModal.hide();
        }}
      />
    </ModalPortal>
  );
}
