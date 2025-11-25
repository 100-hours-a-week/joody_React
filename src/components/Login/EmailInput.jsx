import { Label, Input } from "../../styles/login/form.style";

function EmailInput({ value, onChange, onBlur, onKeyDown }) {
  return (
    <>
      <Label>이메일</Label>
      <Input
        type="email"
        value={value}
        placeholder="이메일을 입력하세요."
        autoComplete="off"
        onChange={onChange}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
      />
    </>
  );
}

export default EmailInput;
