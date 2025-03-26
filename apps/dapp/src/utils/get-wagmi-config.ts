import { custom } from "viem";
import { createConfig, type Config } from "wagmi";
import { baseSepolia } from "wagmi/chains";
import { chains } from "@axis-finance/env";
import { environment } from "utils/environment";
import { connectors } from "utils/rainbow-kit-connectors";
import { injectAutoSignerProvider } from "utils/inject-autosigner-provider";

const getWagmiConfig = (): Config => {
  let wagmiConfig: Config;

  if (import.meta.env.VITE_ENABLE_AUTOSIGNING_WALLET === "true") {
    injectAutoSignerProvider({
      rpcUrl: "http://127.0.0.1:8545",
      chain: baseSepolia,
      privateKey:
        "0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    });

    wagmiConfig = createConfig({
      chains: [baseSepolia],
      transports: {
        [baseSepolia.id]: custom(window.ethereum),
      },
      connectors,
    });
  } else {
    const activeConfig = chains.activeConfig(environment.isTestnet);
    //@ts-expect-error activeConfig is basically the same
    wagmiConfig = createConfig({ ...activeConfig, connectors });
  }

  return wagmiConfig;
};

export { getWagmiConfig };
