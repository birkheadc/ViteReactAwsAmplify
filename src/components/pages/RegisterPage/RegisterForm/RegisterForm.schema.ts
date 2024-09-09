import { z } from "zod";
import i18n from "../../../../localization/i18n";

const t = i18n.t;

export const schema = z
  .object({
    emailAddress: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.passwordMatch"),
        path: ["passwordConfirm"],
      });
    }
  })
  .superRefine(({ password }, ctx) => {
    if (!/[A-Z]/.test(password))
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.needsUppercase"),
        path: ["password"],
      });
    if (!/[a-z]/.test(password))
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.needsLowercase"),
        path: ["password"],
      });
    if (!/[0-9]/.test(password))
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.needsNumber"),
        path: ["password"],
      });
    if (!/[\^$*.[\]{}()?\-"!@#%&/\\,><':;|_~`+= ]/.test(password))
      ctx.addIssue({
        code: "custom",
        message: t("components.form.validationErrors.needsSymbol"),
        path: ["password"],
      });
  });

export type RegisterFormSchema = z.infer<typeof schema>;

export const defaultValues: RegisterFormSchema = {
  emailAddress: "",
  password: "",
  passwordConfirm: "",
};

export const placeholders: Partial<RegisterFormSchema> = {
  emailAddress: "email@address.com",
};
