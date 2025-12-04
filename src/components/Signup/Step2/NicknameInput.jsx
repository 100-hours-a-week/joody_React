import React from "react";
import InputHelper from "../../common/inputs/InputHelper";
import TextInput from "../../common/inputs/TextInput";
import { InputGroup } from "../../../styles/signup/signup.style";

function NicknameInput({ value, onChange, helper, onBlur }) {
  return (
    <InputGroup>
      <TextInput
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요."
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <InputHelper message={helper} />
    </InputGroup>
  );
}

export default NicknameInput;
