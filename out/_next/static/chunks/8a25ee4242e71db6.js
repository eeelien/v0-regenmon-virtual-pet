(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,465120,e=>{"use strict";let t=(0,e.i(78048).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",()=>t],465120)},642071,e=>{"use strict";var t=e.i(14270),n=e.i(78048);let a=(0,n.default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),i=(0,n.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var r=e.i(465120),s=e.i(97146),o=e.i(205384),l=e.i(384249),d=e.i(957074),c=e.i(430321),u=e.i(394360),p=e.i(750186);e.i(505034),e.i(252494),e.i(329723),e.i(768820),e.i(464143),e.i(559889);let y=({error:e,allowlistConfig:n,onRetry:s,onCaptchaReset:o,onBack:c})=>{let y=((e,n)=>{if(e instanceof u.R)return{title:"Transaction failed",detail:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e.message}),(0,t.jsxs)("span",{children:[" ","Check the"," ",(0,t.jsx)(f,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:a};if(e instanceof d.a)switch(e.privyErrorCode){case d.b.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:a};case d.b.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:a};case d.b.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:a};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:a}}if(e instanceof l.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:i};if(!(e instanceof d.c))return e instanceof d.e&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:a}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:a};switch(e.privyErrorCode){case d.b.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:a};case d.b.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:a};case d.b.ALLOWLIST_REJECTED:return{title:n.errorTitle||"You don't have access to this app",detail:n.errorDetail||"Have you been invited?",ctaText:n.errorCtaText||"Try another account",icon:r.Lock};case d.b.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case d.b.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case d.b.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:a};case d.b.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:a};case d.b.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:a};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:a}}})(e,n);return(0,t.jsx)(p.S,{title:y.title,subtitle:y.detail,icon:y.icon,onBack:c,iconVariant:"error",primaryCta:{label:y.ctaText,onClick:()=>{e instanceof d.c&&(e.privyErrorCode===d.b.INVALID_CAPTCHA&&o?.(),e.privyErrorCode===d.b.ALLOWLIST_REJECTED&&n.errorCtaLink)?window.location.href=n.errorCtaLink:s?.()},variant:"error"},watermark:!0})},m={component:()=>{let{navigate:e,data:n,lastScreen:a,currentScreen:i}=(0,c.a)(),r=(0,o.u)(),{reset:s}=(0,l.a)(),d=n?.errorModalData?.previousScreen||(a===i?void 0:a);return(0,t.jsx)(y,{error:n?.errorModalData?.error||Error(),allowlistConfig:r.allowlistConfig,onRetry:()=>{e(d||"LandingScreen",!1)},onCaptchaReset:s})}},f=s.styled.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;e.s(["ErrorScreen",()=>m,"ErrorScreenView",()=>y,"default",()=>m],642071)},91163,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))});e.s(["default",0,n])},802623,171762,e=>{"use strict";var t=e.i(14270),n=e.i(97146);let a=({className:e,checked:n,color:a="var(--privy-color-accent)",...l})=>(0,t.jsx)("label",{children:(0,t.jsxs)(i,{className:e,children:[(0,t.jsx)(s,{checked:n,...l}),(0,t.jsx)(o,{color:a,checked:n,children:(0,t.jsx)(r,{viewBox:"0 0 24 24",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})});n.styled.label`
  && {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    text-align: left;
    border-radius: 0.5rem;
    border: 1px solid var(--privy-color-foreground-4);
    width: 100%;
  }
`;let i=n.styled.div`
  display: inline-block;
  vertical-align: middle;
`,r=n.styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,s=n.styled.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`,o=n.styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  transition: all 150ms;
  cursor: pointer;
  border-color: ${e=>e.color};
  border-radius: 3px;
  background: ${e=>e.checked?e.color:"var(--privy-color-background)"};

  && {
    /* This is necessary to override css reset for border width */
    border-width: 1px;
  }

  ${s}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${r} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`;e.s(["C",()=>a],802623);var l=e.i(505034);let d=l.forwardRef(function({title:e,titleId:t,...n},a){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":t},n),e?l.createElement("title",{id:t},e):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"}))});e.s(["default",0,d],171762)},677094,e=>{"use strict";var t=e.i(14270),n=e.i(97146),a=e.i(963290),i=e.i(254096),r=e.i(590472),s=e.i(84410),o=e.i(505034),l=e.i(205384);let d=({label:e,children:n,valueStyles:a})=>(0,t.jsxs)(c,{children:[(0,t.jsx)("div",{children:e}),(0,t.jsx)(u,{style:{...a},children:n})]}),c=n.styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > :first-child {
    color: var(--privy-color-foreground-3);
    text-align: left;
  }

  > :last-child {
    color: var(--privy-color-foreground-2);
    text-align: right;
  }
`,u=n.styled.div`
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--privy-border-radius-full);
  background-color: var(--privy-color-background-2);
  padding: 4px 8px;
`,p=({gas:e,tokenPrice:n,tokenSymbol:s})=>(0,t.jsxs)(r.F,{style:{paddingBottom:"12px"},children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{children:"Est. Fees"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.P,{weiQuantities:[BigInt(e)],tokenPrice:n,tokenSymbol:s})})]}),n&&(0,t.jsx)(f,{children:`${(0,i.g)(BigInt(e),s)}`})]}),y=({value:e,gas:n,tokenPrice:s,tokenSymbol:o})=>{let l=BigInt(e??0)+BigInt(n);return(0,t.jsxs)(r.F,{children:[(0,t.jsxs)(m,{children:[(0,t.jsx)(h,{children:"Total (including fees)"}),(0,t.jsx)("div",{children:(0,t.jsx)(a.P,{weiQuantities:[BigInt(e||0),BigInt(n)],tokenPrice:s,tokenSymbol:o})})]}),s&&(0,t.jsx)(f,{children:(0,i.g)(l,o)})]})},m=n.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 4px;
`,f=n.styled.div`
  display: flex;
  flex-direction: row;
  height: 12px;

  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
  font-weight: 400;
`,h=n.styled.div`
  font-size: 14px;
  line-height: 22.4px;
  font-weight: 400;
`,g=(0,o.createContext)(void 0),v=(0,o.createContext)(void 0),b=({defaultValue:e,children:n})=>{let[a,i]=(0,o.useState)(e||null);return(0,t.jsx)(g.Provider,{value:{activePanel:a,togglePanel:e=>{i(a===e?null:e)}},children:(0,t.jsx)(S,{children:n})})},x=({value:e,children:n})=>{let{activePanel:a,togglePanel:i}=(0,o.useContext)(g),r=a===e;return(0,t.jsx)(v.Provider,{value:{onToggle:()=>i(e),value:e},children:(0,t.jsx)(C,{isActive:r?"true":"false","data-open":String(r),children:n})})},T=({children:e})=>{let{activePanel:n}=(0,o.useContext)(g),{onToggle:a,value:i}=(0,o.useContext)(v),r=n===i;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(E,{onClick:a,"data-open":String(r),children:[(0,t.jsx)(j,{children:e}),(0,t.jsx)(F,{isactive:r?"true":"false",children:(0,t.jsx)(s.default,{height:"16px",width:"16px",strokeWidth:"2"})})]}),(0,t.jsx)(I,{})]})},w=({children:e})=>{let{activePanel:n}=(0,o.useContext)(g),{value:a}=(0,o.useContext)(v);return(0,t.jsx)(P,{"data-open":String(n===a),children:(0,t.jsx)(A,{children:e})})},k=({children:e})=>{let{activePanel:n}=(0,o.useContext)(g),{value:a}=(0,o.useContext)(v);return(0,t.jsx)(A,{children:"function"==typeof e?e({isActive:n===a}):e})},S=n.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,E=n.styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  padding-bottom: 8px;
`,I=n.styled.div`
  width: 100%;

  && {
    border-top: 1px solid;
    border-color: var(--privy-color-foreground-4);
  }
  padding-bottom: 12px;
`,j=n.styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  width: 100%;
  padding-right: 8px;
`,C=n.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  padding: 12px;

  && {
    border: 1px solid;
    border-color: var(--privy-color-foreground-4);
    border-radius: var(--privy-border-radius-md);
  }
`,P=n.styled.div`
  position: relative;
  overflow: hidden;
  transition: max-height 25ms ease-out;

  &[data-open='true'] {
    max-height: 700px;
  }

  &[data-open='false'] {
    max-height: 0;
  }
`,A=n.styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1 1 auto;
  min-height: 1px;
`,F=n.styled.div`
  transform: ${e=>"true"===e.isactive?"rotate(180deg)":"rotate(0deg)"};
`,M=({from:e,to:n,txn:i,transactionInfo:r,tokenPrice:s,gas:o,tokenSymbol:c})=>{let u=BigInt(i?.value||0);return(0,t.jsx)(b,{...(0,l.u)().render.standalone?{defaultValue:"details"}:{},children:(0,t.jsxs)(x,{value:"details",children:[(0,t.jsx)(T,{children:(0,t.jsxs)(N,{children:[(0,t.jsx)("div",{children:r?.title||"Details"}),(0,t.jsx)(_,{children:(0,t.jsx)(a.H,{weiQuantities:[u],tokenPrice:s,tokenSymbol:c})})]})}),(0,t.jsxs)(w,{children:[(0,t.jsx)(d,{label:"From",children:(0,t.jsx)(a.W,{walletAddress:e,chainId:i.chainId||l.s,chainType:"ethereum"})}),(0,t.jsx)(d,{label:"To",children:(0,t.jsx)(a.W,{walletAddress:n,chainId:i.chainId||l.s,chainType:"ethereum"})}),r&&r.action&&(0,t.jsx)(d,{label:"Action",children:r.action}),o&&(0,t.jsx)(p,{value:i.value,gas:o,tokenPrice:s,tokenSymbol:c})]}),(0,t.jsx)(k,{children:({isActive:e})=>(0,t.jsx)(y,{value:i.value,displayFee:e,gas:o||"0x0",tokenPrice:s,tokenSymbol:c})})]})})},N=n.styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,_=n.styled.div`
  flex-shrink: 0;
  padding-left: 8px;
`;e.s(["T",()=>M])},963290,e=>{"use strict";var t=e.i(14270),n=e.i(97146),a=e.i(330044),i=e.i(254096),r=e.i(111934),s=e.i(115579),o=e.i(526520);let l=({weiQuantities:e,tokenPrice:n,tokenSymbol:a})=>{let r=(0,i.s)(e),s=n?(0,i.a)(r,n):void 0,o=(0,i.g)(r,a);return(0,t.jsx)(u,{children:s||o})},d=({weiQuantities:e,tokenPrice:n,tokenSymbol:a})=>{let r=(0,i.s)(e),s=n?(0,i.a)(r,n):void 0,o=(0,i.g)(r,a);return(0,t.jsx)(u,{children:s?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{children:"USD"}),"<$0.01"===s?(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{children:"<"}),"$0.01"]}):s]}):o})},c=({quantities:e,tokenPrice:n,tokenSymbol:i="SOL",tokenDecimals:o=9})=>{let l=e.reduce((e,t)=>e+t,0n),d=n&&"SOL"===i&&9===o?(0,r.g)(l,n):void 0,c="SOL"===i&&9===o?(0,s.g)(l):`${(0,a.formatUnits)(l,o)} ${i}`;return(0,t.jsx)(u,{children:d?(0,t.jsx)(t.Fragment,{children:"<$0.01"===d?(0,t.jsxs)(m,{children:[(0,t.jsx)(y,{children:"<"}),"$0.01"]}):d}):c})},u=n.styled.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,p=n.styled.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,y=n.styled.span`
  font-size: 10px;
`,m=n.styled.span`
  display: flex;
  align-items: center;
`,f=e=>{var n,a;return(0,t.jsx)(h,{href:"ethereum"===e.chainType?(0,i.b)(e.chainId,e.walletAddress):(n=e.walletAddress,a=e.chainId,`https://explorer.solana.com/account/${n}?chain=${a}`),target:"_blank",children:(0,o.D)(e.walletAddress)})},h=n.styled.a`
  &:hover {
    text-decoration: underline;
  }
`;e.s(["H",()=>l,"P",()=>d,"S",()=>c,"W",()=>f])},65222,770607,e=>{"use strict";var t=e.i(505034),n=e.i(404458);function a(e){let t=e.filter(e=>!n.DEFAULT_SUPPORTED_CHAIN_IDS.has(e.id));return n.DEFAULT_SUPPORTED_CHAINS.concat(t)}e.s(["addToDefaultChains",()=>a],770607);var i=e.i(205384),r=e.i(957074),s=e.i(756645);function o(e){let{tokenPrice:n,isTokenPriceLoading:o,tokenPriceError:l}=(e=>{let{showFiatPrices:n,getUsdTokenPrice:s,chains:o}=(0,r.u)(),[l,d]=(0,t.useState)(!0),[c,u]=(0,t.useState)(void 0),[p,y]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{e||=i.s;let t=a(o).find(t=>t.id===Number(e));(async()=>{if(n){if(!t)return d(!1),u(Error(`Unable to fetch token price on chain id ${e}`));try{d(!0);let e=await s(t);e?y(e):u(Error(`Unable to fetch token price on chain id ${t.id}`))}catch(e){u(e)}finally{d(!1)}}else d(!1)})()},[e]),{tokenPrice:p,isTokenPriceLoading:l,tokenPriceError:c}})("solana"===e?-1:e),{solPrice:d,isSolPriceLoading:c,solPriceError:u}=(0,s.u)({enabled:"solana"===e});return"solana"===e?{tokenPrice:d,isTokenPriceLoading:c,tokenPriceError:u}:{tokenPrice:n,isTokenPriceLoading:o,tokenPriceError:l}}e.s(["u",()=>o],65222)},590472,e=>{"use strict";var t=e.i(97146);let n=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  margin-top: auto;
  gap: 16px;
  flex-grow: 100;
`,a=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`,i=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,r=(0,t.styled)(a)`
  padding: 20px 0;
`,s=(0,t.styled)(a)`
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
`,e.s(["B",()=>n,"C",()=>r,"F",()=>o,"H",()=>i,"R",()=>u,"S",()=>d,"a",()=>l,"b",()=>c,"c",()=>s,"d",()=>p,"e",()=>a])},756645,e=>{"use strict";var t=e.i(505034),n=e.i(957074);let a=({enabled:e=!0}={})=>{let{showFiatPrices:a,getUsdPriceForSol:i}=(0,n.u)(),[r,s]=(0,t.useState)(!0),[o,l]=(0,t.useState)(void 0),[d,c]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{(async()=>{if(a&&e)try{s(!0);let e=await i();e?c(e):l(Error("Unable to fetch SOL price"))}catch(e){l(e)}finally{s(!1)}else s(!1)})()},[]),{solPrice:d,isSolPriceLoading:r,solPriceError:o}};e.s(["u",()=>a])},254096,e=>{"use strict";var t=e.i(343499),n=e.i(957074),a=e.i(526520);let i=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),r=(e,t)=>{let n,a=(n=t*parseFloat(e),i.format(n));return"$0.00"!==a?a:"<$0.01"},s=(e,n)=>{let a,r=(a=n*parseFloat((0,t.formatEther)(e)),i.format(a));return"$0.00"===r?"<$0.01":r},o=(e,t,n=6,a=!1)=>`${l(e,n,a)} ${t}`,l=(e,n=6,a=!1)=>{let i=parseFloat((0,t.formatEther)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"");return a?i:`${"0"===i?"<0.001":i}`},d=e=>e.reduce((e,t)=>e+t,0n),c=(e,t)=>{let{chains:i}=(0,n.u)(),r=`https://etherscan.io/address/${t}`,s=`${(0,a.a5)(e,i)}/address/${t}`;try{new URL(s)}catch{return r}return s};e.s(["a",()=>s,"b",()=>c,"c",()=>r,"g",()=>o,"p",()=>l,"s",()=>d])},84410,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});e.s(["default",0,n])},111934,e=>{"use strict";let t=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],n=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],a={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function i(e,t){let n=parseFloat(e.toString())/1e9,a=r.format(t*n);return"$0.00"===a?"<$0.01":a}let r=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2});e.s(["A",()=>"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL","D",()=>a,"J",()=>n,"L",()=>1e9,"R",()=>t,"S",()=>"11111111111111111111111111111111","T",()=>"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA","a",()=>"TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb","g",()=>i])},115579,e=>{"use strict";var t=e.i(111934);function n(e,t=6,a=!1,i=!1){let r=(parseFloat(e.toString())/1e9).toFixed(t).replace(/0+$/,"").replace(/\.$/,""),s=i?"":" SOL";return a?`${r}${s}`:`${"0"===r?"<0.001":r}${s}`}function a({amount:e,fee:a,tokenPrice:i,isUsdc:r}){let s=BigInt(Math.floor(parseFloat(e)*10**(r?6:9))),o=r?s:s+a;return{fundingAmountInBaseUnit:s,fundingAmountInUsd:i?(0,t.g)(s,i):void 0,totalPriceInUsd:i?(0,t.g)(o,i):void 0,totalPriceInNativeCurrency:n(o),feePriceInNativeCurrency:n(a),feePriceInUsd:i?(0,t.g)(a,i):void 0}}e.s(["a",()=>a,"g",()=>n])},773907,e=>{"use strict";var t=e.i(505034),n=e.i(522081),a=e.i(399678),i=e.i(899662),r=e.i(957074);function s({rpcConfig:e,appId:s,address:o,chain:l}){let{chains:d}=(0,r.u)(),[c,u]=(0,t.useState)(0n),[p,y]=(0,t.useState)(!1),m=(0,t.useMemo)(()=>{let t=l||d[0];if(t)return(0,n.createPublicClient)({chain:l,transport:(0,a.http)((0,i.a)(t,e,s))})},[l,e,s]),f=(0,t.useCallback)(async()=>{if(!o||!m)return;y(!0);let e=await m.getBalance({address:o}).catch(console.error);return e?(u(e),y(!1),e):void 0},[m,o,u]);return(0,t.useEffect)(()=>{f().catch(console.error)},[]),{balance:c,isLoading:p,reloadBalance:f}}e.s(["u",()=>s])},136487,e=>{"use strict";var t=e.i(14270),n=e.i(97146);let a=({data:e})=>{let n=e=>"object"==typeof e&&null!==e?(0,t.jsx)(r,{children:Object.entries(e).map(([e,a])=>(0,t.jsxs)("li",{children:[(0,t.jsxs)("strong",{children:[e,":"]})," ",n(a)]},e))}):(0,t.jsx)("span",{children:String(e)});return(0,t.jsx)("div",{children:n(e)})},i=n.styled.div`
  margin-top: 1.5rem;
  background-color: var(--privy-color-background-2);
  border-radius: var(--privy-border-radius-md);
  padding: 12px;
  text-align: left;
  max-height: 310px;
  overflow: scroll;
  white-space: pre-wrap;
  width: 100%;
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--privy-color-foreground);
  line-height: 1.5;

  // hide the scrollbars
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`,r=n.styled.ul`
  margin-left: 12px !important;
  white-space: nowrap;

  &:first-child {
    margin-left: 0 !important;
  }

  strong {
    font-weight: 500 !important;
  }
`,s=({data:e,className:n})=>(0,t.jsx)(i,{className:n,children:(0,t.jsx)(a,{data:e})});e.s(["D",()=>s,"M",()=>i])},924568,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))});e.s(["default",0,n])},428327,e=>{"use strict";var t=e.i(14270),n=e.i(924568),a=e.i(97146);let i=({children:e,theme:a})=>(0,t.jsxs)(r,{$theme:a,children:[(0,t.jsx)(n.default,{width:"20px",height:"20px",color:"var(--privy-color-icon-error)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(s,{$theme:a,children:e})]}),r=a.styled.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-error-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,s=a.styled.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`;e.s(["E",()=>i])},116145,e=>{"use strict";var t=e.i(522081),n=e.i(399678),a=e.i(899662);let i=async({address:e,chain:i,rpcConfig:s,privyAppId:o})=>{try{let l=(0,t.createPublicClient)({chain:i,transport:(0,n.http)((0,a.a)(i,s,o))}),[d,c]=await Promise.all([l.readContract({abi:r,address:e,functionName:"symbol"}),l.readContract({abi:r,address:e,functionName:"decimals"})]);return{decimals:c,symbol:d}}catch(e){return console.log(e),null}},r=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];e.s(["g",()=>i])},600204,e=>{"use strict";var t=e.i(97146);let n=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.875rem; /* 166.667% */
  text-align: center;
`;e.s(["T",()=>n])},307865,e=>{"use strict";var t=e.i(97146);let n=t.styled.span`
  margin-top: 4px;
  color: var(--privy-color-foreground);
  text-align: center;

  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */

  && a {
    color: var(--privy-color-accent);
  }
`;e.s(["S",()=>n])},303821,e=>{"use strict";var t=e.i(97146);let n=t.keyframes`
  from, to {
    background: var(--privy-color-foreground-4);
    color: var(--privy-color-foreground-4);
  }

  50% {
    background: var(--privy-color-foreground-accent);
    color: var(--privy-color-foreground-accent);
  }
`,a=t.css`
  ${e=>e.$isLoading?t.css`
          width: 35%;
          animation: ${n} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",()=>a])},394360,e=>{"use strict";var t=e.i(505034),n=e.i(957074);let a="0x0000000000000000000000000000000000000000",i=({appId:e,originCurrency:t,destinationCurrency:n,...i})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:t??a,destinationCurrency:n??a,referrer:`privy|${e}`,...i}),r="https://api.relay.link",s="https://api.testnets.relay.link",o=async({input:e,isTestnet:t})=>{let n=await fetch((t?s:r)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),a=await n.json();if(!(n.ok||"string"==typeof a.message&&a.message.startsWith("Invalid address")))throw console.error("Relay error:",a),Error(a.message??"Error fetching quote from relay");return a},l=e=>{let t=e.steps[0]?.items?.[0];if(t)return{from:t.data.from,to:t.data.to,value:Number(t.data.value),chainId:Number(t.data.chainId),data:t.data.data}};async function d({transactionHash:e,isTestnet:t}){let n=await fetch((t?s:r)+"/requests/v2?hash="+e),a=await n.json();if(!n.ok){if("message"in a&&"string"==typeof a.message)throw Error(a.message);throw Error("Error fetching request from relay")}return a.requests.at(0)?.status??"pending"}function c({transactionHash:e,isTestnet:n,bridgingStatus:a,setBridgingStatus:i,onSuccess:r,onFailure:s}){(0,t.useEffect)(()=>{if(e&&a){if(["delayed","waiting","pending"].includes(a)){let t=setInterval(async()=>{try{let t=await d({transactionHash:e,isTestnet:n});i(t)}catch(e){console.error(e)}},1e3);return()=>clearInterval(t)}"success"===a?r({transactionHash:e}):["refund","failure"].includes(a)&&s({error:new u(e,n)})}},[a,e,n])}class u extends n.a{constructor(e,t){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,n.b.TRANSACTION_FAILURE),this.relayLink=t?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}e.s(["R",()=>u,"a",()=>"11111111111111111111111111111111","b",()=>0x2f3fb341,"c",()=>l,"d",()=>"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","g",()=>o,"t",()=>i,"u",()=>c])},522780,e=>{"use strict";var t=e.i(343499),n=e.i(330044);function a(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function i({wei:e,precision:n=3}){return parseFloat((0,t.formatEther)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function r({amount:e,decimals:t}){return(0,n.formatUnits)(BigInt(e),t)}e.s(["formatTokenAmount",()=>r,"formatWalletAddress",()=>a,"formatWeiAmount",()=>i])},203042,e=>{"use strict";var t=e.i(14270),n=e.i(97146);let a=({title:e,description:n,children:a,...i})=>(0,t.jsx)(r,{...i,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:e}),"string"==typeof n?(0,t.jsx)("p",{children:n}):n,a]})});(0,n.styled)(a)`
  margin-bottom: 24px;
`;let i=({title:e,description:n,icon:a,children:i,...r})=>(0,t.jsxs)(s,{...r,children:[a||null,(0,t.jsx)("h3",{children:e}),n&&"string"==typeof n?(0,t.jsx)("p",{children:n}):n,i]}),r=n.styled.div`
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
`,s=(0,n.styled)(r)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;e.s(["C",()=>i,"S",()=>a])},751738,e=>{"use strict";var t=e.i(97146),n=e.i(303821);let a=t.styled.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,i=(0,t.styled)(a)`
  color: var(--privy-color-accent);
`,r=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${n.L}
`;e.s(["L",()=>a,"V",()=>r,"a",()=>i])},581887,e=>{"use strict";var t=e.i(97146);let n=t.styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,a=t.styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`;e.s(["R",()=>a,"a",()=>n])},125093,e=>{"use strict";let t=2n**256n-1n,n=({amount:e,decimals:n})=>e===t?"Maximum":Intl.NumberFormat(void 0,{maximumFractionDigits:n}).format(Number(e)/10**n);e.s(["f",()=>n])},857796,e=>{"use strict";let t=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],n=[{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}];e.s(["E",()=>t,"a",()=>n])},865647,e=>{"use strict";var t=e.i(14270),n=e.i(505034),a=e.i(522081),i=e.i(399678),r=e.i(583748),s=e.i(745304),o=e.i(382258),l=e.i(343499),d=e.i(210052),c=e.i(522780),u=e.i(589774),p=e.i(582964),y=e.i(205384),m=e.i(799024),f=e.i(957074),h=e.i(430321),g=e.i(65222),v=e.i(773907),b=e.i(116145),x=e.i(125093),T=e.i(254096),w=e.i(526520),k=e.i(899662),S=e.i(642071),E=e.i(97146),I=e.i(494632),j=e.i(136487),C=e.i(283979),P=e.i(590472),A=e.i(203042),F=e.i(677094),M=e.i(857796),N=e.i(384249);e.i(252494),e.i(329723),e.i(768820),e.i(464143),e.i(559889);let _=[{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"balance",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],$=E.styled.div`
  display: flex;
  flex-direction: column;
  min-height: 72px;
`;var L=({onBack:e,details:n})=>(0,t.jsxs)($,{children:[(0,t.jsx)(I.M,{backFn:e}),(0,t.jsx)(j.D,{data:n}),(0,t.jsx)(I.B,{})]});let D=({txn:e,receipt:n,transactionInfo:a,onClose:i,tokenPrice:s,tokenSymbol:o,receiptHeader:l,receiptDescription:d})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(I.M,{onClose:i}),(0,t.jsx)(A.S,{title:l??"Transaction complete!",description:d??"You're all set."}),(0,t.jsx)(F.T,{tokenPrice:s,from:n.from,to:n.to,gas:(({gasUsed:e,effectiveGasPrice:t})=>{if(e&&t)try{return(0,r.toHex)(e*t)}catch(e){return}})(n),txn:e,transactionInfo:a,tokenSymbol:o}),(0,t.jsx)(w.Y,{}),(0,t.jsx)(R,{loading:!1,onClick:i,children:"All Done"}),(0,t.jsx)(P.R,{}),(0,t.jsx)(I.B,{})]}),R=(0,E.styled)(I.P)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`,O=[{constant:!1,inputs:[{name:"_salt",type:"bytes32"},{name:"_initializer",type:"bytes"}],name:"deployAccount",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],B=[{name:"from",type:"address"},{name:"param2",type:"address"},{name:"param3",type:"bytes"},{name:"param4",type:"tuple",components:[]},{type:"tuple",components:[{name:"param5",type:"address"},{name:"param6",type:"uint256"},{name:"param7",type:"uint256"},{name:"encodedInitData",type:"bytes"}]}],U=[{constant:!1,inputs:[{name:"spender",type:"address"},{name:"value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],q=[{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"quantity",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"},{internalType:"uint256[]",name:"quantities",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"tokenIds",type:"uint256[]"},{internalType:"uint256[]",name:"quantities",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"mintBatch",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"string",name:"uri",type:"string"}],name:"safeMint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"batchMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"batchMint",outputs:[],stateMutability:"payable",type:"function"}],H=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],z=[{constant:!1,inputs:[{name:"_operator",type:"address"},{name:"_approved",type:"bool"}],name:"setApprovalForAll",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],V=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],W=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenIds",type:"uint256[]"},{name:"_amounts",type:"uint256[]"},{name:"_data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],G=[{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_tokenId",type:"uint256"},{name:"_amount",type:"uint256"},{name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],Z=(e,t)=>{let n=J(U,e);if(n)return{action:"approve",functionName:"approve",isErc20Ish:!0,isNFTIsh:!1,spender:n.args[0],amount:n.args[1]};let a=J(M.E,e);if(a)return{action:"transfer",functionName:"transfer",isErc20Ish:!0,isNFTIsh:!1,transferTo:a.args[0],amount:a.args[1]};if(!t)return{action:"transaction",functionName:"",isErc20Ish:!1,isNFTIsh:!1};let i=J(O,e);if(i&&"string"==typeof i.args[1]){let e=Q(i.args[1]);if(e&&e[4].encodedInitData)return Z(e[4].encodedInitData,t)}let r=J(z,e);if(r)return{action:"approve",functionName:"setApprovalForAll",isNFTIsh:!0,isErc20Ish:!1,operator:r.args[0],approved:r.args[1]};let s=J(V,e);if(s)return{action:"transfer",functionName:"transferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:s.args[0],transferTo:s.args[1],tokenId:s.args[2]};let o=J(H,e);if(o)return{action:"transfer",functionName:"safeTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:o.args[0],transferTo:o.args[1],tokenId:o.args[2]};let l=J(G,e);if(l)return{action:"transfer",functionName:"safeTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:l.args[0],transferTo:l.args[1],tokenId:l.args[2],amount:l.args[3]};let d=J(W,e);if(d)return{action:"batch transfer",functionName:"safeBatchTransferFrom",isNFTIsh:!0,isErc20Ish:!1,transferFrom:d.args[0],transferTo:d.args[1],tokenIds:d.args[2],amounts:d.args[3]};let c=J(q,e);return c?{action:"mint",functionName:c.functionName,isNFTIsh:!0,isErc20Ish:!1,args:c.args}:{action:"transaction",isErc20Ish:!1,isNFTIsh:!1}},J=(e,t)=>{try{let n=(0,s.decodeFunctionData)({abi:e,data:t});return{functionName:n.functionName,args:n.args||[]}}catch(e){return null}},Q=e=>{try{if("string"==typeof e)return(0,o.decodeAbiParameters)(B,`0x${e.slice(10)}`)}catch(e){return null}},Y=e=>`${parseFloat(e).toFixed(2)}`,K=new m.P(new m.j("There was an issue preparing your transaction",u.ProviderErrors.E32603_DEFAULT_INTERNAL_ERROR.eipCode)),X=(e,t)=>e?.sendTransaction?"transactionRequest"in e.sendTransaction?e.sendTransaction.transactionRequest:e.sendTransaction.transactionRequests[t]:void 0,ee={component:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:r,setModalData:s,navigate:o}=(0,h.a)(),{client:E,rpcConfig:I,chains:j,closePrivyModal:P,walletProxy:A,showFiatPrices:F}=(0,f.u)(),{user:M}=(0,h.u)(),$=(0,y.u)(),[R,O]=(0,n.useState)(0),[B,U]=(0,n.useState)(0),[q,H]=(0,n.useState)(X(e,R)),[z,V]=(0,n.useState)(null),[W,G]=(0,n.useState)(),[J,Q]=(0,n.useState)(!1),[ee,et]=(0,n.useState)(null),[en,ea]=(0,n.useState)(null),[ei,er]=(0,n.useState)(null),[es,eo]=(0,n.useState)(void 0),[el,ed]=(0,n.useState)(void 0),[ec,eu]=(0,n.useState)(!1),[ep,ey]=(0,n.useState)(!1),[em,ef]=(0,n.useState)([]),[eh,eg]=(0,n.useState)([]),[ev,eb]=(0,n.useState)("uninitiated"),[ex,eT]=(0,n.useState)(void 0);if(!q||!e?.sendTransaction||!e?.sendTransaction)return(0,t.jsx)(S.ErrorScreenView,{error:Error("Invalid transaction request"),allowlistConfig:$.allowlistConfig,onRetry:()=>{e?.sendTransaction?.onFailure(K),P({shouldCallAuthOnSuccess:!1})}});let{transactingWalletAddress:ew}=e.sendTransaction,ek=(0,n.useMemo)(()=>j.find(e=>Number(e.id)===Number(q.chainId)),[q.chainId]),eS=ek?.nativeCurrency.symbol??"ETH",eE=(0,n.useMemo)(()=>Z(q.data,!!$.embeddedWallets.extendedCalldataDecoding),[q.data]),{action:eI,isErc20Ish:ej,isNFTIsh:eC,functionName:eP}=eE,{toAddress:eA,tokenAddress:eF}=(0,n.useMemo)(()=>({toAddress:eE.isErc20Ish?eE.transferTo:q.to??void 0,tokenAddress:eE.isErc20Ish?q.to:void 0}),[eE]);(0,n.useEffect)(()=>{q.to&&ek&&ej&&(0,b.g)({address:q.to,chain:ek,rpcConfig:$.rpcConfig,privyAppId:$.id}).then(V).catch(console.error)},[q.to,ek]);let{tokenPrice:eM,isTokenPriceLoading:eN}=(0,g.u)(q.chainId),{balance:e_}=(0,v.u)({rpcConfig:$.rpcConfig,appId:$.id,address:ew,chain:ek}),e$=function({rpcConfig:e,appId:t,address:r,chain:s,tokenInfo:o}){let{chains:l}=(0,f.u)(),[u,p]=(0,n.useState)(null),[y,m]=(0,n.useState)(!1),h=(0,n.useMemo)(()=>{let n=s||l[0];if(n)return(0,a.createPublicClient)({chain:s,transport:(0,i.http)((0,d.getJsonRpcEndpointFromChain)(n,e,t))})},[s,e,t]),g=(0,n.useCallback)(async()=>{if(r&&h&&o.address)try{return m(!0),await h.readContract({address:o.address,abi:_,functionName:"balanceOf",args:[r]})}catch(e){console.error(e)}finally{m(!1)}},[h,r,o?.address,s]);return(0,n.useEffect)(()=>{g().then(e=>null!=e&&p(e))},[g]),{balance:u,isLoading:y&&null==u,formattedBalance:(0,c.formatTokenAmount)({amount:u??BigInt(0),decimals:o.decimals})}}({rpcConfig:$.rpcConfig,appId:$.id,address:ew,tokenInfo:{address:eF||"",decimals:z?.decimals??18},chain:ek}),eL=(0,n.useMemo)(()=>(0,k.g)(Number(q.chainId),j,I,{appId:$.id}),[q.chainId,I]),eD=((e,t,a,i)=>{let[r,s]=(0,n.useState)(null),{walletProxy:o}=(0,f.u)();return(0,n.useEffect)(()=>{r&&s(null),(async()=>{if(!o||!t)return null;let n=[],r=!0,s=await (0,N.p)(e,a,t,i).catch(t=>(t.message&&t.message.includes("Insufficient balance for transaction")||t.message&&t.message.includes("Insufficient funds for gas * price + value")||t.details&&t.details.includes("insufficient funds")?r=!1:n.push(t),e));return{tx:s,totalGasEstimate:s.gas,hasFunds:r,errors:n}})().then(s)},[e]),r})(q,ew,eL,e?.sendTransaction?.prepareTransactionRequest);(0,n.useEffect)(()=>{H(X(e,R))},[R]),(0,n.useEffect)(()=>{e.sendTransaction?.getIsSponsored?e.sendTransaction.getIsSponsored().then(G).catch(console.error):G(!1)},[e.sendTransaction.getIsSponsored]);let eR=()=>{if(!J)return ee?e?.sendTransaction?.onSuccess({hash:ee}):ei||eD?.errors[0]?e?.sendTransaction?.onFailure(ei??eD?.errors[0]??K):e?.sendTransaction?.onFailure(new m.P(new m.j("The user rejected the request",u.ProviderErrors.E4001_USER_REJECTED_REQUEST.eipCode))),P({shouldCallAuthOnSuccess:!1})};r.current=eR;let eO=!!(e.funding&&e.funding.supportedOptions.length>0),eB=(0,T.g)(BigInt(eD?.totalGasEstimate??0n),eS),eU=F&&eM?(0,T.a)(BigInt(eD?.totalGasEstimate??0n),eM):void 0,eq=(0,T.g)(e_??0n,eS,void 0,!0),eH=F&&eM?(0,T.a)(e_??0n,eM):void 0,ez=z&&!e$.isLoading&&ej&&"approve"!==eI?`${e$.formattedBalance} ${z.symbol}`:void 0,eV=e.sendTransaction?.uiOptions?.transactionInfo?.title;eV||(eV="approve"===eI?ej?"Confirm address":"Confirm action":`Approve ${eI}`);let eW=(0,n.useMemo)(()=>{if(e.sendTransaction?.uiOptions?.description)return e.sendTransaction?.uiOptions?.description;if("approve"===eI&&"setApprovalForAll"===eP&&eE.approved){let e=(0,t.jsx)(p.A,{address:eE.operator||"",url:ek?.blockExplorers?.default?.url});return(0,t.jsxs)(t.Fragment,{children:[$.name," would like your permission for ",e," to transfer tokens on your behalf."]})}if("approve"===eI&&"setApprovalForAll"===eP&&!eE.approved){let e=(0,t.jsx)(p.A,{address:eE.operator||"",url:ek?.blockExplorers?.default?.url});return(0,t.jsxs)(t.Fragment,{children:[$.name," would like your permission to revoke permissions of ",e," from transferring tokens on your behalf."]})}return ej&&"approve"===eI||ej&&"approve"===eI?`${$.name} would like your permission for ${(0,w.D)(eE.spender)} to spend tokens on your behalf.`:`${$.name} wants your permission to approve the following transaction.`},[$.name,ej,eE,e.sendTransaction?.uiOptions.description,eP]),eG=e.sendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?(0,t.jsx)("img",{src:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:e.sendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,eZ=!(!eD||eD.errors[0]||eD.hasFunds||!1!==W),eJ=eZ&&eO,eQ=eJ?"Add funds":e.sendTransaction?.uiOptions?.buttonText||(R<B?"Continue":"Approve");if((0,n.useEffect)(()=>{e.sendTransaction?.scanTransaction&&$.embeddedWallets.transactionScanning.enabled&&"uninitiated"===ev&&(eb("in progress"),e.sendTransaction.scanTransaction().then(e=>{(e=>{if(!e)throw Error("Transaction scan failed");if("Success"===e.validation.status&&("Benign"===e.validation.result_type?ed("safe"):"Warning"===e.validation.result_type?ed("warn"):"Malicious"===e.validation.result_type&&(ed("error"),ey(!0))),"Success"!==e.simulation.status)throw Error("Simulation failed");{eo(e.simulation.params);let{assetsIn:t,assetsOut:n}=function(e,t){let n=[],a=new Map;if(e){for(let t of e)if(t.in[0]){let e;e="ERC721"===t.asset.type||"approve_for_all"===t.in[0].value?{id:`nft:${t.asset.name}`,nftName:t.asset.name,nftCount:t.in.length}:{id:`token:${t.asset.type}:${t.asset.symbol}:${t.asset.name}`,iconUrl:t.asset.logo_url,value:t.in[0].value,symbol:t.asset.symbol,usdValue:t.in[0].usd_price?Y(t.in[0].usd_price):void 0,decimals:t.asset.decimals},n.push(e)}else if(t.out[0]?.value){let e;e="ERC721"===t.asset.type||"approve_for_all"===t.out[0].value?{id:`nft:${t.asset.name}`,nftName:t.asset.name}:{id:`token:${t.asset.type}:${t.asset.symbol}:${t.asset.name}`,iconUrl:t.asset.logo_url,value:t.out[0].value,symbol:t.asset.symbol,usdValue:t.out[0].usd_price?Y(t.out[0].usd_price):void 0,decimals:t.asset.decimals},a.has(e.id)||a.set(e.id,e)}}for(let e of t)for(let t of Object.keys(e.spenders)){let n;n="ERC721"===e.asset.type||"approve_for_all"===e.spenders[t]?.value?{id:`nft:${e.asset.name}`,nftName:e.asset.name}:{id:`token:${e.asset.type}:${e.asset.symbol}:${e.asset.name}`,iconUrl:e.asset.logo_url,value:e.spenders[t]?.value,symbol:e.asset.symbol,usdValue:e.spenders[t]?.usd_price?Y(e.spenders[t]?.usd_price):void 0,decimals:e.asset.decimals},a.has(n.id)||a.set(n.id,n)}return{assetsIn:n,assetsOut:Array.from(a.values())}}(e.simulation.assets_diffs,e.simulation.exposures);if(0===n.length&&0===t.length)throw Error("No tokens found");ef(n),eg(t)}})(e),eb("completed")}).catch(()=>eb("failed")))},[!!e.sendTransaction?.scanTransaction]),(0,n.useEffect)(()=>{e.sendTransaction?.scanTransaction&&"failed"!==ev||((t,n,a)=>{if(U(e?.sendTransaction?"transactionRequest"in e.sendTransaction?0:e.sendTransaction.transactionRequests.length-1:0),n.isErc20Ish&&n.amount&&a){let e=(0,x.f)({amount:n.amount,decimals:a.decimals});eT(e),ef([{value:e,symbol:a?.symbol,decimals:a?.decimals}])}else if(t.value){let e=BigInt(t.value),n=eM?(0,T.a)(e,eM):void 0;ef(F&&n?[{value:n}]:[{value:(0,T.p)(e),symbol:eS,decimals:18,usdValue:n}])}else ef(F?[{value:"$0"}]:[{value:"0",symbol:eS,decimals:18}])})(eD?.tx??q,eE,z)},[q,eD?.tx,eE,z,ev]),en)return(0,t.jsx)(D,{txn:eD?.tx??q,onClose:eR,receipt:en,transactionInfo:e.sendTransaction?.uiOptions.transactionInfo,tokenPrice:eM,tokenSymbol:eS,receiptHeader:e.sendTransaction?.uiOptions.successHeader,receiptDescription:e.sendTransaction?.uiOptions.successDescription});if(ei)return(0,t.jsx)(C.T,{transactionError:ei,transactionHash:ee??void 0,chainType:"ethereum",chainId:eD?.tx.chainId??q.chainId,onClose:eR,onRetry:({resetNonce:e})=>{er(null);let t={...eD?.tx??q};e&&(t.nonce=void 0),H(t)}});let eY=0!==B&&"number"==typeof R&&0!==R?()=>{O(R-1)}:void 0;return ec&&es?(0,t.jsx)(L,{details:es,onBack:()=>eu(!1)}):(0,t.jsx)(C.S,{transactionIndex:R,onBack:eY,maxIndex:B,disabled:eZ&&!eO||ep,isSubmitting:J,submitError:ei,isPreparing:!eD,isTokenPriceLoading:eN,isTokenContractInfoLoading:!eC&&!z,prepareError:eD?.errors[0],symbol:z?.symbol,chain:ek,img:eG,title:eV,subtitle:eW,txValue:q.value,fee:eU??eB,isSponsored:W,from:ew??"",to:eA,tokenAddress:eF??void 0,network:$.chains.find(e=>e.id===q.chainId)?.name??"",transactionDetails:{...eE,formattedAmount:ex},cta:eQ,missingFunds:eZ,action:eI,balance:ez??eH??eq,onClose:eR,onClick:eJ?async()=>{if(!ew)return;if(!eO)throw Error("Funding wallet is not enabled");let t="FundingMethodSelectionScreen";s({...e,funding:{...e.funding,methodScreen:t,chainType:"ethereum",amount:(0,l.formatEther)(BigInt(eD?.tx.value??0)+BigInt(eD?.totalGasEstimate?.toString()??0)),chain:ek},solanaFundingData:e?.solanaFundingData}),o(t)}:async()=>{if(R<B)O(R+1);else{Q(!0);try{let t=await E.getAccessToken();if(J||!t||!A||!M)return;let n=await e.sendTransaction.onConfirm({transactionRequest:eD?.tx??q});if(et(n),e.sendTransaction?.signOnly)return await new Promise(e=>setTimeout(e,y.q)),e?.sendTransaction?.onSuccess({hash:n}),P({shouldCallAuthOnSuccess:!1});let a=await eL.waitForTransactionReceipt({hash:n});if("reverted"===a.status)throw Error("Transaction failed");ea(a)}catch(e){console.warn({transaction:eD?.tx??q,error:e}),er(e)}finally{Q(!1)}}},validation:el,hasScanDetails:!!es,setIsScanDetailsOpen:eu,preventMaliciousTransaction:ep,setPreventMaliciousTransaction:ey,tokensSent:em,tokensReceived:eh,isScanning:"in progress"===ev,isCancellable:e.sendTransaction?.uiOptions?.isCancellable??!1,functionName:eP})}};e.s(["SendTransactionScreen",()=>ee,"default",()=>ee])}]);