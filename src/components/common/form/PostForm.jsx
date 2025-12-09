import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../inputs/TextInput";
import PostContentInput from "./PostContentInput";
import PostImageInput from "./PostImageInput";
import InputHelper from "../inputs/InputHelper";
import FormButton from "../buttons/FormButton";

import {
  FormContainer,
  FormGroup,
} from "../../../styles/postCreate/postCreate.style";
import { createPostApi, updatePostApi } from "../../../api/post";

import styled from "styled-components";

function PostForm({
  mode = "create",
  postId,
  initialTitle = "",
  initialContent = "",
  initialImage = "",
  onSubmit,
}) {
  const titleRef = useRef(initialTitle);
  const contentRef = useRef(initialContent);

  // ⭐ input DOM 제어용 ref
  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(() =>
    initialImage ? getFileName(initialImage) : ""
  );

  const [helper, setHelper] = useState("");
  const [submitActive, setSubmitActive] = useState(false);

  const navigate = useNavigate();

  const validate = useCallback(() => {
    const isValid =
      titleRef.current.trim().length > 0 &&
      contentRef.current.trim().length > 0 &&
      titleRef.current.length <= 26;

    setSubmitActive(isValid);

    if (!isValid && titleRef.current.length > 26) {
      setHelper("* 제목은 최대 26자까지 가능합니다.");
    } else {
      setHelper("");
    }
  }, []);

  // 🎯 edit 모드에서 input 값을 DOM에 주입
  useEffect(() => {
    if (mode === "edit") {
      titleRef.current = initialTitle;
      contentRef.current = initialContent;

      if (titleInputRef.current) titleInputRef.current.value = initialTitle;
      if (contentInputRef.current)
        contentInputRef.current.value = initialContent;

      validate();
    }
  }, [mode, initialTitle, initialContent, validate]);

  const onTitleChange = useCallback(
    (e) => {
      titleRef.current = e.target.value;
      validate();
    },
    [validate]
  );

  const onContentChange = useCallback(
    (e) => {
      contentRef.current = e.target.value;
      validate();
    },
    [validate]
  );

  const handleImageSelect = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);
    setImageName(file.name);
  }, []);

  useEffect(() => {
    if (mode === "edit" && initialImage) {
      setImage(initialImage);
      setImageName(getFileName(initialImage));
    }
  }, [initialImage, mode]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!submitActive) {
      setHelper("* 제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleRef.current);
    formData.append("content", contentRef.current);
    if (image instanceof File) formData.append("image", image);

    if (onSubmit) {
      mode === "create" ? onSubmit(formData) : onSubmit(formData, postId);
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }

    try {
      if (mode === "create") {
        const { ok, data } = await createPostApi(userId, formData);
        if (!ok) return alert("게시글 작성 실패");

        const createdId = data?.post_id ?? data?.postId ?? data?.id;
        if (createdId) localStorage.setItem("CreatedPostId", createdId);
        navigate("/postlist");
      } else {
        const { ok } = await updatePostApi(postId, formData);
        if (!ok) return alert("게시글 수정 실패");
        navigate(`/post/${postId}`);
      }
    } catch (err) {
      console.error("게시글 저장 실패:", err);
      alert("서버 오류입니다.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <StyledTextInput
          label="제목*"
          type="text"
          defaultValue={initialTitle}
          ref={titleInputRef} // ⭐ DOM 직접 참조
          placeholder="제목을 입력해주세요.(최대 26글자)"
          onChange={onTitleChange}
        />
      </FormGroup>

      <PostContentInput
        defaultValue={initialContent}
        ref={contentInputRef} // ⭐ DOM 직접 참조
        onChange={onContentChange}
      />

      <StyledInputHelper message={helper} $visible={!!helper} />

      <PostImageInput onSelect={handleImageSelect} fileName={imageName} />

      <FormButton type="submit" disabled={!submitActive}>
        {mode === "edit" ? "수정하기" : "작성하기"}
      </FormButton>
    </FormContainer>
  );
}

export default PostForm;

// === 스타일 ===
const StyledTextInput = styled(TextInput)`
  && input[type="text"] {
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
    background-color: #ffffff;
    border-radius: 0;
    padding: 10px 8px;
    font-size: 13px;
    resize: none;
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  && input[type="text"]:focus {
    outline: none;
    border-color: #4baa7d;
  }
`;

const StyledInputHelper = styled(InputHelper)`
  font-size: 12px;
  margin: 4px 0 48px 4px;
  color: #ff0000;
  height: 18px;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;

const getFileName = (path) => {
  if (!path) return "";
  const cleanedPath = path.split("?")[0];
  const parts = cleanedPath.split("/");
  return parts[parts.length - 1] || "";
};
