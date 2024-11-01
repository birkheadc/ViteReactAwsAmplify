import { z } from "zod";
import { UserRole } from "../../../../types/user/userRole";

export const schema = z.object({
  email: z.string().email(),
  displayName: z.string().min(4).max(32),
  roles: z.array(z.nativeEnum(UserRole)),
});

export type UpdateProfileFormSchema = z.infer<typeof schema>;

export const defaultValues: UpdateProfileFormSchema = {
  email: "",
  displayName: "",
  roles: [],
};

export const placeholders: Partial<UpdateProfileFormSchema> = {};
