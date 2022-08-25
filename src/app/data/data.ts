import { Chain } from "../model/chain";

export const CHAINS: Chain[] = [
  {
    id: "odin",
    chainName: " Odin",
    chainId: "odin-mainnet-freya",
    logo: "odin.svg",
    snapshotServer: "https://mercury-nodes.net/odin-snapshot/",
    rpcServer: "https://node.odin-freya-website.odinprotocol.io/mainnet/a/",
    restServer: "",  
    rpcPeer: "0165cd0d60549a37abb00b6acc8227a54609c648@34.79.179.216:26656",
    serviceName: "odind",
    homeDirectoryName: ".odin",
    twitter: "https://twitter.com/odinprotocol",
    github: "https://github.com/ODIN-PROTOCOL",
    globe: "https://https://odinprotocol.io/",
    medium: "https://odinprotocol.medium.com",
    discord: "https://discord.gg/cUXKyRq",
    blockExplorer: "https://scan.odinprotocol.io/",
    coingekoCoinId: "odin-protocol",
    validatorUrl: "https://ping.pub/odin/staking/odinvaloper1s009mue6fg6usnd8dfyvtvcckndtxsxjd5shs7",
    denomName: "loki",
    denomPow: 6,
    isProjectSupportUs: true,
    newWayUnsafeResetAll: true,
    githubRepoName: 'odin-core'
  },
  {
    id: "bitcanna",
    chainName: "Bitcanna",
    chainId: "bitcanna-1",
    logo: "bitcanna.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://bitcanna.nodejumper.io",
    restServer: "", 
    rpcPeer: "45589e6147e36dda9e429668484d7614fb25b142@bitcanna.nodejumper.io:27656",
    serviceName: "bcnad",
    homeDirectoryName: ".bcna",
    twitter: "https://twitter.com/BitCannaGlobal",
    github: "https://github.com/BitCannaGlobal",
    globe: "https://www.bitcanna.io",
    medium: "https://medium.com/@bitcannaglobal",
    discord: "https://discord.gg/GaubcRyg3t",
    blockExplorer: "https://www.mintscan.io/bitcanna",
    validatorUrl: "https://ping.pub/bitcanna/staking/bcnavaloper16kctxuen3x2avvjj2mdwsl6g8n7d4vjkn45gqa",
    apiChainId: "bitcanna",
    denomName: "ubcna",
    denomPow: 6,
    isProjectSupportUs: true,
    newWayUnsafeResetAll: true,
    githubRepoName: 'bcna'
  },
  {
    id: "bitsong",
    chainName: "bitsong",
    chainId: "bitsong-2b",
    logo: "bitsong.svg",
    snapshotServer: "https://snapshot.notional.ventures/bitsong/",
    rpcServer: "https://rpc-bitsong.itastakers.com",
    restServer: "", 
    rpcPeer: "a62038142844828483dbf16fa6dd159f6857c81b@173.212.247.98:26656",
    serviceName: "bitsongd",
    homeDirectoryName: ".bitsong",
    twitter: "https://twitter.com/BitSongOfficial",
    github: "https://github.com/BitSongOfficial",
    globe: "https://bitsong.io/",
    medium: "https://bitsongofficial.medium.com/",
    discord: "https://discord.com/invite/mZC9Yk3",
    blockExplorer: "https://www.mintscan.io/bitsong",
    coingekoCoinId: "bitsong",
    validatorUrl: "https://ping.pub/bitsong/staking/bitsongvaloper125ph4snec4yneqagk5u07e95sej4zhjcjw3yx9",
    denomName: "ubtsg",
    denomPow: 6,
    newWayUnsafeResetAll: true,
    githubRepoName: 'go-bitsong'
  },
  {
    id: "desmos",
    chainName: "Desmos",
    chainId: "desmos-mainnet",
    logo: "desmos.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://desmos.nodejumper.io",
    restServer: "", 
    rpcPeer: "f090ead239426219d605b392314bdd73d16a795f@desmos.nodejumper.io:32656",
    serviceName: "desmosd",
    binaryName: "desmos",
    homeDirectoryName: ".desmos",
    twitter: "https://twitter.com/DesmosNetwork",
    github: "https://github.com/desmos-labs",
    globe: "https://www.desmos.network/",
    medium: "https://medium.com/desmosnetwork",
    discord: "https://discord.com/invite/ckFcU5vxxc",
    blockExplorer: "https://www.mintscan.io/desmos",
    validatorUrl: "https://ping.pub/desmos/staking/desmosvaloper1alcd0qxkygqrxew82rxf75f8ajwpycvr9jfk3n",
    denomName: "udsm",
    denomPow: 6,
    githubRepoName: 'desmos'
  },
  {
    id: "sentinel",
    chainName: "Sentinel",
    chainId: "sentinelhub-2",
    logo: "sentinel.png",
    snapshotServer: "https://snapshot.notional.ventures/sentinel/",
    rpcServer: "https://rpc.sentinel1.badgerbite.xyz",
    restServer: "", 
    rpcPeer: "05fe2a7847fd27345250915fd06752c424f40651@85.222.234.135:26656",
    serviceName: "sentinelhub",
    homeDirectoryName: ".sentinelhub",
    twitter: "https://twitter.com/Sentinel_co",
    github: "https://github.com/sentinel-official/sentinel",
    globe: "https://sentinel.co/",
    medium: "https://sentinel.medium.com/",
    discord: "https://discord.gg/mmAA8qF",
    blockExplorer: "https://www.mintscan.io/sentinel",
    coingekoCoinId: "sentinel",
    validatorUrl: "https://ping.pub/sentinel/staking/sentvaloper16yg44hae44lcdexmmk7wpaphny0ahmqf6zevq5",
    projectOverview: "Individuals from all over the world can now monetize on their unused bandwidth by becoming a 'Bandwidth Miner' on the Sentinel p2p bandwidth sharing network. The integration of Sentinel dVPN nodes with hardware devices such as routers, allow for users to effortlessly host Sentinel nodes from their home, allowing for the creation of a robust residential IP marketplace.",
    denomName: "udvpn",
    denomPow: 6,
    isProjectSupportUs: true,
    githubRepoName: 'sentinel-official'
  },
  {
    id: "cerberus",
    chainName: "Cerberus",
    chainId: "cerberus-chain-1",
    logo: "cerberus.png",
    snapshotServer: "https://snapshot.notional.ventures/cerberus/",
    rpcServer: "https://rpc-cerberus-ia.notional.ventures/",
    restServer: "", 
    rpcPeer: "d8a04beba9fb95c70368b303f701c36b4e3b4a63@185.215.165.29:26656",
    serviceName: "cerberusd",
    homeDirectoryName: ".cerberus",
    twitter: "https://twitter.com/CerberusZone",
    github: "https://github.com/cerberus-zone",
    globe: "https://cerberus.zone/",
    medium: "https://medium.com/cerberus-zone/",
    discord: "https://discord.com/invite/9vY4VVFttW",
    blockExplorer: "https://www.mintscan.io/cerberus",
    coingekoCoinId: "cerberus-2",
    validatorUrl: "https://ping.pub/cerberus/staking/cerberusvaloper1evv5y2ake002n9l27t5qhqcwhgwd6up2m2yhcy",
    projectOverview: "Cerberus is a community meme-coin and NFT project.Our project's mission is to give the power to the community to vote on the project's future through governance.",
    isProjectSupportUs: true,
    denomName: "ucrbrus",
    denomPow: 6,
    githubRepoName: 'cerberus-zone'
  },
  {
    id: "chihuahua",
    chainName: "Chihuahua",
    chainId: "chihuahua-1",
    logo: "chihuahua.png",
    snapshotServer: "https://snapshot.notional.ventures/chihuahua/",
    rpcServer: "https://rpc-chihuahua-ia.notional.ventures/",
    restServer: "", 
    rpcPeer: "c382a9a0d4c0606d785d2c7c2673a0825f7c53b2@88.99.94.120:26656",
    serviceName: "chihuahuad",
    homeDirectoryName: ".chihuahua",
    twitter: "https://twitter.com/ChihuahuaChain",
    github: "https://github.com/chihuahuachain",
    globe: "https://www.chihuahua.wtf/",
    medium: "https://medium.com/@chihuahuachain",
    discord: "https://discord.gg/chihuahua",
    blockExplorer: "https://www.mintscan.io/chihuahua",
    validatorUrl: "https://ping.pub/chihuahua/staking/chihuahuavaloper16kctxuen3x2avvjj2mdwsl6g8n7d4vjkq6c6q9",
    isProjectSupportUs: true,
    denomName: "uhuahua",
    denomPow: 6,
    newWayUnsafeResetAll: true,
    githubRepoName: 'chihuahuachain'
  },
  {
    id: "galaxy",
    chainName: "Galaxy",
    chainId: "galaxy-1",
    logo: "galaxy.svg",
    snapshotServer: "https://snapshots2.nodejumper.io",
    rpcServer: "https://galaxy.nodejumper.io",
    restServer: "", 
    rpcPeer: "1e9aa80732182fd7ea005fc138b05e361b9c040d@galaxy.nodejumper.io:30656",
    serviceName: "galaxyd",
    homeDirectoryName: ".galaxy",
    twitter: "https://twitter.com/glxuniverse",
    github: "https://github.com/galaxies-labs",
    globe: "https://galaxychain.zone",
    medium: "https://medium.com/@galaxyuniverse",
    discord: "https://discord.com/invite/DkPNtpJQ8C",
    blockExplorer: "https://explorer.postcapitalist.io/galaxy",
    validatorUrl: "https://restake.app/galaxy/galaxyvaloper18nlst8rzmj0m2r7d2fattr3qmn3pmzyg740978",
    projectOverview: "The Galaxy protocol builds a base system for further advanced metaverse.",
    summaryDisabled: true,
    denomName: "uglx",
    denomPow: 6,
    isProjectSupportUs: true,
    githubRepoName: 'galaxy'
  },
  {
    id: "evmos",
    chainName: "Evmos",
    chainId: "evmos_9001-2",
    logo: "evmos.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://evmos.nodejumper.io",
    restServer: "", 
    rpcPeer: "876eadd24a1f4f9f88f4ea540cb1ff456a4e34ee@evmos.nodejumper.io:36656",
    serviceName: "evmosd",
    homeDirectoryName: ".evmosd",
    twitter: "https://twitter.com/EvmosOrg",
    github: "https://github.com/tharsis",
    globe: "https://evmos.org/",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/evmos",
    blockExplorer: "https://www.mintscan.io/evmos",
    validatorUrl: "https://ping.pub/evmos/staking/evmosvaloper1hm5elxdjfx4pltn00e0tde0avhpj03tynuhkk3",
    denomName: "aevmos",
    denomPow: 18,
    newWayUnsafeResetAll: true,
    isArchive: true,
    archiveReason: "We no longer support Evmos due to lack of feedback.",
    githubRepoName: 'evmos'
  },
  {
    id: "juno",
    chainName: "Juno",
    chainId: "juno-1",
    logo: "juno.svg",
    snapshotServer: "https://snapshots1.nodejumper.io",
    rpcServer: "https://juno.nodejumper.io",
    restServer: "", 
    rpcPeer: "87ed42f2dd265013f3e5a6643ff6e0fffadb9aa0@juno.nodejumper.io:29656",
    serviceName: "junod",
    homeDirectoryName: ".juno",
    twitter: "https://twitter.com/JunoNetwork",
    github: "https://github.com/CosmosContracts",
    globe: "https://www.junonetwork.io",
    medium: "https://medium.com/@JunoNetwork",
    discord: "https://discord.gg/bRXvatqreb",
    blockExplorer: "https://www.mintscan.io/juno",
    validatorUrl: "",
    denomName: "ujuno",
    coingekoCoinId: "juno-network",
    denomPow: 6,
    newWayUnsafeResetAll: true,
    githubRepoName: 'juno'
  },
  {
    id: "another1-testnet",
    chainName: "Another-1",
    chainId: "anone-testnet-1",
    logo: "another1.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://another1-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "2b540c43d640befc35959eb062c8505612b7d67f@another1-testnet.nodejumper.io:26656",
    serviceName: "anoned",
    homeDirectoryName: ".anone",
    twitter: "https://twitter.com/AN1official",
    github: "https://github.com/notional-labs",
    globe: "https://another-1.io",
    medium: "https://medium.com/@TharsisHQ",
    discord: "https://discord.gg/wHP4sYwHCJ",
    validatorUrl: "https://anone.explorers.guru/validator/onevaloper1fngfsax3w9mywln2njh5s3nf92nyfaueqg6jhy",
    denomName: "uan1",
    denomPow: 6,
    summaryDisabled: true,
    isTestnet: true,
    isArchive: true,
    archiveReason: 'Testnet ended due to migration to Polygon.',
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Another-1 platform is an ecosystem that aggregates users and markets using a hybrid approach making it seamless for non crypto native users. The AN1 front end is built in Vue.js and served via the browser or electron app.",
    githubRepoName: 'anone'
  },
  {
    id: "sei-testnet",
    chainName: "Sei",
    chainId: "atlantic-1",
    logo: "sei.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://sei-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "4b5fb7390e9c64bc96f048816f472f4559fafd94@sei-testnet.nodejumper.io:28656",
    serviceName: "seid",
    homeDirectoryName: ".sei",
    twitter: "https://twitter.com/SeiNetwork",
    github: "https://github.com/sei-protocol",
    globe: "https://www.seinetwork.io/",
    discord: "https://discord.gg/6vg2WYEzr2",
    telegram: "https://t.me/seinetwork",
    blockExplorer: "https://sei.explorers.guru",
    validatorUrl: "https://sei.explorers.guru/validator/seivaloper1kl7885wtqwu2pau3c6z7x6ptes730fnt4auawd",
    denomName: "usei",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hasWasm: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Sei Network is the first orderbook-specific L1 blockchain. It is built using the Cosmos SDK and Tendermint core, and features a built-in central limit orderbook (CLOB) module. Decentralized applications building on Sei can build on top of the CLOB, and other Cosmos-based blockchains can leverage Sei's CLOB as a shared liquidity hub and create markets for any asset.",
    githubRepoName: 'sei-chain',
    testnetTasksLink: 'https://3pgv.notion.site/All-Seinami-Testnet-Missions-16c0a40320244c24b0bc3f663c0cf00b'
  },
  {
    id: "dws-testnet",
    chainName: "DWS",
    chainId: "deweb-testnet-1",
    logo: "dws.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://dws-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "c5b45045b0555c439d94f4d81a5ec4d1a578f98c@dws-testnet.nodejumper.io:27656",
    serviceName: "dewebd",
    homeDirectoryName: ".deweb",
    twitter: "https://twitter.com/dewebservices",
    github: "https://github.com/deweb-services",
    globe: "https://deweb.services",
    discord: "https://discord.gg/EeH8C8gUuX",
    blockExplorer: "https://dws.explorers.guru",
    validatorUrl: "https://dws.explorers.guru/validator/dewebvaloper1pdhaj6ct3wyfahn2u6zllxp3dq6dfuatwtkf6n",
    denomName: "udws",
    denomPow: 6,
    summaryDisabled: true,
    isTestnet: true,
    hasWasm: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "DWS (Decentralized Web Services) is a decentralized cloud infrastructure management platform. DWS will take care of all the decentralized services health and will smoothly reinstantiate any service, which will go down, DWS will control funds spendings and will notify you in Slack/Telegram/Jami about any needed fundings. Also DWS will have a nice dashboard showing all the balances, spendings and incidents happen regarding the cloud infrastructure you use.",
    githubRepoName: 'deweb'
  },
  {
    id: "uptick-testnet",
    chainName: "Uptick",
    chainId: "uptick_7776-1",
    logo: "uptick.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://uptick-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "ce7e61b565292d6606fc0fbf4b2bc364227a1ef0@uptick-testnet.nodejumper.io:30656",
    serviceName: "uptickd",
    homeDirectoryName: ".uptickd",
    twitter: "https://twitter.com/uptickproject",
    github: "https://github.com/UptickNetwork",
    globe: "https://uptick.network",
    medium: "https://medium.com/@uptickproject",
    discord: "https://discord.gg/w7mYy8btu7",
    blockExplorer: "https://explorer.testnet.uptick.network/uptick-network-testnet",
    validatorUrl: "https://explorer.testnet.uptick.network/uptick-network-testnet/staking/uptickvaloper1krfszwgypy2pzzkh94juf4jcnyfkczzqr45l5u",
    denomName: "auptick",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    isArchive: true,
    archiveReason: 'Testnet ended',
    endedAt: '2022-07-09',
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "The Business Grade Multi-Chain NFT Infrastructure for Web 3.0.",
    githubRepoName: 'uptick'
  },
  {
    id: "quicksilver-testnet",
    chainName: "Quicksilver",
    chainId: "killerqueen-1",
    logo: "quicksilver.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://quicksilver-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "420ddb75ac0c0eb27d46c41007f18a0bf5588fc0@quicksilver-testnet.nodejumper.io:31656",
    serviceName: "quicksilverd",
    homeDirectoryName: ".quicksilverd",
    twitter: "https://twitter.com/quicksilverzone",
    github: "https://github.com/ingenuity-build",
    globe: "https://quicksilver.zone/",
    medium: "https://medium.com/quicksilverzone",
    discord: "https://discord.gg/6BXWvuGZYn",
    blockExplorer: "https://quicksilver.explorers.guru",
    validatorUrl: "https://quicksilver.explorers.guru/validator/quickvaloper159njc3xk0xv76x323936frgwxf9zn3wvp0dj8n",
    denomName: "uqck",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "THE COSMOS LIQUID STAKING ZONE",
    githubRepoName: 'quicksilver',
    isArchive: true,
    archiveReason: 'Testnet ended',
    endedAt: '2022-07-16',
    testnetTasksLink: 'https://github.com/ingenuity-build/testnets/blob/main/killerqueen/VALIDATOR_TASKS.md'
  },
  {
    id: "paloma-testnet",
    chainName: "Paloma",
    chainId: "paloma-testnet-8",
    logo: "paloma.png",
    snapshotServer: "https://snapshots1-testnet.nodejumper.io",
    rpcServer: "https://paloma-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "484e0d3cc02ba868d4ad68ec44caf89dd14d1845@paloma-testnet.nodejumper.io:33656",
    serviceName: "palomad",
    homeDirectoryName: ".paloma",
    twitter: "https://twitter.com/paloma_chain",
    github: "https://github.com/palomachain",
    globe: "https://www.palomachain.com",
    telegram: "https://t.me/palomachain",
    blockExplorer: "https://paloma.explorers.guru",
    validatorUrl: "https://paloma.explorers.guru/validator/palomavaloper18dc22w5ayq0xqfp8skpeq8ghx4c7ahtgnpfs4l",
    denomName: "ugrain",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Paloma is a Cosmos-SDK blockchain protocol for sending and receiving messages from any other blockchain. Paloma’s design aims to enable any developer to control any smart contract from the Paloma network. Paloma may be compared to the numerous cross-chain messaging protocols currently exploding into the cryptocurrency ecosystem, but with a few key differences.",
  },
  {
    id: "stafihub-testnet",
    chainName: "Stafihub",
    chainId: "stafihub-public-testnet-3",
    logo: "stafihub.svg",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://stafihub-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "4b5afbe0bd0d128f98943c0f2941976bd3fb0b9b@stafihub-testnet.nodejumper.io:26656",
    serviceName: "stafihubd",
    homeDirectoryName: ".stafihub",
    twitter: "https://twitter.com/StaFiHub_",
    github: "https://github.com/stafihub",
    globe: "https://www.stafihub.io",
    discord: "https://discord.gg/98GuF8AE3D",
    blockExplorer: "https://testnet-explorer.stafihub.io/stafi-hub-testnet",
    validatorUrl: "https://testnet-explorer.stafihub.io/stafi-hub-testnet/staking/stafivaloper18nuuhuwywsk8at72pxk94rw27nkkf7pl8ws3kv",
    denomName: "ufis",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "StaFiHub is a parallel chain developed by StaFi based on the Cosmos SDK, by implementing the rToken Protocol, StaFiHub releases liquidity of tokens staked in other chains of the Cosmos Ecosystem.",
    githubRepoName: 'stafihub',
    isArchive: true,
    archiveReason: 'Testnet ended',
    endedAt: '2022-08-05',
  },
  {
    id: "teritori-testnet",
    chainName: "Teritori",
    chainId: "teritori-testnet-v2",
    logo: "teritori.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://teritori-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "0d19829b0dd1fc324cfde1f7bc15860c896b7ac1@teritori-testnet.nodejumper.io:27656",
    serviceName: "teritorid",
    homeDirectoryName: ".teritorid",
    twitter: "https://twitter.com/TeritoriNetwork",
    github: "https://github.com/TERITORI",
    globe: "https://teritori.com",
    discord: "https://discord.gg/UAzKUpsZhn",
    blockExplorer: "https://teritori.explorers.guru",
    validatorUrl: "https://teritori.explorers.guru/validator/torivaloper18t2j2kc08su2l2dafcanq43yxj9akpwp6gemr0",
    denomName: "utori",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Teritori is a multi-chain hub designed to allow IBC and non IBC communities to connect, trade services & NFTs, launch new projects & build further existing ones. The hub notably includes dApps for a daily use such as an NFT launchpad, a marketplace and social features for individuals & communities: Innovate, Trade, Organize.",
    githubRepoName: 'teritori-chain',
    testnetTasksLink: 'https://teritori.crew3.xyz/questboard'
  },
  {
    id: "stride-testnet",
    chainName: "Stride",
    chainId: "STRIDE-TESTNET-4",
    logo: "stride.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://stride-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "17b24705533d633cb3501233a18912ae6cc36a41@stride-testnet.nodejumper.io:28656",
    serviceName: "strided",
    homeDirectoryName: ".stride",
    twitter: "https://twitter.com/stride_zone",
    github: "https://github.com/Stride-Labs",
    globe: "https://stride.zone/",
    discord: "https://discord.gg/ut6JucWWR3",
    blockExplorer: "https://stride.explorers.guru",
    validatorUrl: "https://stride.explorers.guru/validator/stridevaloper1l8vtxx634c6hkqr0q3zccnsk0dj3njlvwq0faf",
    denomName: "ustrd",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    testnetTasksLink: "https://github.com/Stride-Labs/testnet/tree/main/incentivized-testnet",
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Stride is a blockchain (\"zone\") that provides liquidity for staked assets. Using Stride, you can earn both staking and DeFi yields across the Cosmos IBC ecosystem.",
    githubRepoName: 'stride'
  },
  {
    id: "rebus-testnet",
    chainName: "Rebus",
    chainId: "reb_3333-1",
    logo: "rebus.png",
    snapshotServer: "https://snapshots2-testnet.nodejumper.io",
    rpcServer: "https://rebus-testnet.nodejumper.io",
    restServer: "", 
    rpcPeer: "cfaaa1aa3b47a3d457bd7bad4ca54a18829b83cc@rebus-testnet.nodejumper.io:29656",
    serviceName: "rebusd",
    homeDirectoryName: ".rebusd",
    twitter: "https://twitter.com/RebusChain",
    github: "https://github.com/rebuschain",
    globe: "https://www.rebuschain.com",
    discord: "https://discord.gg/cBGpcyHmBH",
    medium: "https://medium.com/@RebusChain",
    blockExplorer: "https://rebus.explorers.guru",
    validatorUrl: "https://rebus.explorers.guru/validator/rebusvaloper1nntq6xqgcpjgpuz5jl85lhatpmlefywfvrd70f",
    denomName: "arebus",
    denomPow: 6,
    summaryDisabled: true,
    newWayUnsafeResetAll: true,
    isTestnet: true,
    hardwareRequirements: "4CPU 8RAM 200GB",
    projectOverview: "Rebus is a platform built to host blockchain applications (EVM) and native Vaults usable across multiple sovereign networks.",
    githubRepoName: 'rebus.core'
  }
]
