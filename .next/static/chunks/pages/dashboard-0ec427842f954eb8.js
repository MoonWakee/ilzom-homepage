(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{51075:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(66128)}])},66128:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var i=t(47568),r=t(34051),s=t.n(r),o=t(85893),a=t(67294),c=t(94096),u=t(48017),l=t(18795),d=t(60018),f=t(29168),h=t(18988),m=function(e){var n=e.size,t=void 0===n?"38":n;return(0,o.jsx)("svg",{width:t,height:t,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#ff874d",children:(0,o.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,o.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[(0,o.jsx)("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),(0,o.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:(0,o.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})})},p=t(14924),x=t(26042),b=t(69396),g=t(7297),w=t(35553),j=t(336),v=t(64115),k=t(72363),y=t(109),S=t(95934),Z=t(97907),_=t.n(Z),C=t(70371),H=(0,C.eI)({url:"https://api.thegraph.com/subgraphs/name/slgraham/guildauctionqueues-xdai",exchanges:[C.B5,C.Ek]});function z(){var e=(0,g.Z)(['\n  query GetBids($details: String!) {\n    bids(where: { details: $details, status: "accepted" }) {\n      amount\n      status\n      details\n      createdAt\n      acceptTxHash\n    }\n  }\n']);return z=function(){return e},e}function D(){var e=(0,g.Z)(["\n  query GetBids($details: String!) {\n    bids(where: { details: $details }) {\n      amount\n      status\n    }\n  }\n"]);return D=function(){return e},e}var A=_()(z()),I=_()(D()),P=function(){var e=(0,i.Z)(s().mark((function e(n){var t,i,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.query(A,{details:n}).toPromise();case 2:if(t=e.sent,i=t.data,r=t.error,i){e.next=8;break}return r&&console.log(r),e.abrupt("return",null);case 8:return e.abrupt("return",i.bids);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=(0,i.Z)(s().mark((function e(n){var t,i,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.query(I,{details:n}).toPromise();case 2:if(t=e.sent,i=t.data,r=t.error,i){e.next=8;break}return r&&console.log(r),e.abrupt("return",null);case 8:return e.abrupt("return",i.bids);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),N=t(15912),B=t(46754),L=t(86518),R=t(61969);function W(){var e=(0,g.Z)(["\n  font-family: ",";\n  letter-spacing: 1.2px;\n  color: ",";\n  color: ",";\n  margin-bottom: 1rem;\n"]);return W=function(){return e},e}function M(){var e=(0,g.Z)(["\n  font-family: ",";\n  line-height: 1.8;\n  color: white;\n  margin-bottom: 2rem;\n"]);return M=function(){return e},e}function O(){var e=(0,g.Z)(["\n  font-family: ",";\n  color: white;\n  line-height: 1.4;\n  background-color: ",";\n  padding: 5px 10px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-right: 0.5rem;\n"]);return O=function(){return e},e}var T=(0,S.Z)(j.X)(W(),L.r.fonts.uncial,L.r.colors.red,L.r.colors.red),$=(0,S.Z)(v.x)(M(),L.r.fonts.texturina),q=(0,S.Z)(v.x)(O(),L.r.fonts.jetbrains,L.r.colors.blackDark),G=function(e){var n=e.clientInfo,t=e.getClientInfo,r=(0,a.useState)({}),u=r[0],l=r[1],d=(0,a.useState)({}),f=d[0],h=d[1],m=(0,a.useState)([]),g=m[0],j=m[1],v=(0,a.useState)([]),S=v[0],Z=v[1],_=(0,N.Z)(),C=_.submissionTextUpdates,H=_.bookConsultation,z=function(){var e=(0,i.Z)(s().mark((function e(n,t){var i,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l((0,b.Z)((0,x.Z)({},u),(0,p.Z)({},n,!0))),e.next=4,P(n);case 4:if(!((i=e.sent).length>0)){e.next=11;break}return e.next=8,(0,B.rP)(t,i[i.length-1].acceptTxHash,i[i.length-1].amount);case 8:j((0,b.Z)((0,x.Z)({},g),(0,p.Z)({},n,i[i.length-1]))),e.next=15;break;case 11:return e.next=13,E(n);case 13:r=e.sent,Z((0,b.Z)((0,x.Z)({},S),(0,p.Z)({},n,r[r.length-1])));case 15:l((0,b.Z)((0,x.Z)({},u),(0,p.Z)({},n,!1))),h((0,b.Z)((0,x.Z)({},f),(0,p.Z)({},n,!0))),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(n,t){return e.apply(this,arguments)}}(),D=function(){var e=(0,i.Z)(s().mark((function e(n,i){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l((0,b.Z)((0,x.Z)({},u),(0,p.Z)({},n,!0))),e.next=3,H(n,i);case 3:return e.next=5,t();case 5:l((0,b.Z)((0,x.Z)({},u),(0,p.Z)({},n,!1)));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}();return(0,o.jsx)(k.M,{columns:1,w:"100%",children:n.map((function(e,n){return(0,o.jsxs)(c.k,{minH:"200px",direction:"column",py:"2rem",px:"1.5rem",bg:(n+1)%2===0?"blackLight":"blackLighter",children:[(0,o.jsx)(T,{fontSize:{base:"16px"},children:e.fields["Project Name"]}),(0,o.jsx)($,{fontSize:{base:"12px",lg:"16px"},children:e.fields["Project Description"]}),(0,o.jsxs)(c.k,{direction:{base:"column",lg:"row"},justifyContent:"space-between",alignItems:"center",children:[(0,o.jsxs)(c.k,{direction:"row",children:[(0,o.jsx)(q,{fontSize:{base:"12px"},_hover:{bg:L.r.colors.red},onClick:function(){return window.open("https://blockscout.com/xdai/mainnet/tx/".concat(e.fields["Submission Hash"]),"_blank")},children:"Application receipt"}),e.fields["Consultation Hash"]&&(0,o.jsx)(q,{fontSize:{base:"12px"},_hover:{bg:L.r.colors.red},onClick:function(){return window.open("https://blockscout.com/xdai/mainnet/tx/".concat(e.fields["Consultation Hash"]),"_blank")},children:"Consultation receipt"}),(e.fields["Bid Hash"]||g[e.fields["Submission Hash"]])&&(0,o.jsxs)(q,{fontSize:{base:"12px"},_hover:{bg:L.r.colors.red},onClick:function(){return window.open("https://blockscout.com/xdai/mainnet/tx/".concat(e.fields["Bid Hash"]),"_blank")},children:[e.fields["Bid Hash"]?w.dF(e.fields["Bid Amount"]):w.dF(g[e.fields["Submission Hash"]].amount)," ","$RAID"]})]}),!e.fields["Consultation Hash"]&&(e.fields["Bid Hash"]?(0,o.jsx)(R.Db,{ml:"auto",isLoading:u[e.fields["Submission Hash"]],loadingText:C,onClick:function(){D(e.fields["Submission Hash"],e.fields.ID)},children:"Secure Consultation"}):!f[e.fields["Submission Hash"]]&&(0,o.jsx)(R.Db,{ml:{lg:"auto"},mt:"1rem",isLoading:u[e.fields["Submission Hash"]],onClick:function(){return z(e.fields["Submission Hash"],e.fields.ID)},children:"Check bid status"})),f[e.fields["Submission Hash"]]&&(g[e.fields["Submission Hash"]]?(0,o.jsx)(R.Db,{ml:"auto",isLoading:u[e.fields["Submission Hash"]],loadingText:C,onClick:function(){D(e.fields["Submission Hash"],e.fields.ID)},children:"Secure Consultation"}):S[e.fields["Submission Hash"]]?(0,o.jsx)(y.u,{fontFamily:L.r.fonts.mono,label:"Click to go to bidding page",placement:"left",children:(0,o.jsx)(q,{fontSize:{base:"16px"},textAlign:"left",mb:".2rem",textDecoration:"underline",onClick:function(){return window.open("https://bids.raidguild.org/bids/".concat(e.fields["Submission Hash"]),"_blank")},children:"Bids in queue"})}):(0,o.jsx)(y.u,{fontFamily:L.r.fonts.mono,label:"Click to go to bidding page",placement:"left",children:(0,o.jsx)(q,{fontSize:{base:"16px"},textAlign:"left",mb:".2rem",textDecoration:"underline",onClick:function(){return window.open("https://bids.raidguild.org/bids/".concat(e.fields["Submission Hash"]),"_blank")},children:"No bids yet"})}))]})]},e)}))})},Y=t(31838),F=function(){var e=(0,a.useContext)(l.I),n=(0,a.useState)(""),t=n[0],r=n[1],p=(0,a.useState)([]),x=p[0],b=p[1],g=(0,a.useState)(!1),w=g[0],j=g[1];(0,a.useEffect)((function(){r(window.innerWidth),window.removeEventListener("resize",(function(){})),window.addEventListener("resize",(function(e){r(window.innerWidth)}))}),[]),(0,a.useEffect)((function(){e.signerAddress&&v()}),[e.signerAddress]);var v=function(){var n=(0,i.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return j(!0),n.next=3,(0,B.Ds)(e.signerAddress);case 3:t=n.sent,b(t.data),j(!1);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,o.jsxs)(c.k,{width:"100vw",minHeight:"100vh",direction:"column",justifyContent:"space-between",alignItems:"center",children:[(0,o.jsx)(d.h,{}),(0,o.jsx)(u.xu,{px:{base:"2rem",lg:"5rem"},w:"100%",children:(0,o.jsx)(f.h,{windowWidth:t,navLinks:!1,getClientInfo:v})}),(0,o.jsxs)(c.k,{direction:"column",px:{base:"2rem",lg:"5rem"},w:"100%",my:"4rem",children:[!e.signerAddress&&!w&&(0,o.jsx)(R.$N,{my:"auto",fontSize:{base:"16px"},children:"Connect wallet to view your hire applications."}),w?(0,o.jsx)(m,{}):e.signerAddress&&!x.length?(0,o.jsx)(R.$N,{children:"No hire applications found for this address."}):null,x.length>0&&!w&&(0,o.jsxs)(c.k,{direction:"column",children:[(0,o.jsx)(R.O4,{fontSize:{base:"1.5rem",lg:"36px"},mb:"1rem",children:"Your hire applications"}),(0,o.jsx)(R.X2,{fontSize:{base:"12px",lg:"16px"},maxWidth:"100%",mb:"2rem",children:"Find below all the applications that you have submitted to the guild for hire. Once your bid is accepted, you can secure your consultation with the guild by paying a one time ".concat(Y.bZ," $RAID.")}),(0,o.jsx)(R.H7,{mr:"auto",mb:"2rem",onClick:function(){return window.open("https://bids.raidguild.org/","_blank")},children:"Go to bidding page"}),(0,o.jsx)(G,{clientInfo:x,web3:e.web3,getClientInfo:v})]})]}),(0,o.jsx)(h.$,{})]})}},60018:function(e,n,t){"use strict";t.d(n,{h:function(){return c}});var i=t(85893),r=t(9008),s=t.n(r),o=t(4298),a=t.n(o),c=function(){return(0,i.jsxs)(s(),{children:[(0,i.jsx)("title",{children:"iLZOM DAO Edit"}),(0,i.jsx)("meta",{name:"description",content:"A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons"}),(0,i.jsx)("meta",{property:"og:title",content:"RaidGuild"}),(0,i.jsx)("meta",{property:"og:description",content:"A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons"}),(0,i.jsx)("meta",{property:"og:image",content:"https://res.cloudinary.com/saimano/image/upload/v1625726563/RaidGuild/illustrations/raid__cloud__castle_j8pe6f.png"}),(0,i.jsx)("meta",{property:"og:url",content:"https://raidguild.org"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:title",content:"RaidGuild"}),(0,i.jsx)("meta",{name:"twitter:description",content:"A Decentralized Collective of Mercenaries Ready to Slay Your Web3 Product Demons"}),(0,i.jsx)("meta",{name:"twitter:image",content:"https://res.cloudinary.com/saimano/image/upload/v1625726563/RaidGuild/illustrations/raid__cloud__castle_j8pe6f.png"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,i.jsx)(a(),{src:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/js/all.min.js",integrity:"sha512-YSdqvJoZr83hj76AIVdOcvLWYMWzy6sJyIMic2aQz5kh2bPTd9dzY3NtdeEAzPp/PhgZqr4aJObB3ym/vsItMg==",crossorigin:"anonymous",referrerpolicy:"no-referrer",strategy:"afterInteractive"})]})}}},function(e){e.O(0,[482,277,714,322,23,878,600,232,912,774,888,179],(function(){return n=51075,e(e.s=n);var n}));var n=e.O();_N_E=n}]);