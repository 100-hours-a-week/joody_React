import { Label, Input } from "../../styles/login/form.style";

function PasswordInput({ value, onChange, onBlur, onKeyDown }) {
  return (
    <>
      <Label className="password_label">비밀번호</Label>
      <Input
        type="password"
        id="password"
        value={value}
        placeholder="비밀번호를 입력하세요."
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default PasswordInput;
