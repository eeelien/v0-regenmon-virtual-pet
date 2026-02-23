(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,634204,e=>{"use strict";e.s(["O",()=>"sdk_fiat_on_ramp_completed_with_status"])},168271,e=>{"use strict";var t=e.i(14270),n=e.i(430321),a=e.i(494632);function i({title:e}){let{currentScreen:i,navigateBack:r,navigate:o,data:s,setModalData:d}=(0,n.a)();return(0,t.jsx)(a.M,{title:e,backFn:"ManualTransferScreen"===i?r:i===s?.funding?.methodScreen?s.funding.comingFromSendTransactionScreen?()=>o("SendTransactionScreen"):void 0:s?.funding?.methodScreen?()=>{let e=s.funding;e.usingDefaultFundingMethod&&(e.usingDefaultFundingMethod=!1),d({funding:e,solanaFundingData:s?.solanaFundingData}),o(e.methodScreen)}:void 0})}e.s(["t",()=>i])},456564,e=>{"use strict";var t=e.i(14270);let n=({...e})=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,t.jsx)("rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}),(0,t.jsx)("path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"}),(0,t.jsx)("path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"})]});e.s(["W",()=>n])},130131,e=>{"use strict";var t=e.i(97146),n=e.i(494632),a=e.i(733295);let i=t.styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 24px;
  padding-bottom: 24px;
`,r=t.styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    border-radius: var(--privy-border-radius-sm);
  }
`,o=t.styled.div`
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
`,(0,t.styled)(a.LinkButton)`
  margin-top: 16px;
`;let h=t.keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;(0,t.styled)(n.d)`
  border-radius: var(--privy-border-radius-md) !important;
  animation: ${h} 0.3s ease-in-out;
`;let p=t.styled.div``,m=t.styled.a`
  && {
    color: var(--privy-color-accent);
  }

  cursor: pointer;
`;e.s(["F",()=>o,"I",()=>r,"a",()=>s,"b",()=>d,"c",()=>c,"d",()=>u,"e",()=>i,"f",()=>p,"g",()=>m,"h",()=>l])},207485,e=>{"use strict";var t=e.i(14270),n=e.i(505034);let a=n.forwardRef(function({title:e,titleId:t,...a},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"}))});var i=e.i(97146);let r=({children:e,theme:n})=>(0,t.jsxs)(o,{$theme:n,children:[(0,t.jsx)(a,{width:"20px",height:"20px",color:"var(--privy-color-icon-muted)",strokeWidth:1.5,style:{flexShrink:0}}),(0,t.jsx)(s,{$theme:n,children:e})]}),o=i.styled.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-background-2);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,s=i.styled.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  flex: 1;
  text-align: left;

  /* text-sm/font-regular */
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem; /* 157.143% */
`;e.s(["I",()=>r],207485)},14723,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{fillRule:"evenodd",d:"M15.97 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H7.5a.75.75 0 0 1 0-1.5h11.69l-3.22-3.22a.75.75 0 0 1 0-1.06Zm-7.94 9a.75.75 0 0 1 0 1.06l-3.22 3.22H16.5a.75.75 0 0 1 0 1.5H4.81l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 0Z",clipRule:"evenodd"}))});e.s(["default",0,n])},815090,e=>{"use strict";var t=e.i(757086),n=e.i(505034),a=e.i(205384),i=e.i(957074),r=e.i(430321),o=e.i(634204);let s="moonpay";function d(e){return parseFloat(e)}function l(e,d=!1){let[c,u]=(0,n.useState)(null),{createAnalyticsEvent:h}=(0,i.u)(),{data:p,navigate:m,setModalData:f}=(0,r.a)(),g=p?.funding,v=(0,n.useRef)(0);return(0,n.useEffect)(()=>{let n=setInterval(async()=>{if(e)try{let[i]=await async function(e,n){return(0,t.ofetch)(`${n?a.M:a.v}/transactions/ext/${e}`,{query:{apiKey:n?a.w:a.x}})}(e,d),r="waitingAuthorization"===i.status&&"credit_debit_card"===i.paymentMethod?"pending":i.status;if(["failed","completed","awaitingAuthorization"].includes(r)&&(h({eventName:o.O,payload:{status:r,provider:s,paymentMethod:i.paymentMethod,cardPaymentType:i.cardPaymentType,currency:i.currency?.code,baseCurrencyAmount:i.baseCurrencyAmount,quoteCurrencyAmount:i.quoteCurrencyAmount,feeAmount:i.feeAmount,extraFeeAmount:i.extraFeeAmount,networkFeeAmount:i.networkFeeAmount,isSandbox:d}}),clearInterval(n)),"failed"===r||"serviceFailure"===r)return f({funding:{...g,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."},solanaFundingData:p?.solanaFundingData}),void m("FundingMethodSelectionScreen");u(r)}catch(e){404!==e.response?.status&&(v.current+=1),v.current>=3&&(h({eventName:o.O,payload:{status:"serviceFailure",provider:s}}),clearInterval(n),f({funding:{...g,errorMessage:"Something went wrong adding funds from Moonpay. Please try again or use another method to fund your wallet."},solanaFundingData:p?.solanaFundingData}),m("FundingMethodSelectionScreen"))}},3e3);return()=>clearInterval(n)},[e,v]),c}e.s(["a",()=>d,"u",()=>l])},924568,e=>{"use strict";var t=e.i(505034);let n=t.forwardRef(function({title:e,titleId:n,...a},i){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":n},a),e?t.createElement("title",{id:n},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"}))});e.s(["default",0,n])},428327,e=>{"use strict";var t=e.i(14270),n=e.i(924568),a=e.i(97146);let i=({children:e,theme:a})=>(0,t.jsxs)(r,{$theme:a,children:[(0,t.jsx)(n.default,{width:"20px",height:"20px",color:"var(--privy-color-icon-error)",strokeWidth:2,style:{flexShrink:0}}),(0,t.jsx)(o,{$theme:a,children:e})]}),r=a.styled.div`
  display: flex;
  gap: 0.75rem;
  background-color: var(--privy-color-error-bg);
  align-items: flex-start;
  padding: 1rem;
  border-radius: 0.75rem;
`,o=a.styled.div`
  color: ${e=>"dark"===e.$theme?"var(--privy-color-foreground-2)":"var(--privy-color-foreground)"};
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  flex: 1;
  text-align: left;
`;e.s(["E",()=>i])},116145,e=>{"use strict";var t=e.i(522081),n=e.i(399678),a=e.i(899662);let i=async({address:e,chain:i,rpcConfig:o,privyAppId:s})=>{try{let d=(0,t.createPublicClient)({chain:i,transport:(0,n.http)((0,a.a)(i,o,s))}),[l,c]=await Promise.all([d.readContract({abi:r,address:e,functionName:"symbol"}),d.readContract({abi:r,address:e,functionName:"decimals"})]);return{decimals:c,symbol:l}}catch(e){return console.log(e),null}},r=[{inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}];e.s(["g",()=>i])},511560,e=>{"use strict";var t=e.i(14270),n=e.i(505034);let a=n.forwardRef(function({title:e,titleId:t,...a},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"}))}),i=n.forwardRef(function({title:e,titleId:t,...a},i){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":t},a),e?n.createElement("title",{id:t},e):null,n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"}),n.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"}))});var r=e.i(14723),o=e.i(70233),s=e.i(494632),d=e.i(168271),l=e.i(428327),c=e.i(207485),u=e.i(205384),h=e.i(526520),p=e.i(957074),m=e.i(430321),f=e.i(483604),g=e.i(456564),v=e.i(116145),y=e.i(513575),x=e.i(857800),w=e.i(249489),b=e.i(671043),M=e.i(501691),C=e.i(403808),F=e.i(556391);let k=new Set([F.mainnet.id,C.base.id,M.optimism.id,b.polygon.id,w.arbitrum.id,x.avalanche.id,y.monadMainnet.id]),j=new Set([F.mainnet.id,C.base.id,b.polygon.id,M.optimism.id,w.arbitrum.id,x.avalanche.id,y.monadMainnet.id]),S={buy:"CARD",send:"CRYPTO_ACCOUNT"},A={USDC:"2b92315d-eab7-5bef-84fa-089a131333f5",ETH:"d85dce9b-5b73-5c3c-8978-522ce1d1c1b4",BTC:"5b71fc48-3dd3-540c-809b-f8c94d0e68b5",SOL:"4f039497-3af8-5bb3-951c-6df9afa9be1c",POL:"026bcc1e-9163-591c-a709-34dd18b2e7a1",MON:"92aa538f-b005-45cc-a237-71d6466f54d9"};F.mainnet.id,C.base.id,M.optimism.id,b.polygon.id,w.arbitrum.id,x.avalanche.id,y.monadMainnet.id;var T=e.i(614003),D=e.i(371507),E=e.i(815090),W=e.i(130131);e.i(252494),e.i(768820),e.i(329723);let O=e=>(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 210.2",xmlSpace:"preserve",...e,children:(0,t.jsx)("path",{d:"M93.6,27.1C87.6,34.2,78,39.8,68.4,39c-1.2-9.6,3.5-19.8,9-26.1c6-7.3,16.5-12.5,25-12.9  C103.4,10,99.5,19.8,93.6,27.1 M102.3,40.9c-13.9-0.8-25.8,7.9-32.4,7.9c-6.7,0-16.8-7.5-27.8-7.3c-14.3,0.2-27.6,8.3-34.9,21.2  c-15,25.8-3.9,64,10.6,85c7.1,10.4,15.6,21.8,26.8,21.4c10.6-0.4,14.8-6.9,27.6-6.9c12.9,0,16.6,6.9,27.8,6.7  c11.6-0.2,18.9-10.4,26-20.8c8.1-11.8,11.4-23.3,11.6-23.9c-0.2-0.2-22.4-8.7-22.6-34.3c-0.2-21.4,17.5-31.6,18.3-32.2  C123.3,42.9,107.7,41.3,102.3,40.9 M182.6,11.9v155.9h24.2v-53.3h33.5c30.6,0,52.1-21,52.1-51.4c0-30.4-21.1-51.2-51.3-51.2H182.6z   M206.8,32.3h27.9c21,0,33,11.2,33,30.9c0,19.7-12,31-33.1,31h-27.8V32.3z M336.6,169c15.2,0,29.3-7.7,35.7-19.9h0.5v18.7h22.4V90.2  c0-22.5-18-37-45.7-37c-25.7,0-44.7,14.7-45.4,34.9h21.8c1.8-9.6,10.7-15.9,22.9-15.9c14.8,0,23.1,6.9,23.1,19.6v8.6l-30.2,1.8  c-28.1,1.7-43.3,13.2-43.3,33.2C298.4,155.6,314.1,169,336.6,169z M343.1,150.5c-12.9,0-21.1-6.2-21.1-15.7c0-9.8,7.9-15.5,23-16.4  l26.9-1.7v8.8C371.9,140.1,359.5,150.5,343.1,150.5z M425.1,210.2c23.6,0,34.7-9,44.4-36.3L512,54.7h-24.6l-28.5,92.1h-0.5  l-28.5-92.1h-25.3l41,113.5l-2.2,6.9c-3.7,11.7-9.7,16.2-20.4,16.2c-1.9,0-5.6-0.2-7.1-0.4v18.7C417.3,210,423.3,210.2,425.1,210.2z"})}),I=e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 38.1",xmlSpace:"preserve",...e,children:[(0,t.jsx)("path",{style:{fill:"#5F6368"},d:"M37.8,19.7V29h-3V6h7.8c1.9,0,3.7,0.7,5.1,2c1.4,1.2,2.1,3,2.1,4.9c0,1.9-0.7,3.6-2.1,4.9c-1.4,1.3-3.1,2-5.1,2  L37.8,19.7L37.8,19.7z M37.8,8.8v8h5c1.1,0,2.2-0.4,2.9-1.2c1.6-1.5,1.6-4,0.1-5.5c0,0-0.1-0.1-0.1-0.1c-0.8-0.8-1.8-1.3-2.9-1.2  L37.8,8.8L37.8,8.8z"}),(0,t.jsx)("path",{style:{fill:"#5F6368"},d:"M56.7,12.8c2.2,0,3.9,0.6,5.2,1.8s1.9,2.8,1.9,4.8V29H61v-2.2h-0.1c-1.2,1.8-2.9,2.7-4.9,2.7  c-1.7,0-3.2-0.5-4.4-1.5c-1.1-1-1.8-2.4-1.8-3.9c0-1.6,0.6-2.9,1.8-3.9c1.2-1,2.9-1.4,4.9-1.4c1.8,0,3.2,0.3,4.3,1v-0.7  c0-1-0.4-2-1.2-2.6c-0.8-0.7-1.8-1.1-2.9-1.1c-1.7,0-3,0.7-3.9,2.1l-2.6-1.6C51.8,13.8,53.9,12.8,56.7,12.8z M52.9,24.2  c0,0.8,0.4,1.5,1,1.9c0.7,0.5,1.5,0.8,2.3,0.8c1.2,0,2.4-0.5,3.3-1.4c1-0.9,1.5-2,1.5-3.2c-0.9-0.7-2.2-1.1-3.9-1.1  c-1.2,0-2.2,0.3-3,0.9C53.3,22.6,52.9,23.3,52.9,24.2z"}),(0,t.jsx)("path",{style:{fill:"#5F6368"},d:"M80,13.3l-9.9,22.7h-3l3.7-7.9l-6.5-14.7h3.2l4.7,11.3h0.1l4.6-11.3H80z"}),(0,t.jsx)("path",{style:{fill:"#4285F4"},d:"M25.9,17.7c0-0.9-0.1-1.8-0.2-2.7H13.2v5.1h7.1c-0.3,1.6-1.2,3.1-2.6,4v3.3H22C24.5,25.1,25.9,21.7,25.9,17.7z"}),(0,t.jsx)("path",{style:{fill:"#34A853"},d:"M13.2,30.6c3.6,0,6.6-1.2,8.8-3.2l-4.3-3.3c-1.2,0.8-2.7,1.3-4.5,1.3c-3.4,0-6.4-2.3-7.4-5.5H1.4v3.4  C3.7,27.8,8.2,30.6,13.2,30.6z"}),(0,t.jsx)("path",{style:{fill:"#FBBC04"},d:"M5.8,19.9c-0.6-1.6-0.6-3.4,0-5.1v-3.4H1.4c-1.9,3.7-1.9,8.1,0,11.9L5.8,19.9z"}),(0,t.jsx)("path",{style:{fill:"#EA4335"},d:"M13.2,9.4c1.9,0,3.7,0.7,5.1,2l0,0l3.8-3.8c-2.4-2.2-5.6-3.5-8.8-3.4c-5,0-9.6,2.8-11.8,7.3l4.4,3.4  C6.8,11.7,9.8,9.4,13.2,9.4z"})]}),L=e=>{let[t,a]=(0,n.useState)();return(0,n.useEffect)(()=>{e().then(e=>{a(e)}).catch(()=>{})},[]),t},P={[F.mainnet.id]:"ethereum",[C.base.id]:"base",[M.optimism.id]:"optimism",[b.polygon.id]:"polygon",[w.arbitrum.id]:"arbitrum",[x.avalanche.id]:"avacchain",[y.monadMainnet.id]:"monad"},z=(e,t,n,a,i,r)=>new Promise(async(o,s)=>{var d;let l=(0,D.trigger)();if(!l)return void s(Error("Unable to initialize flow"));let c="ethereum"===t.chainType?function(e){let t=P[e];if(!t)throw new p.a(`Unsupported chainId: ${e} for Coinbase Onramp`);return t}(t.chain.id):"solana",u=t.isUSDC?"USDC":"ethereum"===t.chainType?(d=t.chain.id)===b.polygon.id?"POL":d===y.monadMainnet.id?"MON":"ETH":"SOL",h=await e.initCoinbaseOnRamp({addresses:[{address:t.address,blockchains:[c]}],assets:[u]}),{url:m}=function({appId:e,input:t,amount:n,blockchain:a,asset:i,experience:r}){let o=new URL("https://pay.coinbase.com/buy/select-asset");return o.searchParams.set("appId",t.app_id),o.searchParams.set("sessionToken",t.session_token),o.searchParams.set("endPartnerName",`privy:${e}`),o.searchParams.set("defaultExperience",r),o.searchParams.set("presetCryptoAmount",n.startsWith(".")?`0${n}`:n),o.searchParams.set("defaultNetwork",a),o.searchParams.set("defaultPaymentMethod",S[r]),o.searchParams.set("defaultAsset",A[i]),o.searchParams.set("partnerUserId",t.partner_user_id),{url:o}}({appId:e.getAppId(),input:h,amount:t.amount,blockchain:c,asset:u,experience:r});l.location=m.toString();let f={...i?.funding,showAlternateFundingMethod:!0};t.usingDefaultFundingMethod&&(f.usingDefaultFundingMethod=!1),n({funding:f,solanaFundingData:i?.solanaFundingData,coinbaseOnrampStatus:{popup:l}}),a("CoinbaseOnrampStatusScreen"),e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"coinbase-onramp",value:t.amount,chainType:t.chainType,chainId:"ethereum"===t.chainType?t.chain.id:t.chain}}),setTimeout(()=>{n({funding:f,solanaFundingData:i?.solanaFundingData,coinbaseOnrampStatus:{partnerUserId:h.partner_user_id,popup:l}})},5e3),o()}),_=async(e,t,n,a,i,r,o,s)=>{let d=(0,D.trigger)();if(!d)throw Error("Unable to initialize flow");let l="ethereum"===t.chainType?(0,T.chainToMoonpayCurrency)(t.chain.id,a):t.isUSDC?"USDC_SOL":"SOL",{signedUrl:c,externalTransactionId:u}=await e.signMoonpayOnRampUrl({address:t.address,useSandbox:n.fundingMethodConfig.moonpay.useSandbox??!1,config:{uiConfig:{accentColor:n.appearance.palette.accent,theme:n.appearance.palette.colorScheme},paymentMethod:s,currencyCode:l,quoteCurrencyAmount:(0,E.a)(t.amount)}});e.createAnalyticsEvent({eventName:"sdk_fiat_on_ramp_started",payload:{provider:"moonpay",value:t.amount,chainType:t.chainType,chainId:"ethereum"===t.chainType?t.chain.id:t.chain}}),d.location=c;let h={...o?.funding,showAlternateFundingMethod:!0};t.usingDefaultFundingMethod&&(h.usingDefaultFundingMethod=!1),i({moonpayStatus:{},funding:h,solanaFundingData:o?.solanaFundingData}),r("MoonpayStatusScreen"),setTimeout(()=>{i({moonpayStatus:{externalTransactionId:u},funding:h,solanaFundingData:o?.solanaFundingData})},8e3)},U=async e=>"u">typeof window&&"PaymentRequest"in window&&await new window.PaymentRequest([{supportedMethods:e}],{id:"0",total:{label:"Item",amount:{currency:"USD",value:"1.00"}}}).canMakePayment(),R=()=>U("https://apple.com/apple-pay"),Z=()=>U("https://google.com/pay"),B={component:()=>{let{wallets:e}=(0,f.u)(),{connectors:y}=(0,p.u)(),x=y.filter(h.v).flatMap(e=>e.wallets),{navigate:w,data:b,setModalData:M}=(0,m.a)(),{client:C}=(0,p.u)(),F=(0,u.u)(),S=b?.funding,A=L(R),D=L(Z),E="solana"===S.chainType,P=E?void 0:S,U=(0,n.useMemo)(()=>((e,t,n,a,i,r)=>{let o,s,d="solana"===n.chainType,l=d?void 0:n,c=n.isUSDC?"USDC":l?.erc20Address?void 0:"native-currency",u=!!d||c&&(0,T.isSupportedChainIdForMoonpay)(Number(n.chain.id),c),h=!!d||c&&((e,t)=>{switch(t){case"native-currency":return k.has(e);case"USDC":return j.has(e);default:return console.warn("Unknown asset passed to Coinbase Onramp"),!1}})(Number(n.chain.id),c),p=[];for(let o of(n.preferredCardProvider&&n.supportedOptions.sort(e=>e.provider===n.preferredCardProvider?-1:1),n.supportedOptions))"card"===o.method&&"coinbase"===o.provider&&h&&p.push(()=>z(t,n,a,i,r,"buy")),"card"===o.method&&"moonpay"===o.provider&&u&&c&&p.push(()=>_(t,n,e,c,a,i,r,"credit_debit_card"));for(let e of n.supportedOptions)"exchange"===e.method&&"coinbase"===e.provider&&h&&(o=()=>z(t,n,a,i,r,"buy"));for(let e of r?.funding?.supportedOptions??[])"wallets"===e.method&&(s=()=>i("TransferFromWalletScreen"));return{onFundWithCard:p,onFundWithExchange:o,onFundWithWallet:s}})(F,C,S,M,w,b),[F,C,S,b,M,w]),B=E?x.find(({address:e})=>e===S.address):e.find(({address:e})=>(0,o.getAddress)(e)===(0,o.getAddress)(S.address)),H=(0,h.Q)(B?.walletClientType||"unknown"),$=H?.name||"wallet",N=B&&"privy"!==B.walletClientType?$:F.name,V=(0,n.useMemo)(()=>S.uiConfig?.landing?.title?S.uiConfig?.landing?.title:`Add funds to your ${N?.toLowerCase().endsWith("wallet")?N:N+" wallet"}`,[S.uiConfig?.landing?.title,N]);(0,n.useEffect)(()=>{if(S?.defaultFundingMethod&&S.usingDefaultFundingMethod)switch(M({funding:{...S,usingDefaultFundingMethod:!1},solanaFundingData:b?.solanaFundingData}),S?.defaultFundingMethod){case"card":U.onFundWithCard[0]&&U.onFundWithCard[0]();break;case"exchange":U.onFundWithExchange&&U.onFundWithExchange();break;case"wallet":U.onFundWithWallet&&U.onFundWithWallet();break;case"manual":w("ManualTransferScreen")}},[]),(0,n.useEffect)(()=>{P?.erc20Address&&!P.erc20ContractInfo&&(0,v.g)({address:P.erc20Address,chain:P.chain,rpcConfig:F.rpcConfig,privyAppId:F.id}).then(e=>{M({...b,funding:{...P,erc20ContractInfo:e?{symbol:e.symbol,decimals:e.decimals}:void 0}})}).catch(console.error)},[P?.erc20Address,P?.chain]);let q=!(!P?.erc20Address||P?.erc20ContractInfo);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.t,{}),(0,t.jsx)("h3",{children:V}),(0,t.jsxs)(W.e,{children:[S.errorMessage&&(0,t.jsx)(l.E,{theme:F.appearance.palette.colorScheme,children:S.errorMessage}),U.onFundWithCard?.[0]&&(0,t.jsxs)(h.U,{disabled:q,onClick:U.onFundWithCard[0],children:[(0,t.jsx)(W.I,{children:(0,t.jsx)(a,{style:{width:24}})}),"Pay with card",A?(0,t.jsx)(O,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):D?(0,t.jsx)(I,{style:{marginLeft:"auto",maxWidth:"100%",width:"auto",height:"0.875rem"}}):null]}),U.onFundWithExchange&&(0,t.jsxs)(h.U,{disabled:q,onClick:U.onFundWithExchange,children:[(0,t.jsx)(W.I,{children:(0,t.jsx)(r.default,{style:{width:24}})}),"Transfer from an exchange"]}),U.onFundWithWallet&&(0,t.jsxs)(h.U,{disabled:q,onClick:U.onFundWithWallet,children:[(0,t.jsx)(W.I,{children:(0,t.jsx)(g.W,{style:{width:24}})}),"Transfer from wallet"]}),(0,t.jsxs)(h.U,{disabled:q,onClick:()=>w("ManualTransferScreen"),children:[(0,t.jsx)(W.I,{children:(0,t.jsx)(i,{style:{width:24}})}),"Receive funds"]}),S?.showAlternateFundingMethod&&U.onFundWithCard?.[1]&&(0,t.jsx)(c.I,{theme:F.appearance.palette.colorScheme,children:(0,t.jsxs)(W.f,{children:["Having trouble or facing location restrictions?"," ",(0,t.jsx)(W.g,{onClick:U.onFundWithCard[1],children:"Try a different provider."})]})})]}),(0,t.jsx)(s.B,{})]})}};e.s(["FundingMethodSelectionScreen",()=>B,"default",()=>B],511560)}]);