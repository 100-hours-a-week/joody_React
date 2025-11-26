import styled from "styled-components";
function InputHelper({ message }) {
  return <Helper>{message}</Helper>;
}

export default InputHelper;

const Helper = styled.p`
  font-size: 12px;
  margin: 4px 0 8px 4px;
  color: #ff0000;
`;
