import styled from "styled-components";

export const FormContainer = styled.form`
  width: 500px;
  margin: 50px auto;
  border-radius: 12px;
  padding: 40px;
  box-sizing: border-box;
  min-height: auto; /* 고정 높이 절대 X */
  overflow: visible; /* 중요! */
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

export const PostInputLabel = styled.label`
  font-weight: 700;
  font-size: 15px;
  margin-bottom: 8px;
  color: #222;
`;

export const StyledPostContentInput = styled.textarea`
  && {
    border: none;
    border-bottom: 1.5px solid #d9d9d9;
    background-color: #ffffff;
    border-radius: 0;
    padding: 10px 15px;
    font-size: 14px;
    resize: none;
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
    transition: border-color 0.2s;
  }

  &:focus {
    outline: none;
    border-color: #4baa7d;
  }
`;
export const StyledPostImageInput = styled.input`
  font-size: 14px;
  color: #555;
`;
