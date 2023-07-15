type RequestResult<Data> = Promise<{ response: Response; data: Data; }>;

type CurrentUserResult0 = RequestResult<{ "name"?: string; "avatar"?: string; "userid"?: string; "email"?: string; "signature"?: string; "title"?: string; "group"?: string; "tags"?: ({ "key"?: string; "label"?: string; })[]; "notifyCount"?: number; "unreadCount"?: number; "country"?: string; "access"?: string; "geographic"?: { "province"?: { "label"?: string; "key"?: string; }; "city"?: { "label"?: string; "key"?: string; }; }; "address"?: string; "phone"?: string; }>;
/**
* 获取当前的用户
*/
export function currentUser(): CurrentUserResult0;

type ApiCurrentUserXSwaggerRouterControllerResult0 = RequestResult<null>;
export function apiCurrentUserXSwaggerRouterController(): ApiCurrentUserXSwaggerRouterControllerResult0;

type GetFakeCaptchaParams0 = { "query"?: { "phone"?: string; }; };
type GetFakeCaptchaResult0 = RequestResult<{ "code"?: number; "status"?: string; }>;
/**
* 发送验证码
*/
export function getFakeCaptcha(params: GetFakeCaptchaParams0): GetFakeCaptchaResult0;

type OutLoginResult0 = RequestResult<object>;
/**
* 登录接口
*/
export function outLogin(): OutLoginResult0;

type ApiLoginOutLoginXSwaggerRouterControllerResult0 = RequestResult<null>;
export function apiLoginOutLoginXSwaggerRouterController(): ApiLoginOutLoginXSwaggerRouterControllerResult0;

type LoginParams0 = { "body"?: { "username"?: string; "password"?: string; "autoLogin"?: boolean; "type"?: string; }; };
type LoginResult0 = RequestResult<{ "status"?: string; "type"?: string; "currentAuthority"?: string; }>;
/**
* 登录接口
*/
export function login(params: LoginParams0): LoginResult0;

type ApiLoginAccountXSwaggerRouterControllerResult0 = RequestResult<null>;
export function apiLoginAccountXSwaggerRouterController(): ApiLoginAccountXSwaggerRouterControllerResult0;

type ApiNoticesSummaryResult0 = RequestResult<null>;
export function apiNoticesSummary(): ApiNoticesSummaryResult0;

type ApiNoticesDescriptionResult0 = RequestResult<null>;
export function apiNoticesDescription(): ApiNoticesDescriptionResult0;

type GetNoticesResult0 = RequestResult<{ "data"?: ({ "id"?: string; "extra"?: string; "key"?: string; "read"?: boolean; "avatar"?: string; "title"?: string; "status"?: string; "datetime"?: string; "description"?: string; "type"?: "notification" | "message" | "event"; })[]; "total"?: number; "success"?: boolean; }>;
export function getNotices(): GetNoticesResult0;

type RuleParams0 = { "query"?: { "current"?: number; "pageSize"?: number; }; };
type RuleResult0 = RequestResult<{ "data"?: ({ "key"?: number; "disabled"?: boolean; "href"?: string; "avatar"?: string; "name"?: string; "owner"?: string; "desc"?: string; "callNo"?: number; "status"?: number; "updatedAt"?: string; "createdAt"?: string; "progress"?: number; })[]; "total"?: number; "success"?: boolean; }>;
/**
* 获取规则列表
*/
export function rule(params: RuleParams0): RuleResult0;

type AddRuleResult0 = RequestResult<{ "key"?: number; "disabled"?: boolean; "href"?: string; "avatar"?: string; "name"?: string; "owner"?: string; "desc"?: string; "callNo"?: number; "status"?: number; "updatedAt"?: string; "createdAt"?: string; "progress"?: number; }>;
/**
* 新建规则
*/
export function addRule(): AddRuleResult0;

type UpdateRuleResult0 = RequestResult<{ "key"?: number; "disabled"?: boolean; "href"?: string; "avatar"?: string; "name"?: string; "owner"?: string; "desc"?: string; "callNo"?: number; "status"?: number; "updatedAt"?: string; "createdAt"?: string; "progress"?: number; }>;
/**
* 新建规则
*/
export function updateRule(): UpdateRuleResult0;

type RemoveRuleResult0 = RequestResult<object>;
/**
* 删除规则
*/
export function removeRule(): RemoveRuleResult0;

type ApiRuleXSwaggerRouterControllerResult0 = RequestResult<null>;
export function apiRuleXSwaggerRouterController(): ApiRuleXSwaggerRouterControllerResult0;

type SwaggerXSwaggerPipeResult0 = RequestResult<null>;
export function swaggerXSwaggerPipe(): SwaggerXSwaggerPipeResult0;

