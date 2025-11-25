import Logo from "../components/Logo";
import LoginForm from "../components/Login/LoginForm";
import { AuthLayoutWrapper } from "../styles/layout/AuthLayout.style";

function LoginPage() {
  return (
    <AuthLayoutWrapper>
      <Logo />
      <LoginForm />
    </AuthLayoutWrapper>
  );
}

export default LoginPage;
