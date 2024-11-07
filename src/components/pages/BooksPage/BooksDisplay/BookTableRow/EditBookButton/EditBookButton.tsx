import { Pencil } from "lucide-react";
import SecondaryButton from "../../../../../common/SecondaryButton/SecondaryButton";
import { Book } from "../../../../../../types/book/book";
import EditBookModal from "./EditBookModal/EditBookModal";
import React from "react";
import { UserPermission } from "../../../../../../types/user/userPermission";
import { useMe } from "../../../../../../hooks/useMe/useMe";
import { useKeyedTranslation } from "../../../../../../hooks/useKeyedTranslation/useKeyedTranslation";

type EditBookButtonProps = {
  book: Book;
};

function EditBookButton({ book }: EditBookButtonProps): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.pages.BooksPage.BooksDisplay.BookTableRow.EditBookButton",
  );

  const { canI } = useMe();
  const [isOpen, setOpen] = React.useState<boolean>(false);

  if (!canI(UserPermission.ModifyBooks)) return null;

  return (
    <>
      <SecondaryButton
        aria-label={`${t("editBook")} ${book.title} ${book.author}`}
        className="h-8"
        onClick={() => setOpen(true)}
      >
        <Pencil />
      </SecondaryButton>
      <EditBookModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        book={book}
      />
    </>
  );
}

export default EditBookButton;
