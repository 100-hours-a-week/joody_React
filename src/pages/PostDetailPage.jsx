import { useNavigate, useParams } from "react-router-dom";

import { usePostDetail } from "../hooks/usePostDetail";

import MainHeader from "../components/common/header/MainHeader";
import PostInfos from "../components/PostDetail/PostInfos";
import PostContent from "../components/PostDetail/PostContent";
import PostStats from "../components/PostDetail/PostStats";
import CommentInput from "../components/PostDetail/CommentInput";
import CommentList from "../components/PostDetail/CommentList";
import DeletePostModal from "../components/PostDetail/DeletePostModal";
import DeleteCommentModal from "../components/PostDetail/DeleteCommentModal";

import {
  PostContainer,
  CommentContainer,
  PostTitle,
} from "../styles/postDetail/postDetail.style";

export default function PostDetailPage() {
  const navigate = useNavigate();
  const { postId } = useParams();
  const {
    post,
    comments,
    liked,
    commentValue,
    modals,
    loading,
    error,
    isEditing,
    handleLike,
    handleCommentChange,
    handleCommentSubmit,
    handleEditComment,
    openDeletePostModal,
    openDeleteCommentModal,
    handleDeletePost,
    handleDeleteComment,
    closeDeleteModals,
  } = usePostDetail(postId);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return null;

  console.log(comments);

  return (
    <>
      <MainHeader />

      <PostContainer>
        <PostTitle>{post.title}</PostTitle>

        <PostInfos
          authorImg={
            post.authorProfileImage
              ? post.authorProfileImage.startsWith("http")
                ? post.authorProfileImage
                : `http://localhost:8080${post.authorProfileImage}`
              : "/img/original_profile.png"
          }
          author={post.author}
          date={post.createdAt}
          editable={post.editable}
          onEdit={() => navigate(`/post/edit/${postId}`)}
          onDelete={openDeletePostModal}
        />

        <PostContent content={post.content} image={post.postImage} />

        <PostStats
          likes={post.likes}
          comments={post.commentCount}
          views={post.views}
          liked={liked}
          onToggleLike={handleLike}
        />
      </PostContainer>

      <CommentContainer>
        <CommentInput
          value={commentValue}
          onChange={handleCommentChange}
          onSubmit={handleCommentSubmit}
          isEditing={isEditing}
        />
        <CommentList
          comments={comments}
          onEdit={handleEditComment}
          onDelete={openDeleteCommentModal}
        />
      </CommentContainer>

      <DeletePostModal
        open={modals.postDeleteOpen}
        onCancel={closeDeleteModals}
        onConfirm={handleDeletePost}
      />

      <DeleteCommentModal
        open={modals.commentDeleteOpen}
        onCancel={closeDeleteModals}
        onConfirm={handleDeleteComment}
      />
    </>
  );
}
