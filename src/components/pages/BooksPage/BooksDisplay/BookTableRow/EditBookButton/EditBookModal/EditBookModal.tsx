import { useQueryClient } from "@tanstack/react-query";
import { Book } from "../../../../../../../types/book/book";
import CloseableModal from "../../../../../../common/CloseableModal/CloseableModal";
import BookForm from "../../../../BookForm/BookForm";

type EditBookModalProps = {
  isOpen: boolean;
  onClose: () => void;
  book: Book;
};

function EditBookModal({
  isOpen,
  onClose,
  book,
}: EditBookModalProps): JSX.Element {
  const queryClient = useQueryClient();

  const onSuccess = () => {
    queryClient.resetQueries({ queryKey: ["books"] });
    onClose();
  };

  return (
    <CloseableModal isOpen={isOpen} onClose={onClose}>
      <BookForm book={book} successCallback={onSuccess} />
    </CloseableModal>
  );
}

export default EditBookModal;
