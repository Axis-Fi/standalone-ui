import {
  autoSignerProvider,
  type AutoSignerProviderOptions,
} from "utils/auto-signer-provider";

const injectAutoSignerProvider = ({
  rpcUrl,
  chain,
  privateKey,
}: AutoSignerProviderOptions) => {
  window.ethereum = autoSignerProvider({ rpcUrl, chain, privateKey });
};

export { injectAutoSignerProvider };
