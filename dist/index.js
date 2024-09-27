"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const axios_1 = require("axios");
const events_1 = require("events");
const ws_1 = require("ws");
const create_deposit_types_1 = require("./types/create-deposit.types");
const events_types_1 = require("./types/events.types");
const get_balance_types_1 = require("./types/get-balance.types");
const get_order_status_types_1 = require("./types/get-order-status.types");
const market_buy_item_types_1 = require("./types/market-buy-item.types");
const market_transaction_types_1 = require("./types/market-transaction.types");
class SkinsBackWebApi extends events_1.default {
    constructor(config) {
        super();
        this.skinsback = axios_1.default.create({
            baseURL: 'https://skinsback.com/api.php',
            method: 'post',
            timeout: 5000,
            headers: {
                'Accept-Encoding': 'utf8',
            },
        });
        this.params = (method) => ({
            method,
            shopid: this.config.clientID,
        });
        this.config = config;
        if (config.ws) {
            this.connectWebsocket();
        }
    }
    createDeposit(orderId, steamId, tradeToken, currency) {
        const params = Object.assign(Object.assign({}, this.params('create')), { order_id: orderId, steam_id: steamId, trade_token: tradeToken, currency });
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status === 'error') {
                    return reject(create_deposit_types_1.CreateDepositErrorCodes[data.error_code]);
                }
                return resolve({
                    url: data.url,
                    transactionId: data.transaction_id,
                    sign,
                });
            })
                .catch((e) => {
                if (e.request) {
                    return reject(create_deposit_types_1.CreateDepositErrorCodes.requestTimeout);
                }
                return reject(create_deposit_types_1.CreateDepositErrorCodes.unknownError);
            });
        });
    }
    getOrderStatus(transactionId) {
        const params = Object.assign(Object.assign({}, this.params('orderstatus')), { transaction_id: transactionId });
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status === 'error') {
                    return reject(get_order_status_types_1.OrderStatusErrorCodes[data.error_code]);
                }
                return resolve(data);
            })
                .catch((e) => {
                if (e.request) {
                    return reject(get_order_status_types_1.OrderStatusErrorCodes.requestTimeout);
                }
                return reject(get_order_status_types_1.OrderStatusErrorCodes.unknownError);
            });
        });
    }
    balance() {
        const params = Object.assign({}, this.params('balance'));
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status === 'error') {
                    return reject(get_balance_types_1.BalanceErrorCodes[data.error_code]);
                }
                return resolve(data);
            })
                .catch((e) => {
                if (e.request) {
                    return reject(get_balance_types_1.BalanceErrorCodes.requestTimeout);
                }
                return reject(get_balance_types_1.BalanceErrorCodes.unknownError);
            });
        });
    }
    getMarketPriceList(game) {
        const params = Object.assign(Object.assign({}, this.params('market_pricelist')), { game, extended: 1 });
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status === 'error') {
                    return reject(market_transaction_types_1.MarketTransactionErrorCodes[data.error_code]);
                }
                return resolve(data);
            })
                .catch((e) => {
                if (e.request) {
                    return reject(market_transaction_types_1.MarketTransactionErrorCodes.requestTimeout);
                }
                return reject(market_transaction_types_1.MarketTransactionErrorCodes.unknownError);
            });
        });
    }
    marketBuyItem(transactionId, item, maxPrice, game, partner, token) {
        const params = Object.assign(Object.assign({}, this.params('market_buy')), { partner,
            token, name: item, game, max_price: maxPrice, custom_id: transactionId });
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status !== 'success') {
                    return reject(market_buy_item_types_1.MarketBuyItemErrorCodes[data.error_code]);
                }
                return resolve(data);
            })
                .catch((e) => {
                if (e.request) {
                    return reject(market_buy_item_types_1.MarketBuyItemErrorCodes.requestTimeout);
                }
                return reject(market_buy_item_types_1.MarketBuyItemErrorCodes.unknownError);
            });
        });
    }
    getTransactions(transactionIds) {
        const params = Object.assign(Object.assign({}, this.params('market_getinfo')), { custom_ids: transactionIds });
        const sign = this.generateSign(params);
        return new Promise((resolve, reject) => {
            this.skinsback
                .request({
                data: Object.assign(Object.assign({}, params), { sign }),
            })
                .then(({ data }) => {
                if (data.status === 'error') {
                    return reject(market_transaction_types_1.MarketTransactionErrorCodes[data.error_code]);
                }
                return resolve(data);
            })
                .catch((e) => {
                if (e.request) {
                    return reject(market_transaction_types_1.MarketTransactionErrorCodes.requestTimeout);
                }
                return reject(market_transaction_types_1.MarketTransactionErrorCodes.unknownError);
            });
        });
    }
    connectWebsocket(attempt = 1) {
        try {
            const sign = crypto_1.default
                .createHash('md5')
                .update(`${this.config.clientID}${this.config.clientSecret}`)
                .digest('hex');
            this.ws = new ws_1.default(`wss://skinsback.com/ws/?shopid=${this.config.clientID}&signature=${sign}`);
            this.ws.on('open', () => {
                setInterval(() => {
                    this.ws.send('ping');
                }, 20e3);
            });
            this.ws.on('error', (err) => {
                console.log(err);
            });
            this.ws.on('close', () => {
                setTimeout(() => {
                    this.connectWebsocket(attempt + 1);
                }, 1e3 * attempt);
            });
            this.ws.on('message', (data) => {
                const message = JSON.parse(data.toString());
                switch (message === null || message === void 0 ? void 0 : message.event) {
                    case events_types_1.Events.buyItem:
                        this.emit(events_types_1.Events.buyItem, message);
                        break;
                    case events_types_1.Events.statusChange:
                        this.emit(events_types_1.Events.statusChange, message);
                        break;
                    case events_types_1.Events.balanceChange:
                        this.emit(events_types_1.Events.balanceChange, message);
                        break;
                }
            });
        }
        catch (e) {
            setTimeout(() => {
                this.connectWebsocket(attempt + 1);
            }, 1e3 * attempt);
        }
    }
    generateSign(params) {
        const paramsString = Object.keys(params)
            .sort()
            .filter((key) => typeof params[key] !== 'object' && key !== 'sign')
            .map((key) => `${key}:${params[key]}`)
            .join(';')
            .concat(`;`);
        return crypto_1.default
            .createHmac('sha1', this.config.clientSecret)
            .update(paramsString)
            .digest('hex');
    }
}
exports.default = SkinsBackWebApi;
//# sourceMappingURL=index.js.map