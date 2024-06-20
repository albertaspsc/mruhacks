import { createClient } from "../supabase/server";

const getUserInfo = async () => {
  const supabase = createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  return user;
};

export default getUserInfo;
