import { DefaultErrorCodes, ErrorResponse } from './common.types';
import { ItemInfo, OfferStatus } from './events.types';
declare enum ErrorCodes {
    marketDisable = -6,
    missingOneOfRequiredParams = 1,
    offerNotFound = 2
}
export interface MarketTransaction {
    status: 'success';
    items: MarketItemTransaction[];
}
export interface MarketItemTransaction {
    item: ItemInfo;
    buy_id: string;
    offer_status: OfferStatus;
    steamid: string;
    date: string;
    balance_debited_sum: number;
    tradeofferid: string;
    custom_id: string;
}
export declare const MarketTransactionErrorCodes: {
    [x: number]: string;
    marketDisable: ErrorCodes.marketDisable;
    missingOneOfRequiredParams: ErrorCodes.missingOneOfRequiredParams;
    offerNotFound: ErrorCodes.offerNotFound;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
};
export type MarketTransactionError = DefaultErrorCodes | ErrorCodes;
export type MarketTransactionResponse = MarketTransaction | ErrorResponse;
export {};
