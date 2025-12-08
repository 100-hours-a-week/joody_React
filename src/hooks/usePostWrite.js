import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "./useDebounce";
import { useThrottle } from "./useThrottle";
import { apiRequest } from "../api/apiRequest";

export function usePostWrite() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [previewURL, setPreviewURL] = useState("");
  const [helper, setHelper] = useState("");

  // 디바운스된 값 얻기
  const debouncedTitle = useDebounce(title, 120);
  const debouncedContent = useDebounce(content, 120);
  const submitActive = debouncedTitle.trim() && debouncedContent.trim();

  // ===== 제목 처리 =====
  const handleTitleInput = (v) => {
    let trimmed = v;

    // 26자 이상일 경우 자르고 안내 메시지 표시
    if (trimmed.length > 26) {
      trimmed = trimmed.slice(0, 26);
      setHelper("* 제목은 최대 26자까지 입력 가능합니다.");
    } else if (!trimmed.trim()) {
      setHelper("* 제목을 입력해주세요.");
    } else {
      setHelper("");
    }

    setTitle(trimmed);
  };
  // ===== 내용 처리 =====
  const handleContentInput = (v) => {
    setContent(v);

    if (!v.trim()) {
      setHelper("* 내용을 입력해주세요.");
    } else {
      setHelper("");
    }
  };

  // ===== 이미지 처리 (throttle) =====
  const handleImageSelect = useThrottle((file) => {
    if (!file) return;
    setImage(file);
    setPreviewURL(URL.createObjectURL(file));
  }, 300);

  // ===== 제출 =====
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("로그인이 필요합니다.");
      return navigate("/login");
    }

    if (!title.trim() || !content.trim()) {
      setHelper("* 제목과 내용을 모두 입력해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title.trim());
    formData.append("content", content.trim());
    if (image) formData.append("image", image);

    try {
      const result = await apiRequest(`/posts/${userId}`, {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!result.ok) {
        alert("게시글 작성 실패");
        return;
      }

      localStorage.setItem("CreatedPostId", result.data.post_id);
      navigate("/postlist");
    } catch (err) {
      console.error("게시글 작성 오류:", err);
      alert("서버 오류가 발생했습니다.");
    }
  };

  return {
    title,
    content,
    image,
    previewURL,
    submitActive,
    helper,
    handleTitleInput,
    handleContentInput,
    handleImageSelect,
    handleSubmit,
  };
}
