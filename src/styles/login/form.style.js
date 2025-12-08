import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginFormBox = styled.form`
  width: 360px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
`;

export const Label = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 355px;
  height: 40px;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 0 15px;
  background-color: transparent;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
`;

export const Helper = styled.p`
  width: 100%;
  font-size: 12px;
  color: #ff0000;
  margin-top: -5px;
  margin-bottom: 12px;
  margin-left: 16px;
`;

export const SubmitButton = styled.button`
  width: 361px;
  height: 37px;
  background-color: ${(props) => (props.active ? "#4BAA7D" : "#dcdbe3")};
  color: #fff;
  display: block;
  margin: 12px auto 0;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
`;

export const SignupLink = styled.a`
  display: block;
  text-align: center;
  margin-top: 16px;
  color: #121212;
  text-decoration: none;
  font-size: 14px;
`;
