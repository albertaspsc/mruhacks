import { FaSignOutAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import signout from "@/lib/auth/signout";

export const Logout = async ({ className }: { className?: string }) => {
  return (
    <form action={signout} className={className}>
      <Button
        variant="outline"
        className="flex flex-row align-middle justify-start text-md bg-inherit text-white "
        type="submit"
      >
        <FaSignOutAlt className="mr-2" />
        Sign Out
      </Button>
    </form>
  );
};
