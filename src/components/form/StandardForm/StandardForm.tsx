import { UseFormReturn } from "react-hook-form";
import { Form } from "../../ui/form";
import { ZodSchema, z } from "zod";
import SubmitButton from "../SubmitButton/SubmitButton";
import useRefreshToast from "../../../hooks/useRefreshToast/useRefreshToast";

type StandardFormProps<TSchema extends ZodSchema> = {
  toastId?: string;
  form: UseFormReturn<z.infer<TSchema>>;
  onSubmit: (values: z.infer<TSchema>) => void;
  children: React.ReactNode;
};

function StandardForm<TSchema extends ZodSchema>({
  toastId,
  form,
  onSubmit,
  children,
}: StandardFormProps<TSchema>): JSX.Element | null {
  const toast = useRefreshToast(toastId);

  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    form.handleSubmit(onSubmit);
    console.log("toast wow");
    toast("Wow");
  };

  return (
    <Form {...form}>
      <form className="flex flex-col gap-4 m-auto w-fit" onSubmit={submit}>
        {children}
        <div className="flex justify-center w-full">
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}

export default StandardForm;
