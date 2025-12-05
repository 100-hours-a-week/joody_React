import styled from "styled-components";

export const PasswordEditTitle = styled.h2`
  position: relative;
  width: 392px;
  max-width: 92%;
  margin: 100px auto 10px;
  text-align: left;
  box-sizing: border-box;
`;

export const PasswordEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* 가로 가운데 */
  padding: 50px 16px; /* 상단 여백 조절 */
  box-sizing: border-box;
`;

export const PasswordEditStyledForm = styled.form`
  width: 392px;
  max-width: 92%;
  display: flex;
  flex-direction: column;
  align-items: stretch; /* 인풋은 폭에 맞춤 */
  gap: 10px;
  /* padding: 10px; */
  border-radius: 6px;
  background: #fff;
  /* box-shadow: 0 1px 4px rgba(0,0,0,0.06); */
  box-sizing: border-box;
`;
