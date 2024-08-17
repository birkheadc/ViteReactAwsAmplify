import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AccessToken } from "./types/accessToken/accessToken";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractAccessToken(data: unknown): AccessToken | null {
  if (data == null) return null;
  if (typeof data !== "object") return null;
  if (!("AuthenticationResult" in data)) return null;

  const AuthenticationResult = data.AuthenticationResult;

  if (AuthenticationResult == null) return null;
  if (typeof AuthenticationResult !== "object") return null;
  if (!("AccessToken" in AuthenticationResult)) return null;

  const AccessToken = AuthenticationResult.AccessToken;

  if (AccessToken == null) return null;
  if (typeof AccessToken !== "string") return null;

  return AccessToken;
}
