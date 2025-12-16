import React, { forwardRef } from "react";
import {
  FormGroup,
  PostInputLabel,
  StyledPostContentInput,
} from "../../../styles/postCreate/postCreate.style";

import styled from "styled-components";

const PostContentInput = forwardRef(function PostContentInput(
  { defaultValue, onChange },
  ref
) {
  return (
    <StyledFormGroup>
      <PostInputLabel htmlFor="post_content_input">내용 *</PostInputLabel>
      <StyledPostContentInput
        ref={ref}
        id="post_content_input"
        name="content"
        defaultValue={defaultValue} // uncontrolled 적용
        rows="10"
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      />
    </StyledFormGroup>
  );
});

export default React.memo(PostContentInput);

const StyledFormGroup = styled(FormGroup)`
  && {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
  }
`;
