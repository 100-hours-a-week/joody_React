import React from "react";
import CommentItem from "./CommentItem";
import { StyledCommentList } from "../../styles/postDetail/postDetail.style";
import { formatDate } from "../../../utils/format";
import { canEditComment } from "../../../utils/permissions";

function CommentList({ comments, onEdit, onDelete }) {
  return (
    <StyledCommentList>
      {comments.map((c) => {
        const avatar = c.authorProfileImage
          ? c.authorProfileImage.startsWith("http")
            ? c.authorProfileImage
            : `http://localhost:8080${c.authorProfileImage}`
          : "./img/original_profile.png";

        const nickname = c.authorNickname || c.author || "익명";

        const dateText =
          c.updatedAt && c.updatedAt !== c.createdAt
            ? `${formatDate(c.updatedAt)} (수정됨)`
            : formatDate(c.createdAt);

        const editable = canEditComment(c.authorId);

        return (
          <CommentItem
            key={c.id}
            id={c.id}
            authorImg={avatar}
            nickname={nickname}
            date={dateText}
            content={c.content}
            editable={editable}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </StyledCommentList>
  );
}

export default React.memo(CommentList);
