import config from 'src/config';
const url = config.IS_DEV;
let apiUrl = url + '/';
export default {
  auth: apiUrl + 'authenticate',
  authUser: apiUrl + 'authenticate/user',
  authRefresh: apiUrl + 'authenticate/refresh',
  authInvalidate: apiUrl + 'authenticate/invalidate',
  accountRetrieve: apiUrl + 'accounts/retrieve',
  notificationsRetrieve: apiUrl + 'notifications/retrieve',
  messagesRetrieve: apiUrl + 'messenger_groups/retrieve_summary_payhiram',
  ledgerSummaryRetrieve: apiUrl + 'ledgers/summary',
  requestRetrieve: apiUrl + 'requests/retrieve',
  requestCreate: apiUrl + 'requests/create',
  bookmarkCreate: apiUrl + 'bookmarks/create',
  requestPeerCreate: apiUrl + 'request_peers/create',
  requestManageByThread: apiUrl + 'requests/manage_request_by_thread',
  customMessengerGroupRetrieve: apiUrl + 'custom_messenger_groups/retrieve',
  customMessengerGroupCreate: apiUrl + 'custom_messenger_groups/create',
  messengerMessagesCreate: apiUrl + 'messenger_messages/create',
  messengerMessagesRetrieve: apiUrl + 'messenger_messages/retrieve',
  mmCreateWithImageWithoutPayload: apiUrl + 'messenger_messages/create_with_image_without_payload',
  mmCreateWithImage: apiUrl + 'messenger_messages/create_with_images',
  ratingsCreate: apiUrl + 'ratings/create',
  notificationSettingsRetrieve: apiUrl + 'notification_settings/retrieve',
  imageUploadUnLink: apiUrl + 'images/upload_un_link',
  imageUploadBase64: apiUrl + 'images/upload_base64',
  requestValidationUpdate: apiUrl + 'request_validations/update',
  notificationSettingOtp: apiUrl + 'notification_settings/update_otp'
}