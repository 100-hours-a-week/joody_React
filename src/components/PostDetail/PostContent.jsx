import {
  PostTitle,
  PostContentBox,
  PostImage,
} from "../../styles/postDetail/postDetail.style";

export default function PostContent({ title, content, image }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>

      <PostContentBox>
        {image && <PostImage src={image} alt="게시글 이미지" />}
        <p>{content}</p>
      </PostContentBox>
    </>
  );
}
