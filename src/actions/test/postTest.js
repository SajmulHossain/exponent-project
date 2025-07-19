import { db } from "@/lib/db";
import { TestSchema } from "@/schemas/test";

export const postTest = async (values) => {
  const validatedFields = TestSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  await db.test.create({
    data: validatedFields.data,
  });
};
