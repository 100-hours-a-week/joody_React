import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`;

const SpinnerCircle = styled.div`
  width: 28px;
  height: 28px;
  border: 4px solid #ccc;
  border-top: 4px solid #4baa7d; /* 색상 원하면 변경 */
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export default function Spinner() {
  return (
    <SpinnerWrapper>
      <SpinnerCircle />
    </SpinnerWrapper>
  );
}
