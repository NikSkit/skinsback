"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateDepositErrorCodes = void 0;
const common_types_1 = require("./common.types");
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["invalidOrderId"] = 1] = "invalidOrderId";
    ErrorCodes[ErrorCodes["invalidSteamId"] = 2] = "invalidSteamId";
    ErrorCodes[ErrorCodes["transactionIdAlreadyExists"] = 5] = "transactionIdAlreadyExists";
    ErrorCodes[ErrorCodes["invalidMaxValue"] = 7] = "invalidMaxValue";
    ErrorCodes[ErrorCodes["invalidCurrency"] = 8] = "invalidCurrency";
})(ErrorCodes || (ErrorCodes = {}));
exports.CreateDepositErrorCodes = Object.assign(Object.assign({}, ErrorCodes), common_types_1.DefaultErrorCodes);
//# sourceMappingURL=create-deposit.types.js.map