import styled from "styled-components";

export const SignupLayoutWrapper = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  padding-top: 120px;
  background-color: #fff;
  color: #121212;
  font-family: "Pretendard", sans-serif;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  ${({ theme }) =>
    theme.media.laptop(`
    padding-top: 100px;
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
    padding-top: 50px;
    overflow-y: hidden;
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    padding-top: 60px;
    overflow-y: hidden;
  `)}
`;

export const SignupContainer = styled.div`
  width: 390px;
  padding: 40px 24px;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const SignupTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 48px;
  text-align: left;

  ${({ theme }) =>
    theme.media.tablet(`
    margin-bottom: 25px;
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    padding-top: 60px;
    overflow-y: hidden;
  `)}
`;
