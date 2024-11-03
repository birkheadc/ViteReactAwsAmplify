import CloseableModal from "../../../../common/CloseableModal/CloseableModal";
import BookForm from "../../BookForm/BookForm";

type CreateBookModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CreateBookModal({
  isOpen,
  onClose,
}: CreateBookModalProps): JSX.Element {
  return (
    <CloseableModal isOpen={isOpen} onClose={onClose}>
      <BookForm />
    </CloseableModal>
  );
}
