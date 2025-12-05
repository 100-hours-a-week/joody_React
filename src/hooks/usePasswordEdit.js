import { useState } from "react";
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

  const [state, setState] = useState({
    password: "",
    passwordCheck: "",
    helperPassword: "",
    helperPasswordCheck: "",
    buttonActive: false,
  });

  // 비밀번호 입력
  function handlePasswordInput(e) {
    const v = e.target.value;
    const pwdMsg = validatePasswordValue(v);

    setState((prev) => {
      const checkMsg =
        prev.passwordCheck === ""
          ? "* 비밀번호 확인을 먼저 입력해주세요." // 비어있을 때 메시지 표시 or ""로 두고 disabled 조건만 설정해도 됨
          : validatePasswordCheckValue(v, prev.passwordCheck);

      const active =
        pwdMsg === "" &&
        validatePasswordCheckValue(v, prev.passwordCheck) === "" &&
        prev.passwordCheck !== ""; // ⭐ 확인칸 비었으면 false

      return {
        ...prev,
        password: v,
        helperPassword: pwdMsg,
        helperPasswordCheck: prev.passwordCheck === "" ? "" : checkMsg,
        buttonActive: active,
      };
    });
  }

  // 비밀번호 확인 입력
  function handlePasswordCheckInput(e) {
    const v = e.target.value;
    const checkMsg = validatePasswordCheckValue(state.password, v);
    const pwdMsg = validatePasswordValue(state.password);

    setState((prev) => ({
      ...prev,
      passwordCheck: v,
      helperPasswordCheck: checkMsg,
      buttonActive: pwdMsg === "" && checkMsg === "" && v !== "", // 둘 다 검증 통과 + 비어있지 않음
    }));
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!state.buttonActive) return;

    try {
      const res = await axiosInstance.put(`/users/${userId}/password`, {
        newPassword: state.password,
        newPassword_check: state.passwordCheck,
      });

      if (res.data.message === "password_update_success") {
        showToast("비밀번호 변경 완료! 🎉");

        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      //   console.log(err.response?.data?.message);
      if (err.response?.data?.message) {
        showToast("❌ 현재 비밀번호와 동일하게 설정할 수 없습니다.");
        return;
      }
      showToast("비밀번호 변경 실패 ❌");
    }
  }

  return {
    state,
    toast,
    handlers: {
      handlePasswordInput,
      handlePasswordCheckInput,
      handleSubmit,
    },
  };
}
