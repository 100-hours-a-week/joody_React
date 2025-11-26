import styled from "styled-components";
import InputHelper from "../../common/inputs/InputHelper";

function AvatarUpload({ preview, onChange, helper }) {
  return (
    <>
      <LabelContainer htmlFor="avatar_input" $hasAvatar={!!preview}>
        <AvatarPreview src={preview || "/img/default_profile.png"} alt="" />
      </LabelContainer>

      <HiddenFileInput
        type="file"
        id="avatar_input"
        accept="image/*"
        onChange={onChange}
      />

      <InputHelper message={helper} />
    </>
  );
}

export default AvatarUpload;

const LabelContainer = styled.label`
  width: 120px;
  height: 120px;
  margin: 0 auto 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  overflow: hidden;
  background-color: #e9e9e9;
  border: 1px solid #e0e0e0;
  cursor: pointer;
  position: relative;

  &::after {
    content: "+";
    font-size: 48px;
    color: #9a9a9a;
    pointer-events: none;
    opacity: ${(props) => (props.$hasAvatar ? 0 : 1)};
    position: absolute;
  }
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const AvatarPreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
