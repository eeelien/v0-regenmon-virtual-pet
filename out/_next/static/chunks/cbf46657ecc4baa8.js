(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,600204,e=>{"use strict";var t=e.i(97146);let i=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`;e.s(["T",()=>i])},65222,770607,e=>{"use strict";var t=e.i(505034),i=e.i(404458);function r(e){let t=e.filter(e=>!i.DEFAULT_SUPPORTED_CHAIN_IDS.has(e.id));return i.DEFAULT_SUPPORTED_CHAINS.concat(t)}e.s(["addToDefaultChains",()=>r],770607);var n=e.i(205384),o=e.i(957074),a=e.i(756645);function s(e){let{tokenPrice:i,isTokenPriceLoading:s,tokenPriceError:d}=(e=>{let{showFiatPrices:i,getUsdTokenPrice:a,chains:s}=(0,o.u)(),[d,l]=(0,t.useState)(!0),[c,u]=(0,t.useState)(void 0),[p,f]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{e||=n.s;let t=r(s).find(t=>t.id===Number(e));(async()=>{if(i){if(!t)return l(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{l(!0);let e=await a(t);e?f(e):u(Error(`Unable to fetch token price on chain id ${t.id}`))}catch(e){u(e)}finally{l(!1)}}else l(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:d,tokenPriceError:c}})("solana"===e?-1:e),{solPrice:l,isSolPriceLoading:c,solPriceError:u}=(0,a.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:l,isTokenPriceLoading:c,tokenPriceError:u}:{tokenPrice:i,isTokenPriceLoading:s,tokenPriceError:d}}e.s(["u",()=>s],65222)},590472,e=>{"use strict";var t=e.i(97146);let i=t.styled.div`
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
`,o=(0,t.styled)(r)`
  padding: 20px 0;
`,a=(0,t.styled)(r)`
  gap: 16px;
`,s=t.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,d=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;let l=t.styled.div`
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
`,e.s(["B",()=>i,"C",()=>o,"F",()=>s,"H",()=>n,"R",()=>u,"S",()=>l,"a",()=>d,"b",()=>c,"c",()=>a,"d",()=>p,"e",()=>r])},756645,e=>{"use strict";var t=e.i(505034),i=e.i(957074);let r=({enabled:e=!0}={})=>{let{showFiatPrices:r,getUsdPriceForSol:n}=(0,i.u)(),[o,a]=(0,t.useState)(!0),[s,d]=(0,t.useState)(void 0),[l,c]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{(async()=>{if(r&&e)try{a(!0);let e=await n();e?c(e):d(Error("Unable to fetch SOL price"))}catch(e){d(e)}finally{a(!1)}else a(!1)})()},[]),{solPrice:l,isSolPriceLoading:o,solPriceError:s}};e.s(["u",()=>r])},254096,e=>{"use strict";var t=e.i(343499),i=e.i(957074),r=e.i(526520);let n=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),o=(e,t)=>{let i,r=(i=t*parseFloat(e),n.format(i));return"$0.00"!==r?r:"<$0.01"},a=(e,i)=>{let r,o=(r=i*parseFloat((0,t.formatEther)(e)),n.format(r));return"$0.00"===o?"<$0.01":o},s=(e,t,i=6,r=!1)=>`${d(e,i,r)} ${t}`,d=(e,i=6,r=!1)=>{let n=parseFloat((0,t.formatEther)(e)).toFixed(i).replace(/0+$/,"").replace(/\.$/,"");return r?n:`${"0"===n?"<0.001":n}`},l=e=>e.reduce((e,t)=>e+t,0n),c=(e,t)=>{let{chains:n}=(0,i.u)(),o=`https://etherscan.io/address/${t}`,a=`${(0,r.a5)(e,n)}/address/${t}`;try{new URL(a)}catch{return o}return a};e.s(["a",()=>a,"b",()=>c,"c",()=>o,"g",()=>s,"p",()=>d,"s",()=>l])},168271,e=>{"use strict";var t=e.i(14270),i=e.i(430321),r=e.i(494632);function n({title:e}){let{currentScreen:n,navigateBack:o,navigate:a,data:s,setModalData:d}=(0,i.a)();return(0,t.jsx)(r.M,{title:e,backFn:"ManualTransferScreen"===n?o:n===s?.funding?.methodScreen?s.funding.comingFromSendTransactionScreen?()=>a("SendTransactionScreen"):void 0:s?.funding?.methodScreen?()=>{let e=s.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),d({funding:e,solanaFundingData:s?.solanaFundingData}),a(e.methodScreen)}:void 0})}e.s(["t",()=>n])},130131,e=>{"use strict";var t=e.i(97146),i=e.i(494632),r=e.i(733295);let n=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,o=t.styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,a=t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`,s=t.styled.div`
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
`;let d=t.styled.input`
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
`,l=(0,t.styled)(d)`
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
`;let p=t.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,t.styled)(i.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${p} 0.3s ease-in-out;
`;let f=t.styled.div``,g=t.styled.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;e.s(["F",()=>a,"I",()=>o,"a",()=>s,"b",()=>d,"c",()=>c,"d",()=>u,"e",()=>n,"f",()=>f,"g",()=>g,"h",()=>l])},994433,e=>{"use strict";var t=e.i(14270),i=e.i(505034),r=e.i(494632),n=e.i(590472),o=e.i(168271),a=e.i(978141),s=e.i(600204),d=e.i(430321),l=e.i(65222),c=e.i(254096),u=e.i(130131);e.i(252494),e.i(768820),e.i(329723);let p={component:()=>{let{data:e,setModalData:p}=(0,d.a)(),f=e?.funding,g="solana"===f.chainType,x=(0,i.useRef)(null),{tokenPrice:y}=(0,l.u)(g?"solana":f.chain.id),h=g?void 0:f,m=!(!h?.erc20Address||h?.erc20ContractInfo),v=g?f.isUSDC?"USDC":"SOL":f.erc20Address?f.erc20ContractInfo?.symbol:f.chain.nativeCurrency.symbol||"ETH",b=parseFloat(f.amount),S=!isNaN(b)&&b>0,P=y?(0,c.c)(f.amount,y):void 0;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.t,{}),(0,t.jsx)(s.T,{children:"Confirm or edit amount"}),(0,t.jsxs)(n.F,{style:{marginTop:"32px"},children:[(0,t.jsx)(u.F,{children:m?(0,t.jsx)(a.N,{size:"50px"}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(u.a,{onClick:()=>x.current?.focus(),children:[(0,t.jsx)(u.h,{ref:x,value:f.amount,onChange:t=>{let i=t.target.value;/^[0-9.]*$/.test(i)&&i.split(".").length-1<=1&&p({...e,funding:{...f,amount:i},solanaFundingData:e?.solanaFundingData?{...e.solanaFundingData,amount:i}:void 0})}}),(0,t.jsx)(u.c,{children:v})]}),!h?.erc20Address&&!(g&&f.isUSDC)&&(0,t.jsx)(u.d,{children:P&&S?`${P} USD`:""})]})}),(0,t.jsx)(r.c,{style:{marginTop:"1rem"},disabled:!S,onClick:f.onContinueWithExternalWallet,children:"Continue"})]}),(0,t.jsx)(r.B,{})]})}};e.s(["FundingAmountEditScreen",()=>p,"default",()=>p])}]);