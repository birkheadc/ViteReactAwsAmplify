import { EyeIcon, PencilIcon } from "lucide-react";
import { useKeyedTranslation } from "../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { UserRole } from "../../../types/user/userRole";
import SecondaryButton from "../../common/SecondaryButton/SecondaryButton";
import React from "react";
import RoleInputModal from "./RoleInputModal/RoleInputModal";

type RoleInputProps = {
  disabled?: boolean;
  roles: UserRole[];
};

function RoleInput({ disabled, roles }: RoleInputProps) {
  const [isOpen, setOpen] = React.useState(false);

  const { t } = useKeyedTranslation("components.form.RoleInput");
  const { t: tRoles } = useKeyedTranslation("types.user.UserRole");

  const firstRole = [...roles].sort()[0];
  const isMultipleRoles = roles.length > 1;

  return (
    <>
      <SecondaryButton
        className="justify-between w-full gap-4 h-[unset]"
        onClick={() => setOpen(true)}
      >
        {disabled ? (
          <EyeIcon size={"1.5rem"} />
        ) : (
          <PencilIcon size={"1.5rem"} />
        )}
        <div className="flex flex-row flex-wrap items-center justify-end gap-y-0 gap-x-2">
          <span>{tRoles(firstRole)}</span>
          {isMultipleRoles && (
            <span className="text-xs leading-none text-right">
              {t("plusNMore", { n: roles.length - 1 })}
            </span>
          )}
        </div>
      </SecondaryButton>
      <RoleInputModal isOpen={isOpen} onClose={() => setOpen(false)} />
    </>
  );
}

export default RoleInput;
