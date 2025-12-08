import styled from "styled-components";

export const PostPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const PostContainer = styled.main`
  padding-top: 40px;
  min-height: calc(100vh - 104px - 12px);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

export const WritePostButton = styled.button`
  position: fixed;
  bottom: 40px;
  right: calc(50% - 220px);
  z-index: 1001;
  background: #4baa7d;
  color: #fff;
  border: none;
  border-radius: 50%;
  box-sizing: border-box;
  cursor: pointer;
  width: 56px;
  height: 56px;
  padding: 0;

  &:hover {
    transform: translateY(-2px);
    background: #3f9b6f;
  }

  .btn-icon {
    width: 26px;
    height: 26px;
  }
`;

/* 검색창 박스 */
export const SearchBox = styled.div`
  width: 440px;
  max-width: 100%;
  margin: 20px auto;
  background-color: #fff;

  display: flex;
  align-items: center;
  border-bottom: 2px solid #4baa7d;
  padding: 8px 1px;
  box-sizing: border-box;

  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    background: transparent;
    padding: 6px 0;
    color: #333;

    &::placeholder {
      color: #c4c4c4;
      font-weight: 300;
    }
  }

  img {
    width: 22px;
    height: 22px;
    cursor: pointer;
    opacity: 0.8;
  }
`;
