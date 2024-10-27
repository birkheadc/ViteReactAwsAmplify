import { UserRole } from "./userRole";

export class UserRoles {
  roles: UserRole[] = [];

  static async fromJson(json: unknown): Promise<UserRoles> {
    const roles = new UserRoles();

    if (json == null || typeof json !== "object") return roles;

    if ("roles" in json && Array.isArray(json.roles))
      roles.roles = json.roles;

    return roles;
  }
}
