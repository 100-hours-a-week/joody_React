import TextInput from "../inputs/TextInput";
import PostContentInput from "./PostContentInput";
import PostImageInput from "./PostImageInput";
import InputHelper from "../inputs/InputHelper";
import FormButton from "../buttons/FormButton";
import {
  FormContainer,
  FormGroup,
} from "../../../styles/postCreate/postCreate.style";
import styled from "styled-components";

function PostForm({
  mode,
  initialTitle,
  initialContent,
  titleInputRef,
  contentInputRef,
  helper,
  submitActive,
  imageName,
  onTitleChange,
  onContentChange,
  handleImageSelect,
  handleSubmit,
}) {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <StyledTextInput
          label="제목*"
          type="text"
          defaultValue={initialTitle}
          ref={titleInputRef}
          placeholder="제목을 입력해주세요.(최대 26글자)"
          onChange={onTitleChange}
        />
      </FormGroup>

      <PostContentInput
        defaultValue={initialContent}
        ref={contentInputRef}
        onChange={onContentChange}
      />

      <StyledInputHelper message={helper} $visible={!!helper} />

      <PostImageInput onSelect={handleImageSelect} fileName={imageName} />

      <FormButton type="submit" disabled={!submitActive}>
        {mode === "edit" ? "수정하기" : "작성하기"}
      </FormButton>
    </FormContainer>
  );
}

export default PostForm;

const StyledTextInput = styled(TextInput)`
  && input[type="text"] {
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
  }
`;

const StyledInputHelper = styled(InputHelper)`
  font-size: 12px;
  color: #ff0000;
  height: 18px;
  visibility: ${(p) => (p.$visible ? "visible" : "hidden")};
`;
