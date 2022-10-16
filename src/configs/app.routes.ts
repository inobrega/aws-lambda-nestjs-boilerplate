/**
 * Application routes with its version
 * https://github.com/inobrega/backend-best-pratices/blob/main/README.md#api-versioning
 */

// Root
const usersRoot = 'users';
const walletsRoot = 'wallets';

// Api Versions
const v1 = 'v1';

export const routesV1 = {
  version: v1,
  user: {
    root: usersRoot,
    delete: `/${usersRoot}/:id`,
  },
  wallet: {
    root: walletsRoot,
    delete: `/${walletsRoot}/:id`,
  },
};
