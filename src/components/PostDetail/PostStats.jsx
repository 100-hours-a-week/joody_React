import {
  PostStats,
  StatItem,
  StatNumber,
} from "../../styles/postDetail/postDetail.style";

export default function PostStatsComponent({
  likes,
  comments,
  views,
  onToggleLike,
  liked,
}) {
  return (
    <PostStats>
      <StatItem onClick={onToggleLike} style={{ cursor: "pointer" }}>
        <img
          src={liked ? "/img/like_on.svg" : "/img/like_off.svg"}
          width="22"
          height="22"
          alt="좋아요"
        />
        <StatNumber>{likes}</StatNumber>
      </StatItem>

      <StatItem>
        <img src="/img/comment.svg" width="22" height="22" alt="댓글수" />
        <StatNumber>{comments}</StatNumber>
      </StatItem>

      <StatItem>
        <img src="/img/view.svg" width="22" height="22" alt="조회수" />
        <StatNumber>{views}</StatNumber>
      </StatItem>
    </PostStats>
  );
}
