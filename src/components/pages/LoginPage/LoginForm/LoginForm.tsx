import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useStandardForm } from "../../../../hooks/useStandardForm/useStandardForm";
import FormGroup from "../../../form/FormGroup/FormGroup";
import FormItemFormatted from "../../../form/FormItemFormatted/FormItemFormatted";
import StandardForm from "../../../form/StandardForm/StandardForm";
import { FormField } from "../../../ui/form";
import { Input } from "../../../ui/input";
import {
  LoginFormSchema,
  defaultValues,
  placeholders,
  schema,
} from "./LoginForm.schema";

export type LoginFormProps = {
  submitFn: (data: LoginFormSchema) => Promise<void>;
};

function LoginForm({ submitFn }: LoginFormProps): JSX.Element | null {
  const { t } = useKeyedTranslation("components.pages.LoginPage.LoginForm");

  const { form, mutation, toast } = useStandardForm({
    title: "login-form",
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
                  type="password"
                  placeholder={placeholders.password}
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

export default LoginForm;
