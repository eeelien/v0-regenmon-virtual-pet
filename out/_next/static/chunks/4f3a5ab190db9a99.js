(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,303821,e=>{"use strict";var t=e.i(97146);let i=t.keyframes`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,r=t.css`
  ${e=>e.$isLoading?t.css`
          width: 35%;
          animation: ${i} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",()=>r])},212591,e=>{"use strict";var t=e.i(14270),i=e.i(97146),r=e.i(303821);let n=({children:e,color:i,isLoading:r,isPulsing:n,...s})=>(0,t.jsx)(a,{$color:i,$isLoading:r,$isPulsing:n,...s,children:e}),a=i.styled.span`
  padding: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem; /* 150% */
  border-radius: var(--privy-border-radius-xs);
  display: flex;
  align-items: center;
  ${e=>{let t,r;"green"===e.$color&&(t="var(--privy-color-success-dark)",r="var(--privy-color-success-light)"),"red"===e.$color&&(t="var(--privy-color-error)",r="var(--privy-color-error-light)"),"gray"===e.$color&&(t="var(--privy-color-foreground-2)",r="var(--privy-color-background-2)");let n=i.keyframes`
      from, to {
        background-color: ${r};
      }

      50% {
        background-color: rgba(${r}, 0.8);
      }
    `;return i.css`
      color: ${t};
      background-color: ${r};
      ${e.$isPulsing&&i.css`
        animation: ${n} 3s linear infinite;
      `};
    `}}

  ${r.L}
`;e.s(["C",()=>n])},130131,e=>{"use strict";var t=e.i(97146),i=e.i(494632),r=e.i(733295);let n=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,a=t.styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,s=t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,o=t.styled.div`
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
`;t.styled.div`
  font-size: 42px !important;
`;let l=t.styled.input`
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
`,d=(0,t.styled)(l)`
  && {
    font-size: 42px;
  }
`;t.styled.button`
  cursor: pointer;
  padding-left: 4px;
`;let c=t.styled.div`
  font-size: 18px;
`,u=t.styled.div`
  font-size: 12px;
  color: var(--privy-color-foreground-3);
  // we need this container to maintain a static height if there's no content
  height: 20px;
`;t.styled.div`
  display: flex;
  flex-direction: row;
  line-height: 22px;
  font-size: 16px;
  text-align: center;
  svg {
    margin-right: 6px;
    margin: auto;
  }
`,(0,t.styled)(r.LinkButton)`
  margin-top: 16px;
`;let h=t.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,t.styled)(i.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${h} 0.3s ease-in-out;
`;let p=t.styled.div``,g=t.styled.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;e.s(["F",()=>s,"I",()=>a,"a",()=>o,"b",()=>l,"c",()=>c,"d",()=>u,"e",()=>n,"f",()=>p,"g",()=>g,"h",()=>d])},65222,770607,e=>{"use strict";var t=e.i(505034),i=e.i(404458);function r(e){let t=e.filter(e=>!i.DEFAULT_SUPPORTED_CHAIN_IDS.has(e.id));return i.DEFAULT_SUPPORTED_CHAINS.concat(t)}e.s(["addToDefaultChains",()=>r],770607);var n=e.i(205384),a=e.i(957074),s=e.i(756645);function o(e){let{tokenPrice:i,isTokenPriceLoading:o,tokenPriceError:l}=(e=>{let{showFiatPrices:i,getUsdTokenPrice:s,chains:o}=(0,a.u)(),[l,d]=(0,t.useState)(!0),[c,u]=(0,t.useState)(void 0),[h,p]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{e||=n.s;let t=r(o).find(t=>t.id===Number(e));(async()=>{if(i){if(!t)return d(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{d(!0);let e=await s(t);e?p(e):u(Error(`Unable to fetch token price on chain id ${t.id}`))}catch(e){u(e)}finally{d(!1)}}else d(!1)})()},[e]),{tokenPrice:h,isTokenPriceLoading:l,tokenPriceError:c}})("solana"===e?-1:e),{solPrice:d,isSolPriceLoading:c,solPriceError:u}=(0,s.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:d,isTokenPriceLoading:c,tokenPriceError:u}:{tokenPrice:i,isTokenPriceLoading:o,tokenPriceError:l}}e.s(["u",()=>o],65222)},590472,e=>{"use strict";var t=e.i(97146);let i=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,r=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,n=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,a=(0,t.styled)(r)`
  padding: 20px 0;
`,s=(0,t.styled)(r)`
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
`;let h=t.styled.div`
  height: ${e=>e.height??"12"}px;
`;t.styled.div`
  background-color: var(--privy-color-accent);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-color: white;
  border-width: 2px !important;
`,e.s(["B",()=>i,"C",()=>a,"F",()=>o,"H",()=>n,"R",()=>u,"S",()=>d,"a",()=>l,"b",()=>c,"c",()=>s,"d",()=>h,"e",()=>r])},756645,e=>{"use strict";var t=e.i(505034),i=e.i(957074);let r=({enabled:e=!0}={})=>{let{showFiatPrices:r,getUsdPriceForSol:n}=(0,i.u)(),[a,s]=(0,t.useState)(!0),[o,l]=(0,t.useState)(void 0),[d,c]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{(async()=>{if(r&&e)try{s(!0);let e=await n();e?c(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{s(!1)}else s(!1)})()},[]),{solPrice:d,isSolPriceLoading:a,solPriceError:o}};e.s(["u",()=>r])},254096,e=>{"use strict";var t=e.i(343499),i=e.i(957074),r=e.i(526520);let n=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),a=(e,t)=>{let i,r=(i=t*parseFloat(e),n.format(i));return"$0.00"!==r?r:"<$0.01"},s=(e,i)=>{let r,a=(r=i*parseFloat((0,t.formatEther)(e)),n.format(r));return"$0.00"===a?"<$0.01":a},o=(e,t,i=6,r=!1)=>`${l(e,i,r)} ${t}`,l=(e,i=6,r=!1)=>{let n=parseFloat((0,t.formatEther)(e)).toFixed(i).replace(/0+$/,"").replace(/\.$/,"");return r?n:`${"0"===n?"<0.001":n}`},d=e=>e.reduce((e,t)=>e+t,0n),c=(e,t)=>{let{chains:n}=(0,i.u)(),a=`https://etherscan.io/address/${t}`,s=`${(0,r.a5)(e,n)}/address/${t}`;try{new URL(s)}catch{return a}return s};e.s(["a",()=>s,"b",()=>c,"c",()=>a,"g",()=>o,"p",()=>l,"s",()=>d])},84410,e=>{"use strict";var t=e.i(505034);let i=t.forwardRef(function({title:e,titleId:i,...r},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),e?t.createElement("title",{id:i},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});e.s(["default",0,i])},111934,e=>{"use strict";let t=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],i=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],r={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function n(e,t){let i=parseFloat(e.toString())/1e9,r=a.format(t*i);return"$0.00"===r?"<$0.01":r}let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2});e.s(["A",()=>"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL","D",()=>r,"J",()=>i,"L",()=>1e9,"R",()=>t,"S",()=>"11111111111111111111111111111111","T",()=>"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA","a",()=>"TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb","g",()=>n])},115579,e=>{"use strict";var t=e.i(111934);function i(e,t=6,r=!1,n=!1){let a=(parseFloat(e.toString())/1e9).toFixed(t).replace(/0+$/,"").replace(/\.$/,""),s=n?"":" SOL";return r?`${a}${s}`:`${"0"===a?"<0.001":a}${s}`}function r({amount:e,fee:r,tokenPrice:n,isUsdc:a}){let s=BigInt(Math.floor(parseFloat(e)*10**(a?6:9))),o=a?s:s+r;return{fundingAmountInBaseUnit:s,fundingAmountInUsd:n?(0,t.g)(s,n):void 0,totalPriceInUsd:n?(0,t.g)(o,n):void 0,totalPriceInNativeCurrency:i(o),feePriceInNativeCurrency:i(r),feePriceInUsd:n?(0,t.g)(r,n):void 0}}e.s(["a",()=>r,"g",()=>i])},47870,e=>{"use strict";var t=e.i(121402);function i(e,r={}){let{key:n="custom",methods:a,name:s="Custom Provider",retryDelay:o}=r;return({retryCount:i})=>(0,t.createTransport)({key:n,methods:a,name:s,request:e.request.bind(e),retryCount:r.retryCount??i,retryDelay:o,type:"custom"})}e.s(["custom",()=>i])},632274,e=>{"use strict";var t=e.i(522081),i=e.i(399678),r=e.i(899662);let n=async({chain:e,address:n,appId:s,rpcConfig:o,erc20Address:l})=>{let d=(0,t.createPublicClient)({chain:e,transport:(0,i.http)((0,r.a)(e,o,s))});return{balance:await d.readContract({address:l,abi:a,functionName:"balanceOf",args:[n]}).catch(()=>0n),chain:e}},a=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}];e.s(["g",()=>n])},634204,e=>{"use strict";e.s(["O",()=>"sdk_fiat_on_ramp_completed_with_status"])},168271,e=>{"use strict";var t=e.i(14270),i=e.i(430321),r=e.i(494632);function n({title:e}){let{currentScreen:n,navigateBack:a,navigate:s,data:o,setModalData:l}=(0,i.a)();return(0,t.jsx)(r.M,{title:e,backFn:"ManualTransferScreen"===n?a:n===o?.funding?.methodScreen?o.funding.comingFromSendTransactionScreen?()=>s("SendTransactionScreen"):void 0:o?.funding?.methodScreen?()=>{let e=o.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),l({funding:e,solanaFundingData:o?.solanaFundingData}),s(e.methodScreen)}:void 0})}e.s(["t",()=>n])},623917,e=>{"use strict";function t(e){switch(e){case"solana:mainnet":return"Solana";case"solana:devnet":return"Devnet";case"solana:testnet":return"Testnet"}}e.s(["g",()=>t])},927035,e=>{"use strict";var t=e.i(505034);let i=t.forwardRef(function({title:e,titleId:i,...r},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),e?t.createElement("title",{id:i},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});e.s(["default",0,i])},686035,e=>{"use strict";var t=e.i(505034);let i=t.forwardRef(function({title:e,titleId:i,...r},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),e?t.createElement("title",{id:i},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"}))});e.s(["default",0,i])},964105,e=>{"use strict";var t=e.i(14270),i=e.i(686035);let r=({icon:e,name:r})=>"string"==typeof e?(0,t.jsx)("img",{alt:`${r||"wallet"} logo`,src:e,style:{height:24,width:24,borderRadius:4}}):void 0===e?(0,t.jsx)(i.default,{style:{height:24,width:24}}):e?(0,t.jsx)(e,{style:{height:24,width:24}}):null;e.s(["I",()=>r])},574695,e=>{"use strict";let t=(0,e.i(78048).default)("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);e.s(["Copy",()=>t],574695)},659425,e=>{"use strict";var t=e.i(97146);let i=t.styled.span`
  text-align: left;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem; /* 150% */

  color: var(--privy-color-error);
`;e.s(["E",()=>i])},582964,e=>{"use strict";var t=e.i(14270),i=e.i(653327),r=e.i(574695),n=e.i(505034),a=e.i(97146),s=e.i(526520),o=e.i(494632);let l=({address:e,showCopyIcon:a,url:l,className:h})=>{let[p,g]=(0,n.useState)(!1);function f(t){t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>g(!0)).catch(console.error)}return(0,n.useEffect)(()=>{if(p){let e=setTimeout(()=>g(!1),3e3);return()=>clearTimeout(e)}},[p]),(0,t.jsxs)(d,l?{children:[(0,t.jsx)(u,{title:e,className:h,href:`${l}/address/${e}`,target:"_blank",children:(0,s.D)(e)}),a&&(0,t.jsx)(o.S,{onClick:f,size:"sm",style:{gap:"0.375rem"},children:(0,t.jsxs)(t.Fragment,p?{children:["Copied",(0,t.jsx)(i.Check,{size:16})]}:{children:["Copy",(0,t.jsx)(r.Copy,{size:16})]})})]}:{children:[(0,t.jsx)(c,{title:e,className:h,children:(0,s.D)(e)}),a&&(0,t.jsx)(o.S,{onClick:f,size:"sm",style:{gap:"0.375rem",fontSize:"14px"},children:(0,t.jsxs)(t.Fragment,p?{children:["Copied",(0,t.jsx)(i.Check,{size:14})]}:{children:["Copy",(0,t.jsx)(r.Copy,{size:14})]})})]})},d=a.styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`,c=a.styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--privy-color-foreground);
`,u=a.styled.a`
  font-size: 14px;
  color: var(--privy-color-foreground);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;e.s(["A",()=>l])},394360,e=>{"use strict";var t=e.i(505034),i=e.i(957074);let r="0x0000000000000000000000000000000000000000",n=({appId:e,originCurrency:t,destinationCurrency:i,...n})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:t??r,destinationCurrency:i??r,referrer:`privy|${e}`,...n}),a="https://api.relay.link",s="https://api.testnets.relay.link",o=async({input:e,isTestnet:t})=>{let i=await fetch((t?s:a)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await i.json();if(!(i.ok||"string"==typeof r.message&&r.message.startsWith("Invalid address")))throw console.error("Relay error:",r),Error(r.message??"Error fetching quote from relay");return r},l=e=>{let t=e.steps[0]?.items?.[0];if(t)return{from:t.data.from,to:t.data.to,value:Number(t.data.value),chainId:Number(t.data.chainId),data:t.data.data}};async function d({transactionHash:e,isTestnet:t}){let i=await fetch((t?s:a)+"/requests/v2?hash="+e),r=await i.json();if(!i.ok){if("message"in r&&"string"==typeof r.message)throw Error(r.message);throw Error("Error fetching request from relay")}return r.requests.at(0)?.status??"pending"}function c({transactionHash:e,isTestnet:i,bridgingStatus:r,setBridgingStatus:n,onSuccess:a,onFailure:s}){(0,t.useEffect)(()=>{if(e&&r){if(["delayed","waiting","pending"].includes(r)){let t=setInterval(async()=>{try{let t=await d({transactionHash:e,isTestnet:i});n(t)}catch(e){console.error(e)}},1e3);return()=>clearInterval(t)}"success"===r?a({transactionHash:e}):["refund","failure"].includes(r)&&s({error:new u(e,i)})}},[r,e,i])}class u extends i.a{constructor(e,t){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,i.b.TRANSACTION_FAILURE),this.relayLink=t?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}e.s(["R",()=>u,"a",()=>"11111111111111111111111111111111","b",()=>0x2f3fb341,"c",()=>l,"d",()=>"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","g",()=>o,"t",()=>n,"u",()=>c])},263288,e=>{"use strict";var t=e.i(97146);let i=t.css`
  && {
    border-width: 1px;
    padding: 0.5rem 1rem;
  }

  width: 100%;
  text-align: left;
  border: solid 1px var(--privy-color-foreground-4);
  border-radius: var(--privy-border-radius-md);
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${e=>"error"===e.$state?"\n        border-color: var(--privy-color-error);\n        background: var(--privy-color-error-bg);\n      ":""}
`,r=t.styled.div`
  ${i}
`;e.s(["B",()=>r,"a",()=>i])},600204,e=>{"use strict";var t=e.i(97146);let i=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`;e.s(["T",()=>i])},307865,e=>{"use strict";var t=e.i(97146);let i=t.styled.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`;e.s(["S",()=>i])},522780,e=>{"use strict";var t=e.i(343499),i=e.i(330044);function r(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function n({wei:e,precision:i=3}){return parseFloat((0,t.formatEther)(e)).toFixed(i).replace(/0+$/,"").replace(/\.$/,"")}function a({amount:e,decimals:t}){return(0,i.formatUnits)(BigInt(e),t)}e.s(["formatTokenAmount",()=>a,"formatWalletAddress",()=>r,"formatWeiAmount",()=>n])},203042,e=>{"use strict";var t=e.i(14270),i=e.i(97146);let r=({title:e,description:i,children:r,...n})=>(0,t.jsx)(a,{...n,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:e}),"string"==typeof i?(0,t.jsx)("p",{children:i}):i,r]})});(0,i.styled)(r)`
  margin-bottom: 24px;
`;let n=({title:e,description:i,icon:r,children:n,...a})=>(0,t.jsxs)(s,{...a,children:[r||null,(0,t.jsx)("h3",{children:e}),i&&"string"==typeof i?(0,t.jsx)("p",{children:i}):i,n]}),a=i.styled.div`
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
`,s=(0,i.styled)(a)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;e.s(["C",()=>n,"S",()=>r])},581887,e=>{"use strict";var t=e.i(97146);let i=t.styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,r=t.styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`;e.s(["R",()=>r,"a",()=>i])},751738,e=>{"use strict";var t=e.i(97146),i=e.i(303821);let r=t.styled.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,n=(0,t.styled)(r)`
  color: var(--privy-color-accent);
`,a=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${i.L}
`;e.s(["L",()=>r,"V",()=>a,"a",()=>n])},125093,e=>{"use strict";let t=2n**256n-1n,i=({amount:e,decimals:i})=>e===t?"Maximum":Intl.NumberFormat(void 0,{maximumFractionDigits:i}).format(Number(e)/10**i);e.s(["f",()=>i])},201338,e=>{"use strict";var t=e.i(505034);let i=t.forwardRef(function({title:e,titleId:i,...r},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":i},r),e?t.createElement("title",{id:i},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))});e.s(["default",0,i])},483974,172906,e=>{"use strict";var t=e.i(14270),i=e.i(97146),r=e.i(590472),n=e.i(494632),a=e.i(203042),s=e.i(168271),o=e.i(964105),l=e.i(978141),d=e.i(581887),c=e.i(751738),u=e.i(582964),h=e.i(201338),p=e.i(668296),g=e.i(671043),f=e.i(501691),x=e.i(556391),m=e.i(821887),v=e.i(560818),y=e.i(403808),w=e.i(857800),C=e.i(249489);let j=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 397.7 311.7",enableBackground:"new 0 0 397.7 311.7",xmlSpace:"preserve",...e,children:[(0,t.jsxs)("linearGradient",{id:"SVGID_1_",gradientUnits:"userSpaceOnUse",x1:"360.8791",y1:"351.4553",x2:"141.213",y2:"-69.2936",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z",fill:"url(#SVGID_1_)"}),(0,t.jsxs)("linearGradient",{id:"SVGID_2_",gradientUnits:"userSpaceOnUse",x1:"264.8291",y1:"401.6014",x2:"45.163",y2:"-19.1475",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z",fill:"url(#SVGID_2_)"}),(0,t.jsxs)("linearGradient",{id:"SVGID_3_",gradientUnits:"userSpaceOnUse",x1:"312.5484",y1:"376.688",x2:"92.8822",y2:"-44.061",gradientTransform:"matrix(1 0 0 -1 0 314)",children:[(0,t.jsx)("stop",{offset:"0",stopColor:"#00FFA3"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#DC1FFF"})]}),(0,t.jsx)("path",{d:"M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z",fill:"url(#SVGID_3_)"})]}),b={[C.arbitrum.id]:e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 2500 2500",xmlSpace:"preserve",...e,children:(0,t.jsx)("g",{id:"Layer_x0020_1",children:(0,t.jsxs)("g",{id:"_2405588477232",children:[(0,t.jsx)("rect",{fill:"none",width:"2500",height:"2500"}),(0,t.jsx)("g",{children:(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#213147",d:"M226,760v980c0,63,33,120,88,152l849,490c54,31,121,31,175,0l849-490c54-31,88-89,88-152V760      c0-63-33-120-88-152l-849-490c-54-31-121-31-175,0L314,608c-54,31-87,89-87,152H226z"}),(0,t.jsx)("g",{children:(0,t.jsxs)("g",{children:[(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#12AAFF",d:"M1435,1440l-121,332c-3,9-3,19,0,29l208,571l241-139l-289-793C1467,1422,1442,1422,1435,1440z"})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#12AAFF",d:"M1678,882c-7-18-32-18-39,0l-121,332c-3,9-3,19,0,29l341,935l241-139L1678,883V882z"})})]})}),(0,t.jsx)("g",{children:(0,t.jsx)("path",{fill:"#9DCCED",d:"M1250,155c6,0,12,2,17,5l918,530c11,6,17,18,17,30v1060c0,12-7,24-17,30l-918,530c-5,3-11,5-17,5       s-12-2-17-5l-918-530c-11-6-17-18-17-30V719c0-12,7-24,17-30l918-530c5-3,11-5,17-5l0,0V155z M1250,0c-33,0-65,8-95,25L237,555       c-59,34-95,96-95,164v1060c0,68,36,130,95,164l918,530c29,17,62,25,95,25s65-8,95-25l918-530c59-34,95-96,95-164V719       c0-68-36-130-95-164L1344,25c-29-17-62-25-95-25l0,0H1250z"})}),(0,t.jsx)("polygon",{fill:"#213147",points:"642,2179 727,1947 897,2088 738,2234     "}),(0,t.jsxs)("g",{children:[(0,t.jsx)("path",{fill:"#FFFFFF",d:"M1172,644H939c-17,0-33,11-39,27L401,2039l241,139l550-1507c5-14-5-28-19-28L1172,644z"}),(0,t.jsx)("path",{fill:"#FFFFFF",d:"M1580,644h-233c-17,0-33,11-39,27L738,2233l241,139l620-1701c5-14-5-28-19-28V644z"})]})]})})]})})}),[w.avalanche.id]:e=>(0,t.jsxs)("svg",{width:"1503",height:"1504",viewBox:"0 0 1503 1504",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{x:"287",y:"258",width:"928",height:"844",fill:"white"}),(0,t.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1502.5 752C1502.5 1166.77 1166.27 1503 751.5 1503C336.734 1503 0.5 1166.77 0.5 752C0.5 337.234 336.734 1 751.5 1C1166.27 1 1502.5 337.234 1502.5 752ZM538.688 1050.86H392.94C362.314 1050.86 347.186 1050.86 337.962 1044.96C327.999 1038.5 321.911 1027.8 321.173 1015.99C320.619 1005.11 328.184 991.822 343.312 965.255L703.182 330.935C718.495 303.999 726.243 290.531 736.021 285.55C746.537 280.2 759.083 280.2 769.599 285.55C779.377 290.531 787.126 303.999 802.438 330.935L876.42 460.079L876.797 460.738C893.336 489.635 901.723 504.289 905.385 519.669C909.443 536.458 909.443 554.169 905.385 570.958C901.695 586.455 893.393 601.215 876.604 630.549L687.573 964.702L687.084 965.558C670.436 994.693 661.999 1009.46 650.306 1020.6C637.576 1032.78 622.263 1041.63 605.474 1046.62C590.161 1050.86 573.004 1050.86 538.688 1050.86ZM906.75 1050.86H1115.59C1146.4 1050.86 1161.9 1050.86 1171.13 1044.78C1181.09 1038.32 1187.36 1027.43 1187.92 1015.63C1188.45 1005.1 1181.05 992.33 1166.55 967.307C1166.05 966.455 1165.55 965.588 1165.04 964.706L1060.43 785.75L1059.24 783.735C1044.54 758.877 1037.12 746.324 1027.59 741.472C1017.08 736.121 1004.71 736.121 994.199 741.472C984.605 746.453 976.857 759.552 961.544 785.934L857.306 964.891L856.949 965.507C841.69 991.847 834.064 1005.01 834.614 1015.81C835.352 1027.62 841.44 1038.5 851.402 1044.96C860.443 1050.86 875.94 1050.86 906.75 1050.86Z",fill:"#E84142"})]}),[y.base.id]:e=>(0,t.jsxs)("svg",{width:"146",height:"146",viewBox:"0 0 146 146",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("circle",{cx:"73",cy:"73",r:"73",fill:"#0052FF"}),(0,t.jsx)("path",{d:"M73.323 123.729C101.617 123.729 124.553 100.832 124.553 72.5875C124.553 44.343 101.617 21.4463 73.323 21.4463C46.4795 21.4463 24.4581 42.0558 22.271 68.2887H89.9859V76.8864H22.271C24.4581 103.119 46.4795 123.729 73.323 123.729Z",fill:"white"})]}),[v.celo.id]:e=>(0,t.jsxs)("svg",{fill:"none",height:"400",viewBox:"0 0 400 400",width:"400",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("path",{d:"m0 0h400v400h-400z",fill:"#fcff52"}),(0,t.jsx)("path",{d:"m300 100h-200v200h199.996v-69.813h-33.191c-11.442 25.468-37.194 43.206-66.665 43.206-40.63 0-73.533-33.187-73.533-73.533s32.903-73.249 73.533-73.249c30.043 0 55.795 18.313 67.24 44.349h32.62z",fill:"#000"})]}),[m.linea.id]:e=>(0,t.jsxs)("svg",{width:"200",height:"208",viewBox:"0 0 200 208",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{width:"199.4",height:"207.623",fill:"#121212"}),(0,t.jsxs)("g",{"clip-path":"url(#clip0_2303_643)",children:[(0,t.jsx)("path",{d:"M132.369 155.99H49.7001V68.8854H68.6148V139.109H132.369V155.981V155.99Z",fill:"white"}),(0,t.jsx)("path",{d:"M132.369 85.7575C141.687 85.7575 149.241 78.2036 149.241 68.8855C149.241 59.5673 141.687 52.0134 132.369 52.0134C123.05 52.0134 115.497 59.5673 115.497 68.8855C115.497 78.2036 123.05 85.7575 132.369 85.7575Z",fill:"white"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_2303_643",children:(0,t.jsx)("rect",{width:"99.5407",height:"103.977",fill:"white",transform:"translate(49.7001 52.0134)"})})})]}),[x.mainnet.id]:e=>(0,t.jsxs)("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 327.5 533.3",enableBackground:"new 0 0 327.5 533.3;",xmlSpace:"preserve",...e,children:[(0,t.jsx)("path",{fill:"#8492B2",d:"M163.7,197.2V0L0,271.6L163.7,197.2z"}),(0,t.jsx)("path",{fill:"#62688F",d:"M163.7,368.4V197.2L0,271.6L163.7,368.4z M163.7,197.2l163.7,74.4L163.7,0V197.2z"}),(0,t.jsx)("path",{fill:"#454A75",d:"M163.7,197.2v171.2l163.7-96.8L163.7,197.2z"}),(0,t.jsx)("path",{fill:"#8492B2",d:"M163.7,399.4L0,302.7l163.7,230.7V399.4z"}),(0,t.jsx)("path",{fill:"#62688F",d:"M327.5,302.7l-163.8,96.7v134L327.5,302.7z"})]}),[f.optimism.id]:e=>(0,t.jsxs)("svg",{width:"500",height:"500",viewBox:"0 0 500 500",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("circle",{cx:"250",cy:"250",r:"250",fill:"#FF0420"}),(0,t.jsx)("path",{d:"M177.133 316.446C162.247 316.446 150.051 312.943 140.544 305.938C131.162 298.808 126.471 288.676 126.471 275.541C126.471 272.789 126.784 269.411 127.409 265.408C129.036 256.402 131.35 245.581 134.352 232.947C142.858 198.547 164.812 181.347 200.213 181.347C209.845 181.347 218.476 182.973 226.107 186.225C233.738 189.352 239.742 194.106 244.12 200.486C248.498 206.74 250.688 214.246 250.688 223.002C250.688 225.629 250.375 228.944 249.749 232.947C247.873 244.08 245.621 254.901 242.994 265.408C238.616 282.546 231.048 295.368 220.29 303.874C209.532 312.255 195.147 316.446 177.133 316.446ZM179.76 289.426C186.766 289.426 192.707 287.362 197.586 283.234C202.59 279.106 206.155 272.789 208.281 264.283C211.158 252.524 213.348 242.266 214.849 233.51C215.349 230.883 215.599 228.194 215.599 225.441C215.599 214.058 209.657 208.366 197.774 208.366C190.768 208.366 184.764 210.43 179.76 214.558C174.882 218.687 171.379 225.004 169.253 233.51C167.001 241.891 164.749 252.149 162.498 264.283C161.997 266.784 161.747 269.411 161.747 272.163C161.747 283.672 167.752 289.426 179.76 289.426Z",fill:"white"}),(0,t.jsx)("path",{d:"M259.303 314.57C257.927 314.57 256.863 314.132 256.113 313.256C255.487 312.255 255.3 311.13 255.55 309.879L281.444 187.914C281.694 186.538 282.382 185.412 283.508 184.536C284.634 183.661 285.822 183.223 287.073 183.223H336.985C350.87 183.223 362.003 186.1 370.384 191.854C378.891 197.609 383.144 205.927 383.144 216.81C383.144 219.937 382.769 223.19 382.018 226.567C378.891 240.953 372.574 251.586 363.067 258.466C353.685 265.346 340.8 268.786 324.413 268.786H299.082L290.451 309.879C290.2 311.255 289.512 312.38 288.387 313.256C287.261 314.132 286.072 314.57 284.822 314.57H259.303ZM325.727 242.892C330.98 242.892 335.546 241.453 339.424 238.576C343.427 235.699 346.054 231.571 347.305 226.192C347.68 224.065 347.868 222.189 347.868 220.563C347.868 216.935 346.805 214.183 344.678 212.307C342.551 210.305 338.924 209.305 333.795 209.305H311.278L304.148 242.892H325.727Z",fill:"white"})]}),[g.polygon.id]:e=>(0,t.jsxs)("svg",{width:"360",height:"360",viewBox:"0 0 360 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:[(0,t.jsx)("rect",{width:"360",height:"360",rx:"180",fill:"#6C00F6"}),(0,t.jsx)("path",{d:"M157.743 154.241L141.052 144.58L90.9766 173.561V231.519L141.052 260.5L191.13 231.519V141.359L218.948 125.26L246.77 141.359V173.561L218.948 189.66L202.257 180.002V205.759L218.948 215.42L269.024 186.439V128.481L218.948 99.5L168.873 128.481V218.641L141.052 234.74L113.233 218.641V186.439L141.052 170.34L157.743 179.998V154.241Z",fill:"white"})]}),[p.zora.id]:e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",...e,children:[(0,t.jsx)("g",{clipPath:"url(#clip0)",children:(0,t.jsx)("g",{clipPath:"url(#clip1)",children:(0,t.jsx)("path",{d:"M14.9188 29.8373C6.67944 29.8373 0.00012207 23.1581 0.00012207 14.9187C0.00012207 6.67931 6.67944 0 14.9188 0C23.1581 0 29.8373 6.67931 29.8373 14.9187C29.8373 23.1581 23.1581 29.8373 14.9188 29.8373Z",fill:"url(#paint0)"})})}),(0,t.jsxs)("defs",{children:[(0,t.jsxs)("radialGradient",{id:"paint0",cx:"0",cy:"0",r:"1",gradientUnits:"userSpaceOnUse",gradientTransform:"translate(21.6921 8.02215) rotate(180) scale(25.2008)",children:[(0,t.jsx)("stop",{offset:"0.00682297",stopColor:"#F2CEFE"}),(0,t.jsx)("stop",{offset:"0.1913",stopColor:"#AFBAF1"}),(0,t.jsx)("stop",{offset:"0.4982",stopColor:"#4281D3"}),(0,t.jsx)("stop",{offset:"0.666667",stopColor:"#2E427D"}),(0,t.jsx)("stop",{offset:"0.822917",stopColor:"#230101"}),(0,t.jsx)("stop",{offset:"1",stopColor:"#8F6B40"})]}),(0,t.jsx)("clipPath",{id:"clip0",children:(0,t.jsx)("rect",{width:"30",height:"30",fill:"white"})}),(0,t.jsx)("clipPath",{id:"clip1",children:(0,t.jsx)("rect",{width:"30",height:"30",fill:"white"})})]})]})},S=({chainId:e,...i})=>{if("solana"===e)return(0,t.jsx)(j,{...i});let r=b[e];return(0,t.jsx)(r||h.default,{...i})};e.s(["N",()=>S],172906);var F=e.i(526520);let T=({walletClientType:e,displayName:i,addressToFund:h,chainId:p,chainName:g,isBridging:f,isErc20Flow:x,totalPriceInNativeCurrency:m,totalPriceInUsd:v,gasPriceInNativeCurrency:y,gasPriceInUsd:w})=>{let C=(0,F.Q)(e);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.t,{}),(0,t.jsx)(l.N,{centerIcon:(0,t.jsx)(o.I,{icon:C?.image_url?.md,name:e})}),(0,t.jsx)(a.C,{style:{marginTop:"8px",marginBottom:"12px"},title:`${f?"Bridging":"Confirming"} with ${i}`}),!f&&!x&&(0,t.jsxs)(d.a,{children:[(0,t.jsxs)(d.R,{children:[(0,t.jsx)(c.L,{children:"Total"}),(0,t.jsx)(c.V,{children:v||m})]}),(0,t.jsxs)(d.R,{children:[(0,t.jsx)(c.L,{children:"To"}),(0,t.jsx)(c.V,{children:(0,t.jsx)(u.A,{address:h,showCopyIcon:!1})})]}),(0,t.jsxs)(d.R,{children:[(0,t.jsx)(c.L,{children:"Network"}),(0,t.jsx)(c.V,{children:(0,t.jsxs)(L,{children:[(0,t.jsx)(S,{chainId:p,height:16,width:16})," ",g]})})]}),y&&(0,t.jsxs)(d.R,{children:[(0,t.jsx)(c.L,{children:"Estimated fee"}),(0,t.jsx)(c.V,{children:w||y})]})]}),(0,t.jsx)(r.d,{height:24}),(0,t.jsx)(n.B,{})]})},L=i.styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;e.s(["T",()=>T],483974)},369612,e=>{"use strict";var t=e.i(14270),i=e.i(927035),r=e.i(505034),n=e.i(866388),a=e.i(47870),s=e.i(164981),o=e.i(522081),l=e.i(399678),d=e.i(330044),c=e.i(770607),u=e.i(590472),h=e.i(494632),p=e.i(203042),g=e.i(168271),f=e.i(978141),x=e.i(205384),m=e.i(957074),v=e.i(526520),y=e.i(430321),w=e.i(65222),C=e.i(483604),j=e.i(634204),b=e.i(394360),S=e.i(384249),F=e.i(623917),T=e.i(115579),L=e.i(520224),k=e.i(899662),E=e.i(483974);e.i(252494),e.i(768820),e.i(329723),e.i(464143),e.i(559889);let P={component:()=>{let e=(0,x.u)(),{rpcConfig:P,appId:I,closePrivyModal:A,createAnalyticsEvent:M}=(0,m.u)(),{navigate:B,setModalData:N,data:U}=(0,y.a)(),$=(0,x.u)(),{wallets:D}=(0,C.u)(),[z,V]=(0,r.useState)(null),[H,_]=(0,r.useState)(null),[R,O]=(0,r.useState)([]),[q,Z]=(0,r.useState)(0),[G,W]=(0,r.useState)(!1),[J,Q]=(0,r.useState)(!1),[Y,X]=(0,r.useState)(!1),[K,ee]=(0,r.useState)(!1),[et,ei]=(0,r.useState)(),[er,en]=(0,r.useState)();if(!U?.funding||"solana"!==U.funding.chainType)throw Error("Invalid funding data");let{address:ea,chain:es,connectedWallet:eo}=U.funding,[el,ed]=(0,r.useState)(U.funding.amount),ec=("ethereum"===eo?.type?eo:void 0)??D[0],eu=(0,v.Q)(ec?.walletClientType||"unknown"),eh=eu?.name||"wallet",[ep,eg]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{if(!ec)return;let e=await ec.getEthereumProvider();eg((0,n.createWalletClient)({account:ec.address,transport:(0,a.custom)(e)}).extend(s.publicActions))})().catch(console.error)},[ec]);let[ef,ex]=(0,r.useState)(0n),em=(0,T.g)(ef);(0,r.useEffect)(()=>{let t=e.solanaRpcs[es];t?(0,S.x)({rpc:t.rpc,address:ea}).then(e=>ex(BigInt(e))).catch(console.error):console.warn("Unable to load solana rpc, skipping balance")},[]);let[ev,ey]=(0,r.useState)(),{tokenPrice:ew}=(0,w.u)("solana"),{fundingAmountInBaseUnit:eC,fundingAmountInUsd:ej}=(0,T.a)({amount:el,fee:0n,tokenPrice:ew,isUsdc:U.funding.isUSDC});if((0,r.useEffect)(()=>{(async()=>{if(!ep||!ec)return;let e=["solana:testnet","solana:devnet"].includes(es);e&&console.warn("Solana testnets are not supported for bridging");let t=(0,c.addToDefaultChains)($.chains).filter(({testnet:t})=>!!t===e),i=(await (0,L.g)({chains:t,address:ec.address,appId:I,rpcConfig:P})).filter(e=>e.balance>0n);if(i.length<1)return void V(new m.a(`Wallet ${(0,v.D)(ec.address)} does not have enough funds.`,void 0,m.b.INSUFFICIENT_BALANCE));i.sort((e,t)=>Number(t.balance-e.balance));let r=(await Promise.allSettled(i.map(async e=>({...e,quote:await (0,b.g)({isTestnet:!1,input:(0,b.t)({appId:I,amount:eC.toString(),user:ec.address,recipient:ea,destinationChainId:b.b,destinationCurrency:b.a,originChainId:e.chain.id})})})))).filter(e=>"fulfilled"===e.status).map(e=>e.value);if(r.length<1)return void V(new m.a(`Unable to fetch quotes for bridging. Wallet ${(0,v.D)(ec.address)} does not have enough funds.`,void 0,m.b.INSUFFICIENT_BALANCE));let n=r.map(({quote:e,balance:t,chain:i})=>({bridgeTx:(0,b.c)(e),balance:t,chain:i,isErc20Quote:!1})).filter(({bridgeTx:e})=>!!e);if(n.length>1)return void O(n);let a=n.at(0);a?(Q(!0),ey({data:a.bridgeTx.data,to:a.bridgeTx.to,value:a.bridgeTx.value,chain:a.chain})):V(new m.a(`Unable to select bridge option from quotes. Wallet ${(0,v.D)(ec.address)} does not have enough funds.`,void 0,m.b.INSUFFICIENT_BALANCE))})().catch(console.error)},[ep]),(0,r.useEffect)(()=>{(async()=>{let e,t;if(!ep||!ec||G||Y||!ev)return;W(!0);let i=(0,o.createPublicClient)({chain:ev.chain,transport:(0,l.http)((0,k.a)(ev.chain,P,I))});try{e=await i.prepareTransactionRequest({account:ec.address,to:ev.to,chain:ev.chain,data:ev.data,value:BigInt(ev.value??0)})}catch(e){console.error(e),R.length>1&&_(e.shortMessage??"Something went wrong")}if(e){W(!1),X(!0);try{await ep.switchChain({id:ev.chain.id})}catch(e){await ep.addChain({chain:ev.chain}),await ep.switchChain({id:ev.chain.id})}try{t=await ep.sendTransaction(e)}catch(e){console.error(e),"TransactionExecutionError"===e.name&&(R.length<1?V(new m.a(e.shortMessage,void 0,m.b.TRANSACTION_FAILURE)):_(e.shortMessage??"Something went wrong"))}if(t)return await ep.waitForTransactionReceipt({hash:t}),J?(en("pending"),void ei(t)):(X(!1),ee(!0),void M({eventName:j.O,payload:{provider:"external",status:"success",txHash:t,address:ec.address,chainId:ev.chain.id,chainType:"ethereum",value:ev.value?(0,d.formatUnits)(BigInt(ev.value),18):void 0,token:"ETH",destination:ea,destinationClusterName:"mainnet-beta",destinationChainType:"solana",destinationValue:(0,d.formatUnits)(eC,9),destinationToken:"SOL"}}));X(!1)}else W(!1)})().catch(console.error)},[ep,ev]),(0,b.u)({transactionHash:et,isTestnet:!1,bridgingStatus:er,setBridgingStatus:en,onSuccess({transactionHash:e}){Q(!1),ee(!0),M({eventName:j.O,payload:{provider:"external",status:"success",txHash:e,address:ec?.address,chainId:ev?.chain.id,chainType:"ethereum",value:ev?.value?(0,d.formatUnits)(BigInt(ev.value),18):void 0,token:"ETH",destination:ea,destinationClusterName:"mainnet-beta",destinationChainType:"solana",destinationValue:(0,d.formatUnits)(eC,9),destinationToken:"SOL"}})},onFailure({error:e}){Q(!1),V(e)}}),(0,r.useEffect)(()=>{z&&(N({funding:U?.funding,solanaFundingData:U?.solanaFundingData,sendTransaction:U?.sendTransaction,errorModalData:{error:z,previousScreen:"TransferFromWalletScreen"}}),B("ErrorScreen",!1))},[z]),(0,r.useEffect)(()=>{if(!K)return;let e=setTimeout(A,x.t);return()=>clearTimeout(e)},[K]),K)return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.t,{}),(0,t.jsx)(u.b,{}),(0,t.jsxs)(u.c,{children:[(0,t.jsx)(i.default,{color:"var(--privy-color-success)",width:"64px",height:"64px"}),(0,t.jsx)(p.C,{title:"Success!",description:`You’ve successfully added ${el} SOL to your ${$.name} wallet. It may take a minute before the funds are available to use.`})]}),(0,t.jsx)(u.R,{}),(0,t.jsx)(h.B,{})]});let eb=R[q];return R.length>1&&eb?(0,t.jsx)(L.B,{displayName:eh,configuredFundingChain:es,formattedBalance:em,fundingAmount:el,fundingCurrency:"SOL",fundingAmountInUsd:ej,options:R,selectedOption:eb,isPreparing:G,isSubmitting:Y,addressToFund:ea,fundingWalletAddress:ec?.address||"",errorMessage:H,onSubmit:()=>{U.funding?.amount!==el?(async function(){if(ec&&eb)try{let e=await (0,b.g)({isTestnet:!1,input:(0,b.t)({appId:I,amount:eC.toString(),user:ec.address,recipient:ea,destinationChainId:b.b,destinationCurrency:b.a,originChainId:eb.chain.id})}),t=(0,b.c)(e);if(!t)throw Error("Invalid transaction request");Q(!0),ey({data:t.data,to:t.to,value:t.value,chain:eb.chain})}catch(e){console.error(e),V(new m.a("Unable to fetch quotes for bridging",e,m.b.INSUFFICIENT_BALANCE))}})().catch(console.error):ey({to:eb.bridgeTx.to,data:eb.bridgeTx.data,value:eb.bridgeTx.value,chain:eb.chain})},onSelect:e=>{e!==q&&(_(null),Z(e))},onAmountChange:ed}):Y&&ec?(0,t.jsx)(E.T,{walletClientType:ec?.walletClientType||"unknown",displayName:eh,addressToFund:ea,isBridging:J,isErc20Flow:!1,chainId:"solana",chainName:(0,F.g)(es),totalPriceInUsd:void 0,totalPriceInNativeCurrency:void 0,gasPriceInUsd:void 0,gasPriceInNativeCurrency:void 0}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.t,{}),(0,t.jsx)(f.N,{}),(0,t.jsx)("div",{style:{marginTop:"1rem"}}),(0,t.jsx)(h.B,{})]})}};e.s(["AwaitingEvmToSolBridgingScreen",()=>P,"default",()=>P])}]);