import { UserProfile } from "./userProfile";
import { UserRoles } from "./userRoles";

export class User {
  id: string = "";
  emailAddress: string = "";
  profile: UserProfile = new UserProfile();
  roles: UserRoles = new UserRoles();

  static async fromJson(json: unknown): Promise<User> {
    const user = new User();

    if (json == null || typeof json !== "object") return user;

    if ("id" in json && typeof json.id === "string") user.id = json.id;
    if ("emailAddress" in json && typeof json.emailAddress === "string")
      user.emailAddress = json.emailAddress;
    if ("profile" in json && typeof json.profile === "object")
      user.profile = await UserProfile.fromJson(json.profile);

    if ("roles" in json && typeof json.roles === "object")
      user.roles = await UserRoles.fromJson(json.roles);

    return user;
  }
}
