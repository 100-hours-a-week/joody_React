import MainHeader from "../components/common/header/MainHeader";
import PostForm from "../components/common/form/PostForm";
import { usePostForm } from "../hooks/usePostForm";

import { useNavigate } from "react-router-dom";

function PostWritePage() {
  const navigate = useNavigate();

  const form = usePostForm({
    mode: "create",
    onSuccess: () => navigate("/postlist"), // 작성 성공 후 이동
  });

  return (
    <>
      <MainHeader />
      <PostForm
        mode="create"
        titleInputRef={form.titleInputRef}
        contentInputRef={form.contentInputRef}
        helper={form.helper}
        submitActive={form.submitActive}
        imageName={form.imageName}
        onTitleChange={form.onTitleChange}
        onContentChange={form.onContentChange}
        handleImageSelect={form.handleImageSelect}
        handleSubmit={form.handleSubmit}
      />
    </>
  );
}

export default PostWritePage;
