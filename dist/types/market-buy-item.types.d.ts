import { DefaultErrorCodes, ErrorResponse } from './common.types';
import { ItemInfo, OfferStatus } from './events.types';
export declare class Item {
    item: ItemInfo;
    buy_id: string;
    offer_status: OfferStatus;
}
declare enum ErrorCodes {
    marketDisable = -6,
    missinNameAndId = 1,
    nameMinLength = 2,
    missinPartnerOrToken = 3,
    insufficientFunds = 4,
    skinUnvailable = 5,
    skinsNotFoundAtSpecifiedPrice = 6,
    transactionIdAlreadyExists = 7
}
export interface MarketBuyItem {
    status: 'success';
    item: Item;
    offer_status: OfferStatus;
    balance_debited_sum: number;
    buy_id: number;
}
export declare const MarketBuyItemErrorCodes: {
    [x: number]: string;
    marketDisable: ErrorCodes.marketDisable;
    missinNameAndId: ErrorCodes.missinNameAndId;
    nameMinLength: ErrorCodes.nameMinLength;
    missinPartnerOrToken: ErrorCodes.missinPartnerOrToken;
    insufficientFunds: ErrorCodes.insufficientFunds;
    skinUnvailable: ErrorCodes.skinUnvailable;
    skinsNotFoundAtSpecifiedPrice: ErrorCodes.skinsNotFoundAtSpecifiedPrice;
    transactionIdAlreadyExists: ErrorCodes.transactionIdAlreadyExists;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
};
export type MarketBuyItemError = DefaultErrorCodes | ErrorCodes;
export type MarketBuyItemResponse = MarketBuyItem | ErrorResponse;
export {};
