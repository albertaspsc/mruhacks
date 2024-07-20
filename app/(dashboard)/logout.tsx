import { FaSignOutAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import signout from "@/lib/auth/signout";

export const Logout = async ({ className }: { className?: string }) => {
  return (
    <form action={signout} className={className}>
      <Button
        variant="outline"
        className="flex flex-1 w-full flex-row align-middle justify-center text-md bg-inherit text-text hover:border-primary"
        type="submit"
      >
        <FaSignOutAlt className="mr-2" />
        Sign Out
      </Button>
    </form>
  );
};
