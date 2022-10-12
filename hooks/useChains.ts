import { Chain } from "wagmi";
import { ChainId, Network, MOONRIVER_RPC_URL } from "@/constants";

export default function useChains() {
  const moonriverChain: Chain = {
    id: ChainId.moonriver,
    name: "Moonriver",
    network: Network.moonriver,
    nativeCurrency: {
      name: "Moonriver",
      symbol: "MOVR",
      decimals: 18,
    },
    rpcUrls: {
      default: MOONRIVER_RPC_URL,
    },
  };

  return [moonriverChain];
}
