import { request } from './request';

export function currentUser() {
  return request("get", `/api/currentUser`, { "header": { "Content-Type": "application/json", }, })();
}

export function apiCurrentUserXSwaggerRouterController() {
  return request("x-swagger-router-controller", `/api/currentUser`)();
}

export function getFakeCaptcha(params) {
  return request("post", `/api/login/captcha`, { "header": { "Content-Type": "application/json", }, })(params);
}

export function outLogin() {
  return request("post", `/api/login/outLogin`, { "header": { "Content-Type": "application/json", }, })();
}

export function apiLoginOutLoginXSwaggerRouterController() {
  return request("x-swagger-router-controller", `/api/login/outLogin`)();
}

export function login(params) {
  return request("post", `/api/login/account`, { "header": { "accept": "application/json", "Content-Type": "application/json", }, })(params);
}

export function apiLoginAccountXSwaggerRouterController() {
  return request("x-swagger-router-controller", `/api/login/account`)();
}

export function apiNoticesSummary() {
  return request("summary", `/api/notices`)();
}

export function apiNoticesDescription() {
  return request("description", `/api/notices`)();
}

export function getNotices() {
  return request("get", `/api/notices`, { "header": { "Content-Type": "application/json", }, })();
}

export function rule(params) {
  return request("get", `/api/rule`, { "header": { "Content-Type": "application/json", }, })(params);
}

export function addRule() {
  return request("post", `/api/rule`, { "header": { "Content-Type": "application/json", }, })();
}

export function updateRule() {
  return request("put", `/api/rule`, { "header": { "Content-Type": "application/json", }, })();
}

export function removeRule() {
  return request("delete", `/api/rule`, { "header": { "Content-Type": "application/json", }, })();
}

export function apiRuleXSwaggerRouterController() {
  return request("x-swagger-router-controller", `/api/rule`)();
}

export function swaggerXSwaggerPipe() {
  return request("x-swagger-pipe", `/swagger`)();
}

