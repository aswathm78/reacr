const BASE_URL = 'http://122.166.172.240:3031/'

const APIS = {
  BASE_URL: BASE_URL,

  LOGIN_AGENT: BASE_URL + 'agentLogin',

  CREATE_CUSTOMER: BASE_URL + 'createCustomer',

  VERIFY_OTP: BASE_URL + 'verifyOtp',

  SAVE_CUSTOMER_DETAIL: BASE_URL + 'saveCustomerDetail',

  GET_COMPANY_DETAIL: BASE_URL + 'getCompanyDetail/',

  GET_TAHAKOM_DETAIL: BASE_URL + 'getTahakomDetail/',

  GET_WATHQ_DETAIL: BASE_URL + 'getWathqDetail/',

  GET_WATHQ_ADDRESS_DETAIL: BASE_URL + 'getWathqAddressDetail/',

  GET_USER_DOCUMENTS: BASE_URL + 'getCustomerDocument/',

  UPLOAD_DOCUMENTS: BASE_URL + 'uploadDoc',

  GET_LANGUAGE_API:BASE_URL +'getLanguageInformation?lang=',
  
  GET_CUSTOMER_LEADS:BASE_URL+'getCustomerLeads'
}

export { APIS, BASE_URL }
