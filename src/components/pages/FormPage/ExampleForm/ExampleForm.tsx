import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { Input } from "../../../ui/input";
import StandardForm from "../../../form/StandardForm/StandardForm";
import FormFieldError from "../../../form/FormFieldError/FormFieldError";
import FormGroup from "../../../form/FormGroup/FormGroup";

const ExampleFormSchema = z
  .object({
    displayName: z.string().min(4).max(16),
    password: z.string().min(8).max(32),
    passwordConfirm: z.string().min(8).max(32),
    secretCode: z.string().min(4).max(16),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        code: "custom",
        message: "Password does not match",
        path: ["passwordConfirm"],
      });
    }
  });

type ExampleFormSchema = z.infer<typeof ExampleFormSchema>;

// Default values must be populated since inputs are controlled
const ExampleFormDefaultValues: ExampleFormSchema = {
  displayName: "",
  password: "",
  passwordConfirm: "",
  secretCode: "",
};

const ExampleFormPlaceholders: Partial<ExampleFormSchema> = {
  displayName: "old",
};

function ExampleForm(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.pages.FormPage.ExampleForm");

  const form = useForm<ExampleFormSchema>({
    resolver: zodResolver(ExampleFormSchema),
    defaultValues: ExampleFormDefaultValues,
  });

  const onSubmit = (values: ExampleFormSchema) => {
    console.log(`Submit this:`, values);
  };

  return (
    <StandardForm form={form} onSubmit={onSubmit}>
      <FormGroup>
        <FormField
          control={form.control}
          name="displayName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("displayName.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={ExampleFormPlaceholders.displayName}
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("displayName.description")}</FormDescription>
              <FormFieldError error={form.formState.errors.displayName} />
            </FormItem>
          )}
        />
      </FormGroup>
      <FormGroup>
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("password.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={ExampleFormPlaceholders.password}
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("password.description")}</FormDescription>
              <FormFieldError error={form.formState.errors.password} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("passwordConfirm.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={ExampleFormPlaceholders.passwordConfirm}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                {t("passwordConfirm.description")}
              </FormDescription>
              <FormFieldError error={form.formState.errors.passwordConfirm} />
            </FormItem>
          )}
        />
      </FormGroup>
      <FormGroup>
        <FormField
          control={form.control}
          name="secretCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("secretCode.label")}</FormLabel>
              <FormControl>
                <Input
                  placeholder={ExampleFormPlaceholders.secretCode}
                  {...field}
                />
              </FormControl>
              <FormDescription>{t("secretCode.description")}</FormDescription>
              <FormFieldError error={form.formState.errors.secretCode} />
            </FormItem>
          )}
        />
      </FormGroup>
    </StandardForm>
  );
}

export default ExampleForm;
