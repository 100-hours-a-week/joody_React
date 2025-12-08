import {
  InputGroup,
  Label,
  InputWrapper,
  Input,
} from "../../../styles/signup/signup.style";
import InputHelper from "../../common/inputs/InputHelper";

function EmailInput({ value, onChange, helper }) {
  return (
    <InputGroup>
      <Label>이메일</Label>

      <InputWrapper>
        <Input
          type="email"
          id="email"
          autoComplete="off"
          placeholder="email@example.com"
          value={value}
          onChange={onChange}
          required
        />
      </InputWrapper>

      <InputHelper message={helper} />
    </InputGroup>
  );
}

export default EmailInput;
