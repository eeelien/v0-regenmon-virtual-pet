(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,802623,171762,e=>{"use strict";var t=e.i(14270),n=e.i(97146);let r=({className:e,checked:n,color:r="var(--privy-color-accent)",...c})=>(0,t.jsx)("label",{children:(0,t.jsxs)(a,{className:e,children:[(0,t.jsx)(o,{checked:n,...c}),(0,t.jsx)(s,{color:r,checked:n,children:(0,t.jsx)(i,{viewBox:"0 0 24 24",children:(0,t.jsx)("polyline",{points:"20 6 9 17 4 12"})})})]})});n.styled.label`
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
`;let a=n.styled.div`
  display: inline-block;
  vertical-align: middle;
`,i=n.styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`,o=n.styled.input.attrs({type:"checkbox"})`
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
`,s=n.styled.div`
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

  ${o}:focus + & {
    box-shadow: 0 0 0 1px ${e=>e.color};
  }

  ${i} {
    visibility: ${e=>e.checked?"visible":"hidden"};
  }
`;e.s(["C",()=>r],802623);var c=e.i(505034);let l=c.forwardRef(function({title:e,titleId:t,...n},r){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":t},n),e?c.createElement("title",{id:t},e):null,c.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"}))});e.s(["default",0,l],171762)},927035,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...r},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}))});e.s(["default",0,n])},522780,e=>{"use strict";var t=e.i(343499),n=e.i(330044);function r(e){return e?`${e.slice(0,5)}…${e.slice(-4)}`:""}function a({wei:e,precision:n=3}){return parseFloat((0,t.formatEther)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"")}function i({amount:e,decimals:t}){return(0,n.formatUnits)(BigInt(e),t)}e.s(["formatTokenAmount",()=>i,"formatWalletAddress",()=>r,"formatWeiAmount",()=>a])},203042,e=>{"use strict";var t=e.i(14270),n=e.i(97146);let r=({title:e,description:n,children:r,...a})=>(0,t.jsx)(i,{...a,children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("h3",{children:e}),"string"==typeof n?(0,t.jsx)("p",{children:n}):n,r]})});(0,n.styled)(r)`
  margin-bottom: 24px;
`;let a=({title:e,description:n,icon:r,children:a,...i})=>(0,t.jsxs)(o,{...i,children:[r||null,(0,t.jsx)("h3",{children:e}),n&&"string"==typeof n?(0,t.jsx)("p",{children:n}):n,a]}),i=n.styled.div`
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
`,o=(0,n.styled)(i)`
  align-items: center;
  text-align: center;
  gap: 16px;

  h3 {
    margin-bottom: 24px;
  }
`;e.s(["C",()=>a,"S",()=>r])},581887,e=>{"use strict";var t=e.i(97146);let n=t.styled.span`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`,r=t.styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 0.5rem;
`;e.s(["R",()=>r,"a",()=>n])},751738,e=>{"use strict";var t=e.i(97146),n=e.i(303821);let r=t.styled.span`
  color: var(--privy-color-foreground-3);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`,a=(0,t.styled)(r)`
  color: var(--privy-color-accent);
`,i=t.styled.span`
  color: var(--privy-color-foreground);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem; /* 157.143% */
  word-break: break-all;
  text-align: right;

  ${n.L}
`;e.s(["L",()=>r,"V",()=>i,"a",()=>a])},600204,e=>{"use strict";var t=e.i(97146);let n=t.styled.span`
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
`,r=t.css`
  ${e=>e.$isLoading?t.css`
          width: 35%;
          animation: ${n} 2s linear infinite;
          border-radius: var(--privy-border-radius-sm);
        `:""}
`;e.s(["L",()=>r])},394360,e=>{"use strict";var t=e.i(505034),n=e.i(957074);let r="0x0000000000000000000000000000000000000000",a=({appId:e,originCurrency:t,destinationCurrency:n,...a})=>({tradeType:"EXPECTED_OUTPUT",originCurrency:t??r,destinationCurrency:n??r,referrer:`privy|${e}`,...a}),i="https://api.relay.link",o="https://api.testnets.relay.link",s=async({input:e,isTestnet:t})=>{let n=await fetch((t?o:i)+"/quote",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),r=await n.json();if(!(n.ok||"string"==typeof r.message&&r.message.startsWith("Invalid address")))throw console.error("Relay error:",r),Error(r.message??"Error fetching quote from relay");return r},c=e=>{let t=e.steps[0]?.items?.[0];if(t)return{from:t.data.from,to:t.data.to,value:Number(t.data.value),chainId:Number(t.data.chainId),data:t.data.data}};async function l({transactionHash:e,isTestnet:t}){let n=await fetch((t?o:i)+"/requests/v2?hash="+e),r=await n.json();if(!n.ok){if("message"in r&&"string"==typeof r.message)throw Error(r.message);throw Error("Error fetching request from relay")}return r.requests.at(0)?.status??"pending"}function d({transactionHash:e,isTestnet:n,bridgingStatus:r,setBridgingStatus:a,onSuccess:i,onFailure:o}){(0,t.useEffect)(()=>{if(e&&r){if(["delayed","waiting","pending"].includes(r)){let t=setInterval(async()=>{try{let t=await l({transactionHash:e,isTestnet:n});a(t)}catch(e){console.error(e)}},1e3);return()=>clearInterval(t)}"success"===r?i({transactionHash:e}):["refund","failure"].includes(r)&&o({error:new u(e,n)})}},[r,e,n])}class u extends n.a{constructor(e,t){super("We were unable to complete the bridging transaction. Funds will be refunded on your wallet.",void 0,n.b.TRANSACTION_FAILURE),this.relayLink=t?`https://testnets.relay.link/transaction/${e}`:`https://relay.link/transaction/${e}`}}e.s(["R",()=>u,"a",()=>"11111111111111111111111111111111","b",()=>0x2f3fb341,"c",()=>c,"d",()=>"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","g",()=>s,"t",()=>a,"u",()=>d])},465120,e=>{"use strict";let t=(0,e.i(78048).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",()=>t],465120)},642071,e=>{"use strict";var t=e.i(14270),n=e.i(78048);let r=(0,n.default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),a=(0,n.default)("phone",[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]]);var i=e.i(465120),o=e.i(97146),s=e.i(205384),c=e.i(384249),l=e.i(957074),d=e.i(430321),u=e.i(394360),p=e.i(750186);e.i(505034),e.i(252494),e.i(329723),e.i(768820),e.i(464143),e.i(559889);let m=({error:e,allowlistConfig:n,onRetry:o,onCaptchaReset:s,onBack:d})=>{let m=((e,n)=>{if(e instanceof u.R)return{title:"Transaction failed",detail:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{children:e.message}),(0,t.jsxs)("span",{children:[" ","Check the"," ",(0,t.jsx)(g,{href:e.relayLink,target:"_blank",children:"refund status"}),"."]})]}),ctaText:"Try again",icon:r};if(e instanceof l.a)switch(e.privyErrorCode){case l.b.CLIENT_REQUEST_TIMEOUT:return{title:"Timed out",detail:e.message,ctaText:"Try again",icon:r};case l.b.INSUFFICIENT_BALANCE:return{title:"Insufficient balance",detail:e.message,ctaText:"Try again",icon:r};case l.b.TRANSACTION_FAILURE:return{title:"Transaction failure",detail:e.message,ctaText:"Try again",icon:r};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:r}}if(e instanceof c.P&&"twilio_verification_failed"===e.type)return{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:a};if(!(e instanceof l.c))return e instanceof l.e&&e.status&&[400,422].includes(e.status)?{title:"Something went wrong",detail:e.message,ctaText:"Try again",icon:r}:{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:r};switch(e.privyErrorCode){case l.b.INVALID_CAPTCHA:return{title:"Something went wrong",detail:"Please try again.",ctaText:"Try again",icon:r};case l.b.DISALLOWED_LOGIN_METHOD:return{title:"Not allowed",detail:e.message,ctaText:"Try another method",icon:r};case l.b.ALLOWLIST_REJECTED:return{title:n.errorTitle||"You don't have access to this app",detail:n.errorDetail||"Have you been invited?",ctaText:n.errorCtaText||"Try another account",icon:i.Lock};case l.b.CAPTCHA_FAILURE:return{title:"Something went wrong",detail:"You did not pass CAPTCHA. Please try again.",ctaText:"Try again",icon:null};case l.b.CAPTCHA_TIMEOUT:return{title:"Something went wrong",detail:"Something went wrong! Please try again later.",ctaText:"Try again",icon:null};case l.b.LINKED_TO_ANOTHER_USER:return{title:"Authentication failed",detail:"This account has already been linked to another user.",ctaText:"Try again",icon:r};case l.b.NOT_SUPPORTED:return{title:"This region is not supported",detail:"SMS authentication from this region is not available",ctaText:"Try another method",icon:r};case l.b.TOO_MANY_REQUESTS:return{title:"Request failed",detail:"Too many attempts.",ctaText:"Try again later",icon:r};default:return{title:"Something went wrong",detail:"Try again later",ctaText:"Try again",icon:r}}})(e,n);return(0,t.jsx)(p.S,{title:m.title,subtitle:m.detail,icon:m.icon,onBack:d,iconVariant:"error",primaryCta:{label:m.ctaText,onClick:()=>{e instanceof l.c&&(e.privyErrorCode===l.b.INVALID_CAPTCHA&&s?.(),e.privyErrorCode===l.b.ALLOWLIST_REJECTED&&n.errorCtaLink)?window.location.href=n.errorCtaLink:o?.()},variant:"error"},watermark:!0})},f={component:()=>{let{navigate:e,data:n,lastScreen:r,currentScreen:a}=(0,d.a)(),i=(0,s.u)(),{reset:o}=(0,c.a)(),l=n?.errorModalData?.previousScreen||(r===a?void 0:r);return(0,t.jsx)(m,{error:n?.errorModalData?.error||Error(),allowlistConfig:i.allowlistConfig,onRetry:()=>{e(l||"LandingScreen",!1)},onCaptchaReset:o})}},g=o.styled.a`
  color: var(--privy-color-accent) !important;
  font-weight: 600;
`;e.s(["ErrorScreen",()=>f,"ErrorScreenView",()=>m,"default",()=>f],642071)},91163,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...r},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"}))});e.s(["default",0,n])},271137,e=>{"use strict";var t=e.i(97146);let n=t.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 82px;

  > div {
    position: relative;
  }

  > div > span {
    position: absolute;
    left: -41px;
    top: -41px;
  }

  > div > :last-child {
    position: absolute;
    left: -19px;
    top: -19px;
  }
`;e.s(["e",()=>n])},111934,e=>{"use strict";let t=["CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C","CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"],n=["JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4"],r={"solana:mainnet":{EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:{symbol:"USDC",decimals:6,address:"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"},Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:{symbol:"USDT",decimals:6,address:"Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:devnet":{"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU":{symbol:"USDC",decimals:6,address:"4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU"},EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS:{symbol:"USDT",decimals:6,address:"EJwZgeZrdC8TXTQbQBoL6bfuAnFUUy1PVCMB4DYPzVaS"},So11111111111111111111111111111111111111112:{symbol:"SOL",decimals:9,address:"So11111111111111111111111111111111111111112"}},"solana:testnet":{}};function a(e,t){let n=parseFloat(e.toString())/1e9,r=i.format(t*n);return"$0.00"===r?"<$0.01":r}let i=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2});e.s(["A",()=>"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL","D",()=>r,"J",()=>n,"L",()=>1e9,"R",()=>t,"S",()=>"11111111111111111111111111111111","T",()=>"TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA","a",()=>"TokenzQdBNbLqP5VEhdkAS6EPFLC1PHnBqCXEpPxuEb","g",()=>a])},115579,e=>{"use strict";var t=e.i(111934);function n(e,t=6,r=!1,a=!1){let i=(parseFloat(e.toString())/1e9).toFixed(t).replace(/0+$/,"").replace(/\.$/,""),o=a?"":" SOL";return r?`${i}${o}`:`${"0"===i?"<0.001":i}${o}`}function r({amount:e,fee:r,tokenPrice:a,isUsdc:i}){let o=BigInt(Math.floor(parseFloat(e)*10**(i?6:9))),s=i?o:o+r;return{fundingAmountInBaseUnit:o,fundingAmountInUsd:a?(0,t.g)(o,a):void 0,totalPriceInUsd:a?(0,t.g)(s,a):void 0,totalPriceInNativeCurrency:n(s),feePriceInNativeCurrency:n(r),feePriceInUsd:a?(0,t.g)(r,a):void 0}}e.s(["a",()=>r,"g",()=>n])},590472,e=>{"use strict";var t=e.i(97146);let n=t.styled.div`
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
`,a=t.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`,i=(0,t.styled)(r)`
  padding: 20px 0;
`,o=(0,t.styled)(r)`
  gap: 16px;
`,s=t.styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,c=t.styled.div`
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
`,d=t.styled.div`
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
`,e.s(["B",()=>n,"C",()=>i,"F",()=>s,"H",()=>a,"R",()=>u,"S",()=>l,"a",()=>c,"b",()=>d,"c",()=>o,"d",()=>p,"e",()=>r])},756645,e=>{"use strict";var t=e.i(505034),n=e.i(957074);let r=({enabled:e=!0}={})=>{let{showFiatPrices:r,getUsdPriceForSol:a}=(0,n.u)(),[i,o]=(0,t.useState)(!0),[s,c]=(0,t.useState)(void 0),[l,d]=(0,t.useState)(void 0);return(0,t.useEffect)(()=>{(async()=>{if(r&&e)try{o(!0);let e=await a();e?d(e):c(Error("Unable to fetch SOL price"))}catch(e){c(e)}finally{o(!1)}else o(!1)})()},[]),{solPrice:l,isSolPriceLoading:i,solPriceError:s}};e.s(["u",()=>r])},254096,e=>{"use strict";var t=e.i(343499),n=e.i(957074),r=e.i(526520);let a=new Intl.NumberFormat(void 0,{style:"currency",currency:"USD",maximumFractionDigits:2}),i=(e,t)=>{let n,r=(n=t*parseFloat(e),a.format(n));return"$0.00"!==r?r:"<$0.01"},o=(e,n)=>{let r,i=(r=n*parseFloat((0,t.formatEther)(e)),a.format(r));return"$0.00"===i?"<$0.01":i},s=(e,t,n=6,r=!1)=>`${c(e,n,r)} ${t}`,c=(e,n=6,r=!1)=>{let a=parseFloat((0,t.formatEther)(e)).toFixed(n).replace(/0+$/,"").replace(/\.$/,"");return r?a:`${"0"===a?"<0.001":a}`},l=e=>e.reduce((e,t)=>e+t,0n),d=(e,t)=>{let{chains:a}=(0,n.u)(),i=`https://etherscan.io/address/${t}`,o=`${(0,r.a5)(e,a)}/address/${t}`;try{new URL(o)}catch{return i}return o};e.s(["a",()=>o,"b",()=>d,"c",()=>i,"g",()=>s,"p",()=>c,"s",()=>l])},84410,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...r},a){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":n},r),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m19.5 8.25-7.5 7.5-7.5-7.5"}))});e.s(["default",0,n])},963290,e=>{"use strict";var t=e.i(14270),n=e.i(97146),r=e.i(330044),a=e.i(254096),i=e.i(111934),o=e.i(115579),s=e.i(526520);let c=({weiQuantities:e,tokenPrice:n,tokenSymbol:r})=>{let i=(0,a.s)(e),o=n?(0,a.a)(i,n):void 0,s=(0,a.g)(i,r);return(0,t.jsx)(u,{children:o||s})},l=({weiQuantities:e,tokenPrice:n,tokenSymbol:r})=>{let i=(0,a.s)(e),o=n?(0,a.a)(i,n):void 0,s=(0,a.g)(i,r);return(0,t.jsx)(u,{children:o?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p,{children:"USD"}),"<$0.01"===o?(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{children:"<"}),"$0.01"]}):o]}):s})},d=({quantities:e,tokenPrice:n,tokenSymbol:a="SOL",tokenDecimals:s=9})=>{let c=e.reduce((e,t)=>e+t,0n),l=n&&"SOL"===a&&9===s?(0,i.g)(c,n):void 0,d="SOL"===a&&9===s?(0,o.g)(c):`${(0,r.formatUnits)(c,s)} ${a}`;return(0,t.jsx)(u,{children:l?(0,t.jsx)(t.Fragment,{children:"<$0.01"===l?(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{children:"<"}),"$0.01"]}):l}):d})},u=n.styled.span`
  font-size: 14px;
  line-height: 140%;
  display: flex;
  gap: 4px;
  align-items: center;
`,p=n.styled.span`
  font-size: 12px;
  line-height: 12px;
  color: var(--privy-color-foreground-3);
`,m=n.styled.span`
  font-size: 10px;
`,f=n.styled.span`
  display: flex;
  align-items: center;
`,g=e=>{var n,r;return(0,t.jsx)(h,{href:"ethereum"===e.chainType?(0,a.b)(e.chainId,e.walletAddress):(n=e.walletAddress,r=e.chainId,`https://explorer.solana.com/account/${n}?chain=${r}`),target:"_blank",children:(0,s.D)(e.walletAddress)})},h=n.styled.a`
  &:hover {
    text-decoration: underline;
  }
`;e.s(["H",()=>c,"P",()=>l,"S",()=>d,"W",()=>g])},496806,e=>{"use strict";var t=e.i(498921),n=e.i(931763),r=e.i(701983),a=e.i(505034),i=e.i(205384),o=e.i(957074);function s(e){return new Uint8Array((0,n.getTransactionDecoder)().decode(e).messageBytes)}async function c({solanaClient:e,tx:t}){let n=(0,r.getBase64Decoder)().decode(s(t)),{value:a}=await e.rpc.getFeeForMessage(n).send();return a??0n}async function l({solanaClient:e,tx:t,replaceRecentBlockhash:n}){let{value:a}=await e.rpc.simulateTransaction((0,r.getBase64Decoder)().decode(t),{commitment:"confirmed",encoding:"base64",sigVerify:!1,replaceRecentBlockhash:n}).send();if("BlockhashNotFound"===a.err&&n)throw Error("Simulation failed: Blockhash not found");return"BlockhashNotFound"===a.err?await l({solanaClient:e,tx:t,replaceRecentBlockhash:!0}):{logs:a.logs??[],error:a.err,hasError:!!a.err,hasFunds:a.logs?.every(e=>!/insufficient funds/gi.test(e)&&!/insufficient lamports/gi.test(e))??!0}}let d=(...e)=>{if(void 0===t.Buffer)throw new o.a("Buffer is not defined.",void 0,o.b.BUFFER_NOT_DEFINED);return t.Buffer.from(...e)};async function u({rpcSubscriptions:e,signature:t,timeout:n}){let r=new AbortController,a=await e.signatureNotifications(t,{commitment:"confirmed"}).subscribe({abortSignal:r.signal}),i=await Promise.race([new Promise(e=>{setTimeout(()=>{r.abort(),e(Error("Transaction confirmation timed out"))},n)}),new Promise(async e=>{for await(let t of a){if(r.abort(),t.value.err)return e(Error("Transaction confirmation failed"));e(void 0)}})]);if(i instanceof Error)throw i}function p(){let e=(0,i.u)(),t=(0,a.useMemo)(()=>Object.fromEntries(["solana:mainnet","solana:devnet","solana:testnet"].map(t=>[t,e.solanaRpcs[t]?function({rpc:e,rpcSubscriptions:t,chain:n,blockExplorerUrl:a}){let i=function({rpc:e,rpcSubscriptions:t}){return async n=>new Promise(async(a,i)=>{try{let i=await e.sendTransaction(d(n).toString("base64"),{preflightCommitment:"confirmed",encoding:"base64"}).send();await u({rpcSubscriptions:t,signature:i,timeout:1e4}),a({signature:new Uint8Array((0,r.getBase58Encoder)().encode(i))})}catch(e){i(e)}})}({rpc:e,rpcSubscriptions:t});return{rpc:e,rpcSubscriptions:t,chain:n,blockExplorerUrl:a,sendAndConfirmTransaction:i}}({chain:t,rpc:e.solanaRpcs[t].rpc,rpcSubscriptions:e.solanaRpcs[t].rpcSubscriptions,blockExplorerUrl:e.solanaRpcs[t].blockExplorerUrl??`https://explorer.solana.com?cluster=${t.replace("solana:","")}`}):null])),[e.solanaRpcs]);return(0,a.useCallback)(e=>{if(!t[e])throw Error(`No RPC configuration found for chain ${e}`);return t[e]},[t])}e.s(["a",()=>s,"b",()=>d,"f",()=>c,"s",()=>l,"u",()=>p,"w",()=>u])},55524,e=>{"use strict";var t=e.i(14270),n=e.i(505034),r=e.i(522780),a=e.i(430321),i=e.i(205384),o=e.i(957074),s=e.i(756645),c=e.i(642071),l=e.i(927035),d=e.i(97146),u=e.i(494632),p=e.i(590472),m=e.i(203042),f=e.i(581887),g=e.i(751738),h=e.i(963290),y=e.i(271137),w=e.i(526520),v=e.i(283979),x=e.i(115579),b=e.i(184883),k=e.i(958680),T=e.i(931763),S=e.i(701983),A=e.i(236710);async function C(e,t,n){if(0===e.length)return{};let r=await (0,A.fetchJsonParsedAccounts)(t,e,n);return(0,A.assertAccountsDecoded)(r),(0,A.assertAccountsExist)(r),r.reduce((e,t)=>({...e,[t.address]:t.data.addresses}),{})}e.i(4706),e.i(977886),e.i(667643);var E=e.i(496806),I=e.i(111934);e.i(252494),e.i(329723),e.i(768820),e.i(464143),e.i(559889);let j=d.styled.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-accent)"};
    background-color: ${e=>e.color??"var(--privy-color-accent)"};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
  }
`,L=({instruction:e,fees:n,transactionInfo:r,solPrice:a,chain:i})=>(0,t.jsxs)(f.a,{children:[r?.action&&(0,t.jsxs)(f.R,{children:[(0,t.jsx)(g.L,{children:"Action"}),(0,t.jsx)(g.V,{children:r.action})]}),null!=e?.total&&(0,t.jsxs)(f.R,{children:[(0,t.jsx)(g.L,{children:"Total"}),(0,t.jsx)(g.V,{children:e.total})]}),!e?.total&&null!=e?.amount&&(0,t.jsxs)(f.R,{children:[(0,t.jsx)(g.L,{children:"Total"}),(0,t.jsx)(g.V,{children:(0,t.jsx)(h.S,{quantities:[e.amount,n],tokenPrice:a})})]}),(0,t.jsxs)(f.R,{children:[(0,t.jsx)(g.L,{children:"Fees"}),(0,t.jsx)(g.V,{children:(0,t.jsx)(h.S,{quantities:[n],tokenPrice:a})})]}),e?.to&&(0,t.jsxs)(f.R,{children:[(0,t.jsx)(g.L,{children:"To"}),(0,t.jsx)(g.V,{children:(0,t.jsx)(h.W,{walletAddress:e.to,chainId:i,chainType:"solana"})})]})]}),O=({fees:e,onClose:n,receiptHeader:r,receiptDescription:a,transactionInfo:i,solPrice:o,signOnly:s,instruction:c,chain:d})=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.M,{onClose:n}),(0,t.jsx)(y.e,{style:{marginBottom:"16px"},children:(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{color:"var(--privy-color-success-light)"}),(0,t.jsx)(l.default,{height:38,width:38,strokeWidth:2,stroke:"var(--privy-color-success)"})]})}),(0,t.jsx)(m.C,{title:r??`Transaction ${s?"signed":"complete"}!`,description:a??"You're all set."}),(0,t.jsx)(L,{solPrice:o,instruction:c,fees:e,transactionInfo:i,chain:d}),(0,t.jsx)(w.Y,{}),(0,t.jsx)($,{loading:!1,onClick:n,children:"Close"}),(0,t.jsx)(p.R,{}),(0,t.jsx)(u.B,{})]}),$=(0,d.styled)(u.P)`
  && {
    margin-top: 24px;
  }
  transition:
    color 350ms ease,
    background-color 350ms ease;
`;async function P(e,t){try{return await e}catch{return t}}async function F({privyClient:e,chain:t,mint:n}){let r=I.D[t];if(!r[n]){let a=await e.getSplTokenMetadata({mintAddress:n,cluster:function(e){switch(e){case"solana:mainnet":return"mainnet-beta";case"solana:devnet":return"devnet";case"solana:testnet":return"testnet"}}(t)});a&&(r[n]={address:n,symbol:a.symbol,decimals:a.decimals})}return r[n]}async function B({tx:e,solanaClient:t,privyClient:n,checkFunds:r}){let a=(0,k.getCompiledTransactionMessageDecoder)().decode((0,E.a)(e)),i=a.staticAccounts[0]??"",o=await (0,E.f)({solanaClient:t,tx:e}),s=r?await P((0,E.s)({solanaClient:t,tx:e})):void 0,c=s?.hasFunds??!0,l={},d=[],u=await async function({solanaClient:e,message:t}){if(!("addressTableLookups"in t)||!t.addressTableLookups)return[...t.staticAccounts];let n=t.addressTableLookups.map(e=>e.lookupTableAddress),r=await C(n,e.rpc),a=n.map((e,n)=>[...t.addressTableLookups[n]?.writableIndexes.map(t=>{let a=r[e]?.[t];if(a)return{key:a,isWritable:!0,altIdx:n}})??[],...t.addressTableLookups[n]?.readonlyIndexes.map(t=>{let a=r[e]?.[t];if(a)return{key:a,isWritable:!1,altIdx:n}})??[]]).flat().filter(e=>!!e).sort((e,t)=>e.isWritable!==t.isWritable?e.isWritable?-1:1:e.altIdx-t.altIdx).map(({key:e})=>e);return[...t.staticAccounts,...a]}({solanaClient:t,message:a});for(let e of a.instructions){let r=a.staticAccounts[e.programAddressIndex]||"";if(r!==I.T&&r!==I.a)if(r!==I.S){if(r===I.A){let t=await P(function(e,t,n){let[r,a,i,o]=e.accountIndices?.map(e=>t[e])??[];return{type:"ata-creation",program:n,payer:r,ata:a,owner:i,mint:o}}(e,u,r));if(!t){d.push({type:"unknown",program:r,discriminator:e.data?.[0]});continue}if(d.push(t),t.ata&&t.owner&&t.mint){l[t.ata]={owner:t.owner,mint:t.mint};continue}}if(I.R.includes(r)){let a=await P(M(e,u,t,n,r));if(!a){d.push({type:"unknown",program:r,discriminator:e.data?.[0]});continue}d.push(a)}else if(I.J.includes(r)){let a=await P(_(e,u,t,n,r));if(!a){d.push({type:"unknown",program:r,discriminator:e.data?.[0]});continue}d.push(a)}else d.push({type:"unknown",program:r,discriminator:e.data?.[0]})}else{let t=await P(U(e,u));if(!t){d.push({type:"unknown",program:r,discriminator:e.data?.[0]});continue}d.push(t)}else{let a=await P(D(e,u,t,n,l,r));if(!a){d.push({type:"unknown",program:r,discriminator:e.data?.[0]});continue}d.push(a),"spl-transfer"===a.type&&(a.fromAta&&a.fromAccount&&a.token.address&&(l[a.fromAta]??={owner:a.fromAccount,mint:a.token.address}),a.toAta&&a.toAccount&&a.token.address&&(l[a.toAta]??={owner:a.toAccount,mint:a.token.address}))}}return{spender:i,fee:o,instructions:d,hasFunds:!!c}}function R(e,t=0){try{return function(e,t=0){let n=0n;for(let r=0;r<8;r++)n|=BigInt(e[t+r])<<BigInt(8*r);return n}(e,t)}catch{}try{return e.readBigInt64LE(t)}catch{}let n=(0,E.b)(e);try{return((e,t=0)=>{let n=e[t],r=e[t+7];if(!n||!r)throw Error(`Buffer offset out of range: first: ${n}, last: ${r}.`);return(BigInt(e[t+4]+256*e[t+5]+65536*e[t+6]+(r<<24))<<32n)+BigInt(n+256*e[++t]+65536*e[++t]+0x1000000*e[++t])})(n)}catch{}try{return n.subarray(t).readBigInt64LE()}catch{}try{return n.readBigInt64LE(t)}catch{}return 0n}async function D(e,t,n,r,a,i){let o=e.data?.[0],s=e.accountIndices?.map(e=>t[e])??[];if(1===o){let[e,t,n]=s;return{type:"spl-init-account",program:i,account:e,mint:t,owner:n}}if(3===o){let t,o,[c,l,d]=s,u="",p=l?a[l]:void 0;if(p)t=p.owner,u=p.mint;else if(l){let e=await n.rpc.getAccountInfo(l,{commitment:"confirmed",encoding:"jsonParsed"}).send(),r=e.value?.data;t=r?.parsed?.info?.owner,u=r?.parsed?.info?.mint??"",o=r?.parsed?.info?.tokenAmount?.decimals}if(!u&&c){let e=await n.rpc.getAccountInfo(c,{commitment:"confirmed",encoding:"jsonParsed"}).send(),t=e.value?.data;u=t?.parsed?.info?.mint??""}let m=await F({privyClient:r,chain:n.chain,mint:u}),f=m?.symbol??"";return o??=m?.decimals??9,{type:"spl-transfer",program:i,fromAta:c,fromAccount:d,toAta:l,toAccount:t,value:R(e.data,1),token:{symbol:f,decimals:o,address:u}}}if(9===o){let[e,t,n]=s;return{type:"spl-close-account",program:i,source:e,destination:t,owner:n}}if(17===o)return{type:"spl-sync-native",program:i};throw Error(`Token program instruction type ${o} not supported`)}async function U(e,t){let n=e.data?.[0],r=e.accountIndices?.map(e=>t[e])??[];if(0===n){let[,t]=r;return{type:"create-account",program:I.S,account:t?.toString(),value:R(e.data,4),withSeed:!1}}if(2===n){let[t,n]=r;return{type:"sol-transfer",program:I.S,fromAccount:t,toAccount:n,token:{symbol:"SOL",decimals:9},value:R(e.data,4),withSeed:!1}}if(3===n){let[,t]=r;return{type:"create-account",program:I.S,account:t,withSeed:!0,value:R(e.data.slice(e.data.length-32-8-8))}}if(11===n){let[t,n]=r;return{type:"sol-transfer",program:I.S,fromAccount:t,toAccount:n,value:R(e.data,4),token:{symbol:"SOL",decimals:9},withSeed:!0}}throw Error(`System program instruction type ${n} not supported`)}async function M(e,t,n,r,a){let i=e.accountIndices?.map(e=>t[e])??[],o=e.data?.[0];if(143===o){let t=i[10],o=i[11];return{type:"raydium-swap-base-input",program:a,mintIn:t,mintOut:o,tokenIn:t?await F({privyClient:r,chain:n.chain,mint:t}):void 0,tokenOut:o?await F({privyClient:r,chain:n.chain,mint:o}):void 0,amountIn:R(e.data,8),minimumAmountOut:R(e.data,16)}}if(55===o){let t=i[10],o=i[11];return{type:"raydium-swap-base-output",program:a,mintIn:t,mintOut:o,tokenIn:t?await F({privyClient:r,chain:n.chain,mint:t}):void 0,tokenOut:o?await F({privyClient:r,chain:n.chain,mint:o}):void 0,maxAmountIn:R(e.data,8),amountOut:R(e.data,16)}}throw Error(`Raydium swap program instruction type ${o} not supported`)}async function _(e,t,n,r,a){let i=e.data?.[0],o=e.accountIndices?.map(e=>t[e])??[];if([208,51,239,151,123,43,237,92].includes(i)){let t=o[5],i=o[6];return{type:"jupiter-swap-exact-out-route",program:a,mintIn:t,mintOut:i,tokenIn:t?await F({privyClient:r,chain:n.chain,mint:t}):void 0,tokenOut:i?await F({privyClient:r,chain:n.chain,mint:i}):void 0,outAmount:R(e.data,e.data.length-1-2-8-8),quotedInAmount:R(e.data,e.data.length-1-2-8)}}if([176,209,105,168,154,125,69,62].includes(i)){let t=o[7],i=o[8];return{type:"jupiter-swap-exact-out-route",program:a,mintIn:t,mintOut:i,tokenIn:t?await F({privyClient:r,chain:n.chain,mint:t}):void 0,tokenOut:i?await F({privyClient:r,chain:n.chain,mint:i}):void 0,outAmount:R(e.data,e.data.length-1-2-8-8),quotedInAmount:R(e.data,e.data.length-1-2-8)}}if([193,32,155,51,65,214,156,129].includes(i)){let t=o[7],i=o[8];return{type:"jupiter-swap-shared-accounts-route",program:a,mintIn:t,mintOut:i,tokenIn:t?await F({privyClient:r,chain:n.chain,mint:t}):void 0,tokenOut:i?await F({privyClient:r,chain:n.chain,mint:i}):void 0,inAmount:R(e.data,e.data.length-1-2-8-8),quotedOutAmount:R(e.data,e.data.length-1-2-8)}}throw[62,198,214,193,213,159,108,210].includes(i)&&console.warn("Jupiter swap program instruction 'claim' not implemented"),[116,206,27,191,166,19,0,73].includes(i)&&console.warn("Jupiter swap program instruction 'claim_token' not implemented"),[26,74,236,151,104,64,183,249].includes(i)&&console.warn("Jupiter swap program instruction 'close_token' not implemented"),[229,194,212,172,8,10,134,147].includes(i)&&console.warn("Jupiter swap program instruction 'create_open_orders' not implemented"),[28,226,32,148,188,136,113,171].includes(i)&&console.warn("Jupiter swap program instruction 'create_program_open_orders' not implemented"),[232,242,197,253,240,143,129,52].includes(i)&&console.warn("Jupiter swap program instruction 'create_token_ledger' not implemented"),[147,241,123,100,244,132,174,118].includes(i)&&console.warn("Jupiter swap program instruction 'create_token_account' not implemented"),[229,23,203,151,122,227,173,42].includes(i)&&console.warn("Jupiter swap program instruction 'route' not implemented"),[150,86,71,116,167,93,14,104].includes(i)&&console.warn("Jupiter swap program instruction 'route_with_token_ledger' not implemented"),[228,85,185,112,78,79,77,2].includes(i)&&console.warn("Jupiter swap program instruction 'set_token_ledger' not implemented"),[230,121,143,80,119,159,106,170].includes(i)&&console.warn("Jupiter swap program instruction 'shared_accounts_route_with_token_ledger' not implemented"),Error(`Jupiter swap program instruction type ${i} not supported`)}let N={component:()=>{let{data:e,onUserCloseViaDialogOrKeybindRef:l,setModalData:d,navigate:u}=(0,a.a)(),{client:p,closePrivyModal:m,walletProxy:f,showFiatPrices:g}=(0,o.u)(),h=(0,i.u)(),{user:y}=(0,a.u)(),w=(0,E.u)()(e?.standardSignAndSendTransaction?.chain??"solana:mainnet"),[A,C]=(0,n.useState)(e?.standardSignAndSendTransaction?.transaction),[j,L]=(0,n.useState)(),[$,P]=(0,n.useState)(),[F,R]=(0,n.useState)({value:0n,isLoading:!1}),[D,U]=(0,n.useState)(!1),[M,_]=(0,n.useState)({}),[N,H]=(0,n.useState)(),q=e?.standardSignAndSendTransaction?.account,J=!!e?.standardSignAndSendTransaction?.signOnly,V=q?.imported?(0,a.k)(y).find(e=>e.address===q.address):(0,a.g)(y),{solPrice:W,isSolPriceLoading:z}=(0,s.u)({enabled:g}),Z=(0,n.useMemo)(()=>{if(!j)return;let e=j.spender,t=(0,x.g)(j.fee),n=(0,x.g)(F.value,3,!0),a=j.instructions.filter(e=>["sol-transfer","spl-transfer","raydium-swap-base-input","raydium-swap-base-output","jupiter-swap-shared-accounts-route","jupiter-swap-exact-out-route"].includes(e.type)),i=a.at(0);return!i||a.length>1?{fee:t,spender:e,balance:n}:"sol-transfer"===i.type?{fee:t,spender:e,balance:n,total:(0,x.g)(i.value)}:"spl-transfer"===i.type?{fee:t,spender:e,balance:n,total:`${(0,r.formatTokenAmount)({amount:i.value,decimals:i.token.decimals})} ${i.token.symbol}`}:"raydium-swap-base-input"===i.type&&i.tokenIn&&i.tokenOut?{fee:t,spender:e,balance:n,swap:`${(0,r.formatTokenAmount)({amount:i.amountIn,decimals:i.tokenIn.decimals})} ${i.tokenIn.symbol} → ${(0,r.formatTokenAmount)({amount:i.minimumAmountOut,decimals:i.tokenOut.decimals})} ${i.tokenOut.symbol}`}:"raydium-swap-base-output"===i.type&&i.tokenIn&&i.tokenOut?{fee:t,spender:e,balance:n,swap:`${(0,r.formatTokenAmount)({amount:i.maxAmountIn,decimals:i.tokenIn.decimals})} ${i.tokenIn.symbol} → ${(0,r.formatTokenAmount)({amount:i.amountOut,decimals:i.tokenOut.decimals})} ${i.tokenOut.symbol}`}:"jupiter-swap-shared-accounts-route"===i.type&&i.tokenIn&&i.tokenOut?{fee:t,spender:e,balance:n,swap:`${(0,r.formatTokenAmount)({amount:i.inAmount,decimals:i.tokenIn.decimals})} ${i.tokenIn.symbol} → ${(0,r.formatTokenAmount)({amount:i.quotedOutAmount,decimals:i.tokenOut.decimals})} ${i.tokenOut.symbol}`}:"jupiter-swap-exact-out-route"===i.type&&i.tokenIn&&i.tokenOut?{fee:t,spender:e,balance:n,swap:`${(0,r.formatTokenAmount)({amount:i.quotedInAmount,decimals:i.tokenIn.decimals})} ${i.tokenIn.symbol} → ${(0,r.formatTokenAmount)({amount:i.outAmount,decimals:i.tokenOut.decimals})} ${i.tokenOut.symbol}`}:{fee:t,spender:e,balance:n}},[j,q?.address,F]),G=(0,n.useMemo)(()=>{let e;if(!j||!g||!W||z)return;function t(...e){return(0,I.g)(e.reduce((e,t)=>e+t,0n),W??0)}q?.address===j.spender&&(e=t(j.fee));let n=t(F.value),a=j.instructions.filter(e=>"sol-transfer"===e.type||"spl-transfer"===e.type).at(0);return!a||j.instructions.length>1?{fee:e,balance:n}:"sol-transfer"===a.type?{fee:e,balance:n,total:t(a.value,q?.address===j.spender?j.fee:0n)}:"spl-transfer"===a.type?{fee:e,balance:n,total:`${(0,r.formatTokenAmount)({amount:a.value,decimals:a.token.decimals})} ${a.token.symbol}`}:{fee:e,balance:n}},[j,g,W,z,q?.address,F]);if((0,n.useEffect)(()=>{!async function(){if(A&&p)try{P(void 0);let e=await B({tx:A,solanaClient:w,privyClient:p,checkFunds:!J});L(e)}catch(e){console.error("Failed to prepare transaction",e),P(e)}}()},[A,w,p,J]),(0,n.useEffect)(()=>{(async function(){if(!q)return;R({value:F.value,isLoading:!0});let{value:e}=await w.rpc.getBalance(q.address,{commitment:"confirmed"}).send();R({value:e??0n,isLoading:!1})})().catch(console.error)},[j]),!A||!e?.standardSignAndSendTransaction||!q){let n=Error("Invalid transaction request");return(0,t.jsx)(c.ErrorScreenView,{error:n,allowlistConfig:h.allowlistConfig,onRetry:()=>{e?.standardSignAndSendTransaction?.onFailure(n),m({shouldCallAuthOnSuccess:!1})}})}let Y=()=>{if(!D)return M.signature||M.signedTransaction?e?.standardSignAndSendTransaction?.onSuccess({signature:M.signature,signedTransaction:M.signedTransaction}):e?.standardSignAndSendTransaction?.onFailure(N??$??Error("User exited the modal before submitting the transaction")),m({shouldCallAuthOnSuccess:!1})};l.current=Y;let Q=e.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.contractInfo?.imgUrl?(0,t.jsx)("img",{src:e.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgUrl,alt:e.standardSignAndSendTransaction.uiOptions.transactionInfo.contractInfo.imgAltText}):null,K=!!(e.funding&&e.funding.supportedOptions.length>0),X=!j?.hasFunds&&K;if(M.signature||M.signedTransaction){let n=j?.instructions.filter(e=>"sol-transfer"===e.type||"spl-transfer"===e.type),r=1===n?.length?n?.at(0):void 0;return(0,t.jsx)(O,{fees:M.fees??0n,onClose:Y,transactionInfo:e.standardSignAndSendTransaction?.uiOptions.transactionInfo,solPrice:W,receiptHeader:e.standardSignAndSendTransaction?.uiOptions.successHeader,receiptDescription:e.standardSignAndSendTransaction?.uiOptions.successDescription,chain:w.chain,signOnly:J,instruction:"sol-transfer"===r?.type?{to:r.toAccount,amount:r.value}:{to:r?.toAccount||r?.toAta,total:Z?.total}})}return N?(0,t.jsx)(v.T,{transactionError:N,chainId:w.chain,onClose:Y,chainType:"solana",onRetry:async()=>{H(void 0);let{value:e}=await w.rpc.getLatestBlockhash().send();C((0,b.pipe)((0,k.getCompiledTransactionMessageDecoder)().decode((0,E.a)(A)),e=>(0,k.decompileTransactionMessage)(e),t=>(0,k.setTransactionMessageLifetimeUsingBlockhash)(e,t),e=>(0,T.compileTransaction)(e),e=>new Uint8Array((0,T.getTransactionEncoder)().encode(e))))}}):(0,t.jsx)(v.a,{img:Q,title:e.standardSignAndSendTransaction?.uiOptions?.transactionInfo?.title||"Confirm transaction",subtitle:e.standardSignAndSendTransaction?.uiOptions?.description||`${h.name} wants your permission to approve the following transaction.`,cta:X?"Add funds":e.standardSignAndSendTransaction?.uiOptions?.buttonText||"Approve",instructions:j?.instructions??[],network:"solana:mainnet"==w.chain?"Solana":w.chain.replace("solana:",""),blockExplorerUrl:w.blockExplorerUrl,total:g?G?.total:Z?.total,fee:g?G?.fee:Z?.fee,balance:g?G?.balance:Z?.balance,swap:Z?.swap,transactingWalletAddress:q.address,disabled:!j?.hasFunds&&!K,isSubmitting:D,isPreparing:!j||F.isLoading,isTokenPriceLoading:g&&z,isMissingFunds:!j?.hasFunds,submitError:N??void 0,isSponsored:!!e.standardSignAndSendTransaction?.isSponsored,parseError:$,onClick:X?async()=>{if(!q)return;if(!K)throw Error("Funding wallet is not enabled");let t="FundingMethodSelectionScreen";d({...e,funding:{...e.funding,methodScreen:t},solanaFundingData:e?.solanaFundingData}),u(t)}:async()=>{try{if(U(!0),D||!q||!f||!y||!V)return;let t=await e.standardSignAndSendTransaction.onConfirm(A);if("signature"in t){let e=await async function({solanaClient:e,signature:t}){let n=(0,S.getBase58Decoder)().decode(t),r=await e.rpc.getTransaction(n,{maxSupportedTransactionVersion:0,commitment:"confirmed",encoding:"base64"}).send().catch(()=>null);return r?{fee:r.meta?.fee??0n}:null}({solanaClient:w,signature:t.signature});return void _({...t,fees:e?.fee})}_(t)}catch(e){console.warn({transaction:A,error:e}),H(e)}finally{U(!1)}},onClose:Y})}};e.s(["StandardSignAndSendTransactionScreen",()=>N,"default",()=>N],55524)}]);