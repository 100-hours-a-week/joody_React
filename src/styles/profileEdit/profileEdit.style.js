import styled from "styled-components";

export const ProfileEditContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 16px;
  box-sizing: border-box;
`;

export const ProfileEditTitle = styled.h1`
  position: relative;
  width: 392px;
  max-width: 92%;
  margin: 100px auto 10px;
  font-size: 24px;
  text-align: left;
  box-sizing: border-box;
`;
export const EditForm = styled.form`
  width: 392px;
  max-width: 92%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 20px;
  padding: 16px;
  border-radius: 6px;
  background: #fff;
  box-sizing: border-box;
`;

export const ProfileImage = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  padding-left: 4px;
`;

export const AvatarContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto 8px;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: 0.4;
`;

export const ChangeButton = styled.button`
  position: absolute;
  z-index: 2;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 1px solid #fff;
  border-radius: 15px;
  padding: 8px 15px;
  font-size: 14px;
  cursor: pointer;
  font-weight: bold;
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const EmailLabel = styled.p`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  padding-left: 4px;
`;

export const EmailDisplay = styled.p`
  font-size: 14px;
  margin: 0;
  padding-left: 15px;
`;

export const WithdrawLink = styled.a`
  display: block;
  margin-top: 10px;
  text-align: center;
  color: #121212;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 300px;
  padding: 36px 24px 28px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  animation: fadeIn 0.2s ease-in-out;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  p {
    font-size: 16px;
    color: #000000;
    margin-bottom: 28px;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const CancelButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: #242424;
  color: white;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 120px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background-color: #4baa7d;
  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;

export const ToastContainer = styled.div`
  position: fixed;
  bottom: ${({ $show }) => ($show ? "100px" : "20px")};
  left: 50%;
  transform: translateX(-50%);
  background-color: #4baa7d;
  color: #fff;
  padding: 12px 24px;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 400;
  opacity: ${({ $show }) => ($show ? 1 : 0)};
  transition: opacity 0.3s ease, bottom 0.3s ease;
  z-index: 9999;
  pointer-events: none;
`;
