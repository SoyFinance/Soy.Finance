import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [820, 20729] })

export const API_BASE_URL = 'https://cryptobot.name:8081/'

export const METRICS = `${API_BASE_URL}public/stats`

export enum ConnectorNames {
    Injected = "injected",
}
export const connectorLocalStorageKey = "connectorIdUnore";

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
}
