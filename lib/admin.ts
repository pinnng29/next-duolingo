import { auth } from "@clerk/nextjs";

const adminIds = ["user_2dkV0baIohZJ6n3OJqYb6D02SmW"];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
