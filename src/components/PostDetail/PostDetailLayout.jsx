import {
  PostContainer,
  CommentContainer,
  PostTitle,
} from "../../styles/postDetail/postDetail.style";

import PostInfos from "./PostInfos";
import PostContent from "./PostContent";
import PostStatsComponent from "./PostStats";
import CommentInputBox from "./CommentInput";
import CommentList from "./CommentList";

export default function PostDetailLayout({
  post,
  comments,
  liked,
  commentValue,
  isEditing,
  handlers,
}) {
  return (
    <>
      <PostContainer>
        <PostTitle>{post.title}</PostTitle>

        <PostInfos
          authorImg={handlers.authorImg}
          author={post.author}
          date={post.createdAt}
          editable={post.editable}
          onEdit={handlers.onEdit}
          onDelete={handlers.onDeletePost}
        />

        <PostContent content={post.content} image={post.postImage} />

        <PostStatsComponent
          likes={post.likes}
          comments={post.commentCount}
          views={post.views}
          liked={liked}
          onToggleLike={handlers.onToggleLike}
        />
      </PostContainer>

      <CommentContainer>
        <CommentInputBox
          value={commentValue}
          onChange={handlers.onCommentChange}
          onSubmit={handlers.onCommentSubmit}
          isEditing={isEditing}
        />
        <CommentList
          comments={comments}
          onEdit={handlers.onEditComment}
          onDelete={handlers.onDeleteComment}
        />
      </CommentContainer>
    </>
  );
}
