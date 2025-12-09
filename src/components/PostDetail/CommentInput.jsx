import { useState, useEffect, useCallback } from "react";
import React from "react";
import {
  CommentWriteBox,
  CommentInput,
  CommentSubmit,
} from "../../styles/postDetail/postDetail.style";

const CommentInputBox = React.memo(function CommentInputBox({
  onSubmit,
  isEditing,
  editingText, // 수정 시 기존 텍스트 전달
}) {
  const [value, setValue] = useState(editingText || "");
  const isDisabled = value.trim().length === 0;

  // 수정 모드로 변경될 때 value에 기존 내용 채워넣음
  useEffect(() => {
    if (isEditing && editingText) {
      setValue(editingText);
    }
  }, [isEditing, editingText]);

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSubmit(value, () => setValue("")); // reset callback
  };

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <CommentWriteBox>
      <CommentInput
        id="commentInput"
        name="comment"
        placeholder="댓글을 남겨주세요!"
        value={value}
        onChange={handleChange}
      />
      <CommentSubmit type="button" onClick={handleSubmit} disabled={isDisabled}>
        {isEditing ? "댓글 수정" : "댓글 등록"}
      </CommentSubmit>
    </CommentWriteBox>
  );
});

export default CommentInputBox;
