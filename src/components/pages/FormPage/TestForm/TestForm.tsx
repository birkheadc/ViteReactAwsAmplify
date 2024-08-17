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

const TestFormSchema = z.object({
  displayName: z.string().min(4).max(16),
  password: z.string().min(8).max(32),
  secretCode: z.string().min(4).max(16),
});

type TestFormSchema = z.infer<typeof TestFormSchema>;

// Default values must be populated since inputs are controlled
const TestFormDefaultValues: TestFormSchema = {
  displayName: "",
  password: "",
  secretCode: "'",
};

const TestFormPlaceholders: Partial<TestFormSchema> = {
  displayName: "old",
};

function TestForm(): JSX.Element | null {
  const { t } = useKeyedTranslation("components.pages.FormPage.TestForm");

  const form = useForm<TestFormSchema>({
    resolver: zodResolver(TestFormSchema),
    defaultValues: TestFormDefaultValues,
  });

  const onSubmit = (values: TestFormSchema) => {
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
                  placeholder={TestFormPlaceholders.displayName}
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

export default TestForm;
