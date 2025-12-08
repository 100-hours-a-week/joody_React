import { useState, useEffect } from "react";
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
  mode = "create", // create | edit
  postId,
  initialTitle = "",
  initialContent = "",
  initialImage = "",
  onSubmit, // 수정 시 PostEditPage에서 전달
}) {
  // ⭐ Form State
  const [title, setTitle] = useState(() => initialTitle);
  const [content, setContent] = useState(() => initialContent);
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState(() =>
    initialImage ? getFileName(initialImage) : ""
  );

  const [helper, setHelper] = useState("");
  const [submitActive, setSubmitActive] = useState(false);
  const navigate = useNavigate();

  const isValid =
    title.trim().length > 0 && content.trim().length > 0 && title.length <= 26;

  // 입력 유효성 검사
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSubmitActive(isValid);
    if (!isValid && title.length > 26) {
      setHelper("* 제목은 최대 26자까지 가능합니다.");
    } else {
      setHelper("");
    }
  }, [isValid, title]);

  // ⭐ initialImage 들어오면 state에 반영
  useEffect(() => {
    if (mode === "edit" && initialImage) {
      setImage(initialImage);
      setImageName(getFileName(initialImage));
    }
  }, [initialImage, mode]);

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImageName(file.name);
  };

  // 📌 handleSubmit: create / edit 방식 분기
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValid) {
      setHelper("* 제목과 내용을 모두 입력해주세요.");
      return;
    }

    // FormData 준비
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image instanceof File) formData.append("image", image); // 새로 업로드한 경우만

    // 외부에서 onSubmit을 넘기면 그대로 사용
    if (onSubmit) {
      if (mode === "create") {
        onSubmit(formData);
      } else {
        onSubmit(formData, postId);
      }
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
        if (!ok) {
          alert("게시글 작성에 실패했습니다.");
          return;
        }

        const createdId =
          data?.post_id ?? data?.postId ?? data?.id ?? data?.postID;
        if (createdId) localStorage.setItem("CreatedPostId", createdId);
        navigate("/postlist");
      } else {
        const { ok } = await updatePostApi(postId, formData);
        if (!ok) {
          alert("게시글 수정에 실패했습니다.");
          return;
        }
        navigate(`/post/${postId}`);
      }
    } catch (err) {
      console.error("게시글 저장 실패:", err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <StyledTextInput
          label="제목*"
          id="post_title_input"
          type="text"
          name="title"
          placeholder="제목을 입력해주세요.(최대 26글자)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </FormGroup>

      <PostContentInput
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <StyledInputHelper message={helper} $visible={!!helper} />

      {/* 이미지 업로드 */}
      <PostImageInput onSelect={handleImageSelect} fileName={imageName} />

      <FormButton type="submit" disabled={!submitActive}>
        {mode === "edit" ? "수정하기" : "작성하기"}
      </FormButton>
    </FormContainer>
  );
}

export default PostForm;

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
