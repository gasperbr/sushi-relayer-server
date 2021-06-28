import { BigNumber } from "ethers";
import { ILimitOrderData } from "limitorderv2-sdk";
import { Document } from "mongoose";

export interface IWatchPair {
  token0: {
    address: string,
    addressMainnet?: string,
    decimals: number,
    symbol: string
  },
  token1: {
    address: string,
    addressMainnet?: string,
    decimals: number,
    symbol: string
  },
  pairAddress?: string;
}

export interface IWatchPairModel extends IWatchPair, Document { };

export interface ILimitOrder {
  price: string,
  digest: string,
  order: ILimitOrderData,
  pairAddress?: string,
  filledAmount?: string,
  userBalance?: string,
}

export interface ILimitOrderModel extends ILimitOrder, Document { };

export interface IExecutedOrder {
  order: ILimitOrderData,
  digest: string,
  txHash: string,
  fillAmount: string,
  status: number
}

export interface IExecutedOrderModel extends IExecutedOrder, Document { };

export interface IOrderCounter {
  date: number,
  counter: number
}

export interface IOrderCounterModel extends IOrderCounter, Document { };