import styled from "styled-components";

function InputHelper({ message }) {
  return <Helper $visible={!!message}>{message}</Helper>;
}

export default InputHelper;

const Helper = styled.p`
  font-size: 12px;
  margin: 4px 0 8px 4px;
  color: #ff0000;

  height: 18px; /* 영역 유지 */
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
`;
