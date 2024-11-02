export const UserRole = {
  SuperAdmin: 0,
  Admin: 1,
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export const UserRoleKeys = Object.values(UserRole);
