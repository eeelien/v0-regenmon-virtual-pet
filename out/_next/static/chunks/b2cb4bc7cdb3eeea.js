(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,303821,e=>{"use strict";var n=e.i(97146);let t=n.keyframes`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,l=n.css`
  ${e=>e.$isLoading?n.css`
          width: 35%;
          animation: ${t} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",()=>l])},212591,e=>{"use strict";var n=e.i(14270),t=e.i(97146),l=e.i(303821);let a=({children:e,color:t,isLoading:l,isPulsing:a,...o})=>(0,n.jsx)(i,{$color:t,$isLoading:l,$isPulsing:a,...o,children:e}),i=t.styled.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let n,l;"green"===e.$color&&(n="var(--privy-color-success-dark)",l="var(--privy-color-success-light)"),"red"===e.$color&&(n="var(--privy-color-error)",l="var(--privy-color-error-light)"),"gray"===e.$color&&(n="var(--privy-color-foreground-2)",l="var(--privy-color-background-2)");let a=t.keyframes`
      from, to {
        background-color: ${l};
      }

      50% {
        background-color: rgba(${l}, 0.8);
      }
    `;return t.css`
      color: ${n};
      background-color: ${l};
      ${e.$isPulsing&&t.css`
        animation: ${a} 3s linear infinite;
      `};
    `}}

  ${l.L}
`;e.s(["C",()=>a])},307865,e=>{"use strict";var n=e.i(97146);let t=n.styled.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`;e.s(["S",()=>t])},130131,e=>{"use strict";var n=e.i(97146),t=e.i(494632),l=e.i(733295);let a=n.styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,i=n.styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,o=n.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,r=n.styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 0 16px;
  border-width: 1px !important;
  border-radius: 12px;
  cursor: text;

  &:focus-within {
    border-color: var(--privy-color-accent);
  }
`;n.styled.div`
  font-size: 42px !important;
`;let c=n.styled.input`
  background-color: var(--privy-color-background);
  width: 100%;

  &:focus {
    outline: none !important;
    border: none !important;
    box-shadow: none !important;
  }

  && {
    font-size: 26px;
  }
`,s=(0,n.styled)(c)`
  && {
    font-size: 42px;
  }
`;n.styled.button`
  cursor: pointer;
  padding-left: 4px;
`;let d=n.styled.div`
  font-size: 18px;
`,p=n.styled.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;n.styled.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,n.styled)(l.LinkButton)`
  margin-top: 16px;
`;let u=n.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,n.styled)(t.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${u} 0.3s ease-in-out;
`;let y=n.styled.div``,h=n.styled.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;e.s(["F",()=>o,"I",()=>i,"a",()=>r,"b",()=>c,"c",()=>d,"d",()=>p,"e",()=>a,"f",()=>y,"g",()=>h,"h",()=>s])},168271,e=>{"use strict";var n=e.i(14270),t=e.i(430321),l=e.i(494632);function a({title:e}){let{currentScreen:a,navigateBack:i,navigate:o,data:r,setModalData:c}=(0,t.a)();return(0,n.jsx)(l.M,{title:e,backFn:"ManualTransferScreen"===a?i:a===r?.funding?.methodScreen?r.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:r?.funding?.methodScreen?()=>{let e=r.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),c({funding:e,solanaFundingData:r?.solanaFundingData}),o(e.methodScreen)}:void 0})}e.s(["t",()=>a])},686035,e=>{"use strict";var n=e.i(505034);let t=n.forwardRef(function({title:e,titleId:t,...l},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},l),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))});e.s(["default",0,t])},203042,e=>{"use strict";var n=e.i(14270),t=e.i(97146);let l=({title:e,description:t,children:l,...a})=>(0,n.jsx)(i,{...a,children:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:e}),"string"==typeof t?(0,n.jsx)("p",{children:t}):t,l]})});(0,t.styled)(l)`
  margin-bottom: 24px;
`;let a=({title:e,description:t,icon:l,children:a,...i})=>(0,n.jsxs)(o,{...i,children:[l||null,(0,n.jsx)("h3",{children:e}),t&&"string"==typeof t?(0,n.jsx)("p",{children:t}):t,a]}),i=t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  width: 100%;
  margin-bottom: 24px;

  && h3 {
    font-size: 17px;
    color: var(--privy-color-foreground);
  }

  /* Sugar assuming children are paragraphs. Otherwise, handling styling on your own */
  && p {
    color: var(--privy-color-foreground-2);
    font-size: 14px;
  }
`,o=(0,t.styled)(i)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;e.s(["C",()=>a,"S",()=>l])},964105,e=>{"use strict";var n=e.i(14270),t=e.i(686035);let l=({icon:e,name:l})=>"string"==typeof e?(0,n.jsx)("img",{alt:`${l||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,n.jsx)(t.default,{style:{height:24,width:24}}):e?(0,n.jsx)(e,{style:{height:24,width:24}}):null;e.s(["I",()=>l])},306887,e=>{"use strict";var n=e.i(14270);let t=(0,e.i(78048).default)("wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);var l=e.i(526520);let a=({onClick:e,text:a})=>(0,n.jsxs)(l.U,{onClick:e,children:[(0,n.jsx)(l.V,{children:(0,n.jsx)(t,{})}),(0,n.jsx)(l.Y,{children:a})]});e.s(["W",()=>a],306887)},346934,e=>{"use strict";var n=e.i(14270),t=e.i(505034),l=e.i(494632),a=e.i(203042),i=e.i(168271),o=e.i(212591),r=e.i(307865),c=e.i(205384),s=e.i(526520),d=e.i(957074),p=e.i(430321),u=e.i(483604),y=e.i(306887),h=e.i(384249),g=e.i(768820),f=e.i(97146),m=e.i(964105),w=e.i(130131);e.i(252494),e.i(329723),e.i(464143),e.i(559889);let x=({provider:e,displayName:t,logo:l,connectOnly:a,connector:i})=>{let o,{navigate:r,setModalData:c}=(0,p.a)(),{connectWallet:u}=(0,d.u)(),y=(0,s.F)(),f=(0,s.Q)(e),w="wallet_connect_v2"===i.connectorType?e:i.walletClientType,x=window.matchMedia("(display-mode: standalone)").matches,j=(0,s.m)({connectorType:i.connectorType,walletClientType:w});o=j&&j.chainTypes.includes(i.chainType)?()=>{j.isInstalled||"solana"===i.chainType&&"isInstalled"in i&&i.isInstalled?(u(i,w),r(a?"ConnectOnlyStatusScreen":"ConnectionStatusScreen")):g.isMobile?(c({installWalletModalData:{walletConfig:j,chainType:i.chainType,connectOnly:a}}),r("WalletInterstitialScreen")):(c({installWalletModalData:{walletConfig:j,chainType:i.chainType,connectOnly:a}}),r("InstallWalletScreen"))}:"coinbase_wallet"!==i.connectorType||"eoaOnly"!==i.coinbaseWalletConfig.preference?.options||!g.isMobile||x||(0,s.T)()?()=>{(!(0,h.A)(window.navigator.userAgent)||event?.isTrusted)&&(u(i,w),a?"wallet_connect_v2"===i.connectorType?(c(e=>({...e,externalConnectWallet:{...e?.externalConnectWallet,preSelectedWalletId:"wallet_connect_qr"}})),r("ConnectOnlyLandingScreen")):r("ConnectOnlyStatusScreen"):r("ConnectionStatusScreen"))}:()=>{window.location.href=`https://go.cb-w.com/dapp?cb_url=${encodeURI(window.location.href)}`};let b=t||f?.metadata?.shortName||f?.name||i.walletClientType;return(0,n.jsxs)(v,{onClick:o,children:[(0,n.jsx)(m.I,{icon:l||f?.image_url?.md,name:b}),(0,n.jsx)("span",{children:b}),(0,n.jsxs)(C,{id:"chip-container",children:[y?.walletClientType===w&&y?.chainType===i.chainType?(0,n.jsx)(T,{color:"gray",children:"Recent"}):(0,n.jsx)("span",{id:"connect-text",children:"Connect"}),"solana"===i.chainType&&(0,n.jsx)(T,{color:"gray",children:"Solana"})]})]})},v=(0,f.styled)(s.U)`
  /* Wallet name text color */
  > span {
    color: var(--privy-color-foreground);
  }

  /* Show "Connect" on hover */
  > #chip-container > #connect-text {
    font-weight: 500;
    color: var(--privy-color-accent);
    opacity: 0;
    transition: opacity 0.1s ease-out;
  }

  :hover > #chip-container > #connect-text {
    opacity: 1;
  }

  @media (max-width: 440px) {
    > #chip-container > #connect-text {
      display: none;
    }
  }
`,T=(0,f.styled)(o.C)`
  margin-left: auto;
`,C=f.styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-left: auto;
`,j=["coinbase_wallet","base_account"],b=["metamask","okx_wallet","rainbow","uniswap","bybit_wallet","ronin_wallet","haha_wallet","uniswap_extension","zerion","rabby_wallet","cryptocom","binance","kraken_wallet"],$=["safe"],_=["phantom","backpack","solflare","jupiter","universal_profile"],S={component:()=>{let e,{connectors:o}=(0,d.u)(),{setModalData:g,data:f,navigate:m}=(0,p.a)(),w=(0,c.u)(),{wallets:v}=(0,u.u)(),T=o.filter(s.v).flatMap(e=>e.wallets),[C,S]=(0,t.useState)("default"),W="solana"===f?.funding?.chainType,F=!!f?.funding?.crossChainBridgingEnabled;e="ethereum"===f?.funding?.chainType?f.funding.erc20Address&&!f.funding.isUSDC?"ethereum-only":F&&!f.funding.chain.testnet?"ethereum-and-solana":"ethereum-only":F&&!f.funding?.isUSDC?"ethereum-and-solana":"solana-only";let O=v.filter(e=>"privy"!==e.walletClientType),D=O.map(e=>e.walletClientType),M=T.filter(e=>"privy"!==e.walletClientType),B=M.map(e=>e.walletClientType),E=[],A={...f.funding};A.usingDefaultFundingMethod&&(A.usingDefaultFundingMethod=!1);let L=({wallet:e,walletChainType:n})=>{g({...f,funding:{...A,connectedWallet:e,onContinueWithExternalWallet:()=>m(I({destChainType:W?"solana":"ethereum",sourceChainType:n}))},solanaFundingData:f?.solanaFundingData?{...f.solanaFundingData,sourceWalletData:{address:e.address,walletClientType:e.walletClientType}}:void 0}),m("FundingAmountEditScreen")};"solana-only"!==e&&E.push(...O.map((e,t)=>(0,n.jsx)(k,{onClick:()=>L({wallet:e,walletChainType:"ethereum"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},t))),"ethereum-only"!==e&&E.push(...M.map((e,t)=>(0,n.jsx)(k,{onClick:()=>L({wallet:e,walletChainType:"solana"}),icon:e.meta.icon,name:e.meta.name,chainType:e.type},t))),E.push(...(({walletList:e,walletChainType:t,connectors:l,connectOnly:a,ignore:i,walletConnectEnabled:o,forceWallet:r})=>{let c=[],s=[],d=[],p=l.filter(e=>"ethereum-only"===t?"ethereum"===e.chainType:"solana-only"!==t||"solana"===e.chainType),u=p.find(e=>"wallet_connect_v2"===e.connectorType);for(let[l,y]of(r?[r.wallet]:e).entries()){if("detected_ethereum_wallets"===y)for(let[e,t]of p.filter(({chainType:e,connectorType:n,walletClientType:t})=>"solana"!==e&&("uniswap_wallet_extension"===t||"uniswap_extension"===t?!i.includes("uniswap"):"crypto.com_wallet_extension"===t||"crypto.com_onchain"===t?!i.includes("cryptocom"):"injected"===n&&!i.includes(t))).entries()){let{walletClientType:i,walletBranding:o,chainType:r}=t;("unknown"===i?s:c).push((0,n.jsx)(x,{connectOnly:a,provider:i,logo:o.icon,displayName:o.name,connector:t},`${l}-${y}-${i}-${r}-${e}`))}if("detected_solana_wallets"===y)for(let[e,o]of p.filter(({chainType:e,walletClientType:n})=>{if("solana"===e)return"ethereum-only"!==t&&!i.includes(n)}).entries()){let{walletClientType:t,walletBranding:i,chainType:r}=o;("unknown"===t?s:c).push((0,n.jsx)(x,{connectOnly:a,provider:t,logo:i.icon,displayName:i.name,connector:o},`${l}-${y}-${t}-${r}-${e}`))}if(_.includes(y)){let e=p.find(e=>"injected"===e.connectorType&&e.walletClientType===y||e.connectorType===y);if(e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:e},`${l}-${y}`)),"solana-only"===t||"ethereum-and-solana"===t){let e=p.find(({chainType:e,walletClientType:n})=>"solana"===e&&n===y);e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:e},`${y}-solana`))}}else if(b.includes(y)){let e=p.find(e=>"uniswap"===y?"uniswap_wallet_extension"===e.walletClientType||"uniswap_extension"===e.walletClientType:"cryptocom"===y?"crypto.com_wallet_extension"===e.walletClientType||"crypto.com_onchain"===e.walletClientType:"injected"===e.connectorType&&e.walletClientType===y);if(o&&!e&&(e=u),e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:e,logo:"injected"===e.connectorType?e.walletBranding.icon:void 0,displayName:"injected"===e.connectorType?e.walletBranding.name:void 0},`${l}-${y}`)),"solana-only"===t||"ethereum-and-solana"===t){let e=p.find(({chainType:e,walletClientType:n})=>"solana"===e&&n===y);e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:e},`${y}-solana`))}}else if(j.includes(y)){let e=p.find(({connectorType:e})=>e===y);e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:e,displayName:"coinbase_wallet"===e.walletClientType?"Coinbase":"Base",logo:"coinbase_wallet"===e.walletClientType?h.D:h.E},`${l}-${y}`))}else if($.includes(y))u&&d.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:u},`${l}-${y}`));else if("wallet_connect"===y)u&&d.push((0,n.jsx)(x,{connectOnly:a,provider:y,connector:u,logo:u.walletBranding.icon,displayName:"WalletConnect"},`${l}-${y}`));else if(y===r?.wallet){let t="ethereum"===r.chainType&&e.includes("detected_ethereum_wallets"),i="solana"===r.chainType&&e.includes("detected_solana_wallets");if(t||i){let e=p.find(({walletClientType:e})=>e===y);e&&c.push((0,n.jsx)(x,{connectOnly:a,provider:y,displayName:e.walletBranding?.name,logo:e.walletBranding?.icon,connector:e},`${l}-${y}`))}}}return[...s,...c,...d]})({walletList:w.appearance.walletList.filter(e=>!O.some(n=>n.walletClientType===e)&&!M.some(n=>n.walletClientType===e)),walletChainType:e,connectors:o,connectOnly:!0,ignore:[...w.appearance.walletList,...D,...B],walletConnectEnabled:w.externalWallets.walletConnect.enabled}));let z=(0,n.jsx)(y.W,{text:"More wallets",onClick:()=>S("overflow")}),I=({sourceChainType:e,destChainType:n})=>"ethereum"===e&&"solana"===n?"AwaitingEvmToSolBridgingScreen":"ethereum"===e&&"ethereum"===n?"AwaitingExternalEthereumTransferScreen":"solana"===e&&"ethereum"===n?"AwaitingSolToEvmBridgingScreen":A.externalSolanaFundingScreen;return(0,t.useEffect)(()=>{g({...f,externalConnectWallet:{onCompleteNavigateTo:({address:e,walletClientType:n,walletChainType:t})=>{let l=t??"ethereum",a="ethereum"===l?O.find(t=>t.address===e&&t.walletClientType===n):M.find(t=>t.address===e&&t.walletClientType===n);return g({...f,funding:{...A,connectedWallet:a,onContinueWithExternalWallet:()=>{m(I({destChainType:W?"solana":"ethereum",sourceChainType:l}))}},solanaFundingData:f?.solanaFundingData?{...f.solanaFundingData,sourceWalletData:{address:e||"",walletClientType:n||""}}:void 0}),"FundingAmountEditScreen"}}})},[]),(0,n.jsxs)(n.Fragment,"overflow"===C?{children:[(0,n.jsx)(l.M,{backFn:()=>S("default")},"header"),(0,n.jsxs)(s.a8,{children:[(0,n.jsx)(r.S,{style:{color:"var(--privy-color-foreground-3)",textAlign:"left"},children:"More wallets"}),E]}),(0,n.jsx)(l.B,{})]}:{children:[(0,n.jsx)(i.t,{}),(0,n.jsx)(a.C,{title:"Transfer from wallet",description:"Connect a wallet to deposit funds or send funds manually to your wallet address."}),(0,n.jsxs)(s.a8,{children:[E.length>4?E.slice(0,3):E,E.length>4&&z]}),(0,n.jsx)(l.B,{})]})}},k=({onClick:e,icon:t,name:l,chainType:a})=>(0,n.jsxs)(s.U,{onClick:e,children:[(0,n.jsx)(w.I,{style:{width:20},children:(0,n.jsx)("img",{src:t})}),l,(0,n.jsx)(o.C,{color:"gray",style:{marginLeft:"auto"},children:"Connected"}),"solana"===a&&(0,n.jsx)(o.C,{color:"gray",children:"Solana"})]});e.s(["TransferFromWalletScreen",()=>S,"default",()=>S])}]);