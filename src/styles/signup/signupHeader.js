import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: absolute;
  top: 140px;
  left: 50%;
  transform: translateX(-50%);

  width: 390px;
  max-width: 92%;

  padding-left: 24px;
  box-sizing: border-box;
  z-index: 10;
`;

export const BackButton = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;

  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
