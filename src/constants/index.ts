export enum Network {
  DEVNET = 'sui:devnet',
  TESTNET = 'sui:testnet',
}

export const ZERO_ADDRESS =
  '0x0000000000000000000000000000000000000000000000000000000000000000';

export const OBJECT_RECORD = {
  [Network.DEVNET]: {
    IPX_PACKAGE_ID:
      '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307',
    IPX_STORAGE:
      '0xcf8f0550609a435a547e31e748f6b48a0e494a3accac4dc698fd2e7298fad81b',
    DEX_PACKAGE_ID:
      '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307',
    DEX_POOLS:
      '0x3a9f7c8d3ba6987131f843144ff36b8a01b461a6486d871863ac66033dba00b0',
    DEX_CORE_STORAGE:
      '0x15058a50eda2f60bd80546b721d81fe1989b0a389f5dc58f88a3d911db7c971f',
    DEX_MASTER_CHEF_STORAGE:
      '0xc52f641b4650a74e7441b8e029a5e8e68c712f683f7388c08dc44eb394e54f09',
    DEX_MASTER_CHEF_ACCOUNT_STORAGE:
      '0x1b5cf5a7694f1229ea6847925a917d12b35302a8fcc04c74f029bd9da7c589ae',
    FAUCET_PACKAGE_ID:
      '0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47',
    FAUCET_BTC_STORAGE:
      '0xa485bbfe47077f1739970f8cd51af5485d108888f8b66d57e3c33ed679080a7c',
    FAUCET_ETH_STORAGE:
      '0x5e6e1dc724b631971a93825e6115cafd91bfcc4bd7bf6cfaff73c812656bb638',
    FAUCET_BNB_STORAGE:
      '0x7eed788550fd3edc957298a337eaf4b26ccbf3a977b2ff15781ef8dc72d7eb12',
    FAUCET_USDC_STORAGE:
      '0xb77710e571f53eb4dfa1fe5fb365505ecd560a484f57e6a8a55b1c4a84c9d3c4',
    FAUCET_USDT_STORAGE:
      '0xd4133d334c351611a05428b4b9b56a18abc67492dc5b7d5feae4a8ea6cf36d89',
  },
  [Network.TESTNET]: {
    IPX_PACKAGE_ID:
      '0xe1358e9360a79f14850d6674204d55eaf767af6988614ab20646b3357494613',
    IPX_STORAGE:
      '0xd50f442ff554f9c49c610902c282bfede5a8bccc8dfe157285b82de89b21de2f',
    DEX_PACKAGE_ID:
      '0xc351259030500c0aa65dded74f7eac40b41e76fee10233df6b31325e9aa58d1c',
    DEX_POOLS:
      '0x22babb1b46b7643916bd81b42130d9a1b01241d92eb4b23eeac84c5d19abeae9',
    DEX_CORE_STORAGE:
      '0xe49a92ff6d4f1030d598694d96671c9e1d1b7128c2c08809a96b5f1d55129b61',
    DEX_MASTER_CHEF_STORAGE:
      '0x9decc96d1b763a9af6b4f3180d980ca11a933c65f21f94a4ebc2acaefe93993f',
    DEX_MASTER_CHEF_ACCOUNT_STORAGE:
      '0x704179eeef7f9b04f658e4a2b5af601f1185c7317800d04e79a2ac0e25074fe1',
    FAUCET_PACKAGE_ID:
      '0x75190062066e9f1832caf2e45ffe2d31aa68b191c499f73c82e611f4440d7cac',
    FAUCET_BTC_STORAGE:
      '0x59e2a67ef0a25d6ca5d38b8465da0a9a059ae2ae38e8414e131920128a3b08da',
    FAUCET_ETH_STORAGE:
      '0x08a45ce612278b810c1f793ee766f0ed6ef7a35db719dfbfaca5a9af421a212e',
    FAUCET_BNB_STORAGE:
      '0x306dc781133f2f36b4a0cc070b652e8eccc719b36f261b3eef0b4ffe0ee8e313',
    FAUCET_USDC_STORAGE:
      '0x8c4e8cbaafd4ea33b2e9f913c968fccd9581e4666cfb4b8f7bd409764a3954d3',
    FAUCET_USDT_STORAGE:
      '0x814964b9d15516e3b4bfd29c2051e79e23ae89167c40e27f510ea05aefd64380',
  }
};

export enum DexFunctions {
  SwapX = 'swap_x',
  SwapY = 'swap_y',
  OneHopSwap = 'one_hop_swap',
  TwoHopSwap = 'two_hop_swap',
}

export interface Pool {
  token0Balance: string;
  token1Balance: string;
  lpCoinSupply: string;
  lpCoin: string;
  poolType: string;
  stable: boolean;
  token0Type: string;
  token1Type: string;
}

export const DEFAULT_POOL: Pool = {
  token0Balance: '0',
  token1Balance: '0',
  lpCoinSupply: '0',
  lpCoin: '',
  poolType: '',
  token0Type: '',
  token1Type: '',
  stable: false,
};