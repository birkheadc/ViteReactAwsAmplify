import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useStandardForm } from "../../../../hooks/useStandardForm/useStandardForm";
import FormGroup from "../../../form/FormGroup/FormGroup";
import FormItemFormatted from "../../../form/FormItemFormatted/FormItemFormatted";
import StandardForm from "../../../form/StandardForm/StandardForm";
import { FormField } from "../../../ui/form";
import { Input } from "../../../ui/input";
import {
  RegisterFormSchema,
  defaultValues,
  placeholders,
  schema,
} from "./RegisterForm.schema";

export type RegisterFormProps = {
  submitFn: (data: RegisterFormSchema) => Promise<void>;
};

function RegisterForm({ submitFn }: RegisterFormProps): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.pages.RegisterPage.RegisterForm"
  );

  const { form, mutation, toast } = useStandardForm({
    title: "register-form",
    schema: schema,
    defaultValues,
    submitFn,
  });

  return (
    <div>
      <StandardForm
        title={t("title")}
        description={t("description")}
        form={form}
        toast={toast}
        mutation={mutation}
      >
        <FormGroup>
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItemFormatted
                label={t("emailAddress.label")}
                error={form.formState.errors.emailAddress}
              >
                <Input placeholder={placeholders.emailAddress} {...field} />
              </FormItemFormatted>
            )}
          />
        </FormGroup>
        <FormGroup>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItemFormatted
                label={t("password.label")}
                error={form.formState.errors.password}
              >
                <Input
                  autoComplete="new-password"
                  type="password"
                  placeholder={placeholders.password}
                  {...field}
                />
              </FormItemFormatted>
            )}
          />
          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItemFormatted
                label={t("passwordConfirm.label")}
                error={form.formState.errors.passwordConfirm}
              >
                <Input
                  autoComplete="new-password"
                  type="password"
                  placeholder={placeholders.passwordConfirm}
                  {...field}
                />
              </FormItemFormatted>
            )}
          />
        </FormGroup>
      </StandardForm>
    </div>
  );
}

export default RegisterForm;
