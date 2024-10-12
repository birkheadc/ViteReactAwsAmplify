export class User {
  id: string = "";
  emailAddress: string = "";
  displayName?: string;

  static async fromJson(json: unknown): Promise<User> {
    const user = new User();

    if (json == null || typeof json !== "object") return user;

    if ("id" in json && typeof json.id === "string") user.id = json.id;
    if ("emailAddress" in json && typeof json.emailAddress === "string")
      user.emailAddress = json.emailAddress;
    if ("displayName" in json && typeof json.displayName === "string")
      user.displayName = json.displayName;

    return user;
  }
}
