import { useApi } from "../../../../hooks/useApi/useApi";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { useStandardForm } from "../../../../hooks/useStandardForm/useStandardForm";
import { Book } from "../../../../types/book/book";
import FormGroup from "../../../form/FormGroup/FormGroup";
import FormItemFormatted from "../../../form/FormItemFormatted/FormItemFormatted";
import { Input } from "../../../ui/input";
import StandardForm from "../../../form/StandardForm/StandardForm";
import { defaultValues, placeholders, schema } from "./BookForm.schema";
import { FormField } from "../../../ui/form";

type BookFormProps = {
  book?: Book;
  successCallback?: () => void;
  onCancel?: () => void;
};

/**
 * A form for creating or editing a book.
 * @param book - The book to edit, or undefined to create a new book.
 */
export default function BookForm({
  book,
  successCallback,
  onCancel,
}: BookFormProps): JSX.Element {
  const api = useApi();

  const { t } = useKeyedTranslation("components.pages.BooksPage.BookForm");

  const { form, mutation, toast } = useStandardForm({
    title: "book-form",
    schema: schema,
    defaultValues: book ? book : defaultValues,
    submitFn: book ? api.books.update : api.books.create,
    successCallback,
  });

  return (
    <StandardForm
      title={t("title")}
      description={t(`description.${book ? "edit" : "create"}`)}
      form={form}
      mutation={mutation}
      toast={toast}
      onCancel={onCancel}
    >
      <FormGroup>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItemFormatted
              label={t("fields.title.label")}
              description={t("fields.title.description")}
              error={form.formState.errors.title}
            >
              <Input placeholder={placeholders.title} {...field} />
            </FormItemFormatted>
          )}
        />
        <FormField
          control={form.control}
          name="author"
          render={({ field }) => (
            <FormItemFormatted
              label={t("fields.author.label")}
              description={t("fields.author.description")}
              error={form.formState.errors.author}
            >
              <Input placeholder={placeholders.author} {...field} />
            </FormItemFormatted>
          )}
        />
        <FormField
          control={form.control}
          name="pages"
          render={({ field }) => (
            <FormItemFormatted
              label={t("fields.pages.label")}
              description={t("fields.pages.description")}
              error={form.formState.errors.pages}
            >
              <Input className="text-right" {...field} />
            </FormItemFormatted>
          )}
        />
      </FormGroup>
    </StandardForm>
  );
}
