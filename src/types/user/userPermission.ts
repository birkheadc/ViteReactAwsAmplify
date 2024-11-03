export const UserPermission = {
  ModifyBooks: 0,
  ModifyUsers: 1,
  ModifyUserRoles: 2,
} as const;

export type UserPermission =
  (typeof UserPermission)[keyof typeof UserPermission];
