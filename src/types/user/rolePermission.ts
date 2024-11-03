import { UserPermission } from "./userPermission";
import { UserRole } from "./userRole";

/**
 * Maps a user role to the permissions that role has.
 * Should be kept in sync with the API.
 */
export class RolePermission {
  private static readonly _permissions: Record<UserRole, UserPermission[]> = {
    [UserRole.SuperAdmin]: Object.values(UserPermission),
    [UserRole.Admin]: [UserPermission.ModifyBooks, UserPermission.ModifyUsers],
  };

  static doesRolesHavePermission(
    roles: UserRole[],
    permission: UserPermission
  ): boolean {
    return roles.some((role) => this._permissions[role]?.includes(permission));
  }
}
