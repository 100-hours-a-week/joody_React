import FormButton from "../../common/buttons/FormButton";

function ConfirmButton({ disabled, onClick }) {
  return (
    <FormButton disabled={disabled} onClick={onClick}>
      완료
    </FormButton>
  );
}

export default ConfirmButton;
