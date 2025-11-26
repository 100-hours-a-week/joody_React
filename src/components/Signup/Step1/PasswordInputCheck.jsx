import {
  InputGroup,
  Label,
  InputWrapper,
  Input,
} from "../../../styles/signup/signup.style";
import InputHelper from "../../common/inputs/InputHelper";

function PasswordInputCheck({ value, onChange, helper }) {
  return (
    <InputGroup>
      <Label htmlFor="password_check">비밀번호 확인</Label>
      <InputWrapper>
        <Input
          type="password"
          id="password_check"
          placeholder="다시 한번 입력해주세요."
          value={value}
          onChange={onChange}
          required
        />
      </InputWrapper>
      <InputHelper message={helper} />
    </InputGroup>
  );
}

export default PasswordInputCheck;
