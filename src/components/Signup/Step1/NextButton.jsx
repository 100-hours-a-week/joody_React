import FormButton from "../../common/buttons/FormButton";

<<<<<<< HEAD
function NextButton({ disabled, onClick }) {
  return (
    <FormButton disabled={disabled} onClick={onClick}>
=======
function NextButton({ isActive, onClick }) {
  return (
    <FormButton disabled={!isActive} onClick={onClick}>
>>>>>>> feature/dev1
      다음
    </FormButton>
  );
}

export default NextButton;
