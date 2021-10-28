export enum Change {
  New = 'new',
  NoChange = 'no-change',
  Increase = 'increase',
  Decrease = 'decrease'
}

export enum WalletConnectStatus {
  connecting = 'Connecting',
  disconnected = 'Disconnected',
  idle = 'Idle',
  connected = 'Connected'
}

export enum Icon {
  Arrow = 'arrow',
  Copy = 'copy',
  Globe = 'globe',
  Discord = 'discord',
  Dropdown = 'dropdown',
  Info = 'info',
  Locked = 'locked',
  Metamask = 'metamask',
  Ledger = 'ledger',
  Reddit = 'reddit',
  Search = 'search',
  SpotSearch = 'spotSearch',
  Trash = 'trash',
  Star = 'star',
  Sync = 'sync',
  Telegram = 'telegram',
  Trending = 'trending',
  Twitter = 'twitter',
  Unlocked = 'unlocked',
  Wallet = 'wallet',
  CloseCircle = 'close-circle',
  ExternalLink = 'external-link',
  Sort = 'sort',
  upAndDownSort= 'upAndDownSort'
}

export enum Modal {
  Terms = 'terms',
  OrderConfirm = 'order-confirm',
  Connect = 'connect',
  BridgeDeposit = 'bridge-deposit',
  BridgeWithdraw = 'bridge-withdraw',
  SubaccountDeposit = 'subaccount-deposit',
  SubaccountWithdraw = 'subaccount-withdraw',
  Transfer = 'transfer',
  Deposit = 'deposit',
  Withdraw = 'withdraw',
  TakeOut = 'take-out',
  Acknowledge= 'acknowledge',
  TransferOnChain = 'transfer-on-chain',
  Login = 'login'
}

export enum Breakpoint {
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
  Xs = 'xs',
  Xxs = 'xxs'
}

export enum MarketType {
  Spot = 'Spot',
  Derivative = 'Derivative',
  Perpetual = 'Perpetual',
  Futures = 'Futures'
}

export enum AppState {
  Busy = 'Busy',
  Loading = 'Loading',
  Idle = 'Idle',
  Error = 'Error',
  Success = 'Success'
}
