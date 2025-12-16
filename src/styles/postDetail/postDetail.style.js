// styles/PostDetail.style.js
import styled from "styled-components";

/* 전체 컨테이너 */
export const PostContainer = styled.div`
  width: 450px;
  margin: auto;
  background-color: #ffffff;
  padding: 30px 0;
  /* border-bottom: 1px solid #4baa7d; */
`;

/* 제목 */
export const PostTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 10px 0 16px;
  font-family: "Pretendard";
  width: 480px;
  max-width: 100%;
  box-sizing: border-box;
  text-align: left;
`;

/* 작성자 정보 */
export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 480px;
  max-width: 100%;
  margin: 10px auto 16px;
  padding: 10px 0;
  border-bottom: 1px solid #d9d9d9;
`;

export const AuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 20px;
  flex-shrink: 0;
`;

export const AuthorName = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  color: #222;
`;

export const PostDate = styled.p`
  margin: 0 0 0 15px;
  font-size: 13px;
  color: #000;
`;

export const EditButton = styled.button`
  background-color: #fff;
  border: 1px solid #4baa7d;
  border-radius: 8px;
  padding: 4px 12px;
  margin-left: auto;
  cursor: pointer;
  font-size: 13px;
`;

export const DeleteButton = styled.button`
  background-color: #fff;
  border: 1px solid #4baa7d;
  border-radius: 8px;
  padding: 4px 12px;
  margin-right: 20px;
  cursor: pointer;
  font-size: 13px;
`;

/* 게시글 내용 */
export const PostContentBox = styled.div`
  margin: 20px 10px 80px 10px;
  line-height: 1.4;
  color: #333;
  font-size: 13px;

  /* 이미지와 동일한 폭으로 맞추기 */

  max-width: 100%;
  box-sizing: border-box;
`;

export const PostImage = styled.img`
  display: block;
  width: 500px;
  max-width: 100%;
  height: 306px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 auto 20px;
`;

/* 통계 영역 */
export const PostStats = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 22px;
  margin-top: 24px;
  width: 480px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const StatNumber = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

/* 댓글 전체 영역 */
export const CommentContainer = styled.div`
  width: 450px;
  margin: 20px auto;
`;

/* 댓글 입력 */
export const CommentWriteBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 24px;
`;

export const CommentInput = styled.textarea`
  width: 100%;
  height: 80px;
  border: 1.5px solid #d9d9d9;
  border-radius: 10px;
  outline: none;
  background-color: #fff;
  padding: 20px;
  font-size: 13px;
  font-family: "Noto Sans KR", sans-serif;
  resize: none;
  box-sizing: border-box;
  transition: border-color 0.2s; /* 부드러운 전환 */

  &::placeholder {
    color: #999;
  }

  &:hover {
    border-color: #8cc8aa;
  }

  &:focus {
    border-color: #4baa7d;
    /* box-shadow: 0 0 0 2px rgba(75, 170, 125, 0.7); */
  }
`;

export const CommentSubmit = styled.button`
  display: block;
  background-color: #4baa7d;
  color: #fff;
  border: none;
  border-radius: 16px;
  padding: 10px 30px;
  margin-left: auto;
  margin-top: 12px;
  cursor: pointer;
  background-color: ${({ disabled }) => (disabled ? "#d9d9d9" : "#4baa7d")};
  color: white;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const StyledCommentList = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  /* padding: 16px 20px; */
  width: 450px;
  margin: 0 auto;
  padding: 10px;
  box-sizing: border-box;
`;

export const StyledCommentItem = styled.div`
  background-color: #f9fafb;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 20px;
  margin-bottom: 12px;
  border-radius: 20px;

  &:last-child {
    border-bottom: none;
  }
`;

export const CommentAuthorImage = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #d9d9d9;
  object-fit: cover;
  flex-shrink: 0;
  margin-top: 6px;
`;

export const CommentBody = styled.div`
  flex: 1;
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
`;

export const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CommentAuthor = styled.p`
  font-weight: 700;
  font-size: 13px;
  color: #222;
  margin: 0;
`;

export const CommentDate = styled.p`
  font-size: 13px;
  color: #000000;
  font-weight: 400;
  margin-left: 20px;
`;

export const CommentButtons = styled.div`
  display: flex;
  gap: 6px;
`;

export const EditCommentButton = styled.button`
  background-color: #f9fafb;
  border: none;
  border-radius: 8px;
  padding: 4px 5px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  color: #333;
  transition: 0.2s, color 0.2s;

  &:hover {
    font-weight: bold;
  }
`;

export const DeleteCommentButton = styled.button`
  background-color: #f9fafb;
  border: none;
  border-radius: 8px;
  padding: 4px 5px;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  color: #333;
  transition: 0.2s, color 0.2s;

  &:hover {
    font-weight: bold;
  }
`;

export const CommentContent = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #000000;
  margin-top: 6px;
  line-height: 1.4;
`;

export const PostModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const CommentModelOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalBox = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 36px 24px 28px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: #000000;
    margin-bottom: 28px;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;

  button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 12px;
    /* padding: 8px 16px; */
    font-size: 16px;
    cursor: pointer;
    font-weight: 400;
  }
`;

export const CancelButton = styled.button`
  background-color: #242424;
  color: #fff;
`;

export const ConfirmButton = styled.button`
  background-color: #4baa7d;
  color: #ffffff;
`;
