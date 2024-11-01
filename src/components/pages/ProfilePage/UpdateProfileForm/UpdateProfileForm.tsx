import { useApi } from "../../../../hooks/useApi/useApi";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useStandardForm } from "../../../../hooks/useStandardForm/useStandardForm";
import { User } from "../../../../types/user/user";
import FormGroup from "../../../form/FormGroup/FormGroup";
import FormItemFormatted from "../../../form/FormItemFormatted/FormItemFormatted";
import StandardForm from "../../../form/StandardForm/StandardForm";
import { FormField } from "../../../ui/form";
import { Input } from "../../../ui/input";
import {
  defaultValues,
  placeholders,
  schema,
} from "./UpdateProfileForm.schema";

type UpdateProfileFormProps = {
  user: User;
};

function UpdateProfileForm({
  user,
}: UpdateProfileFormProps): JSX.Element | null {
  const api = useApi();

  const { t } = useKeyedTranslation(
    "components.pages.ProfilePage.UpdateProfileForm",
  );

  const { form, mutation, toast } = useStandardForm({
    title: "update-profile-form",
    schema: schema,
    defaultValues: {
      ...defaultValues,
      displayName: user?.profile?.displayName,
      email: user?.emailAddress,
      roles: user?.roles?.roles,
    },
    submitFn: api.users.updateProfile,
  });

  return (
    <StandardForm
      title={t("title")}
      description={t("description")}
      form={form}
      mutation={mutation}
      toast={toast}
    >
      <FormGroup>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItemFormatted
              label={t("email.label")}
              description={t("email.description")}
              error={form.formState.errors.email}
            >
              <Input disabled placeholder={placeholders.email} {...field} />
            </FormItemFormatted>
          )}
        />
        <FormField
          control={form.control}
          name="roles"
          render={({ field }) => (
            <FormItemFormatted
              label={t("roles.label")}
              description={t("roles.description")}
              error={form.formState.errors.email}
            >
              <div>{field.value}</div>
            </FormItemFormatted>
          )}
        />
      </FormGroup>
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
    </StandardForm>
  );
}

export default UpdateProfileForm;
