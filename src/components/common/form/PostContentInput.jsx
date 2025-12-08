import {
  FormGroup,
  PostInputLabel,
  StyledPostContentInput,
} from "../../../styles/postCreate/postCreate.style";

import styled from "styled-components";

function PostContentInput({ value, onChange }) {
  return (
    <StyledFormGroup>
      <PostInputLabel htmlFor="post_content_input">내용 *</PostInputLabel>
      <StyledPostContentInput
        id="post_content_input"
        name="content"
        value={value}
        rows="10"
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      />
    </StyledFormGroup>
  );
}

export default PostContentInput;

const StyledFormGroup = styled(FormGroup)`
  && {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
`;
