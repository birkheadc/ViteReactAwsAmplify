import LabeledCheckbox from "../../../LabeledCheckbox/LabeledCheckbox";
import { UserRole } from "../../../../../types/user/userRole";
import { useKeyedTranslation } from "../../../../../hooks/useKeyedTranslation/useKeyedTranslation";

type RoleCheckboxProps = {
  role: UserRole;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
};

function RoleCheckbox({
  role,
  checked,
  onCheckedChange,
  disabled,
}: RoleCheckboxProps) {
  const { t: tRoles } = useKeyedTranslation("types.user.UserRole");

  return (
    <LabeledCheckbox
      disabled={disabled}
      id={`role-checkbox-${role}`}
      label={`${tRoles(`${role}.name`)}`}
      description={`${tRoles(`${role}.description`)}`}
      checked={checked}
      onCheckedChange={onCheckedChange}
    />
  );
}

export default RoleCheckbox;
