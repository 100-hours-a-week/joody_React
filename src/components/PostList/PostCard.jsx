import React, { useMemo } from "react";
import {
  Card,
  Title,
  StatsRow,
  StatsLeft,
  StatItem,
  StatIcon,
  StatNumber,
  DateText,
  AuthorRow,
  AuthorAvatar,
  AuthorName,
} from "../../styles/postlist/postlist.style";

function PostCard({ post, onClick }) {
  const formattedDate = useMemo(() => {
    return post.createdAt?.replace("T", " ").slice(0, 19);
  }, [post.createdAt]);

  const avatarSrc = useMemo(() => {
    if (!post.authorProfileImage) return "/img/profile_1.jpeg";
    if (post.authorProfileImage.startsWith("http")) return post.authorProfileImage;
    return `http://localhost:8080${post.authorProfileImage}`;
  }, [post.authorProfileImage]);

  const handleClick = () => onClick(post.id);

  return (
    <Card onClick={handleClick}>
      <Title>{post.title}</Title>

      <StatsRow>
        <StatsLeft>
          <StatItem>
            <StatIcon src="/img/like_on.svg" />
            <StatNumber>{post.likeCount}</StatNumber>
          </StatItem>
          <StatItem>
            <StatIcon src="/img/comment.svg" />
            <StatNumber>{post.commentCount}</StatNumber>
          </StatItem>
          <StatItem>
            <StatIcon src="/img/view.svg" />
            <StatNumber>{post.viewCount}</StatNumber>
          </StatItem>
        </StatsLeft>

        <DateText>{formattedDate}</DateText>
      </StatsRow>

      <AuthorRow>
        <AuthorAvatar src={avatarSrc} />
        <AuthorName>{post.author || "익명"}</AuthorName>
      </AuthorRow>
    </Card>
  );
}

export default React.memo(PostCard, (prevProps, nextProps) => {
  return (
    prevProps.post.id === nextProps.post.id &&
    prevProps.post.title === nextProps.post.title &&
    prevProps.post.likeCount === nextProps.post.likeCount &&
    prevProps.post.commentCount === nextProps.post.commentCount &&
    prevProps.post.viewCount === nextProps.post.viewCount &&
    prevProps.post.createdAt === nextProps.post.createdAt &&
    prevProps.post.author === nextProps.post.author &&
    prevProps.post.authorProfileImage === nextProps.post.authorProfileImage
  );
});
