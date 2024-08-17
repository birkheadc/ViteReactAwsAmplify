import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../../../ui/form";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { Input } from "../../../ui/input";
import SubmitButton from "../../../form/SubmitButton/SubmitButton";

const ExampleFormSchema = z.object({
  displayName: z.string().min(4).max(16),
  password: z.string().min(8).max(32),
  secretCode: z.string().min(4).max(16),
});

type ExampleFormSchema = z.infer<typeof ExampleFormSchema>;

// Default values must be populated since inputs are controlled
const ExampleFormDefaultValues: ExampleFormSchema = {
  displayName: "",
  password: "",
  secretCode: "'",
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
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
            </FormItem>
          )}
        />
        <SubmitButton onClick={form.handleSubmit(onSubmit)} />
      </form>
    </Form>
  );
}

export default ExampleForm;
