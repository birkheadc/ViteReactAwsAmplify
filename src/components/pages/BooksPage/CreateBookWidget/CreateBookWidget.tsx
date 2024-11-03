import { Plus } from "lucide-react";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { UserPermission } from "../../../../types/user/userPermission";
import PrimaryButton from "../../../common/PrimaryButton/PrimaryButton";
import CreateBookModal from "./CreateBookModal/CreateBookModal";
import React from "react";
import { useMe } from "../../../../hooks/useMe/useMe";

export default function CreateBookWidget(): JSX.Element | null {
  const { t } = useKeyedTranslation(
    "components.pages.BooksPage.CreateBookWidget",
  );

  const [isOpen, setOpen] = React.useState(false);

  const { canI } = useMe();
  if (!canI(UserPermission.ModifyBooks)) return null;

  return (
    <>
      <PrimaryButton onClick={() => setOpen(true)}>
        <Plus />
        {t("createBook")}
      </PrimaryButton>
      <CreateBookModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}
