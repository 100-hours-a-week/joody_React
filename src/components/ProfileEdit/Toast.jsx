import { ToastContainer } from "../../styles/profileEdit/profileEdit.style";

export default function Toast({ show, message }) {
  return <ToastContainer $show={show}>{message}</ToastContainer>;
}
