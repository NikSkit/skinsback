"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderStatusErrorCodes = void 0;
const common_types_1 = require("./common.types");
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["orderIdOrTransactionIdMissing"] = 1] = "orderIdOrTransactionIdMissing";
    ErrorCodes[ErrorCodes["invalidOrderId"] = 2] = "invalidOrderId";
    ErrorCodes[ErrorCodes["invalidTransactionId"] = 3] = "invalidTransactionId";
    ErrorCodes[ErrorCodes["transactionNotFound"] = 4] = "transactionNotFound";
})(ErrorCodes || (ErrorCodes = {}));
exports.OrderStatusErrorCodes = Object.assign(Object.assign({}, ErrorCodes), common_types_1.DefaultErrorCodes);
//# sourceMappingURL=get-order-status.types.js.map