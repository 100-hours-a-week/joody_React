import TextInput from "../common/inputs/TextInput";
import InputHelper from "../common/inputs/InputHelper";
import FormButton from "../common/buttons/FormButton";
import { PasswordEditStyledForm } from "../../styles/passwordEdit/passwordEdit.style";
import styled from "styled-components";

function PasswordEditForm({ state, handlers, passwordRef, passwordCheckRef }) {
  const { helperPassword, helperPasswordCheck, buttonActive } = state;
  const { handlePasswordInput, handlePasswordCheckInput, handleSubmit } =
    handlers;

  return (
    <PasswordEditStyledForm onSubmit={handleSubmit}>
      <InputGroup>
        <StyledInputPassword
          label="비밀번호"
          type="password"
          placeholder="비밀번호를 입력하세요."
          defaultValue={passwordRef.current}
          onChange={handlePasswordInput}
        />
        <InputHelper message={helperPassword} />

        <StyledInputPassword
          label="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 한번 더 입력하세요."
          defaultValue={passwordCheckRef.current}
          onChange={handlePasswordCheckInput}
        />
        <InputHelper message={helperPasswordCheck} />
      </InputGroup>

      <FormButton type="submit" disabled={!buttonActive}>
        변경하기
      </FormButton>
    </PasswordEditStyledForm>
  );
}

export default PasswordEditForm;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StyledInputPassword = styled(TextInput)`
  margin-bottom: 0 !important;

  input {
    margin-bottom: 0 !important; /* 내부 인풋 마진 강제 제거 */
  }
`;
