"use server";

import * as z from "zod";
import bcrypt from "bcrypt";
import { RegisterSchema } from "~/schema";
import { db } from "~/server/database";
import { getUserByEmail } from "~/server/service/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalids Fields!" };
  }

  const { name, email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  if (existingUser.find((user) => user.email === email))
    return { error: "User already exists, Try Different Email!" };

  const hashedPassword = await bcrypt.hash(password, 10);
  await db
    .insertInto("User")
    .values({
      email: email,
      password: hashedPassword,
      name: name,
    })
    .returning("id")
    .execute();

  // TODO: send verification email token
  return { success: "User Created" };
};
