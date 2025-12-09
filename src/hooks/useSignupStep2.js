import { useState, useCallback, useRef, useEffect } from "react";
import { signupRequest } from "../api/user";
import { NICKNAME_REGEX, validateNickname } from "../../utils/InputValidators";

export default function useSignupStep2() {
  const nicknameRef = useRef("");
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");

  const [helperAvatar, setHelperAvatar] = useState("");
  const [helperNickname, setHelperNickname] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const validate = useCallback(() => {
    const v = nicknameRef.current.trim();
    const valid = NICKNAME_REGEX.test(v) && !!avatar;
    setIsConfirmActive(valid);
  }, [avatar]);

  useEffect(() => {
    validate();
  }, [avatar, validate]);

  const onNicknameBlur = () => {
    setHelperNickname(validateNickname(nicknameRef.current));
  };

  const onNicknameChange = (e) => {
    const value = e.target.value;

    if (/\s/.test(value)) {
      setHelperNickname("* 닉네임에는 공백을 포함할 수 없습니다.");
      nicknameRef.current = "";
      setIsConfirmActive(false);
      validate();
      return;
    }

    const v = value.replace(/\s+/g, "");

    if (v.length > 8) {
      setHelperNickname("* 닉네임은 8자까지 입력 가능합니다.");
      // nicknameRef.current = v.slice(0, 8);
      setIsConfirmActive(false);
      return;
    }

    nicknameRef.current = v;

    if (!NICKNAME_REGEX.test(v)) {
      setHelperNickname("* 닉네임은 공백 없이 1~8자까지 입력 가능합니다.");
    } else {
      setHelperNickname("");
    }

    validate(); // ⭐ 항상 실행
  };

  const onAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setAvatar(null);
      setAvatarPreview("");
      setHelperAvatar("* 프로필 사진을 추가하세요.");
      validate();
      return;
    }

    if (!file.type.startsWith("image/")) {
      setHelperAvatar("* 이미지 파일만 업로드 가능합니다.");
      validate();
      return;
    }

    const reader = new FileReader();
    reader.onload = (ev) => {
      setAvatar(file);
      setAvatarPreview(ev.target.result);
      setHelperAvatar("");
      validate();
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = useCallback(async () => {
    if (!isConfirmActive) return;

    const email = localStorage.getItem("signup_email");
    const password = localStorage.getItem("signup_password");
    const password_check = localStorage.getItem("signup_password_check");

    const formData = new FormData();
    const userData = {
      email,
      password,
      password_check,
      nickname: nicknameRef.current,
    };

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
  }, [avatar, isConfirmActive]);

  // ⭐ 반드시 return 추가!!
  return {
    avatarPreview,
    helperAvatar,
    helperNickname,
    onNicknameBlur,
    onNicknameChange,
    onAvatarChange,
    handleSubmit,
    isConfirmActive,
    isLoading,
  };
}
