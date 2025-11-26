import { useState, useCallback } from "react";
import { signupRequest } from "../api/user";

export default function useSignupStep2() {
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");

  const [helperAvatar, setHelperAvatar] = useState("");
  const [helperNickname, setHelperNickname] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const nicknameRegex = /^[^\s]{1,8}$/;

  const onNicknameChange = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    if (v.length > 8) return;

    setNickname(v);

    if (!nicknameRegex.test(v)) {
      setHelperNickname("* 닉네임은 공백 없이 1~8자까지 입력 가능합니다.");
    } else {
      setHelperNickname("");
    }
  }, []);

  const onAvatarChange = useCallback((e) => {
    const file = e.target.files[0];
    if (!file) {
      setAvatar(null);
      setAvatarPreview("");
      setHelperAvatar("* 프로필 사진을 추가하세요.");
      return;
    }

    if (!file.type.startsWith("image/")) {
      setHelperAvatar("* 이미지 파일만 업로드 가능합니다.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setAvatar(file);
      setAvatarPreview(event.target.result);
      setHelperAvatar("");
    };

    reader.readAsDataURL(file);
  }, []);

  const isConfirmActive = nicknameRegex.test(nickname) && !!avatar;

  const handleSubmit = useCallback(async () => {
    if (!isConfirmActive) return;

    const email = localStorage.getItem("signup_email");
    const password = localStorage.getItem("signup_password");
    const password_check = localStorage.getItem("signup_password_check");

    const formData = new FormData();
    const userData = { email, password, password_check, nickname };

    formData.append(
      "user",
      new Blob([JSON.stringify(userData)], { type: "application/json" })
    );
    formData.append("profile_image", avatar);

    setIsLoading(true);

    try {
      const data = await signupRequest(formData);

      if (data.message === "duplicate_nickname") {
        setHelperNickname("* 중복된 닉네임입니다.");
        return;
      }

      localStorage.clear();
      window.location.href = "/login";
    } catch (err) {
      console.error("회원가입 오류:", err);
      alert("서버 오류 발생");
    } finally {
      setIsLoading(false);
    }
  }, [nickname, avatar, isConfirmActive]);

  return {
    nickname,
    avatarPreview,
    helperAvatar,
    helperNickname,
    isLoading,
    onNicknameChange,
    onAvatarChange,
    handleSubmit,
    isConfirmActive,
  };
}
