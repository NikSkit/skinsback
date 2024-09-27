"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketTransactionErrorCodes = void 0;
const common_types_1 = require("./common.types");
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["marketDisable"] = -6] = "marketDisable";
    ErrorCodes[ErrorCodes["missingOneOfRequiredParams"] = 1] = "missingOneOfRequiredParams";
    ErrorCodes[ErrorCodes["offerNotFound"] = 2] = "offerNotFound";
})(ErrorCodes || (ErrorCodes = {}));
exports.MarketTransactionErrorCodes = Object.assign(Object.assign({}, common_types_1.DefaultErrorCodes), ErrorCodes);
//# sourceMappingURL=market-transaction.types.js.map