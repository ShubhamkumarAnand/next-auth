import Image from "next/image";
import type { FC } from "react";

interface FormErrorProps {
  message?: string;
}

const FormError: FC<Readonly<FormErrorProps>> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <Image
        src="/images/error.svg"
        width={20}
        height={16}
        alt="error icon"
        className="h-4 w-4"
      />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
