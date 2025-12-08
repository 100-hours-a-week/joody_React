import InputHelper from "../../common/inputs/InputHelper";
import {
  InputGroup,
  Label,
  InputWrapper,
  Input,
} from "../../../styles/signup/signup.style";

function NicknameInput({ value, onChange, helper }) {
  return (
    <InputGroup>
      <Label>닉네임</Label>
      <InputWrapper>
        <Input
          type="text"
          maxLength={10}
          placeholder="닉네임을 입력해주세요."
          value={value}
          onChange={onChange}
        />
      </InputWrapper>
      <InputHelper message={helper} />
    </InputGroup>
  );
}

export default NicknameInput;
