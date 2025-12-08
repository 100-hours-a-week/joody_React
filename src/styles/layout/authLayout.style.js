import styled from "styled-components";

export const AuthLayoutWrapper = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  /* 화면 가운데 고정 */
  margin-left: auto;
  margin-right: auto;

  background-color: #fff;
  color: #121212;

  /* 로고 스타일 */
  #logo_wrapper {
    margin-top: 200px;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
