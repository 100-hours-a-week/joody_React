import React from "react";
import { useNavigate } from "react-router-dom";
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

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/post/${post.id}`)}>
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

        <DateText>{post.createdAt?.replace("T", " ").slice(0, 19)}</DateText>
      </StatsRow>

      <AuthorRow>
        <AuthorAvatar
          src={
            post.authorProfileImage
              ? post.authorProfileImage.startsWith("http")
                ? post.authorProfileImage
                : `http://localhost:8080${post.authorProfileImage}`
              : "/img/profile_1.jpeg"
          }
        />
        <AuthorName>{post.author || "익명"}</AuthorName>
      </AuthorRow>
    </Card>
  );
}

export default PostCard;
