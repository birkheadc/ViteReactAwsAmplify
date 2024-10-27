export class UserProfile {
  displayName?: string;

  static async fromJson(json: unknown): Promise<UserProfile> {
    const profile = new UserProfile();

    if (json == null || typeof json !== "object") return profile;

    if ("displayName" in json && typeof json.displayName === "string")
      profile.displayName = json.displayName;

    return profile;
  }
}
