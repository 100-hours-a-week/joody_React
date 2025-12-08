import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { fetchUserProfile, deleteUser } from "../api/user";
import { useToast } from "./useToast";

export function useProfileEdit() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [state, setState] = useState({
    profileImage: "./img/profile.png",
    uploading: false,
    email: "",
    nickname: "",
    helper: "",
    editEnabled: false,
    pendingFile: null,
  });

  const { toast, showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  // 🔹 프로필 불러오기
  useEffect(() => {
    async function loadProfile() {
      const res = await fetchUserProfile(userId);
      if (res.message === "read_success") {
        setState((prev) => ({
          ...prev,
          email: res.data.email,
          profileImage: res.data.profileImage?.startsWith("http")
            ? res.data.profileImage
            : `http://localhost:8080${res.data.profileImage}`,
        }));
      }
    }
    loadProfile();
  }, [userId]);

  // 🔹 닉네임 입력 이벤트
  function handleNicknameInput(e) {
    const v = e.target.value.replace(/\s+/g, "");
    let msg = "";
    let active = false;

    if (/\s/.test(e.target.value)) msg = "* 공백은 사용할 수 없습니다.";
    else if (v === "") msg = "* 닉네임을 입력해주세요.";
    else if (v.length > 10) msg = "* 닉네임은 최대 10자까지 작성 가능합니다.";
    else active = true;

    setState((prev) => ({
      ...prev,
      nickname: v,
      helper: msg,
      editEnabled: active,
    }));
  }

  // 🔹 프로필 수정 요청
  async function submitProfile(e) {
    e.preventDefault();

    const nextNickname = state.nickname.trim();
    const file = state.pendingFile;

    if (!file && !nextNickname) return;

    const fd = new FormData();
    if (file) fd.append("profile_image", file);
    if (nextNickname) fd.append("nickname", nextNickname);

    try {
      const res = await axiosInstance.put(`/users/${userId}/profile`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (nextNickname) {
        localStorage.setItem("nickname", nextNickname);
      }

      const newProfileImg = res.data.profileImage
        ? res.data.profileImage
        : state.profileImage;

      localStorage.setItem("profileImage", newProfileImg);
      window.dispatchEvent(new Event("profileImageUpdated"));

      setState((prev) => ({
        ...prev,
        profileImage: newProfileImg,
        pendingFile: null,
        editEnabled: false,
      }));

      showToast("수정 완료!");
    } catch (err) {
      console.log("프로필 수정 실패:", err);
      showToast("수정 실패");
    }
  }

  function handleFileSelect(file, previewUrl) {
    setState((prev) => ({
      ...prev,
      pendingFile: file,
      profileImage: previewUrl,
    }));
  }

  //   function showToast(message) {
  //     setToast({ show: true, message });
  //     setTimeout(() => setToast({ show: false, message: "" }), 2500);
  //   }

  function openWithdrawModal() {
    setModalOpen(true);
  }

  function closeWithdrawModal() {
    setModalOpen(false);
  }

  async function confirmWithdraw() {
    try {
      const res = await deleteUser(userId);

      if (res.message === "withdraw_success") {
        localStorage.clear();
        alert("회원탈퇴가 완료되었습니다.");
        navigate("/login");
      } else {
        alert("회원탈퇴 실패. 다시 시도해주세요.");
      }
    } catch (err) {
      console.log("회원탈퇴 실패:", err);
      alert("서버 오류가 발생했습니다.");
    } finally {
      setModalOpen(false);
    }
  }

  return {
    state,
    toast,
    modalOpen,
    handlers: {
      handleNicknameInput,
      handleFileSelect,
      submitProfile,
      openWithdrawModal,
      closeWithdrawModal,
      confirmWithdraw,
    },
  };
}
