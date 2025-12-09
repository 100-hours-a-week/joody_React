import { useNavigate, useParams } from "react-router-dom";

import { usePostDetail } from "../hooks/usePostDetail";

import MainHeader from "../components/common/header/MainHeader";
import PostDetailLayout from "../components/PostDetail/PostDetailLayout";
import DeletePostModal from "../components/PostDetail/DeletePostModal";
import DeleteCommentModal from "../components/PostDetail/DeleteCommentModal";
import Spinner from "../components/common/spinner/Spinner";

import { formatImageUrl } from "../../utils/format";

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

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;
  if (!post) return null;

  console.log(comments);

  const handlers = {
    authorImg: formatImageUrl(post.authorProfileImage),
    onEdit: () => navigate(`/post/edit/${postId}`),
    onDeletePost: openDeletePostModal,
    onDeleteComment: openDeleteCommentModal,
    onToggleLike: handleLike,
    onCommentChange: handleCommentChange,
    onCommentSubmit: handleCommentSubmit,
    onEditComment: handleEditComment,
  };

  return (
    <>
      <MainHeader />
      <PostDetailLayout
        post={post}
        comments={comments}
        liked={liked}
        commentValue={commentValue}
        isEditing={isEditing}
        handlers={handlers}
      />

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
