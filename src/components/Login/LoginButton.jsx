import { SubmitButton } from "../../styles/login/form.style";

function LoginButton({ isActive, isLoading, onClick }) {
  return (
    <SubmitButton
      type="button"
      disabled={!isActive || isLoading}
      style={{
        backgroundColor: isActive ? "#4BAA7D" : "#dcdbe3",
        color: "#fff",
      }}
      onClick={onClick}
    >
      {isLoading ? "로딩 중..." : "로그인"}
    </SubmitButton>
  );
}

export default LoginButton;
