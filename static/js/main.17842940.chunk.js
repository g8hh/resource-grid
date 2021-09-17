(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{29:function(e,n,a){},30:function(e,n,a){},33:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(9),i=a.n(o),c=a(8),l=(a(29),a(2)),s=(a(30),a(3)),u=a(11),d=a(13),p=a(4),v="resource_grid",h={resources:Array.from({length:81},(function(e){return{have:0,lastTime:null,progress:0,unlocked:!1}}))};h.resources[0].have=1;var m=function(){var e;return null!==(e=JSON.parse(localStorage.getItem(v)))&&void 0!==e?e:f({},h)}();function f(e,n){var a;for(var t in e=null!==(a=e)&&void 0!==a?a:{},n){var r;if(Array.isArray(n[t]))e[t]=null!==(r=e[t])&&void 0!==r?r:[],g(e[t],n[t]);else if(null===n[t]){var o;e[t]=null!==(o=e[t])&&void 0!==o?o:n[t]}else if("object"===typeof n[t])e[t]=f(e[t],n[t]);else{var i;e[t]=n[t].constructor(null!==(i=e[t])&&void 0!==i?i:n[t])}}return e}function g(e,n){for(var a=0,t=n.length;a<t;a++)if(Array.isArray(n[a]))g(e[a],n[a]);else if(null===n[a]){var r;e[a]=null!==(r=e[a])&&void 0!==r?r:n[a]}else if("object"===typeof n[a])e[a]=f(e[a],n[a]);else{var o;e[a]=n[a].constructor(null!==(o=e[a])&&void 0!==o?o:n[a])}return e}var b=a(16),x=a(17),w=function(){function e(n){var a;Object(b.a)(this,e),this.name=n.name,this.description=n.description,this.unlockAt=n.unlockAt,this._cost=n.cost,this.craftTime=n.craftTime,this.craftMultiply=n.craftMultiply||1,this._position=n.position,this.order=9*this._position[0]+this._position[1],this.randomGrantOnCraft=null!==(a=n.randomGrantOnCraft)&&void 0!==a?a:[],this._effectMultiply=n.effectMultiply,this.automates=n.automates}return Object(x.a)(e,[{key:"position",get:function(){return{x:this._position[1],y:this._position[0]}}},{key:"effectMultiply",value:function(e){return"function"===typeof this._effectMultiply?this._effectMultiply(e):1}},{key:"cost",value:function(e){var n;if("undefined"===typeof this._cost)return null;for(var a in n="function"===typeof this._cost?this._cost(e):this._cost,n)n[a]=Math.ceil(n[a]),n[a]<=0&&delete n[a];return n}}]),e}(),S={TreeSeed:new w({name:"TreeSeed",description:"Generate tree",automates:["Tree"],unlockAt:{},position:[0,0]}),Tree:new w({name:"Tree",craftTime:20,unlockAt:{},position:[0,1]}),Log:new w({name:"Log",cost:{Tree:1},craftTime:20,craftMultiply:2,randomGrantOnCraft:[[8e-4,"TreeSeed",0]],unlockAt:{Tree:1},position:[0,2]}),Plank:new w({name:"Plank",cost:{Log:1},craftTime:15,craftMultiply:3,unlockAt:{Log:1},position:[0,3]}),Charcoal:new w({name:"Charcoal",cost:{Log:3},craftTime:3,craftMultiply:4,unlockAt:{CopperOre:1},position:[0,4]}),Vine:new w({name:"Vine",position:[0,5]}),Mushroom:new w({name:"Mushroom",position:[0,6]}),Stone:new w({name:"Stone",craftTime:20,randomGrantOnCraft:[[.05,"CopperOre"],[.02,"IronOre"],[.01,"GoldOre"],[.001,"EmeraldStone"]],description:"Chance to grant some ore on craft.\nChance is based on Pickaxe",effectMultiply:function(e){return Math.pow(e[S.Pickaxe.order].have,1.3)},unlockAt:{Pickaxe:1},position:[2,0]}),CopperOre:new w({name:"CopperOre",unlockAt:{CopperOre:1},position:[2,1]}),IronOre:new w({name:"IronOre",unlockAt:{IronOre:1},position:[2,2]}),GoldOre:new w({name:"GoldOre",unlockAt:{GoldOre:1},position:[2,3]}),EmeraldStone:new w({name:"EmeraldStone",position:[2,5]}),AmethystStone:new w({name:"AmethystStone",position:[2,6]}),RubyStone:new w({name:"RubyStone",position:[2,7]}),SapphireStone:new w({name:"SapphireStone",position:[2,8]}),Copper:new w({name:"Copper",cost:{CopperOre:1,Charcoal:1},craftTime:10,unlockAt:{CopperOre:1},position:[3,1]}),Iron:new w({name:"Iron",cost:{IronOre:1,Charcoal:3},craftTime:15,unlockAt:{IronOre:1},position:[3,2]}),Gold:new w({name:"Gold",cost:{GoldOre:1,Charcoal:2},unlockAt:{GoldOre:1},position:[3,3]}),Emerald:new w({name:"Emerald",cost:{EmeraldStone:10,Lava:1},craftTime:100,position:[3,5]}),Amethyst:new w({name:"Amethyst",cost:{AmethystStone:10,Lava:2},craftTime:150,position:[3,6]}),Ruby:new w({name:"Ruby",cost:{RubyStone:10,Lava:4},craftTime:200,position:[3,7]}),Sapphire:new w({name:"Sapphire",cost:{SapphireStone:10,Lava:8},craftTime:250,position:[3,8]}),Water:new w({name:"Water",craftTime:100,unlockAt:{Copper:1},position:[5,0]}),Lava:new w({name:"Lava",cost:{Stone:250,Charcoal:50},unlockAt:{Stone:100,Charcoal:1},craftTime:500,position:[5,1]}),Steam:new w({name:"Steam",cost:{Water:100,Lava:8},craftTime:300,craftMultiply:100,position:[5,2]}),Axe:new w({name:"Axe",description:"Cuts tree",cost:function(e){return{Log:Math.pow(e+1,2),Plank:3*Math.pow(e+1,2)}},craftTime:5,automates:["Log"],unlockAt:{Plank:1},position:[6,0]}),Saw:new w({name:"Saw",description:"Automates Plank",cost:function(e){return{Plank:10*Math.pow(e+1,2),Iron:3*Math.pow(e+1,1.2)}},craftTime:60,automates:["Plank"],unlockAt:{Iron:1},position:[6,1]}),Pickaxe:new w({name:"Pickaxe",description:"Automatically mines stone",cost:function(e){return{Plank:10*Math.pow(e+1,e/100+1),Stone:6*Math.pow(e,1.4),Copper:3*Math.pow(Math.max(0,e-4),2),Iron:5*Math.pow(Math.max(0,e-9),2),Gold:7*Math.pow(Math.max(0,e-14),2)}},craftTime:30,automates:["Stone"],unlockAt:{Plank:1},position:[6,2]}),GemstomePickaxe:new w({name:"GemstonePickaxe",craftTime:120,unlockAt:{EmeraldStone:1},position:[6,3]}),Pump:new w({name:"Pump",description:"Generates Water",cost:function(e){return{Copper:30*Math.pow(e+1,1.2),Iron:10*Math.pow(e+1,1.2),Gold:10*Math.pow(e+1,1.2)}},craftTime:80,automates:["Water"],unlockAt:{Copper:1},position:[6,4]}),Volcano:new w({name:"Volcano",description:"Automates Lava",cost:function(e){return{Stone:500,Lava:1*Math.pow(e,2)}},craftTime:50,automates:["Lava"],unlockAt:{Lava:1},position:[6,5]}),MetalworkFactory:new w({name:"MetalworkFactory",description:"Automates Copper, Iron and Gold",cost:function(e){return{Iron:300*Math.pow(e+1,1.15),Gold:300*Math.pow(e+1,1.15),Pump:2*(e+1),Volcano:e+1}},craftTime:500,automates:["Iron","Gold","Copper"],unlockAt:{Pump:1,Volcano:1},position:[6,6]}),Forest:new w({name:"Forest",position:[7,0]}),Underground:new w({name:"Underground",position:[7,1]}),Ocean:new w({name:"Ocean",position:[7,2]}),City:new w({name:"City",position:[7,3]}),EarthEssence:new w({name:"EarthEssence",position:[7,4]}),DivineShard:new w({name:"DivineShard",position:[8,0]}),ReplicantiBoost:new w({name:"ReplicantiBoost",position:[8,7]}),Replicanti:new w({name:"Replicanti",cost:{Replicanti:1},craftMultiply:2,effectMultiply:function(e){var n=e[S.Replicanti.order].have,a=e[S.ReplicantiBoost.order].have,t=Math.min(.95,.5+.4/(1/(Math.pow(a,.9)/50)));return Math.pow(a+1,1.2)*Math.pow(n+1,t)/(n+1)},automates:["Replicanti"],craftTime:10,position:[8,8]})},k=new Array(81).fill(null);for(var O in S){var A=S[O],y=9*A.position.y+A.position.x;k[y]=A}var j=Array.from({length:81},(function(e,n){return k[n]?k.findIndex((function(e){return!(!e||!e.automates)&&e.automates.includes(k[n].name)})):null}));function M(e){return S[e]}function E(e,n){var a=M(e);if(null===n.resources[a.order].startTime){var t=a.cost(n.resources[a.order].have),r=1/0;if(null===t)return r;for(var o in t){var i=t[o],c=n.resources[M(o).order].have;if(i>c)return!1;r=Math.min(r,c/i)}return Math.floor(r)}}function C(e,n){var a=S[e],t=a.order,r=1e3*a.craftTime;return-1!==j[t]&&(r/=Math.max(1,n.resources[j[t]].have),r/=k[j[t]].effectMultiply(n.resources)),r}function G(e,n){var a=S[e];if(!a||!a.unlockAt)return!1;for(var t in a.unlockAt)if(n[S[t].order].have<a.unlockAt[t])return!1;return!0}var T="resource/CRAFT_START",I="resource/CRAFT_UPDATE",z="resource/RESOURCE_UNLOCK",R=function(e){return{type:T,order:e}},B=function(e){var n=e.order,a=e.canBulk,t=e.progressIncrement;return{type:I,order:n,canBulk:a,progressIncrement:t}},L=function(e){return{type:z,order:e}};function Q(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,t=a;for(var r in n){var o=n[r],i=S[r].order;t=Math.min(t,e[i].have/o)}if((t=Math.floor(t))<=0)return!1;for(var c in n){var l=n[c],s=S[c].order;e[s]=Object(p.a)(Object(p.a)({},e[s]),{},{have:e[s].have-l*t})}return t}var H,F,W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.resources,n=arguments.length>1?arguments[1]:void 0,a=k[n.order];if(!a)return e;var t=n.order,r=e[t].have,o=a.cost(r);switch(n.type){case T:if(null!==(e=Object(d.a)(e))[t].lastTime)return e;var i=Q(e,o,1);return i?(e[t]=Object(p.a)(Object(p.a)({},e[t]),{},{lastTime:(new Date).getTime(),progress:0}),e):e;case I:if((e=Object(d.a)(e))[t]=Object(p.a)(Object(p.a)({},e[t]),{},{lastTime:(new Date).getTime(),progress:e[t].progress+n.progressIncrement}),e[t].progress>=1){e[t].lastTime=null;var c=1;n.canBulk?(c+=Q(e,o,Math.floor(e[t].progress)-1),e[t].have+=c*a.craftMultiply,e[t].progress%=1):(e[t].have+=a.craftMultiply,e[t].progress=0);for(var l=a.effectMultiply(e),s=0;s<a.randomGrantOnCraft.length;s++){var v=Object(u.a)(a.randomGrantOnCraft[s],2),h=v[0],f=v[1],g=h*l,b=1-Math.pow(1-g,c);Math.random()<b&&(e[S[f].order]=Object(p.a)(Object(p.a)({},e[S[f].order]),{},{have:e[S[f].order].have+1}))}}return e;case z:return(e=Object(d.a)(e))[t]=Object(p.a)(Object(p.a)({},e[t]),{},{unlocked:!0}),e;default:return e}},D="data:image/png;base64,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",Y=a(1),N=s.b.div(H||(H=Object(l.a)(["\n  --costCellWidth: calc(var(--cellWidth) / 2);\n  --costCellHeight: calc(var(--cellHeight) / 3);\n\n  display: grid;\n  grid-template-columns: repeat(2, minmax(calc(var(--cellWidth) / 2), 1fr));\n  grid-auto-rows: var(--costCellHeight);\n  grid-auto-columns: var(--costCellWidth);\n  place-items: center;\n"]))),J=s.b.div(F||(F=Object(l.a)(["\n  --imageSize: min(var(--costCellWidth), var(--costCellHeight));\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n\n  box-sizing: content-box;\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n\n  color: var(--colReverse);\n  font-weight: 900;\n  text-shadow:\n    calc(var(--imageSize) / 60) calc(var(--imageSize) / 60) 0 var(--colMain1),\n    calc(var(--imageSize) / -60) calc(var(--imageSize) / -60) 0 var(--colMain1),\n    calc(var(--imageSize) / 60) calc(var(--imageSize) / -60) 0 var(--colMain1),\n    calc(var(--imageSize) / -60) calc(var(--imageSize) / 60) 0 var(--colMain1);\n  text-align: right;\n\n  border: calc(var(--imageSize) / 15) solid var(--colMain2);\n  border-radius: calc(var(--imageSize) / 2);\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  filter: drop-shadow(calc(var(--min) / 500) calc(var(--min) / 500) 0 var(--colStrong));\n"])),D);var U,V,X,q,P,K,Z=function(e){var n=e.cost;return Object(Y.jsx)(N,{children:n.map((function(e,n){var a=Object(u.a)(e,2),t=a[0],r=a[1],o=S[t];return Object(Y.jsx)("div",{children:Object(Y.jsx)(J,{style:{backgroundPosition:"calc(var(--resourceGap) * -".concat(o.position.x,") calc(var(--resourceGap) * -").concat(o.position.y,")")},children:r})},n)}))})},_=Object(s.c)(U||(U=Object(l.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%) scale(0.2, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1, 1);\n  }\n"]))),$=s.b.div(V||(V=Object(l.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n  --cellWidth: calc(var(--boxSize) / var(--boxRatio));\n  --cellHeight: var(--boxSize);\n  --borderRadius: calc(var(--boxSize) / 15);\n\n  margin: calc(var(--margin) / 2);\n\n  width: var(--cellWidth);\n  height: var(--cellHeight);\n  \n  background-color: var(--colMain3);\n  border-radius: var(--borderRadius);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n\n  &:hover::before {\n    content: attr(name);\n\n    padding: 1% 5%;\n    \n    min-width: 60%;\n    height: 15%;\n\n    position: absolute;\n    top: -15%;\n    left: 5%;\n\n    color: var(--colMainReverse);\n    word-spacing: -0.3em;\n    font-size: 0.9em;\n    text-align: center;\n\n    background-color: var(--colMain4);\n    border-radius: calc(var(--cellSize) / 30);\n\n    animation: "," 0.4s cubic-bezier(.12,.81,.31,.95);\n    \n    pointer-events: none;\n  }\n"])),_),ee=s.b.div(X||(X=Object(l.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),ne=s.b.span(q||(q=Object(l.a)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 0%;\n  max-height: 100%;\n\n  background-color: var(--colOverlay);\n  border-radius: var(--borderRadius);\n\n  z-index: -1;\n"]))),ae=s.b.div(P||(P=Object(l.a)(["\n  --imageSize: calc(var(--boxSize) / var(--boxRatio) - var(--margin));\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n\n  box-sizing: content-box;\n  margin: calc(var(--margin) / 2);\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  filter: drop-shadow(var(--baseShadow));\n"])),D),te=s.b.div(K||(K=Object(l.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"])));var re,oe,ie=Object(c.b)((function(){return{}}),{craftStart:R,craftUpdate:B})((function(e){var n,a=e.data,t=e.index,r=e.craftStart,o=(e.craftEnd,a?a.name.replace(/(.)([A-Z])/g,(function(e,n,a){return"".concat(n," ").concat(a)})):""),i=Object(c.c)((function(e){return e.resources[t]})),l=a?Object.entries(null!==(n=a.cost(i.have))&&void 0!==n?n:{}):[];return i.unlocked?Object(Y.jsx)($,{onClick:function(){var e;a&&0!==Object.keys(null!==(e=a.cost(i.have))&&void 0!==e?e:{}).length&&r(t)},name:o,children:a&&Object(Y.jsxs)(ee,{children:[Object(Y.jsxs)("span",{children:[Object(Y.jsx)(ae,{style:{backgroundPosition:"calc(var(--resourceGap) * -".concat(a.position.x,") calc(var(--resourceGap) * -").concat(a.position.y,")")}}),Object(Y.jsx)(te,{children:i.have}),Object(Y.jsx)(ne,{style:{height:"".concat(100*i.progress,"%")}})]}),Object(Y.jsx)(Z,{cost:l})]})}):Object(Y.jsx)($,{style:{opacity:.3,pointerEvents:"none"}})})),ce=s.b.div(re||(re=Object(l.a)(["\n  --cellSize: calc(var(--min) / 9);\n\n  flex: 9;\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),le=s.b.div(oe||(oe=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n  opacity: 0.3;\n\n  flex: 7;\n"])));var se,ue,de=function(e){e.save;var n=e.craftStart;return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(ce,{children:k.map((function(e,a){return Object(Y.jsx)(ie,{data:e,index:a,craftStart:n},null!==e?e.name:"empty_".concat(a))}))}),Object(Y.jsx)(le,{children:"- Nothing -"})]})},pe=Object(s.a)(se||(se=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    /* font-family: 'Azeret Mono', monospace; */\n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colReverseWeaker: #cdcdcd;\n    --colAlt1: #13d1f2;\n    --colOverlay: #fff3;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colReverseWeaker: #4a4a4a;\n    --colAlt1: #f29913;\n    --colOverlay: #0003;\n  }\n"]))),ve=s.b.div(ue||(ue=Object(l.a)(["\n  --min: min(var(--w), var(--h));\n\n  --baseShadow: calc(var(--min) / 250) calc(var(--min) / 250) 0 var(--colStrong);\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--min) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n  \n  @media only screen and (orientation: portrait) {\n    & {\n      --w: 100vw;\n      --h: calc(100vw * 9 / 16);\n      font-size: calc(var(--w) / 70);\n    }\n  }\n  @media only screen and (orientation: landscape) {\n    & {\n      --w: 100vh;\n      --h: calc(100vh * 9 / 16);\n      font-size: calc(var(--h) / 70);\n    }\n  }\n  @media only screen and (min-width: 1600px) and (min-height: 900px) {\n    & {\n      --w: 1600px;\n      --h: 900px;\n      font-size: calc(var(--h) / 70);\n    }\n  }\n"])));var he=function(){return Object(Y.jsxs)("div",{className:"App",children:[Object(Y.jsx)(pe,{}),Object(Y.jsx)(ve,{children:Object(Y.jsx)(de,{})})]})},me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(n){var a=n.getCLS,t=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;a(e),t(e),r(e),o(e),i(e)}))},fe=a(12),ge=Object(fe.a)({resources:W}),be=Object(fe.b)(ge),xe=(new Date).getTime();var we=function(){var e=be.getState(),n=(new Date).getTime();n-xe>5e3&&function(e){localStorage.setItem(v,JSON.stringify(e))}(e);for(var a=0;a<k.length;a++){var t=k[a];if(null!==t){var r=a,o=e.resources[r];if(!o.unlocked&&G(t.name,e.resources)&&be.dispatch(L(r)),t.automates&&o.have>=1)for(var i=0;i<t.automates.length;i++){var c=S[t.automates[i]],l=c.order;null===e.resources[l].lastTime&&0!==E(c.name,e)&&be.dispatch(R(l))}var s=o.lastTime;if(null!==s){var u,d=(n-s)/C(t.name,e);be.dispatch(B({order:a,canBulk:1<=(null===(u=e.resources[j[r]])||void 0===u?void 0:u.have),progressIncrement:d}))}}}};i.a.render(Object(Y.jsx)(r.a.StrictMode,{children:Object(Y.jsx)(c.a,{store:be,children:Object(Y.jsx)(he,{})})}),document.getElementById("root")),setInterval((function(){return we(m)}),1e3/60),me()}},[[33,1,2]]]);
//# sourceMappingURL=main.17842940.chunk.js.map