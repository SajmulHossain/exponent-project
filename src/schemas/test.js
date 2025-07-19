import z from "zod";

export const TestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  date: z.date(),
  durationMin: z.number().int().positive("Duration must be positive"),
  groups: z.array(z.string().trim()),
});
