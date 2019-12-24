import config from 'src/config';
const url = config.IS_DEV;
export default {
  auth: url + 'authenticate',
  authUser: url + 'authenticate/user',
  authRefresh: url + 'authenticate/refresh',
  authInvalidate: url + 'authenticate/invalidate',
  accountRetrieve: url + 'accounts/retrieve'
}