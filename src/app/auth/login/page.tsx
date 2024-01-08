import type { FC } from "react";
import LoginForm from "~/components/auth/login-form";

interface LoginPageProps {}

const LoginPage: FC<Readonly<LoginPageProps>> = ({}) => {
  return <LoginForm />;
};

export default LoginPage;
