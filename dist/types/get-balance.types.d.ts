import { Currencies, DefaultErrorCodes, ErrorResponse } from './common.types';
export declare class BalanceModel {
    status: 'success';
    balance: number;
    balance_in_currencies: Currencies;
    deals_sum: number;
    deals_sum_in_currencies: Currencies;
    withdraw_sum: number;
    withdraw_sum_in_currencies: Currencies;
}
export declare const BalanceErrorCodes: {
    [x: number]: string;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
};
export type BalanceError = DefaultErrorCodes;
export type BalanceResponse = BalanceModel | ErrorResponse;
