// Role definitions and permissions
export const ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user'
};

export const PERMISSIONS = {
  MANAGE_USERS: 'manage_users',
  MANAGE_CONTENT: 'manage_content',
  VIEW_DASHBOARD: 'view_dashboard',
  PLACE_BETS: 'place_bets'
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: [
    PERMISSIONS.MANAGE_USERS,
    PERMISSIONS.MANAGE_CONTENT,
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.PLACE_BETS
  ],
  [ROLES.MODERATOR]: [
    PERMISSIONS.MANAGE_CONTENT,
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.PLACE_BETS
  ],
  [ROLES.USER]: [
    PERMISSIONS.PLACE_BETS
  ]
};