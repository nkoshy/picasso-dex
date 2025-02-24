import {
  DerivativeMarket as BaseUiDerivativeMarket,
  DerivativeTrade as UiDerivativeTrade,
  Position as UiPosition,
  DerivativeLimitOrder as UiDerivativeLimitOrder,
  Orderbook as UiDerivativeOrderbook,
  ChronosDerivativeMarketSummary,
  DerivativeOrderSide,
  AllChronosDerivativeMarketSummary
} from '@injectivelabs/derivatives-consumer'
import { TradeDirection, TradeExecutionType } from '@injectivelabs/ts-types'
import { Token } from './token'
import { Change, MarketType } from '.'

export interface BaseUiDerivativeMarketWithPartialTokenMetaData
  extends Omit<BaseUiDerivativeMarket, 'quoteToken'> {
  slug: string
  quoteToken?: Token
  baseToken?: Token
}

export interface BaseUiDerivativeMarketWithTokenMetaData
  extends Omit<BaseUiDerivativeMarket, 'quoteToken'> {
  slug: string
  quoteToken: Token
  baseToken: Token
}

export interface UiDerivativeMarket
  extends BaseUiDerivativeMarketWithTokenMetaData {
  priceDecimals: number
  quantityDecimals: number
  type: MarketType
  subType: MarketType
}

export interface UiDerivativeMarketSummary
  extends ChronosDerivativeMarketSummary {
  marketId: string
  lastPrice?: number
  lastPriceChange?: Change
}

export type UiDerivativeMarketSummaryVars = 'change' | 'high' | 'low' | 'open' | 'price' | 'volume' | 'lastPrice' | 'marketId';

export type UiDerivativeMarketVars = UiDerivativeMarketSummaryVars | 'market';

export interface UiDerivativeMarketAndSummary {
  market: UiDerivativeMarket
  summary: UiDerivativeMarketSummary
}

export enum DerivativeMarketMap {
  UNSPECIFIED = 0,
  BUY = 1,
  SELL = 2,
  STOP_BUY = 3,
  STOP_SELL = 4,
  TAKE_BUY = 5,
  TAKE_SELL = 6
}

export {
  UiPosition,
  UiDerivativeLimitOrder,
  UiDerivativeTrade,
  TradeDirection,
  DerivativeOrderSide,
  TradeExecutionType,
  BaseUiDerivativeMarket,
  ChronosDerivativeMarketSummary,
  AllChronosDerivativeMarketSummary,
  UiDerivativeOrderbook
}
