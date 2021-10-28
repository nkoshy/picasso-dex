import {
  Network,
  getUrlEndpointForNetwork,
  UrlEndpoint
} from '@injectivelabs/networks'
import { Wallet } from '@injectivelabs/web3-strategy'
import { NETWORK } from '../utils/constants'
import { localStorage } from './Storage'
import { GeoLocation } from '~/types'

class App {
  network: Network

  geoLocation?: GeoLocation

  constructor() {
    this.network = NETWORK || Network.Local
  }

  get appUrlEndpoint(): UrlEndpoint {
    return getUrlEndpointForNetwork(this.network)
      // baseUrl: 'https://exchange-api.picasso.exchange:4444/api',
      // chainUrl: 'https://core-lcd.picasso.exchange',
      // exchangeUrl: 'https://exchange-api.picasso.exchange:4444',
      // explorerUrl: 'https://explorer-api.injective.network/v1',

  }

  setGeoLocation(geoLocation: GeoLocation) {
    this.geoLocation = geoLocation
  }

  get regionForMetrics(): string {
    const { geoLocation } = this

    if (geoLocation && geoLocation.country) {
      return geoLocation.country
    }

    return 'none'
  }

  setGeoLocation(geoLocation: GeoLocation) {
    this.geoLocation = geoLocation
  }

  get regionForMetrics(): string {
    const { geoLocation } = this

    if (geoLocation && geoLocation.country) {
      return geoLocation.country
    }

    return 'none'
  }

  get wallet(): Wallet {
    const existingState = localStorage.get('state') as any

    return (
      (existingState.staking && existingState.staking.wallet) || Wallet.Metamask
    )
  }
}

export const app = new App()
