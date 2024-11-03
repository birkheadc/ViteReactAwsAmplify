import { useApi } from "../../../../../../../hooks/useApi/useApi";
import { useKeyedTranslation } from "../../../../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import ConfirmationModal from "../../../../../../common/ConfirmationModal/ConfirmationModal";
import { Book } from "../../../../../../../types/book/book";
import { useToastMutation } from "../../../../../../../hooks/useToastMutation/useToastMutation";
import { useQueryClient } from "@tanstack/react-query";

type ConfirmDeleteBookModalProps = {
  book: Book;
  isOpen: boolean;
  onClose: () => void;
};

function ConfirmDeleteBookModal({
  book,
  isOpen,
  onClose,
}: ConfirmDeleteBookModalProps): JSX.Element {
  const queryClient = useQueryClient();

  const api = useApi();

  const onSuccess = () => {
    queryClient.resetQueries({ queryKey: ["books"] });
    onClose();
  };

  const { mutate, isPending } = useToastMutation({
    toastId: "confirm-delete-book-modal",
    fn: () => api.books.deleteBook(book.id),
    successCallback: onSuccess,
  });

  const { t } = useKeyedTranslation(
    "components.pages.BooksPage.BooksDisplay.BookTableRow.DeleteBookButton.ConfirmDeleteBookModal",
  );

  return (
    <ConfirmationModal
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={mutate}
      message={t("message")}
      cancelButtonText={t("cancelButtonText")}
      confirmButtonText={t("confirmButtonText")}
      isWorking={isPending}
    />
  );
}

export default ConfirmDeleteBookModal;
