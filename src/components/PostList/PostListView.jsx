import { useNavigate } from "react-router-dom";
import { useCallback, memo } from "react";
import PostCard from "./PostCard";
import SearchInput from "./SearchInput";
import { PostContainer } from "../../styles/postlist/postlistLayout.style";
import Spinner from "../common/spinner/Spinner";

const PostList = memo(({ posts, handlePostClick }) => {
  return posts.map((post) => (
    <PostCard
      key={post.id}
      post={post}
      onClick={handlePostClick}
    />
  ));
});

PostList.displayName = "PostList";

function PostListView({ posts, keyword, setKeyword, sentinelRef, isLoading }) {
  const navigate = useNavigate();

  const handlePostClick = useCallback((postId) => {
    navigate(`/post/${postId}`);
  }, [navigate]);

  return (
    <PostContainer>
      <SearchInput keyword={keyword} setKeyword={setKeyword} />

      <PostList posts={posts} handlePostClick={handlePostClick} />

      <div ref={sentinelRef} style={{ height: 1 }} />

      {isLoading && <Spinner />}
    </PostContainer>
  );
}

export default PostListView;
