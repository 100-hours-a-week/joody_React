import styled from "styled-components";

export const Card = styled.article`
  width: 400px;
  height: 130px;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px 20px 0 20px;
  border: 1px solid #4baa7d;
  transition: box-shadow 0.2s;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #121212;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const StatsRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: #555;
  margin-bottom: 20px;
`;

export const StatsLeft = styled.div`
  display: flex;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-right: 10px;
`;

export const StatIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

export const StatNumber = styled.span`
  font-weight: 600;
  font-size: 14px;
`;

export const DateText = styled.div`
  font-size: 13px;
  opacity: 0.7;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  padding-top: 10px;
`;

export const AuthorAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #ddd;
  margin-right: 10px;
  object-fit: cover;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  color: #333;
  font-size: 13px;
`;
