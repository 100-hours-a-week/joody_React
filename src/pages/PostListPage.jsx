import { useCallback, useMemo } from "react";
import MainHeader from "../components/common/header/MainHeader";
import PostListLayout from "../components/PostList/PostListLayout";
import PostListView from "../components/PostList/PostListView";
import usePostList from "../hooks/usePostList";

function PostListPage() {
  const { posts, sentinelRef, keyword, setKeyword, isLoading } = usePostList();

  const handleWrite = useCallback(() => {
    window.location.href = "/post/write";
  }, []);

  const memoizedKeyword = useMemo(() => keyword, [keyword]);
  const memoizedSetKeyword = useMemo(() => setKeyword, [setKeyword]);

  return (
    <>
      <MainHeader />
      <PostListLayout onWrite={handleWrite} />
      <PostListView
        posts={posts}
        keyword={memoizedKeyword}
        setKeyword={memoizedSetKeyword}
        sentinelRef={sentinelRef}
        isLoading={isLoading}
      />
    </>
  );
}

export default PostListPage;
