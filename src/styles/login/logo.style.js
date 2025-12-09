import styled from "styled-components";

export const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 200px;
  margin-bottom: 30px;

  ${({ theme }) =>
    theme.media.laptop(`
    margin-top: 100px;
    margin-bottom: 24px;
  `)}

  ${({ theme }) =>
    theme.media.tablet(`
    margin-top: 80px;
    margin-bottom: 20px;
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    margin-top: 60px;
    margin-bottom: 16px;
  `)}
`;

export const LoginLogo = styled.img`
  width: 120px;
  height: auto;

  ${({ theme }) =>
    theme.media.tablet(`
    width: 100px;
  `)}

  ${({ theme }) =>
    theme.media.mobile(`
    width: 80px;
  `)}
`;
