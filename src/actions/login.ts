"use server";

import * as z from "zod";
import { LoginSchema } from "~/schema";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedSchemas = LoginSchema.safeParse(values);
  if (!validatedSchemas) return { error: "Invalid Fields!" };
  return { success: "Logged In Successfully!" };
};
