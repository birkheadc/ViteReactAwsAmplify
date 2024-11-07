import { Book } from "../../../../../../types/book/book";

import { Trash } from "lucide-react";
import SecondaryButton from "../../../../../common/SecondaryButton/SecondaryButton";
import React from "react";
import ConfirmDeleteBookModal from "./ConfirmDeleteBookModal/ConfirmDeleteBookModal";
import { useMe } from "../../../../../../hooks/useMe/useMe";
import { UserPermission } from "../../../../../../types/user/userPermission";
import { useKeyedTranslation } from "../../../../../../hooks/useKeyedTranslation/useKeyedTranslation";

type DeleteBookButtonProps = {
  book: Book;
};

function DeleteBookButton({ book }: DeleteBookButtonProps): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.pages.BooksPage.BooksDisplay.BookTableRow.DeleteBookButton",
  );

  const { canI } = useMe();
  const [isOpen, setOpen] = React.useState<boolean>(false);

  if (!canI(UserPermission.ModifyBooks)) return null;

  return (
    <>
      <SecondaryButton
        aria-label={`${t("deleteBook")} ${book.title} ${book.author}`}
        className="h-8"
        onClick={() => setOpen(true)}
      >
        <Trash />
      </SecondaryButton>
      <ConfirmDeleteBookModal
        book={book}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
}

export default DeleteBookButton;
