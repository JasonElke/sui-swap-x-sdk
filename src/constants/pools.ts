import { Network } from './index';

const TEST_NET_POOLS = {
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
    {
      '0x2::coin::Coin<0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_stable::SPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xa6c45683978ad7f0b403f10cbfbfb9c1c2b0803f67b964c2f540bc7ab5e87f39::kron::KRON>',
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    '0x2::coin::Coin<0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
    '0x2::coin::Coin<0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>',
    '0x2::coin::Coin<0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    '0x2::coin::Coin<0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
    '0x2::coin::Coin<0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>',
    '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
    '0x2::coin::Coin<0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>':
      '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>',
  },
  '0x2::coin::Coin<0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x6c0930ba77d5213fadc767cc9bd54093b098fba0285ab1cd0f4f509e33f50149::tj::TJ>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
    {
      '0x2::coin::Coin<0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>',
      '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SU>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SUI, 0x11354b097c4e0affba37574814b4f2ba439f57d1a28fc86d51d76c3bc5ad7751::wiz::WIZ>>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_stable::SPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0xe65364c290dec9d1ef9f3dc6d9458f6d7cf889a7a8126db959eff48a1df413fa::sad::SAD>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x29accce372097daf53a385e33a6ca50a4a660cfe96eca8d22f3d6af4e42c05c8::hui::HUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX, 0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>',
    },
  '0x2::coin::Coin<0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xa1b5a91112e3b3925081e1292da5bede35593175cf6215cd74cfea19d8d04a3e::yusuf::YUSUF>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
    {
      '0x2::coin::Coin<0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH, 0xba825380d0b8039dd161359e1c83ae26d121f75a7d052fc2fa735b130fec1d8c::sujit::SUJIT>',
    },
  '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>',
      '0x2::coin::Coin<0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>',
      '0x2::coin::Coin<0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>',
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::ETH>',
    },
  '0x2::coin::Coin<0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x8c2db123cde82056ef3f708a4158e01623401c4a85518bd932bfd6d58d848411::dre::DRE>',
    },
  '0x2::coin::Coin<0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x16de8297a9a3b2620e627953096c998a84e9ab118c4bcc509492ef8e0e06bc87::dpad::DPAD>',
    },
  '0x2::coin::Coin<0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BNB, 0x3f8f4858749d667b84078e97e5b104c913b22405e9587af4617b410847adedcc::sad::SAD>',
    },
  '0x2::coin::Coin<0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDC, 0xc619d9a9d705af7d9b45763c05e26cf9c597d1ae16cad9c3ee6fa4703f4ea90c::shvd::SHVD>',
    },
  '0x2::coin::Coin<0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0xf6594cbac7aa8d87918d360d0c60ce2d351ae50b5c6d5c205ae65f768d87d66b::idn::IDN>',
    },
  '0x2::coin::Coin<0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SU>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x7b02eace802801c31ae710d50708239c1efebd56a2e3d8fbb9d03a4d15cf59e5::swap::LSP<0x2::sui::SUI, 0x11354b097c4e0affba37574814b4f2ba439f57d1a28fc86d51d76c3bc5ad7751::wiz::WIZ>>',
    },
  '0x2::coin::Coin<0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x59ed24fe61aac2418d679697ff64d346d98d2b3e187cc821a757eb759b702835::core::CORE>',
    },
  '0x2::coin::Coin<0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::ipx::IPX, 0xec2dfd46db97acc5a36b5dc4f39a55b509284fda675dc79bea4deaceadf7816e::MOVE::MOVE>',
    },
  '0x2::coin::Coin<0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::USDT, 0x8b755982658195d34d97617a1381512e8852a4904d031a9d4948e7921cfdd11f::matic::MATIC>',
    },
  '0x2::coin::Coin<0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0x59b15364970e6880b4099227fc46b4abbe5854f1fb7373460bcab6823a562d3a::hui::HUI>',
    },
  '0x2::coin::Coin<0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::DAI, 0xb706c6fd114a7b3fe2b394f87da6a239fa070f220b923f0adbe36d0b53b81386::xpn::XPN>',
    },
  '0x2::coin::Coin<0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>':
    {
      '0x2::coin::Coin<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::coins::BTC, 0x769b3f9db9fb4bf9f10e67a323dc5e8371b1c0bc1e044fd08714e52faa6bf2bb::usdn::USDN>',
    },
  '0x2::coin::Coin<0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x35fdd5170d77c76de3145374dc5e3b3814e2e19dd6b44cba8e1cb298b01ee23a::dex_volatile::VPool<0x2::sui::SUI, 0x2ce7ac118a517bcaeec6ddcebc8cfe6e4959b794a62ce037c3e5d03a99da5e6b::vv::VV>',
    },
};

const DEV_NET_POOLS = {
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC>':
    {
      '0x2::coin::Coin<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>':
        '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::core::Pool<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdc::IUSDC, 0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>'
    },
  '0x2::coin::Coin<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::core::Pool<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::curve::Volatile, 0x2::sui::SUI, 0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>'  
    },
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>':
      '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::core::Pool<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::curve::Volatile, 0x2::sui::SUI, 0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>'  
  },
  '0x2::coin::Coin<0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT>':
    {
      '0x2::coin::Coin<0x65765307ff14d78b166c7201e12f96b679ec455292ec9be89cb0c6265c69b364::coins::ETH>':
        '0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::core::Pool<0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::curve::Volatile, 0x3821e4ae13d37a1c55a03a86eab613450c1302e6b4df461e1c79bdf8381dde47::iusdt::IUSDT, 0x36b6a6edc36748eaf201fc5dade3e845ce1c4c56d4e23861360b5a57e5d51307::ipx::IPX>'  
    },
};

const MAIN_NET_POOLS = {
  '0x2::coin::Coin<0x2::sui::SUI>': {
    '0x2::coin::Coin<0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>',
    '0x2::coin::Coin<0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>',
    '0x2::coin::Coin<0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>',
    '0x2::coin::Coin<0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>',
    '0x2::coin::Coin<0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>',
    '0x2::coin::Coin<0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>',
    '0x2::coin::Coin<0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>',
    '0x2::coin::Coin<0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>',
    '0x2::coin::Coin<0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>',
    '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
    '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
    '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
      '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>',
  },
  '0x2::coin::Coin<0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xb848cce11ef3a8f62eccea6eb5b35a12c4c2b1ee1af7755d02d7bd6218e8226f::coin::COIN>',
    },
  '0x2::coin::Coin<0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xa198f3be41cda8c07b3bf3fee02263526e535d682499806979a111e88a5a8d0f::coin::COIN>',
    },
  '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
    {
      '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
      '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>',
    },
  '0x2::coin::Coin<0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>':
    {
      '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN>',
    },
  '0x2::coin::Coin<0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xd399b358bd0e835000f6caa8c771a7d186499b6e62d413c2fd6cfed709689f28::coin::COIN>',
    },
  '0x2::coin::Coin<0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5029d5a94429a73b8036cd67192d9c5e09bbc2c0fee942d50075a9edba66744f::coin::COIN>',
    },
  '0x2::coin::Coin<0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x4eac6573f65e7db5aea5a23e1335993a57e088dcd4aff7934059d9a6311d8655::coin::COIN>',
    },
  '0x2::coin::Coin<0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xaf8cd5edc19c4512f4259f0bee101a40d41ebed738ade5874359610ef8eeced5::coin::COIN>',
    },
  '0x2::coin::Coin<0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xdbe380b13a6d0f5cdedd58de8f04625263f113b3f9db32b3e1983f49e2841676::coin::COIN>',
    },
  '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
    {
      '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>',
    },
  '0x2::coin::Coin<0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>':
    {
      '0x2::coin::Coin<0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x603b488c87e0d1df64560a61418c87238d440a29ee39bbd757b0c92d38a35c7c::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
      '0x2::coin::Coin<0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Stable, 0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN, 0x909cba62ce96d54de25bec9502de5ca7b4f28901747bbf96b76c2e63ec5f1cba::coin::COIN>',
    },
  '0x2::coin::Coin<0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x1e8b532cca6569cab9f9b9ebc73f8c13885012ade714729aa3b450e0339ac766::coin::COIN>',
    },
  '0x2::coin::Coin<0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x5cc7b6ed0ce0d43d08667793f6efe7a34d678a780755dc37ea8bfa8805f63327::coin::COIN>',
    },
  '0x2::coin::Coin<0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0x6081300950a4f1e2081580e919c210436a1bed49080502834950d31ee55a2396::coin::COIN>',
    },
  '0x2::coin::Coin<0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>':
    {
      '0x2::coin::Coin<0x2::sui::SUI>':
        '0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::core::Pool<0x5c45d10c26c5fb53bfaff819666da6bc7053d2190dfa29fec311cc666ff1f4b0::curve::Volatile, 0x2::sui::SUI, 0xbcbbd5c23edf35fc279e21ebc129a1187dbfa5b086c63a8e7ff202865888b27b::coin::COIN>',
    },
};

export const POOLS = {
  [Network.TESTNET]: DEV_NET_POOLS,
  [Network.DEVNET]: TEST_NET_POOLS,
  [Network.MAINNET]: MAIN_NET_POOLS,
};
