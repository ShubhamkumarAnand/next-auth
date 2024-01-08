import type { FC } from "react";
import CardWrapper from "~/components/auth/card-wrapper";

interface LoginFormProps {}

const LoginForm: FC<Readonly<LoginFormProps>> = ({}) => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login form
    </CardWrapper>
  );
};

export default LoginForm;
