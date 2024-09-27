import { DefaultErrorCodes, ErrorResponse } from './common.types';
declare enum ErrorCodes {
    invalidOrderId = 1,
    invalidSteamId = 2,
    transactionIdAlreadyExists = 5,
    invalidMaxValue = 7,
    invalidCurrency = 8
}
export interface CreateDeposit {
    status: 'success';
    url: string;
    transaction_id: number;
}
export declare const CreateDepositErrorCodes: {
    [x: number]: string;
    methodNotAllow: DefaultErrorCodes.methodNotAllow;
    invalidShopid: DefaultErrorCodes.invalidShopid;
    invalidSignature: DefaultErrorCodes.invalidSignature;
    shopNotActive: DefaultErrorCodes.shopNotActive;
    invalidMethod: DefaultErrorCodes.invalidMethod;
    requestLimitReached: DefaultErrorCodes.requestLimitReached;
    requestTimeout: DefaultErrorCodes.requestTimeout;
    unknownError: DefaultErrorCodes.unknownError;
    invalidOrderId: ErrorCodes.invalidOrderId;
    invalidSteamId: ErrorCodes.invalidSteamId;
    transactionIdAlreadyExists: ErrorCodes.transactionIdAlreadyExists;
    invalidMaxValue: ErrorCodes.invalidMaxValue;
    invalidCurrency: ErrorCodes.invalidCurrency;
};
export type CreateDepositError = ErrorCodes | DefaultErrorCodes;
export type CreateDepositResponse = CreateDeposit | ErrorResponse;
export {};
