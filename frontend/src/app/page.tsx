import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons/AuthButtons";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <main className=" h-[78vh]">
        <div className="flex justify-center items-center">
          <LoginButton />
          <RegisterButton />
          <ProfileButton />
          <LogoutButton />
        </div>
        <code className="flex justify-center items-center">
          ServerSide session:
          {JSON.stringify(session)}
        </code>
      </main>
    </>
  );
}
