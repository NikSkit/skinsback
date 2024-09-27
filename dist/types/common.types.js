"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultItemInfo = exports.DefaultErrorCodes = void 0;
var DefaultErrorCodes;
(function (DefaultErrorCodes) {
    DefaultErrorCodes[DefaultErrorCodes["methodNotAllow"] = -1] = "methodNotAllow";
    DefaultErrorCodes[DefaultErrorCodes["invalidShopid"] = -2] = "invalidShopid";
    DefaultErrorCodes[DefaultErrorCodes["invalidSignature"] = -3] = "invalidSignature";
    DefaultErrorCodes[DefaultErrorCodes["shopNotActive"] = -4] = "shopNotActive";
    DefaultErrorCodes[DefaultErrorCodes["invalidMethod"] = -5] = "invalidMethod";
    DefaultErrorCodes[DefaultErrorCodes["requestLimitReached"] = -7] = "requestLimitReached";
    DefaultErrorCodes["requestTimeout"] = "requestTimeout";
    DefaultErrorCodes["unknownError"] = "unknownError";
})(DefaultErrorCodes = exports.DefaultErrorCodes || (exports.DefaultErrorCodes = {}));
class DefaultItemInfo {
}
exports.DefaultItemInfo = DefaultItemInfo;
//# sourceMappingURL=common.types.js.map