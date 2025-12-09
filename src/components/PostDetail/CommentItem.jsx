import React from "react";
import {
  StyledCommentItem,
  CommentAuthorImage,
  CommentBody,
  CommentHeader,
  CommentInfo,
  CommentAuthor,
  CommentDate,
  CommentButtons,
  EditCommentButton,
  DeleteCommentButton,
  CommentContent,
} from "../../styles/postDetail/postDetail.style";

function CommentItem({
  id,
  authorImg,
  nickname,
  date,
  content,
  editable,
  onEdit,
  onDelete,
}) {
  return (
    <StyledCommentItem data-id={id}>
      <CommentAuthorImage src={authorImg} alt="작성자 이미지" />

      <CommentBody>
        <CommentHeader>
          <CommentInfo>
            <CommentAuthor>{nickname}</CommentAuthor>
            <CommentDate>{date}</CommentDate>
          </CommentInfo>

          {editable && (
            <CommentButtons>
              <EditCommentButton
                className="edit_comment_button"
                onClick={() => onEdit(id)} // 직접 arrow
              >
                수정
              </EditCommentButton>
              <DeleteCommentButton
                onClick={() => onDelete(id)} // 직접 arrow
              >
                삭제
              </DeleteCommentButton>
            </CommentButtons>
          )}
        </CommentHeader>

        <CommentContent>{content}</CommentContent>
      </CommentBody>
    </StyledCommentItem>
  );
}

export default React.memo(CommentItem);
