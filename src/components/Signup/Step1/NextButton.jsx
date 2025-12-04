import FormButton from "../../common/buttons/FormButton";

function NextButton({ isActive, onClick }) {
  return (
    <FormButton disabled={!isActive} onClick={onClick}>
      다음
    </FormButton>
  );
}

export default NextButton;
