import {
  AvatarContainer,
  AvatarImage,
  ChangeButton,
  HiddenInput,
} from "../../styles/profileEdit/profileEdit.style";

export default function AvatarUploader({ image, setImage }) {
  function handleFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      setImage(file, ev.target.result); // ⭐ file + preview 전달
    };

    reader.readAsDataURL(file);
  }

  return (
    <AvatarContainer>
      <AvatarImage src={image} alt="avatar" />

      <ChangeButton
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("avatar_input").click();
        }}
      >
        변경
      </ChangeButton>

      <HiddenInput
        type="file"
        id="avatar_input"
        accept="image/*"
        onChange={handleFileSelect}
      />
    </AvatarContainer>
  );
}
