import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { createPostApi, updatePostApi } from "../api/post";

export function usePostForm({
  mode = "create",
  postId,
  initialTitle = "",
  initialContent = "",
  initialImage = "",
  onSuccess, // 성공 후 동작만 넘김
}) {
  const navigate = useNavigate();

  const titleRef = useRef(initialTitle);
  const contentRef = useRef(initialContent);

  const titleInputRef = useRef(null);
  const contentInputRef = useRef(null);

  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");

  const [helper, setHelper] = useState("");
  const [submitActive, setSubmitActive] = useState(false);

  const validate = useCallback(() => {
    const title = titleRef.current ?? "";
    const content = contentRef.current ?? "";

    const valid =
      title.trim().length > 0 &&
      content.trim().length > 0 &&
      title.length <= 26;

    setSubmitActive(valid);
    setHelper(!valid && title.length > 26 ? "* 제목은 최대 26자입니다." : "");
  }, []);

  // 수정 모드일 때 기존 데이터 주입
  useEffect(() => {
    if (mode === "edit") {
      if (titleInputRef.current) titleInputRef.current.value = initialTitle;
      if (contentInputRef.current)
        contentInputRef.current.value = initialContent;

      titleRef.current = initialTitle;
      contentRef.current = initialContent;
      validate();
    }
  }, [mode, initialTitle, initialContent, validate]);

  // 기존 이미지 파일명 가져오기
  useEffect(() => {
    if (mode === "edit" && initialImage) {
      setImage(initialImage); // 필요하면 미리보기용으로 활용할 수 있음
      setImageName(getFileName(initialImage));
    }
  }, [mode, initialImage]);

  const onTitleChange = (e) => {
    titleRef.current = e.target.value;
    validate();
  };

  const onContentChange = (e) => {
    contentRef.current = e.target.value;
    validate();
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImage(file);
    setImageName(file.name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!submitActive) {
      setHelper("* 제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", titleRef.current.trim());
    formData.append("content", contentRef.current.trim());
    if (image instanceof File) formData.append("image", image);

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }

    try {
      let result;
      if (mode === "create") {
        result = await createPostApi(userId, formData);
      } else {
        result = await updatePostApi(postId, formData);
      }

      if (!result.ok) {
        return alert(
          mode === "create" ? "게시글 작성 실패" : "게시글 수정 실패"
        );
      }

      // 성공 후 수행할 동작
      onSuccess?.();
    } catch (err) {
      console.error("게시글 저장 실패:", err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return {
    titleInputRef,
    contentInputRef,
    titleRef,
    contentRef,
    helper,
    submitActive,
    imageName,
    onTitleChange,
    onContentChange,
    handleImageSelect,
    handleSubmit,
    forceValidate: validate,
  };
}

const getFileName = (path) => path?.split("?")[0].split("/").pop() ?? "";
