import { createClient } from "wagmi";
import { getDefaultClient } from "connectkit";

const firechain = {
  id: 355113,
  name: "Bitfinity",
  network: "Bitfinity TestNet",
  nativeCurrency: {
    decimals: 18,
    name: "BFT",
    symbol: "BFT",
  },
  rpcUrls: {
    default: { http: ["https://testnet.bitfinity.network"] },
  },
  testnet: true,
};

export const client = createClient(
  getDefaultClient({
    autoConnect: true,
    appName: "FitQuest",
    chains: [firechain],
  })
);
