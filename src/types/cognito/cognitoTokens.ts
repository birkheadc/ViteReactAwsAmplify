export class CognitoTokens {
  accessToken?: string;
  idToken?: string;
  refreshToken?: string;
  expiresIn?: number;

  static fromJson(json: unknown): CognitoTokens {
    const tokens = new CognitoTokens();

    if (json == null || typeof json !== "object") {
      return tokens;
    }

    if ("access_token" in json && typeof json.access_token === "string")
      tokens.accessToken = json.access_token;
    if ("id_token" in json && typeof json.id_token === "string")
      tokens.idToken = json.id_token;
    if ("refresh_token" in json && typeof json.refresh_token === "string")
      tokens.refreshToken = json.refresh_token;
    if ("expires_in" in json && typeof json.expires_in === "number")
      tokens.expiresIn = json.expires_in;

    return tokens;
  }
}
