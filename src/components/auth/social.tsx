import Image from "next/image";
import { Button } from "~/components/ui/button";

const Social = () => {
  // const searchParams = useSearchParams();
  // const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    console.log("Hello All");
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("google")}
      >
        <Image
          src="/images/auth/google.svg"
          width={20}
          height={20}
          alt="google icon"
          className="h-5 w-5"
        />
      </Button>
      <Button
        size="lg"
        className="w-full"
        variant="outline"
        onClick={() => onClick("github")}
      >
        <Image
          src="/images/auth/github.svg"
          width={20}
          height={20}
          alt="google icon"
          className="h-5 w-5"
        />
      </Button>
    </div>
  );
};

export default Social;
