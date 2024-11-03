import { EyeIcon, PencilIcon } from "lucide-react";
import { useKeyedTranslation } from "../../../../hooks/useKeyedTranslation/useKeyedTranslation";
import { UserRole } from "../../../../types/user/userRole";
import SecondaryButton from "../../../common/SecondaryButton/SecondaryButton";

type RoleInputButtonProps = {
  roles: UserRole[];
  disabled?: boolean;
  onClick: () => void;
};

function RoleInputButton({ roles, disabled, onClick }: RoleInputButtonProps) {
  return (
    <SecondaryButton
      className="justify-between w-full gap-4 h-[unset]"
      onClick={onClick}
      disabled={roles.length === 0}
    >
      <RoleInputButtonInner roles={roles} disabled={disabled} />
    </SecondaryButton>
  );
}

export default RoleInputButton;

function RoleInputButtonInner({
  roles,
  disabled,
}: {
  roles: UserRole[];
  disabled?: boolean;
}) {
  const { t } = useKeyedTranslation(
    "components.form.RoleInput.RoleInputButton",
  );
  const { t: tRoles } = useKeyedTranslation("types.user.UserRole");
  const firstRole: UserRole | undefined = [...roles].sort()[0];
  const isMultipleRoles = roles.length > 1;

  if (firstRole == null) return <>{t("noRoles")}</>;

  return (
    <>
      {disabled ? <EyeIcon size={"1.5rem"} /> : <PencilIcon size={"1.5rem"} />}
      <div className="flex flex-row flex-wrap items-center justify-end gap-y-0 gap-x-2">
        <span>{tRoles(`${firstRole}.name`)}</span>
        {isMultipleRoles && (
          <span className="text-xs leading-none text-right">
            {t("plusNMore", { n: roles.length - 1 })}
          </span>
        )}
      </div>
    </>
  );
}
