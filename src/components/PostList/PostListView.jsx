import { useNavigate } from "react-router-dom";
import PostCard from "./PostCard";
import {
  PostContainer,
  SearchBox,
} from "../../styles/postlist/postlistLayout.style";

function PostListView({ posts, keyword, setKeyword, sentinelRef, isLoading }) {
  const navigate = useNavigate();

  return (
    <PostContainer>
      <SearchBox>
        <input
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색어를 입력하세요."
        />
        <img src="/img/search_btn.svg" alt="search" />
      </SearchBox>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClick={() => navigate(`/post/${post.id}`)}
        />
      ))}

      <div ref={sentinelRef} style={{ height: 1 }} />

      {isLoading && <p>불러오는 중...</p>}
    </PostContainer>
  );
}

export default PostListView;
