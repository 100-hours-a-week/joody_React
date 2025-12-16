import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePostDetail } from "../hooks/usePostDetail";
import { usePostForm } from "../hooks/usePostForm";
import MainHeader from "../components/common/header/MainHeader";
import PostForm from "../components/common/form/PostForm";
import Spinner from "../components/common/spinner/Spinner";

function PostEditPage() {
  const { postId } = useParams();
  const { post, loading, error } = usePostDetail(postId);
  const navigate = useNavigate();

  const form = usePostForm({
    mode: "edit",
    postId,
    initialTitle: post?.title ?? "",
    initialContent: post?.content ?? "",
    initialImage: post?.postImage ?? "",
    onSuccess: () => navigate(`/post/${postId}`), // ⭐ 여기서 이동 처리
  });

  // ⭐ post 데이터가 들어온 후 validate 강제 실행
  useEffect(() => {
    if (post) {
      form.titleRef.current = post.title;
      form.contentRef.current = post.content;

      if (form.titleInputRef.current)
        form.titleInputRef.current.value = post.title;
      if (form.contentInputRef.current)
        form.contentInputRef.current.value = post.content;

      form.forceValidate && form.forceValidate();
    }
  }, [post]);

  if (loading) return <Spinner />;
  if (error) return <div>{error}</div>;

  return (
    <>
      <MainHeader />
      <PostForm
        mode="edit"
        initialTitle={post.title}
        initialContent={post.content}
        initialImage={post.postImage}
        {...form}
      />
    </>
  );
}

export default PostEditPage;
