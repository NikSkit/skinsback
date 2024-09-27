import { DefaultErrorCodes, DefaultItemInfo, ErrorResponse } from './common.types';
declare enum ErrorCodes {
    marketDisable = -6
}
export interface MarketPriceList {
    status: 'success';
    last_update: string;
    items: (DefaultItemInfo & {
        count: number;
    })[];
}
export declare const MarketPriceListErrorCodes: {
    [x: number]: string;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
    marketDisable: ErrorCodes.marketDisable;
};
export type MarketPriceListError = DefaultErrorCodes | ErrorCodes;
export type MarketPriceListResponse = MarketPriceList | ErrorResponse;
export {};
