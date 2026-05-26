import { z } from "zod";

export const projectSchema = z.object({
  name: z.string().min(3),

  description: z.string().min(5),
});

export type ProjectSchema = z.infer<typeof projectSchema>;
