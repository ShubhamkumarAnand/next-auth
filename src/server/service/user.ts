import { db } from "~/server/database";

export const getUserByEmail = async (email: string) => {
  const existingUser = await db
    .selectFrom("User")
    .select(["email", "password", "name", "image"])
    .where("User.email", "=", email)
    .execute();

  return existingUser;
};

  export const getUserById = async (id: string) => {
    const existingUser = await db
      .selectFrom("User")
      .select(["email", "password", "name", "image"])
      .where("User.id", "=", id)
      .execute();

    return existingUser;
  };
