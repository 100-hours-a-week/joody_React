import styled from "styled-components";

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
  color: #121212;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;

  padding: 10px 36px 10px 0;
  font-size: 15px;

  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #4baa7d;
    background-color: transparent;
  }
`;

export const NextButtonStyled = styled.button`
  width: 100%;
  max-width: 390px; /* 버튼 최대 크기 */
  min-width: 280px; /* 너무 좁아지지 않도록 */

  border: none;
  border-radius: 8px;

  margin-top: 80px;
  font-weight: 700;
  font-size: 16px;
  color: white;

  background-color: ${(props) => (props.$active ? "#4baa7d" : "#dcdbe3")};
  cursor: ${(props) => (props.$active ? "pointer" : "not-allowed")};

  transition: all 0.2s;

  ${({ theme }) => theme.media.tablet`
    margin-top: 24px;
  `}

  ${({ theme }) => theme.media.mobile`
    margin-top: 20px;
  `}
`;
