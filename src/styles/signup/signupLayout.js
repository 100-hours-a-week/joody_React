import styled from "styled-components";

export const SignupLayoutWrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 150px;
  background-color: #fff;
  color: #121212;
  font-family: "Pretendard", sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
`;

export const SignupContainer = styled.div`
  width: 390px;
  padding: 40px 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 40px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

export const SignupTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: left;
`;
