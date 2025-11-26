import {
  InputGroup,
  Label,
  InputWrapper,
  Input,
} from "../../../styles/signup/signup.style";
import InputHelper from "../../common/inputs/InputHelper";

function PasswordInput({ value, onChange, helper }) {
  return (
    <InputGroup>
      <Label htmlFor="password">비밀번호</Label>

      <InputWrapper>
        <Input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요."
          value={value}
          onChange={onChange}
          required
        />
      </InputWrapper>

      <InputHelper message={helper} />
    </InputGroup>
  );
}

export default PasswordInput;
