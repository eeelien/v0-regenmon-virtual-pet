(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,590472,e=>{"use strict";var t=e.i(97146);let n=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,i=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,a=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,r=(0,t.styled)(i)`
  padding: 20px 0;
`,s=(0,t.styled)(i)`
  gap: 16px;
`,o=t.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,l=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let d=t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
  gap: 8px;
  padding: 16px;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 100%;
  background: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  && h4 {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
    text-decoration: underline;
    font-weight: medium;
  }
  && p {
    color: var(--privy-color-foreground-3);
    font-size: 14px;
  }
`,c=t.styled.div`
  height: 16px;
`,u=t.styled.div`
  height: 12px;
`;t.styled.div`
  position: relative;
`;let p=t.styled.div`
  height: ${e=>e.height??"12"}px;
`;t.styled.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,e.s(["B",()=>n,"C",()=>r,"F",()=>o,"H",()=>a,"R",()=>u,"S",()=>d,"a",()=>l,"b",()=>c,"c",()=>s,"d",()=>p,"e",()=>i])},321456,323465,e=>{"use strict";var t=e.i(382947);class n extends t.BaseError{constructor({value:e}){super(`Number \`${e}\` is not a valid decimal number.`,{name:"InvalidDecimalNumberError"})}}function i(e,t){if(!/^(-?)([0-9]*)\.?([0-9]*)$/.test(e))throw new n({value:e});let[i,a="0"]=e.split("."),r=i.startsWith("-");if(r&&(i=i.slice(1)),a=a.replace(/(0+)$/,""),0===t)1===Math.round(Number(`.${a}`))&&(i=`${BigInt(i)+1n}`),a="";else if(a.length>t){let[e,n,r]=[a.slice(0,t-1),a.slice(t-1,t),a.slice(t)],s=Math.round(Number(`${n}.${r}`));(a=s>9?`${BigInt(e)+BigInt(1)}0`.padStart(e.length+1,"0"):`${e}${s}`).length>t&&(a=a.slice(1),i=`${BigInt(i)+1n}`),a=a.slice(0,t)}else a=a.padEnd(t,"0");return BigInt(`${r?"-":""}${i}${a}`)}e.s(["InvalidDecimalNumberError",()=>n],323465),e.s(["parseUnits",()=>i],321456)},870488,e=>{"use strict";var t=e.i(266442),n=e.i(321456);function i(e,a="wei"){return(0,n.parseUnits)(e,t.etherUnits[a])}e.s(["parseEther",()=>i])},746834,e=>{"use strict";var t=e.i(14270),n=e.i(927035),i=e.i(505034),a=e.i(870488),r=e.i(157521),s=e.i(590472),o=e.i(494632),l=e.i(203042),d=e.i(168271),c=e.i(978141),u=e.i(205384),p=e.i(957074),g=e.i(526520),f=e.i(430321),h=e.i(634204),m=e.i(394360),v=e.i(41333),x=e.i(746435),y=e.i(483974),w=e.i(799024);e.i(252494),e.i(768820),e.i(329723);let b={component:function(){let e=(0,u.u)(),{closePrivyModal:b,createAnalyticsEvent:S,connectors:T}=(0,p.u)(),{navigate:I,setModalData:C,data:E}=(0,f.a)(),N=(0,u.u)(),A=(0,i.useRef)(!1),U=(0,v.u)(),[F,$]=(0,i.useState)(!1),[j,B]=(0,i.useState)(!1),[R,W]=(0,i.useState)(null),[k,D]=(0,i.useState)(),[P,L]=(0,i.useState)();if(!E?.funding||"ethereum"!==E.funding.chainType)throw Error("Invalid funding data");let{amount:M,connectedWallet:O,chain:_,solanaChain:H,isUSDC:q}=E.funding,z=E.funding.address,K=E.funding.erc20Address,Q=E.funding.isUSDC?"USDC":_.nativeCurrency.symbol,V=(0,i.useMemo)(()=>"solana"===O?.type?O.provider:function({connectors:e,connectedWalletAddress:t}){let n=e.find(e=>"solana"===e.chainType&&e.wallets.some(e=>e.address===t)),i=n?.wallet.accounts.find(e=>e.address===t);if(!n||!i)throw new p.a("Unable to find source wallet connector");return new r.ConnectedStandardSolanaWallet({wallet:n.wallet,account:i})}({connectors:T,connectedWalletAddress:O?.address||""}),[O,T]),Y=(0,i.useMemo)(()=>{let t=U(x.S);if(!t)throw new p.a("Unable to load solana plugin");let n=e.solanaRpcs["solana:mainnet"];if(!n)throw new p.a("Unable to load mainnet RPC");return t.getSolanaRpcClient({rpc:n.rpc,rpcSubscriptions:n.rpcSubscriptions,chain:"solana:mainnet",blockExplorerUrl:n.blockExplorerUrl??"https://explorer.solana.com"})},[]),G=(0,g.Q)((0,w.t)(V?.standardWallet.name||"unknown")),J=G?.name||"wallet";return(0,i.useEffect)(()=>{(async function(){if(!V||!_||A.current)return;let e=U(x.S);if(!e)return void W(new p.a("Unable to solana plugin"));A.current=!0,_?.testnet&&console.warn("Solana testnets are not supported for bridging");let t=q?1e6*parseFloat(M):(0,a.parseEther)(M),n=await (0,m.g)({isTestnet:!!_.testnet,input:(0,m.t)({appId:N.id,amount:t.toString(),user:V.address,recipient:z,destinationChainId:_.id,originChainId:m.b,originCurrency:q?m.d:m.a,destinationCurrency:q?K:void 0})}).catch(console.error);if(!n)return void W(new p.a(`Unable to fetch quotes for bridging. Wallet ${(0,g.a6)(V.address)} does not have enough funds.`,void 0,p.b.INSUFFICIENT_BALANCE));let i=await e.createTransactionFromRelayQuote({quote:n,source:V.address,solanaClient:Y});if(i)try{$(!0);let t=await e.simulateTransaction({solanaClient:Y,tx:i});if(t.hasError)return t.hasFunds?(console.error("Transaction failed:",t.error),void W(new p.a("Something went wrong",void 0,p.b.TRANSACTION_FAILURE))):void W(new p.a(`Wallet ${(0,g.a6)(V?.address)} does not have enough funds. ${n.details.currencyIn.amountFormatted} ${Q} are needed to complete the transaction.`,void 0,p.b.INSUFFICIENT_BALANCE));let{signature:a}=await V.signAndSendTransaction({chain:"solana:mainnet",transaction:i}),r=e.getAddressFromBuffer(a);D(r),L("pending")}catch(e){if(console.error(e),/user rejected the request/gi.test(e.message||""))return void W(new p.a("Transaction was rejected by the user",void 0,p.b.TRANSACTION_FAILURE));W(new p.a("Something went wrong",void 0,p.b.TRANSACTION_FAILURE))}else W(new p.a(`Unable to select bridge option from quotes. Wallet ${(0,g.a6)(V.address)} does not have enough funds.`,void 0,p.b.INSUFFICIENT_BALANCE))})().catch(console.error)},[]),(0,m.u)({transactionHash:k,isTestnet:!1,bridgingStatus:P,setBridgingStatus:L,onSuccess({transactionHash:e}){$(!1),B(!0),S({eventName:h.O,payload:{provider:"external",status:"success",txHash:e,address:V.address,chainType:"solana",clusterName:H,token:"SOL",destinationAddress:z,destinationChainId:_.id,destinationChainType:"ethereum",destinationValue:M,destinationToken:q?"USDC":"ETH"}})},onFailure({error:e}){$(!1),W(e)}}),(0,i.useEffect)(()=>{if(!j)return;let e=setTimeout(b,u.t);return()=>clearTimeout(e)},[j]),(0,i.useEffect)(()=>{R&&(C({funding:E?.funding,solanaFundingData:E?.solanaFundingData,sendTransaction:E?.sendTransaction,errorModalData:{error:R,previousScreen:"TransferFromWalletScreen"}}),I("ErrorScreen",!1))},[R]),j?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.t,{}),(0,t.jsx)(s.b,{}),(0,t.jsxs)(s.c,{children:[(0,t.jsx)(n.default,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,t.jsx)(l.C,{title:"Success!",description:`You’ve successfully added ${M} ${Q} to your ${N.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,t.jsx)(s.R,{}),(0,t.jsx)(o.B,{})]}):F&&V?(0,t.jsx)(y.T,{walletClientType:(0,w.t)(V?.standardWallet.name||"unknown"),displayName:J,addressToFund:z,isBridging:F,isErc20Flow:!1,chainId:_.id,chainName:_.name,totalPriceInUsd:void 0,totalPriceInNativeCurrency:void 0,gasPriceInUsd:void 0,gasPriceInNativeCurrency:void 0}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.t,{}),(0,t.jsx)(c.N,{}),(0,t.jsx)("div",{style:{marginTop:"1rem"}}),(0,t.jsx)(o.B,{})]})}};e.s(["AwaitingSolToEvmBridgingScreen",()=>b,"default",()=>b])}]);