import type { AppProps } from "next/app";
// WAGMI Imports
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { publicProvider } from "wagmi/providers/public";
import useChains from "@/hooks/useChains";
import { MOONRIVER_RPC_URL } from "@/constants";
// Component and CSS Imports
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  const chain = useChains();

  const { chains, provider } = configureChains(chain, [
    jsonRpcProvider({ rpc: () => ({ http: MOONRIVER_RPC_URL }) }),
    publicProvider(),
  ]);

  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
