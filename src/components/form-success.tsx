import Image from "next/image";
import type { FC } from "react";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess: FC<Readonly<FormSuccessProps>> = ({ message }) => {
  if (!message) return null;
  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <Image
        src="/images/success.svg"
        width={16}
        height={16}
        alt="error icon"
        className="h-4 w-4"
      />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
