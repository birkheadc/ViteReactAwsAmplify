import { z } from "zod";

export const schema = z.object({ displayName: z.string().min(4).max(32) });

export type UpdateProfileFormSchema = z.infer<typeof schema>;

export const defaultValues: UpdateProfileFormSchema = {
  displayName: "",
};

export const placeholders: Partial<UpdateProfileFormSchema> = {};
