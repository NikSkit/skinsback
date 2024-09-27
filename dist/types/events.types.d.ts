import { DefaultItemInfo } from './common.types';
import { MarketBuyItem } from './market-buy-item.types';
export declare class ItemInfo extends DefaultItemInfo {
    id: number;
    instanceid: string;
}
export declare enum Events {
    buyItem = "buy_item",
    statusChange = "status_change",
    balanceChange = "balance_change",
    authSuccess = "auth_success",
    authFailed = "auth_failed"
}
export type OfferStatus = 'creating_trade' | 'waiting_accept' | 'accepted' | 'canceled' | 'timeout' | 'invalid_trade_token' | 'user_not_tradable' | 'trade_create_error';
export declare class BuyItemEvent {
    event: Events.buyItem;
    data: MarketBuyItem;
}
export declare class StatusChangeEvent {
    event: Events.statusChange;
    data: {
        item: {
            id: number;
        };
        buy_id: string;
        offer_status: OfferStatus;
        tradeofferid: string;
    };
}
export declare class BalanceChangeEvent {
    event: Events.balanceChange;
    data: {
        balance_value: number;
    };
}
export declare class AuthSuccessEvent {
    event: Events.authSuccess;
}
export declare class AuthFailedEvent {
    event: Events.authFailed;
}
