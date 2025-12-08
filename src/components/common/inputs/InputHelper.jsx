import styled from "styled-components";
<<<<<<< HEAD
function InputHelper({ message }) {
  return <Helper>{message}</Helper>;
=======

function InputHelper({ message, className }) {
  return (
    <Helper className={className} $visible={!!message}>
      {message}
    </Helper>
  );
>>>>>>> feature/dev1
}

export default InputHelper;

const Helper = styled.p`
  font-size: 12px;
  margin: 4px 0 8px 4px;
  color: #ff0000;
<<<<<<< HEAD
=======

  height: 18px; /* 영역 유지 */
  visibility: ${(props) => (props.$visible ? "visible" : "hidden")};
>>>>>>> feature/dev1
`;
