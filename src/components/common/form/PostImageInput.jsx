import {
  FormGroup,
  PostInputLabel,
  StyledPostImageInput,
} from "../../../styles/postCreate/postCreate.style";
import styled from "styled-components";

function PostImageInput({ onSelect, fileName }) {
  return (
    <FormGroup>
      <PostInputLabel htmlFor="post_image_input">이미지</PostInputLabel>
      <StyledPostImageInput
        type="file"
        id="post_image_input"
        name="image"
        accept="image/*"
        onChange={onSelect}
      />
      {fileName ? (
        <FileNameText>
          현재 이미지: <strong>{fileName}</strong>
        </FileNameText>
      ) : null}
    </FormGroup>
  );
}

export default PostImageInput;

const FileNameText = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: #777;
  word-break: break-all;

  strong {
    font-weight: 700;
    color: #444;
  }
`;
