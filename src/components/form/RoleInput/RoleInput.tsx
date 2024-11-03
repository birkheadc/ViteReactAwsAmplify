import { UserRole } from "../../../types/user/userRole";
import React from "react";
import RoleInputModal from "./RoleInputModal/RoleInputModal";
import RoleInputButton from "./RoleInputButton/RoleInputButton";

type RoleInputProps = {
  disabled?: boolean;
  roles: UserRole[];
  showUngrantedRoles?: boolean;
};

function RoleInput({ disabled, roles, showUngrantedRoles }: RoleInputProps) {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <RoleInputButton
        roles={roles}
        disabled={disabled}
        onClick={() => setOpen(true)}
      />
      <RoleInputModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        currentRoles={roles}
        disabled={disabled}
        showUngrantedRoles={showUngrantedRoles}
        onSave={() => {
          setOpen(false);
          console.log(
            "Not yet implemented. This should only be used by a privileged user granting roles to other users via a dashboard.",
          );
        }}
      />
    </>
  );
}

export default RoleInput;
