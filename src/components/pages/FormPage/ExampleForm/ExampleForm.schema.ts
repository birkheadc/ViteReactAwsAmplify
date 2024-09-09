import { z } from "zod";
import i18n from "../../../../localization/i18n";

const t = i18n.t;

export const schema = z
  .object({
    displayName: z.string().min(4).max(16),
    password: z.string().min(8).max(32),
    passwordConfirm: z.string().min(8).max(32),
    secretCode: z.string(),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.passwordMatch"),
        path: ["passwordConfirm"],
      });
    }
  });

export type ExampleFormSchema = z.infer<typeof schema>;

// Default values must be populated since inputs are controlled
export const defaultValues: ExampleFormSchema = {
  displayName: "",
  password: "",
  passwordConfirm: "",
  secretCode: "",
};

export const placeholders: Partial<ExampleFormSchema> = {
  displayName: "xX_cool_guy_Xx",
};
