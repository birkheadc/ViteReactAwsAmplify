import { z } from "zod";
import i18n from "../../../../localization/i18n";

const t = i18n.t;

export const schema = z
  .object({
    emailAddress: z.string({
      required_error: t("components.form.validationErrors.required"),
    }),
    password: z.string(),
  })
  .required();

export type LoginFormSchema = z.infer<typeof schema>;

export const defaultValues: LoginFormSchema = {
  emailAddress: "",
  password: "",
};

export const placeholders: Partial<LoginFormSchema> = {
  emailAddress: "email@address.com",
};
