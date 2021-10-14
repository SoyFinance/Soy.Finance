import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
// import Web3 from 'web3'
// import { getContract2 } from 'hooks'
import contracAddresses from 'constants/contracts'
import getRpcUrl from './getRpcUrl'
import erc20Abi from '../constants/abi/erc20.json'
import airdropAbi from '../constants/abi/airdrop.json'

const RPC_URL = getRpcUrl()

export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

// const web3 = new Web3(new Web3.providers.HttpProvider(RPC_URL))

const getContract = (abi: any, address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getErc20Contract = (address: string, signer?: ethers.Signer | ethers.providers.Provider) => {
  return getContract(erc20Abi, address, signer)
}

export const getAirdropContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  const address = contracAddresses.airdrop
  return getContract(airdropAbi, address, signer)
}

export const getSoyTokenContract = (signer?: ethers.Signer | ethers.providers.Provider) => {
  const address = contracAddresses.soyToken
  return getContract(erc20Abi, address, signer)
}

const BIG_ZERO = new BigNumber(0)
const BIG_TEN = new BigNumber(10)
export const BIG_100 = new BigNumber(100)
export const ethersToBigNumber = (ethersBn: ethers.BigNumber): BigNumber => new BigNumber(ethersBn.toString())

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals))
}

type UseTokenBalanceState = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NOT_FETCHED = 'not-fetched',
  SUCCESS = 'success',
  FAILED = 'failed',
}

const useTokenBalance = (tokenAddress: string) => {
  const { NOT_FETCHED, SUCCESS, FAILED } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: BIG_ZERO,
    fetchStatus: NOT_FETCHED,
  })
  const { account } = useWeb3React()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getErc20Contract(tokenAddress)
      try {
        const res = await contract.balanceOf(account)
        setBalanceState({ balance: new BigNumber(res.toString()), fetchStatus: SUCCESS })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: FAILED,
        }))
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, SUCCESS, FAILED])

  return balanceState
}

export const useGetEthBalance = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NOT_FETCHED)
  const [balance, setBalance] = useState(ethers.BigNumber.from(0))
  const { account } = useWeb3React()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const walletBalance = await simpleRpcProvider.getBalance(account)
        setBalance(walletBalance)
        setFetchStatus(FetchStatus.SUCCESS)
      } catch {
        setFetchStatus(FetchStatus.FAILED)
      }
    }
    if (account) {
      fetchBalance()
    }
  }, [account, setBalance, setFetchStatus])

  return { balance, fetchStatus }
}

// const getAirdropContractByWeb3 = (library, account) => {
//   return getContract2(contracAddresses.airdrop, airdropAbi, library, account)
// }

// export const useConfirmBuyToken = () => {
//   const { account, library } = useWeb3React()
//   const AirdropContract = getAirdropContractByWeb3(library || simpleRpcProvider, account)
//   const [pendingStatus, setPendingStatus] = useState(false)

//   const onConfirmBuyToken = useCallback(
//     async (cloeAmt, cloAmt) => {
//       try {
//         setPendingStatus(true)
//         const bigClo = web3.utils.toWei(cloAmt.toFixed(18)) // (new BigNumber(cloAmt)).times(BIG_TEN.pow(18));
//         const bigCloe = web3.utils.toWei(cloeAmt.toFixed(18)) // (new BigNumber(cloeAmt)).times(BIG_TEN.pow(18));

//         const tx = await AirdropContract.buyToken(bigCloe, { value: bigClo })
//         const receipt = await tx.wait()
//         if (receipt.status) {
//           setPendingStatus(false)
//         }
//       } catch (error) {
//         console.error(error)
//         setPendingStatus(false)
//       }
//     },
//     [AirdropContract],
//   )

//   return { onConfirmBuyToken, pendingStatus }
// }

export default useTokenBalance
