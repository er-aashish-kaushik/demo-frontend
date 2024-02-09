const BASE_URL = 'http://localhost:5001'
const VERSION = 'v1'

export const SINGUP_ENDPOINT = `${BASE_URL}/${VERSION}/user/signup`;
export const LOGIN_ENDPOINT = `${BASE_URL}/${VERSION}/user/login`;
export const REFRESH_TOKEN_ENDPOINT = `${BASE_URL}/${VERSION}/auth/refreshToken`;
export const GET_USERS_LIST = `${BASE_URL}/${VERSION}/user/users`;
