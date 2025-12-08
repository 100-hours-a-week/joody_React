import {
  PostInfo,
  AuthorImage,
  AuthorName,
  PostDate,
  EditButton,
  DeleteButton,
} from "../../styles/postDetail/postDetail.style";
import { formatDate } from "../../../utils/format";

export default function PostInfos({
  authorImg,
  author,
  date,
  editable,
  onEdit,
  onDelete,
}) {
  return (
    <PostInfo>
      <AuthorImage src={authorImg} alt="작성자 이미지" />
      <AuthorName>{author}</AuthorName>
      <PostDate>{formatDate(date)}</PostDate>

      {editable && (
        <>
          <EditButton onClick={onEdit}>수정</EditButton>
          <DeleteButton onClick={onDelete}>삭제</DeleteButton>
        </>
      )}
    </PostInfo>
  );
}
