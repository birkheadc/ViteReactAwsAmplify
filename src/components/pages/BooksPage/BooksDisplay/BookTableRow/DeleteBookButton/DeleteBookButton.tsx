import { Book } from "../../../../../../types/book/book";

import { Trash } from "lucide-react";
import SecondaryButton from "../../../../../common/SecondaryButton/SecondaryButton";
import React from "react";
import ConfirmDeleteBookModal from "./ConfirmDeleteBookModal/ConfirmDeleteBookModal";
import { useMe } from "../../../../../../hooks/useMe/useMe";
import { UserPermission } from "../../../../../../types/user/userPermission";

type DeleteBookButtonProps = {
  book: Book;
};

function DeleteBookButton({ book }: DeleteBookButtonProps): JSX.Element | null {
  const { canI } = useMe();
  const [isOpen, setOpen] = React.useState<boolean>(false);

  if (!canI(UserPermission.ModifyBooks)) return null;

  return (
    <>
      <SecondaryButton className="h-8" onClick={() => setOpen(true)}>
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
