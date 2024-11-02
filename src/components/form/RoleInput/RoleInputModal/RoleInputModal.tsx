import React from "react";
import { UserRole, UserRoleKeys } from "../../../../types/user/userRole";
import CloseableModal from "../../../common/CloseableModal/CloseableModal";
import RoleCheckbox from "./RoleCheckbox/RoleCheckbox";
import SecondaryButton from "../../../common/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../../common/PrimaryButton/PrimaryButton";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
type RoleInputModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (roles: UserRole[]) => void;
  currentRoles: UserRole[];
  disabled?: boolean;
  showUngrantedRoles?: boolean;
};

function RoleInputModal({
  isOpen,
  onClose,
  currentRoles,
  disabled,
  onSave,
  showUngrantedRoles,
}: RoleInputModalProps) {
  const { t } = useKeyedTranslation("components.form.RoleInput.RoleInputModal");

  const [roles, setRoles] = React.useState<UserRole[]>(currentRoles);

  const rolesToShow = showUngrantedRoles
    ? [...UserRoleKeys].sort()
    : [...currentRoles].sort();

  const handleAddRole = (role: UserRole) => {
    setRoles([...roles, role]);
  };

  const handleRemoveRole = (role: UserRole) => {
    setRoles(roles.filter((r) => r !== role));
  };

  return (
    <CloseableModal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col gap-4 justify-between items-stretch">
        <div className="flex flex-col gap-2">
          {rolesToShow.map((key) => (
            <RoleCheckbox
              role={key}
              checked={roles.includes(key)}
              disabled={disabled}
              onCheckedChange={(value) =>
                value ? handleAddRole(key) : handleRemoveRole(key)
              }
            />
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-end">
          <SecondaryButton onClick={onClose}>{t("cancel")}</SecondaryButton>
          <PrimaryButton disabled={disabled} onClick={() => onSave(roles)}>
            {t("save")}
          </PrimaryButton>
        </div>
      </div>
    </CloseableModal>
  );
}

export default RoleInputModal;
