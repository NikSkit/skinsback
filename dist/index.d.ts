/// <reference types="node" />
import { SkinsBackWebApiConfig } from './configs/config';
import { DepositModel } from './types/deposit-callback.types';
import EventEmitter from 'events';
import { SkinsbackCurrency, SkinsBackGame } from './types/common.types';
import { BalanceModel } from './types/get-balance.types';
import { MarketBuyItem } from './types/market-buy-item.types';
import { MarketPriceList } from './types/market-price-list.types';
import { MarketTransaction } from './types/market-transaction.types';
export default class SkinsBackWebApi extends EventEmitter {
    private readonly config;
    private readonly skinsback;
    private ws;
    constructor(config: SkinsBackWebApiConfig);
    createDeposit(orderId: string, steamId: string, tradeToken: string, currency: SkinsbackCurrency): Promise<{
        url: string;
        sign: string;
        transactionId: number;
    }>;
    getOrderStatus(transactionId: string): Promise<DepositModel>;
    balance(): Promise<BalanceModel>;
    getMarketPriceList(game: SkinsBackGame): Promise<MarketPriceList>;
    marketBuyItem(transactionId: string, item: string, maxPrice: number, game: SkinsBackGame, partner: string, token: string): Promise<MarketBuyItem>;
    getTransactions(transactionIds: string[]): Promise<MarketTransaction>;
    private connectWebsocket;
    private params;
    private generateSign;
}
