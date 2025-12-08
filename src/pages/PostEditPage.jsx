import { useParams, useNavigate } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";

import MainHeader from "../components/common/header/MainHeader";
import PostForm from "../components/common/form/PostForm";
import { apiRequest } from "../api/apiRequest";

function PostEditPage() {
  const { postId } = useParams();
  const { post, loading, error } = usePostDetail(postId);
  const navigate = useNavigate();

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return null;

  const handleEditSubmit = async (formData, postId) => {
    const res = await apiRequest(`/posts/${postId}`, {
      method: "PUT",
      body: formData,
    });

    if (res.ok) {
      // 성공 후 게시글 상세 페이지로 이동
      navigate(`/post/${postId}`);

      // 토스트 사용 중이면
      // showToast("게시글이 수정되었습니다.");
    } else {
      alert("게시글 수정에 실패했습니다.");
    }
  };

  return (
    <>
      <MainHeader />
      <PostForm
        mode="edit" // form 모드 전달
        postId={postId}
        initialTitle={post.title}
        initialContent={post.content}
        initialImage={post.postImage}
        onSubmit={handleEditSubmit}
      />
    </>
  );
}

export default PostEditPage;
