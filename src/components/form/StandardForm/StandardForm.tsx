import { UseFormReturn } from "react-hook-form";
import { Form } from "../../ui/form";
import { ZodSchema, z } from "zod";

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
      <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
    </Form>
  );
}

export default StandardForm;
