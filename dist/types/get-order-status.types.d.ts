import { DepositModel } from './deposit-callback.types';
import { DefaultErrorCodes, ErrorResponse } from './common.types';
declare enum ErrorCodes {
    orderIdOrTransactionIdMissing = 1,
    invalidOrderId = 2,
    invalidTransactionId = 3,
    transactionNotFound = 4
}
export declare const OrderStatusErrorCodes: {
    [x: number]: string;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
    orderIdOrTransactionIdMissing: ErrorCodes.orderIdOrTransactionIdMissing;
    invalidOrderId: ErrorCodes.invalidOrderId;
    invalidTransactionId: ErrorCodes.invalidTransactionId;
    transactionNotFound: ErrorCodes.transactionNotFound;
};
export type OrderStatusError = ErrorCodes | DefaultErrorCodes;
export type OrderStatusResponse = DepositModel | ErrorResponse;
export {};
