import signInWithGithub from "@/lib/auth/signInWithGithub";
import signInWithGoogle from "@/lib/auth/signInWithGoogle";
import { signUp, signIn } from "@/lib/auth/signInWithEmail";
import SignUpClient from "./SignUpClient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginClient from "./LoginPageClient";
import { Card } from "@/components/ui/card";

export default function LoginPage({ nocard = false }: { nocard?: boolean }) {
  return (
    <div
      className={`flex flex-col items-center justify-center ${nocard ? "mt-2" : "mt-12"}`}
    >
      <Card
        className={`${
          nocard ? "border-0 p-0 m-0 shadow-none outline-none" : ""
        } mx-auto w-full max-w-sm`}
      >
        <Tabs defaultValue="signup">
          <TabsList className="flex justify-center bg-gray-100 m-2 mb-0">
            <TabsTrigger value="signup" className="flex-1">
              Sign Up
            </TabsTrigger>
            <TabsTrigger value="login" className="flex-1">
              Log In
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signup">
            <SignUpClient
              signInWithGithub={signInWithGithub}
              signInWithGoogle={signInWithGoogle}
              signUp={signUp}
            />
          </TabsContent>
          <TabsContent value="login">
            <LoginClient
              signInWithGithub={signInWithGithub}
              signInWithGoogle={signInWithGoogle}
              signIn={signIn}
            />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
