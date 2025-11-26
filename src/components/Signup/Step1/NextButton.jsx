import FormButton from "../../common/buttons/FormButton";

function NextButton({ disabled, onClick }) {
  return (
    <FormButton disabled={disabled} onClick={onClick}>
      다음
    </FormButton>
  );
}

export default NextButton;
