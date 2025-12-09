import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import { useToast } from "./useToast";

import {
  validatePasswordValue,
  validatePasswordCheckValue,
} from "../../utils/InputValidators";

export function usePasswordEdit() {
  const navigate = useNavigate();
  const { toast, showToast } = useToast();
  const userId = localStorage.getItem("userId");

  // const [state, setState] = useState({
  //   password: "",
  //   passwordCheck: "",
  //   helperPassword: "",
  //   helperPasswordCheck: "",
  //   buttonActive: false,
  // });

  const passwordRef = useRef("");
  const passwordCheckRef = useRef("");

  const [helperPassword, setHelperPassword] = useState("");
  const [helperPasswordCheck, setHelperPasswordCheck] = useState("");
  const [buttonActive, setButtonActive] = useState(false);

  // 비밀번호 입력
  function handlePasswordInput(e) {
    const v = e.target.value;
    passwordRef.current = v;

    const pwdMsg = validatePasswordValue(v);
    setHelperPassword(pwdMsg); // helper 텍스트 표시

    // 확인칸 유효성 검사
    const checkMsg =
      passwordCheckRef.current === ""
        ? "" // 빈 상태면 표시 안함
        : validatePasswordCheckValue(v, passwordCheckRef.current);

    setHelperPasswordCheck(checkMsg);

    const active =
      pwdMsg === "" && passwordCheckRef.current !== "" && checkMsg === "";

    setButtonActive(active);
  }

  // 비밀번호 확인 입력
  function handlePasswordCheckInput(e) {
    const v = e.target.value;
    passwordCheckRef.current = v;

    const checkMsg = validatePasswordCheckValue(passwordRef.current, v);
    const pwdMsg = validatePasswordValue(passwordRef.current);

    setHelperPasswordCheck(checkMsg);
    setButtonActive(pwdMsg === "" && checkMsg === "" && v !== "");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!buttonActive) return;

    try {
      const res = await axiosInstance.put(`/users/${userId}/password`, {
        newPassword: passwordRef.current,
        newPassword_check: passwordCheckRef.current,
      });

      if (res.data.message === "password_update_success") {
        showToast("비밀번호 변경 완료! 🎉");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        showToast("❌ 현재 비밀번호와 동일하게 설정할 수 없습니다.");
        return;
      }
      showToast("비밀번호 변경 실패 ❌");
    }
  }

  return {
    state: {
      helperPassword,
      helperPasswordCheck,
      buttonActive,
    },
    toast,
    passwordRef,
    passwordCheckRef,
    handlers: {
      handlePasswordInput,
      handlePasswordCheckInput,
      handleSubmit,
    },
  };
}
