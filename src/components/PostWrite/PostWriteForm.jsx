import TextInput from "../common/inputs/TextInput";
import PostWriteContentInput from "./PostWriteContentInput";
import PostWriteImageInput from "./PostWriteImageInput";
import InputHelper from "../common/inputs/InputHelper";
import FormButton from "../common/buttons/FormButton";
import {
  FormContainer,
  FormGroup,
} from "../../styles/postCreate/postCreate.style";
import { usePostWrite } from "../../hooks/usePostWrite";

import styled from "styled-components";

function PostWriteForm() {
  const {
    title,
    content,
    submitActive,
    helper,
    handleTitleInput,
    handleContentInput,
    handleImageSelect,
    handleSubmit,
  } = usePostWrite();
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <StyledTextInput
          label="제목*"
          id="post_title_input"
          type="text"
          name="title"
          placeholder="제목을 입력해주세요.(최대 26글자)"
          value={title}
          onChange={(e) => handleTitleInput(e.target.value)}
        />
      </FormGroup>
      <PostWriteContentInput
        value={content}
        onChange={(e) => handleContentInput(e.target.value)}
      />
      <StyledInputHelper message={helper} $visible={!!helper} />

      {/* 이미지 업로드 */}
      <PostWriteImageInput
        onSelect={(e) => handleImageSelect(e.target.files[0])}
      />

      <FormButton type="submit" disabled={!submitActive}>
        작성하기
      </FormButton>
    </FormContainer>
  );
}
export default PostWriteForm;

const StyledTextInput = styled(TextInput)`
  && input[type="text"] {
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
    background-color: #ffffff;
    border-radius: 0;
    padding: 10px 8px;
    font-size: 13px;
    resize: none;
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  && input[type="text"]:focus {
    outline: none;
    border-color: #4baa7d;
  }
`;

const StyledInputHelper = styled(InputHelper)`
  font-size: 12px;
  margin: 4px 0 48px 4px;
  color: #ff0000;
  height: 18px;
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;
