import { FieldValues, UseFormReturn } from "react-hook-form";
import { Form } from "../../ui/form";
import SubmitButton from "../SubmitButton/SubmitButton";
import { UseRefreshToastReturn } from "../../../hooks/useRefreshToast/useRefreshToast";
import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import FormTitle from "../FormTitle/FormTitle";
import FormDescription from "../FormDescription/FormDescription";
import { UseMutationResult } from "@tanstack/react-query";
import { ApiError } from "../../../types/apiResult/apiError";

type StandardFormProps<TSchema extends FieldValues> = {
  title?: string;
  description?: string;
  form: UseFormReturn<TSchema>;
  mutation: UseMutationResult<void, ApiError, TSchema>;
  children: React.ReactNode;
  toast: UseRefreshToastReturn;
};

function StandardForm<TSchema extends FieldValues>({
  form,
  children,
  title,
  description,
  mutation,
  toast,
}: StandardFormProps<TSchema>): JSX.Element | null {
  const { t } = useKeyedTranslation("components.form.StandardForm");

  const onInvalid = () => {
    toast(t("invalid"), "error");
  };

  const onSubmit = (schema: TSchema) => {
    mutation.mutate(schema);
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col max-w-3xl gap-4 m-auto min-w-fit"
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        title={title}
      >
        <FormTitle title={title} />
        <FormDescription description={description} />
        {children}
        <div className="flex justify-end w-full">
          <SubmitButton isWorking={mutation.isPending} />
        </div>
      </form>
    </Form>
  );
}

export default StandardForm;
