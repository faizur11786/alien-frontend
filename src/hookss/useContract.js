/* eslint-disable default-case */

import { useMemo } from 'react'
import useWeb3 from './useWeb3'
import {
  getMarketplaceContract,
  getNftContract,
  getNftContractWrite,
  getRegistryContract,
  getmetadataContract,
  getMarketplaceWrite,
  getShibContract,
  getgetShibContractWrite,
  getLeashContract,
  getLeashContractWrite,
  getSwapRouterContract,
  getSwapRouterContractWrite,
} from '../utilss/contractHelpers'
/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useNftContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getNftContract(address), [address, web3])
}
export const useNftContractWrite = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getNftContractWrite(address), [address, web3])
}
export const useMarketplaceContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getMarketplaceContract(address), [address, web3])
}
export const useMarketplaceWriteContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getMarketplaceWrite(address), [address, web3])
}
export const useRegistryContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getRegistryContract(address), [address, web3])
}
export const useMetadataContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getmetadataContract(address), [address, web3])
}
export const useShibContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getShibContract(address), [address, web3])
}
export const useShibContractWrite = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getgetShibContractWrite(address), [address, web3])
}
export const useLeashContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getLeashContract(address), [address, web3])
}
export const useLeashContractWrite = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getLeashContractWrite(address), [address, web3])
}

export const useShibaSwapRouterContract = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getSwapRouterContract(address), [address, web3])
}

export const useShibaSwapRouterContractWrite = (address) => {
  const web3 = useWeb3()
  return useMemo(() => getSwapRouterContractWrite(address), [address, web3])
}
