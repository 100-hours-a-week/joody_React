import styled from "styled-components";

export const PostHeaderWrapper = styled.header`
  position: absolute;
  width: 100%;
  height: 104px;
  background-color: #ffffff;
  border-bottom: 1px solid rgba(75, 170, 125, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  /* 가로 가운데 배치 */
  margin: 0 auto;
  left: 0;
  right: 0;
`;

export const BackLink = styled.a`
  width: 25px;
  height: 25px;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.2s;
  position: relative;
  z-index: 2;
  right: 220px;

  &:hover {
    transform: scale(1.05);
  }
`;

export const BackIcon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
`;

export const HeadTitle = styled.p`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: "Gamja Flower";
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`;

export const HeaderLogo = styled.img`
  height: 60px; /* 원하는 크기로 조절 */
  object-fit: contain;
  display: block;
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(50% - 220px);
  z-index: 2000;
`;

export const ProfileImg = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  object-fit: cover;
  transition: transform 0.2s;
  position: relative;
  z-index: 2;
  border: 2px solid #4baa7d;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  top: calc(100% + 10px);
  left: 10%;
  transform: translateX(-50%);
  width: 115px;
  background: #f9f9f9;
  border: 1px solid #4baa7d;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ open }) => (open ? "block" : "none")};
`;

export const DropdownItem = styled.li`
  padding: 10px 16px;
  text-align: center;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    font-size: 15px;
    font-weight: bold;
  }
`;
