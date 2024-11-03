import { z } from "zod";

export const schema = z.object({
  id: z.string().optional(),
  title: z.string().min(1).max(64),
  author: z.string().min(1).max(64),
  pages: z.coerce.number().int().gt(0).lte(10000),
});

export type BookFormSchema = z.infer<typeof schema>;

export const defaultValues: BookFormSchema = {
  id: undefined,
  title: "",
  author: "",
  pages: 0,
};

export const placeholders: Partial<BookFormSchema> = {
  title: "Cat in the Hat, The",
  author: "Dr. Seuss",
  pages: 61,
};
