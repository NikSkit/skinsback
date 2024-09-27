"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketBuyItemErrorCodes = exports.Item = void 0;
const common_types_1 = require("./common.types");
class Item {
}
exports.Item = Item;
var ErrorCodes;
(function (ErrorCodes) {
    ErrorCodes[ErrorCodes["marketDisable"] = -6] = "marketDisable";
    ErrorCodes[ErrorCodes["missinNameAndId"] = 1] = "missinNameAndId";
    ErrorCodes[ErrorCodes["nameMinLength"] = 2] = "nameMinLength";
    ErrorCodes[ErrorCodes["missinPartnerOrToken"] = 3] = "missinPartnerOrToken";
    ErrorCodes[ErrorCodes["insufficientFunds"] = 4] = "insufficientFunds";
    ErrorCodes[ErrorCodes["skinUnvailable"] = 5] = "skinUnvailable";
    ErrorCodes[ErrorCodes["skinsNotFoundAtSpecifiedPrice"] = 6] = "skinsNotFoundAtSpecifiedPrice";
    ErrorCodes[ErrorCodes["transactionIdAlreadyExists"] = 7] = "transactionIdAlreadyExists";
})(ErrorCodes || (ErrorCodes = {}));
exports.MarketBuyItemErrorCodes = Object.assign(Object.assign({}, common_types_1.DefaultErrorCodes), ErrorCodes);
//# sourceMappingURL=market-buy-item.types.js.map