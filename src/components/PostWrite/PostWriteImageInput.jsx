import {
  FormGroup,
  PostInputLabel,
  PostImageInput,
} from "../../styles/postCreate/postCreate.style";

function PostWriteImageInput({ onSelect }) {
  return (
    <FormGroup>
      <PostInputLabel htmlFor="post_image_input">이미지</PostInputLabel>
      <PostImageInput
        type="file"
        id="post_image_input"
        name="image"
        accept="image/*"
        onChange={onSelect}
      />
    </FormGroup>
  );
}

export default PostWriteImageInput;
