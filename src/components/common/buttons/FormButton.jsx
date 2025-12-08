<<<<<<< HEAD
// src/components/common/buttons/FormButton.jsx
=======
>>>>>>> feature/dev1
import styled from "styled-components";

function FormButton({ disabled, onClick, children }) {
  return (
    <ButtonStyled $active={!disabled} disabled={disabled} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
}

export default FormButton;

const ButtonStyled = styled.button`
  width: 100%;
  height: 48px;
  border: none;
  border-radius: 8px;
  margin-top: 80px;

  font-weight: 700;
  font-size: 16px;
  color: white;

  background-color: ${(props) => (props.$active ? "#4baa7d" : "#dcdbe3")};
  cursor: ${(props) => (props.$active ? "pointer" : "not-allowed")};

  transition: all 0.2s;
`;
