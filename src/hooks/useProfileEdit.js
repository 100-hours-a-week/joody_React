import { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { fetchUserProfile, deleteUser } from "../api/user";
import { useToast } from "./useToast";

export function useProfileEdit() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const nicknameRef = useRef("");

  // 👇 UI에만 영향을 주는 최소 상태만 관리
  const [editEnabled, setEditEnabled] = useState(false);
  const [helperState, setHelperState] = useState("");

  const [state, setState] = useState({
    profileImage: "./img/profile.png",
    uploading: false,
    email: "",
    pendingFile: null,
  });

  const { toast, showToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  // 프로필 불러오기
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
  const handleNicknameInput = useCallback((e) => {
    const v = e.target.value.replace(/\s+/g, "");
    nicknameRef.current = v;

    let msg = "";
    let active = false;

    if (/\s/.test(e.target.value)) msg = "* 공백은 사용할 수 없습니다.";
    else if (v === "") msg = "* 닉네임을 입력해주세요.";
    else if (v.length > 10) msg = "* 닉네임은 최대 10자까지 작성 가능합니다.";
    else active = true;

    setHelperState(msg); // ✅ 이걸로 화면에 보여줄 값 업데이트
    setEditEnabled(active);
  }, []);

  // 🔹 프로필 수정 요청
  async function submitProfile(e) {
    e.preventDefault();

    const nextNickname = nicknameRef.current.trim();
    const file = state.pendingFile;

    if (!file && !nextNickname) return;

    const fd = new FormData();
    if (file) fd.append("profile_image", file);
    if (nextNickname) fd.append("nickname", nextNickname);

    try {
      const res = await axiosInstance.put(`/users/${userId}/profile`, fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (nextNickname) localStorage.setItem("nickname", nextNickname);

      const newProfileImg = res.data.profileImage || state.profileImage;

      setState((prev) => ({
        ...prev,
        profileImage: newProfileImg,
        pendingFile: null,
      }));

      setEditEnabled(false);
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
    helper: helperState,
    editEnabled,
    nicknameRef,
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
