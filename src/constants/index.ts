export enum Network {
  DEVNET = 'sui:devnet',
  TESTNET = 'sui:testnet',
  MAINNET = 'sui:mainnet',
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
      '0x377b71ba8cc5ceba9e05e8cf55e6c64bf9e145dd9ddc82506ce9a600e1bba2f5',
    IPX_STORAGE:
      '0x891d40cf0ef3c17ab6171e899cad8cfff0662deceec5ca31dd6dd43213fc382f',
    DEX_PACKAGE_ID:
      '0x377b71ba8cc5ceba9e05e8cf55e6c64bf9e145dd9ddc82506ce9a600e1bba2f5',
    DEX_POOLS:
      '0xcc0a2cda948e6b2d27e05642892f4c288ee46f0ea86deb056d47179f3be94e98',
    DEX_CORE_STORAGE:
      '0x8a00af34cc8d8bf95ac930f594f529225536ef54db8a216cf18b187972152f4e',
    DEX_MASTER_CHEF_STORAGE:
      '0x613c900ed379bbe0f90b3503bd4109012db29d6ecfee745c65f175a19fbee668',
    DEX_MASTER_CHEF_ACCOUNT_STORAGE:
      '0xeadde6cddf17f40a40d1884ffdc8177a697ed4c4d0ec0e70b2504fd64767327b',
    FAUCET_PACKAGE_ID:
      '0xb8656a09a489819f07c444cb4a4a61a3b482a5ea994fd71b0a643ffc1c2f2dd0',
    FAUCET_BTC_STORAGE:
      '0xdec9b16bb03b140e3102042ad502e1debbe7d91fd347e0110d7ed72d269da0ae',
    FAUCET_ETH_STORAGE:
      '0x42ff0f1c48ed73b238e32d29552157f7d4961c52ca5175ceeef6301425d8dcf8',
    FAUCET_BNB_STORAGE:
      '0x15b454ee4546ddb49ef42e67167f71fac8406961a51dc28529e235669a7d136c',
    FAUCET_USDC_STORAGE:
      '0xa08c1f969d36beba75637f771f89943856f69cef8be540a867e80ec6047ded1e',
    FAUCET_USDT_STORAGE:
      '0xf80e06b35dad3ba0094db29ae89488b81a68e1e9746fad5c98c3dc67c4a0827c',
  },
  [Network.MAINNET]: {
    IPX_PACKAGE_ID:
      '0x49d87b9af35c4fef28def2cd65884aa9c49bb4eedbcee647f4dafb5c8f36ba57',
    IPX_STORAGE:
      '0xd3c1e174400409c2613559f0309d82fb2a97a1bbc77d6ea39aa1e11f4f6d67d1',
    DEX_PACKAGE_ID:
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0',
    DEX_POOLS:
      '0x108779144605a44e4b5447118b711f0b17adf6168cc9b08551d33daca58098e3',
    DEX_CORE_STORAGE:
      '0xdf2ee39f28fdf4bc5d5b5dc89926ac121839f8594fa51b2383a14cb99ab25a77',
    DEX_MASTER_CHEF_STORAGE:
      '0xbf3574ae177272809a7ee8f16c68db8fb832d4b10cb5febc477f90baba5ab6dd',
    DEX_MASTER_CHEF_ACCOUNT_STORAGE:
      '0x23fd9726a20709b6f3a59ba676a1d7bfede607ebeb011f888bb33de4f8f44e32',
    // THERE IS NO FAUCET ON MAINNET
    FAUCET_PACKAGE_ID:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    FAUCET_BTC_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    FAUCET_ETH_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    FAUCET_BNB_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    FAUCET_USDC_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    FAUCET_USDT_STORAGE:
      '0x0000000000000000000000000000000000000000000000000000000000000000',
  },
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