import { LoginButton } from "~/components/auth/login-button";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col justify-center items-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-xl">
          🔐 Auth
        </h1>
      </div>
      <p className="text-white text-lg">A simple authentication service</p>
      <div>
        <LoginButton asChild>
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}
