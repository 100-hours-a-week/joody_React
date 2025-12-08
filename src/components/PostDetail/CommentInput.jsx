import {
  CommentWriteBox,
  CommentInput,
  CommentSubmit,
} from "../../styles/postDetail/postDetail.style";

export default function CommentInputBox({
  value,
  onChange,
  onSubmit,
  isEditing,
}) {
  const isDisabled = value.trim().length === 0;

  return (
    <CommentWriteBox>
      <CommentInput
        id="commentInput"
        name="comment"
        placeholder="댓글을 남겨주세요!"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <CommentSubmit type="button" onClick={onSubmit} disabled={isDisabled}>
        {isEditing ? "댓글 수정" : "댓글 등록"}
      </CommentSubmit>
    </CommentWriteBox>
  );
}
