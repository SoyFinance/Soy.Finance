import { ethers } from 'ethers'

const POLLING_INTERVAL = 12000

export const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider)
    library.pollingInterval = POLLING_INTERVAL
    return library
}