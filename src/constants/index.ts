import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [820, 20729] })

export enum ConnectorNames {
  Injected = 'injected',
}
export const connectorLocalStorageKey = 'connectorIdUnore'

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
}

export const marketcapIds = {
  ccXMS: 10030,
  ccBCOIN: 12252,
  ccZoo: 11020,
  ccBBT: 10201,
  WCLO: 2757,
  ccETH: 1027,
  SOY: 19879,
  USDT: 825,
  CLOE: null,
  BUSDT: null,
  ccETC: 1321,
  ccBNB: 1839,
  ccCake: 7186,
  ccTWT: 5964,
  ccWSG: 10040,
  ccREEF: 6951,
  ccBAKE: 7064,
  ccSHIBA: 5994,
  ccRACA: 11346,
  ccLINA: 7102,
  ccTONCOIN: 11419,
  ccBTT: 16086,
  ccFTM: 3513,
  ccANTEX: 11708,
}
