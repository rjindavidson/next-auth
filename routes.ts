/**
 * Public accessible routes
 * @type {string}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
];

/**
 * Routes that will redirect to /settings
 * @type {string}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
];

/**
 * Prefix for API auth routes
 * Routes that start with this prefix are used for API auth
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * Default redirect path after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";