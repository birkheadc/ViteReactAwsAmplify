import { UseFormReturn } from "react-hook-form";
import { Form } from "../../ui/form";
import { ZodSchema, z } from "zod";
import SubmitButton from "../SubmitButton/SubmitButton";

type StandardFormProps<TSchema extends ZodSchema> = {
  form: UseFormReturn<z.infer<TSchema>>;
  onSubmit: (values: z.infer<TSchema>) => void;
  children: React.ReactNode;
};

function StandardForm<TSchema extends ZodSchema>({
  form,
  onSubmit,
  children,
}: StandardFormProps<TSchema>): JSX.Element | null {
  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 m-auto w-fit"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {children}
        <div className="flex justify-center w-full">
          <SubmitButton />
        </div>
      </form>
    </Form>
  );
}

export default StandardForm;
