"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFailedEvent = exports.AuthSuccessEvent = exports.BalanceChangeEvent = exports.StatusChangeEvent = exports.BuyItemEvent = exports.Events = exports.ItemInfo = void 0;
const common_types_1 = require("./common.types");
class ItemInfo extends common_types_1.DefaultItemInfo {
}
exports.ItemInfo = ItemInfo;
var Events;
(function (Events) {
    Events["buyItem"] = "buy_item";
    Events["statusChange"] = "status_change";
    Events["balanceChange"] = "balance_change";
    Events["authSuccess"] = "auth_success";
    Events["authFailed"] = "auth_failed";
})(Events = exports.Events || (exports.Events = {}));
class BuyItemEvent {
}
exports.BuyItemEvent = BuyItemEvent;
class StatusChangeEvent {
}
exports.StatusChangeEvent = StatusChangeEvent;
class BalanceChangeEvent {
}
exports.BalanceChangeEvent = BalanceChangeEvent;
class AuthSuccessEvent {
}
exports.AuthSuccessEvent = AuthSuccessEvent;
class AuthFailedEvent {
}
exports.AuthFailedEvent = AuthFailedEvent;
//# sourceMappingURL=events.types.js.map