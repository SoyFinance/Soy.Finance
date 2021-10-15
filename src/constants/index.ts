import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [820, 20729] })

export enum ConnectorNames {
    Injected = "injected",
}
export const connectorLocalStorageKey = "connectorIdUnore";

export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
    [ConnectorNames.Injected]: injected,
}
