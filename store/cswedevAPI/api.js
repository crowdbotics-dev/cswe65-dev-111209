import axios from "axios"
const cswedevAPI = axios.create({
  baseURL: "https://cswe65-dev-111209.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return cswedevAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_aouyt_list(payload) {
  return cswedevAPI.get(`/api/v1/aouyt/`)
}
function api_v1_aouyt_create(payload) {
  return cswedevAPI.post(`/api/v1/aouyt/`, payload)
}
function api_v1_aouyt_retrieve(payload) {
  return cswedevAPI.get(`/api/v1/aouyt/${payload.id}/`)
}
function api_v1_aouyt_update(payload) {
  return cswedevAPI.put(`/api/v1/aouyt/${payload.id}/`, payload)
}
function api_v1_aouyt_partial_update(payload) {
  return cswedevAPI.patch(`/api/v1/aouyt/${payload.id}/`, payload)
}
function api_v1_aouyt_destroy(payload) {
  return cswedevAPI.delete(`/api/v1/aouyt/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return cswedevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return cswedevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return cswedevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_retrieve(payload) {
  return cswedevAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return cswedevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return cswedevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return cswedevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return cswedevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return cswedevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return cswedevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return cswedevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return cswedevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return cswedevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_aouyt_list,
  api_v1_aouyt_create,
  api_v1_aouyt_retrieve,
  api_v1_aouyt_update,
  api_v1_aouyt_partial_update,
  api_v1_aouyt_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
