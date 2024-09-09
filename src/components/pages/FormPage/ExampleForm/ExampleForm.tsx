import { FormField } from "../../../ui/form";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { Input } from "../../../ui/input";
import StandardForm from "../../../form/StandardForm/StandardForm";
import FormGroup from "../../../form/FormGroup/FormGroup";
import FormItemFormatted from "../../../form/FormItemFormatted/FormItemFormatted";
import { useStandardForm } from "../../../../hooks/useStandardForm/useStandardForm";
import { schema, placeholders, defaultValues } from "./ExampleForm.schema";
import { useApi } from "../../../../hooks/useApi/useApi";

function ExampleForm(): JSX.Element | null {
  const api = useApi();

  const { t } = useKeyedTranslation("components.pages.FormPage.ExampleForm");

  const { form, mutation, toast } = useStandardForm({
    title: "example-form",
    schema: schema,
    defaultValues,
    submitFn: api.example.submit,
  });

  return (
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
          name="displayName"
          render={({ field }) => (
            <FormItemFormatted
              label={t("displayName.label")}
              description={t("displayName.description")}
              error={form.formState.errors.displayName}
            >
              <Input placeholder={placeholders.displayName} {...field} />
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
              description={t("password.description")}
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
              description={t("passwordConfirm.description")}
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
      <FormGroup>
        <FormField
          control={form.control}
          name="secretCode"
          render={({ field }) => (
            <FormItemFormatted
              label={t("secretCode.label")}
              description={t("secretCode.description")}
              error={form.formState.errors.secretCode}
            >
              <Input placeholder={placeholders.secretCode} {...field} />
            </FormItemFormatted>
          )}
        />
      </FormGroup>
    </StandardForm>
  );
}

export default ExampleForm;
