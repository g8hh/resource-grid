(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),i=t.n(r),c=t(7),l=(t(34),t(3)),s=(t(35),t(4)),u=t(6),m=t(12),p=t(5),d="resource_grid",h={resources:Array.from({length:81},(function(e){return{have:0,lastTime:null,progress:0,unlocked:!1,automationDisabled:!1}}))};h.resources[0].have=1;var f=function(){var e;return null!==(e=JSON.parse(localStorage.getItem(d)))&&void 0!==e?e:v({},h)}();function v(e,n){var t;for(var a in e=null!==(t=e)&&void 0!==t?t:{},n){var o;if(Array.isArray(n[a]))e[a]=null!==(o=e[a])&&void 0!==o?o:[],b(e[a],n[a]);else if(null===n[a]){var r;e[a]=null!==(r=e[a])&&void 0!==r?r:n[a]}else if("object"===typeof n[a])e[a]=v(e[a],n[a]);else{var i;e[a]=n[a].constructor(null!==(i=e[a])&&void 0!==i?i:n[a])}}return e}function b(e,n){for(var t=0,a=n.length;t<a;t++)if(Array.isArray(n[t]))b(e[t],n[t]);else if(null===n[t]){var o;e[t]=null!==(o=e[t])&&void 0!==o?o:n[t]}else if("object"===typeof n[t])e[t]=v(e[t],n[t]);else{var r;e[t]=n[t].constructor(null!==(r=e[t])&&void 0!==r?r:n[t])}return e}var g=t(20),w=t(21),A=function(){function e(n){var t;Object(g.a)(this,e),this.name=n.name,this.description=n.description,this.unlockAt=n.unlockAt,this._cost=n.cost,this.craftTime=n.craftTime,this.craftMultiply=n.craftMultiply||1,this._position=n.position,this.order=9*this._position[0]+this._position[1],this.randomGrantOnCraft=null!==(t=n.randomGrantOnCraft)&&void 0!==t?t:[],this._effectMultiply=n.effectMultiply,this.noCostIfAutomate=n.noCostIfAutomate||!1,this.automates=n.automates}return Object(w.a)(e,[{key:"position",get:function(){return{x:this._position[1],y:this._position[0]}}},{key:"effectMultiply",value:function(e){return"function"===typeof this._effectMultiply?this._effectMultiply(e):1}},{key:"cost",value:function(e,n){var t;if("undefined"===typeof this._cost||n&&this.noCostIfAutomate)return null;for(var a in t="function"===typeof this._cost?this._cost(e):this._cost,t)t[a]=Math.ceil(t[a]),t[a]<=0&&delete t[a];return t}}]),e}(),O={TreeSeed:new A({name:"TreeSeed",description:"Generate tree",automates:["Tree"],unlockAt:{},position:[0,0]}),Tree:new A({name:"Tree",craftTime:20,unlockAt:{},position:[0,1]}),Log:new A({name:"Log",cost:{Tree:1},craftTime:20,craftMultiply:2,randomGrantOnCraft:[[8e-4,"TreeSeed",0],[.05,"Fruit"]],unlockAt:{Tree:1},position:[0,2]}),Plank:new A({name:"Plank",cost:{Log:1},craftTime:15,craftMultiply:3,unlockAt:{Log:1},position:[0,3]}),Charcoal:new A({name:"Charcoal",cost:{Plank:3},craftTime:3,craftMultiply:4,unlockAt:{CopperOre:1},noCostIfAutomate:!0,position:[0,4]}),Vine:new A({name:"Vine",unlockAt:{Vine:1},position:[0,5]}),Mushroom:new A({name:"Mushroom",unlockAt:{Mushroom:1},position:[0,6]}),Fruit:new A({name:"Fruit",craftTime:30,unlockAt:{Fruit:1},position:[0,7]}),Explorer:new A({name:"Explorer",cost:function(e){return{Loot:10*Math.pow(e+1,1.2),TreasureMap:15*Math.pow(e+1,1.1),Citizen:150*Math.pow(e/2+1,1.1),Animal:15*Math.pow(e+1,1.1),Fruit:1e3*Math.pow(e+1,1.3),Energy:Math.pow(10,6.2+Math.sqrt(e/2))}},automates:["Trap","Animal","TreasureMap","Loot"],craftTime:300,unlockAt:{Loot:1},position:[0,8]}),Orchard:new A({name:"Orchard",cost:function(e){return{Citizen:3+Math.pow(2*e,1.2),Fruit:1,Sand:1e3*(e+1),Water:35*Math.pow(e+1,1.1)}},automates:["Fruit"],craftTime:150,unlockAt:{Citizen:1},position:[1,0]}),Trap:new A({name:"Trap",cost:{Iron:150,Energy:50,Glass:100,Fruit:1},craftTime:30,unlockAt:{Orchard:1},position:[1,1]}),Animal:new A({name:"Animal",cost:{Trap:1},randomGrantOnCraft:[[.5,"Animal"]],craftTime:30,unlockAt:{Trap:1},position:[1,2]}),TreasureMap:new A({name:"TreasureMap",cost:{ShinyStone:250,Plank:1e3,Water:50},randomGrantOnCraft:[[.75,"TreasureMap"]],craftTime:30,unlockAt:{Animal:1},position:[1,3]}),Loot:new A({name:"Loot",cost:{Citizen:1,Animal:1,TreasureMap:1,Energy:200},randomGrantOnCraft:[[.5,"TreeSeed"],[.7,"Vine"],[.35,"Mushroom"],[.08,"UpgradePotion"]],craftTime:30,unlockAt:{TreasureMap:1},position:[1,4]}),Wall:new A({name:"Wall",cost:{Brick:3},craftTime:15,unlockAt:{Brick:1},position:[1,5]}),House:new A({name:"House",cost:{Wall:4,Glass:2},craftTime:50,unlockAt:{Wall:1},position:[1,6]}),Citizen:new A({name:"Citizen",cost:{House:1,Fruit:5},craftTime:30,unlockAt:{House:1},position:[1,7]}),CityBuilder:new A({name:"CityBuilder",cost:function(e){return{Citizen:3*Math.pow(e+1,2),Energy:100*Math.pow(e+1,1.6),Iron:300*Math.pow(e+1,1.2),Gold:500*Math.pow(e+1,1.2)}},craftTime:200,automates:["Brick","Wall","House","Glass","Citizen"],unlockAt:{Energy:1},position:[1,8]}),Stone:new A({name:"Stone",craftTime:20,randomGrantOnCraft:[[.07,"Sand"],[.07,"CopperOre"],[.03,"IronOre"],[.015,"GoldOre"],[.001,"EmeraldStone"]],description:"Chance to grant some ore on craft.\nChance is based on Pickaxe",effectMultiply:function(e){return Math.pow(e[O.Pickaxe.order].have,1.3)},unlockAt:{Pickaxe:1},position:[2,0]}),CopperOre:new A({name:"CopperOre",unlockAt:{CopperOre:1},position:[2,1]}),IronOre:new A({name:"IronOre",unlockAt:{IronOre:1},position:[2,2]}),GoldOre:new A({name:"GoldOre",unlockAt:{GoldOre:1},position:[2,3]}),ShinyStone:new A({name:"ShinyStone",craftTime:45,randomGrantOnCraft:[[.03,"EmeraldStone"],[.015,"AmethystStone"],[.007,"RubyStone"],[.003,"SapphireStone"]],description:"Chance to grant some gem on craft.\nChance is based on Gemstone Pickaxe",effectMultiply:function(e){var n=1;return n*=e[O.GemstonePickaxe.order].have,n*=1+e[O.GemBoost.order].have/3},unlockAt:{GemstonePickaxe:1},position:[2,4]}),EmeraldStone:new A({name:"EmeraldStone",unlockAt:{EmeraldStone:1},position:[2,5]}),AmethystStone:new A({name:"AmethystStone",unlockAt:{AmethystStone:1},position:[2,6]}),RubyStone:new A({name:"RubyStone",unlockAt:{RubyStone:1},position:[2,7]}),SapphireStone:new A({name:"SapphireStone",unlockAt:{SapphireStone:1},position:[2,8]}),Brick:new A({name:"Brick",cost:{Stone:5,Charcoal:1},craftTime:3,unlockAt:{Stone:1,Charcoal:1},position:[3,0]}),Copper:new A({name:"Copper",cost:{CopperOre:1,Charcoal:1},craftTime:10,unlockAt:{CopperOre:1},position:[3,1]}),Iron:new A({name:"Iron",cost:{IronOre:1,Charcoal:2},craftTime:15,unlockAt:{IronOre:1},position:[3,2]}),Gold:new A({name:"Gold",cost:{GoldOre:1,Charcoal:1},craftTime:10,unlockAt:{GoldOre:1},position:[3,3]}),Emerald:new A({name:"Emerald",cost:{EmeraldStone:10,Lava:1},randomGrantOnCraft:[[.2,"Steam"]],unlockAt:{EmeraldStone:1},craftTime:30,position:[3,5]}),Amethyst:new A({name:"Amethyst",cost:{AmethystStone:10,Lava:2},randomGrantOnCraft:[[.4,"Steam"]],craftTime:40,unlockAt:{AmethystStone:1},position:[3,6]}),Ruby:new A({name:"Ruby",cost:{RubyStone:10,Lava:3},randomGrantOnCraft:[[.6,"Steam"]],craftTime:50,unlockAt:{RubyStone:1},position:[3,7]}),Sapphire:new A({name:"Sapphire",cost:{SapphireStone:10,Lava:4},randomGrantOnCraft:[[.8,"Steam"]],craftTime:60,unlockAt:{SapphireStone:1},position:[3,8]}),Energy:new A({name:"Energy",craftTime:50,randomGrantOnCraft:[[.01,"Replicanti"]],unlockAt:{Citizen:1},position:[4,0]}),PickaxeUpgrade:new A({name:"PickaxeUpgrade",cost:function(e){return{Energy:7*Math.pow(1.2,e+1),Emerald:3*(e-2)}},craftTime:30,unlockAt:{Energy:1,Pickaxe:1},position:[4,1]}),GemBoost:new A({name:"GemBoost",cost:function(e){return{Energy:(100+10*e)*Math.pow(1.5,e+1),Amethyst:3*Math.pow(e+1,1.1)}},craftTime:45,unlockAt:{Energy:1,ShinyStone:1},position:[4,2]}),MetalworkBoost:new A({name:"MetalworkBoost",cost:function(e){return{Energy:3e3*Math.pow(2,e+1),UpgradePotion:1+Math.pow(e,1.4)/2,Iron:300*Math.pow(e/3+1,1.2)}},craftTime:60,unlockAt:{UpgradePotion:1},position:[4,3]}),LiquidBoost:new A({name:"LiquidBoost",cost:function(e){return{Energy:Math.pow(10,6+Math.pow(e,1.1)),UpgradePotion:15*(e+1),Ruby:15*(e+1),Water:1e3*Math.pow(e+1,1.2),Lava:250*(e+1)}},craftTime:75,unlockAt:{MetalworkBoost:1},position:[4,4]}),Generator:new A({name:"Generator",cost:function(e){return{Iron:30*(e+1),Lava:1+e,Steam:3*e,Citizen:1+e}},craftTime:100,effectMultiply:function(e){return Math.pow(4,e[O.GeneratorBoost.order].have)},automates:["Energy"],unlockAt:{Citizen:1},position:[4,7]}),GeneratorBoost:new A({name:"GeneratorBoost",cost:function(e){return{Steam:50*(e/2+1),Replicanti:Math.pow(100,e+2)}},craftTime:60,unlockAt:{ReplicantiBoost:1},position:[4,8]}),Water:new A({name:"Water",craftTime:100,unlockAt:{Copper:1},position:[5,0]}),Lava:new A({name:"Lava",cost:function(e){return{Stone:100-96*(1-1/(e/14+1)),Charcoal:50-48*(1-1/(e/7+1))}},unlockAt:{Stone:1,Charcoal:1},craftTime:150,position:[5,1]}),Steam:new A({name:"Steam",cost:{Water:10,Lava:5},craftTime:60,craftMultiply:15,unlockAt:{Water:1,Lava:1},position:[5,2]}),UpgradePotion:new A({name:"UpgradePotion",cost:{Vine:2,Mushroom:1,Emerald:10},craftTime:10,unlockAt:{Vine:1,Mushroom:1},position:[5,5]}),Sand:new A({name:"Sand",unlockAt:{Sand:1},position:[5,7]}),Glass:new A({name:"Glass",cost:{Sand:1,Charcoal:1},craftTime:6,unlockAt:{Sand:1},position:[5,8]}),Axe:new A({name:"Axe",description:"Cuts tree",cost:function(e){return{Plank:3*Math.pow(e+1,2)}},craftTime:5,automates:["Log"],unlockAt:{Plank:1},position:[6,0]}),Saw:new A({name:"Saw",description:"Automates Plank",cost:function(e){return{Plank:10*Math.pow(e+1,2),Iron:3*Math.pow(e+1,1.2)}},craftTime:60,automates:["Plank"],unlockAt:{Iron:1},position:[6,1]}),Pickaxe:new A({name:"Pickaxe",description:"Automatically mines stone",cost:function(e){return{Plank:10*Math.pow(e+1,e/100+1),Stone:6*Math.pow(e,1.4),Copper:3*Math.pow(Math.max(0,e-4),2),Iron:5*Math.pow(Math.max(0,e-9),2),Gold:7*Math.pow(Math.max(0,e-14),2)}},craftTime:30,automates:["Stone"],effectMultiply:function(e){var n=1;return n*=e[O.GemstonePickaxe.order].have+1,n*=e[O.PickaxeUpgrade.order].have/3+1},unlockAt:{Plank:1},position:[6,2]}),GemstonePickaxe:new A({name:"GemstonePickaxe",description:"Automatically mines Shiny stone & Boost Pickaxe",cost:function(e){return{Iron:100*(e+1),Emerald:2*(e+1),Amethyst:2*(e-2),Ruby:2*(e-5),Sapphire:2*(e-8)}},craftTime:120,automates:["ShinyStone"],effectMultiply:function(e){var n=1;return n*=e[O.PickaxeUpgrade.order].have/3+1},unlockAt:{Emerald:1},position:[6,3]}),Pump:new A({name:"Pump",description:"Generates Water",cost:function(e){return{Copper:5*Math.pow(e+1,1.2),Iron:3*Math.pow(e+1,1.2),Gold:3*Math.pow(e+1,1.2)}},craftTime:30,automates:["Water"],effectMultiply:function(e){return e[O.LiquidBoost.order].have/3+1},unlockAt:{Copper:1},position:[6,4]}),Volcano:new A({name:"Volcano",description:"Automates Lava",cost:function(e){return{Stone:200,Lava:1*(e+1)*(e/15+1)}},craftTime:35,automates:["Lava"],effectMultiply:function(e){return e[O.LiquidBoost.order].have/3+1},unlockAt:{Lava:1},position:[6,5]}),MetalworkFactory:new A({name:"MetalworkFactory",description:"Automates Copper, Iron and Gold",cost:function(e){return{Copper:10*Math.pow(e+1,1.15),Iron:10*Math.pow(e+1,1.15),Gold:10*Math.pow(e+1,1.15),Pump:2,Volcano:1}},craftTime:150,automates:["Iron","Gold","Copper"],effectMultiply:function(e){return e[O.MetalworkBoost.order].have/3+1},unlockAt:{Pump:1,Volcano:1},position:[6,6]}),CharcoalMiner:new A({name:"CharcoalMiner",description:"Mines Charcoal without any cost",cost:function(e){return{Steam:15*Math.pow(e+1,1.2),Pump:2,Iron:50*(e+1)*(1+e/20),Citizen:1+e}},craftTime:300,automates:["Charcoal"],unlockAt:{MetalworkFactory:1},position:[6,7]}),GemCutter:new A({name:"GemCutter",cost:function(e){return{Energy:200*Math.pow(e+1,1.2),Iron:1e3*Math.pow(e+1,1.1),Water:300*Math.pow(e+1,1.1),Lava:100*Math.pow(e+1,1.1)}},automates:["Emerald","Amethyst","Ruby","Sapphire"],craftTime:300,unlockAt:{CharcoalMiner:1,Emerald:1},position:[6,8]}),Forest:new A({name:"Forest",position:[7,0]}),Underground:new A({name:"Underground",position:[7,1]}),Ocean:new A({name:"Ocean",position:[7,2]}),City:new A({name:"City",position:[7,3]}),EarthEssence:new A({name:"EarthEssence",unlockAt:{Forest:1,Underground:1,Ocean:1,City:1},position:[7,4]}),DivinePowder:new A({name:"DivinePowder",cost:function(e){return{Replicanti:Math.pow(10,Math.pow(e/5,.9)+6),Energy:100+Math.pow(e,2),Sapphire:1+Math.pow(e/10,.2)}},craftTime:3,unlockAt:{Replicanti:1,Energy:1},position:[8,0]}),DivineShard:new A({name:"DivineShard",unlockAt:{DivinePowder:1},position:[8,1]}),ReplicantiBoost:new A({name:"ReplicantiBoost",cost:function(e){return{Replicanti:Math.pow(10,e+2),Energy:Math.pow(10,1.6+Math.pow(e,.7))}},craftTime:100,unlockAt:{Replicanti:1},position:[8,7]}),Replicanti:new A({name:"Replicanti",cost:{Replicanti:1},craftMultiply:2,effectMultiply:function(e){var n=e[O.Replicanti.order].have,t=e[O.ReplicantiBoost.order].have,a=.6+.35*(1-1/(t/30+1));return Math.pow(1.5,t+1)*Math.pow(n+1,a)/(n+1)},unlockAt:{Replicanti:1},automates:["Replicanti"],craftTime:30,position:[8,8]})},M=new Array(81).fill(null);for(var y in O){var S=O[y],k=9*S.position.y+S.position.x;M[k]=S}var j=Array.from({length:81},(function(e,n){return M[n]?M.findIndex((function(e){return!(!e||!e.automates)&&e.automates.includes(M[n].name)})):-1}));function C(e){return O[e]}function x(e,n){var t=C(e);if(null===n.resources[t.order].startTime){var a=t.cost(n.resources[t.order].have),o=1/0;if(null===a)return o;for(var r in a){var i=a[r],c=n.resources[C(r).order].have;if(i>c)return!1;o=Math.min(o,c/i)}return Math.floor(o)}}function R(e,n){var t=O[e],a=t.order,o=1e3*t.craftTime;return-1!==j[a]&&(o/=Math.max(1,n.resources[j[a]].have),o/=M[j[a]].effectMultiply(n.resources)),o}function T(e,n){var t=O[e];if(!t||!t.unlockAt)return!1;for(var a in t.unlockAt)if(n[O[a].order].have<t.unlockAt[a])return!1;return!0}var E="resource/CRAFT_START",G="resource/CRAFT_UPDATE",B="resource/RESOURCE_UNLOCK",z="resource/TOGGLE_AUTO",I=function(e,n){return{type:E,order:e,isAuto:n}},F=function(e){var n=e.order,t=e.isAuto,a=e.Time,o=e.progressIncrement;return{type:G,order:n,isAuto:t,Time:a,progressIncrement:o}},P=function(e){return{type:B,order:e}};function D(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=t;for(var o in n){var r=n[o],i=O[o].order;a=Math.min(a,e[i].have/r)}if((a=Math.floor(a))<=0)return!1;for(var c in n){var l=n[c],s=O[c].order;e[s]=Object(p.a)(Object(p.a)({},e[s]),{},{have:e[s].have-l*a})}return a}var Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.resources,n=arguments.length>1?arguments[1]:void 0,t=M[n.order];if(!t)return e;var a=n.order,o=e[a].have,r=!e[a].automationDisabled&&n.isAuto,i=t.cost(o,r);switch(n.type){case E:if(null!==(e=Object(m.a)(e))[a].lastTime)return e;var c=D(e,i,1);return c?(e[a]=Object(p.a)(Object(p.a)({},e[a]),{},{lastTime:(new Date).getTime(),progress:0}),e):(0!==e[a].progress&&(e[a]=Object(p.a)(Object(p.a)({},e[a]),{},{progress:0})),e);case G:if((e=Object(m.a)(e))[a]=Object(p.a)(Object(p.a)({},e[a]),{},{lastTime:n.Time,progress:e[a].progress+n.progressIncrement}),e[a].progress>=1){e[a].lastTime=null;var l=1;r?(l+=D(e,i,Math.floor(e[a].progress)-1),e[a].have+=l*t.craftMultiply,e[a].progress%=1):(e[a].have+=t.craftMultiply,e[a].progress=0);for(var s=t.effectMultiply(e),d=0;d<t.randomGrantOnCraft.length;d++){var h=Object(u.a)(t.randomGrantOnCraft[d],2),v=h[0],b=h[1],g=v*s,w=1-Math.pow(1-Math.min(1,g),l),A=l*w>5||w>=.99?Math.round(l*g):+(Math.random()<w);A>=1&&(e[O[b].order]=Object(p.a)(Object(p.a)({},e[O[b].order]),{},{have:e[O[b].order].have+A}))}}return e;case B:return(e=Object(m.a)(e))[a]=Object(p.a)(Object(p.a)({},e[a]),{},{unlocked:!0}),e;case z:return(e=Object(m.a)(e))[a]=Object(p.a)(Object(p.a)({},e[a]),{},{automationDisabled:!e[a].automationDisabled}),e;default:return e}},W=["","K","M","B","T","q","Q","s","S","o","N"],L=["","D","T","q","Q","s","S","O","N"];function U(e){var n=Math.floor(Math.log10(Math.max(1,Math.abs(e)))),t=W[Math.floor(n/3)%10]+L[Math.floor(n/30)],a=(e/Math.pow(10,3*Math.floor(n/3))).toFixed(3-t.length-n%3);return e<1e3&&Number.isInteger(e)&&(a=e),a+t}var Z,V=t(1),H=s.b.div(Z||(Z=Object(l.a)(["\n  --resourceGap: calc(var(--imageSize) * 9 / 8);\n  --imageScale: calc(81 / 8);\n  \n  display: inline-block;\n\n  width: var(--imageSize);\n  height: var(--imageSize);\n\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-size: calc(100% * var(--imageScale));\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n"])),"data:image/png;base64,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");var Y,X=function(e){var n=e.size,t=e.position,a=e.style,o=e.content;return Object(V.jsx)(H,{style:Object(p.a)({"--imageSize":n,backgroundPosition:"calc(var(--resourceGap) * -".concat(t.x,") calc(var(--resourceGap) * -").concat(t.y,")")},a),children:o})},q=s.b.div(Y||(Y=Object(l.a)(["\n  --costCellWidth: calc(var(--cellWidth) / 2);\n  --costCellHeight: calc(var(--cellHeight) / 3);\n\n  display: grid;\n  grid-template-columns: repeat(2, minmax(calc(var(--cellWidth) / 2), 1fr));\n  grid-auto-rows: var(--costCellHeight);\n  grid-auto-columns: var(--costCellWidth);\n  place-items: center;\n"])));var N,J,K=function(e){var n=e.cost;return Object(V.jsx)(q,{children:n.map((function(e,n){var t=Object(u.a)(e,2),a=t[0],o=t[1],r=O[a];return Object(V.jsx)("div",{children:Object(V.jsx)(X,{size:"min(var(--costCellWidth), var(--costCellHeight))",position:r.position,style:{display:"flex",flexDirection:"column",justifyContent:"flex-end",color:"var(--colReverse)",fontSize:"0.8em",fontWeight:900,textShadow:"calc(var(--imageSize) / 30) calc(var(--imageSize) / 30) 0 var(--colMain1),\n                    calc(var(--imageSize) / -30) calc(var(--imageSize) / -30) 0 var(--colMain1),\n                    calc(var(--imageSize) / 30) calc(var(--imageSize) / -30) 0 var(--colMain1),\n                    calc(var(--imageSize) / -30) calc(var(--imageSize) / 30) 0 var(--colMain1)",textAlign:"right",border:"calc(var(--imageSize) / 15) solid var(--colMain2)",borderRadius:"calc(min(var(--costCellWidth), var(--costCellHeight)) / 2)",filter:"drop-shadow(var(--baseShadowSmall))"},content:U(o)})},n)}))})},_=t(25),$=t(26),ee=Object(s.c)(N||(N=Object(l.a)(["\n  from {\n    transform: scale(0, 1);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1, 1);\n    opacity: 1;\n  }\n"]))),ne=s.b.div(J||(J=Object(l.a)(["\n  --height: calc(var(--cellHeight) / 10 * 1.75);\n\n  padding: calc(var(--height) * 0.15) 0;\n\n  position: absolute;\n  bottom: calc(var(--height) * -1.4);\n  \n  min-width: 80%;\n  height: var(--height);\n\n  display: flex;\n  justify-content: space-evenly;\n\n  background: var(--colMain4);\n  border-radius: calc(var(--height));\n  box-shadow: var(--baseShadow);\n  transform: scale(0, 1);\n\n  pointer-events: none;\n  animation: "," 0.15s ease-out forwards;\n  z-index: 1;\n"])),ee);var te,ae,oe,re,ie=function(e){var n=e.Resource;return e.save,Object(V.jsx)(V.Fragment,{children:n.automates&&n.automates.length>0&&Object(V.jsxs)(ne,{children:[Object(V.jsx)(_.a,{icon:$.a,style:{position:"absolute",color:"var(--colReverseWeak)",left:0,bottom:0,transform:"translate(-50%, 50%)",filter:"drop-shadow(var(--baseShadow))",zIndex:1}}),n.automates.map((function(e){var n=O[e];return Object(V.jsx)(X,{size:"var(--height)",position:n.position,style:{filter:"drop-shadow(var(--baseShadowSmall))"}},n.name)}))]})})},ce=s.b.div(te||(te=Object(l.a)(["\n  position: absolute;\n  right: 0;\n  transform: translateX(100%);\n\n  min-width: 60%;\n  height: var(--boxSize);\n\n  display: flex;\n  flex-direction: column;\n\n  border-radius: 0 calc(var(--boxSize) / 10) calc(var(--boxSize) / 10) 0;\n  background-color: var(--colOverlayReverse);\n\n  pointer-events: none;\n"]))),le=s.b.div(ae||(ae=Object(l.a)(['\n  flex: 1;\n\n  border-radius: 0 calc(var(--boxSize) / 10) 0 0;\n  background-color: var(--colOverlayReverse);\n\n  &::before {\n    font-size: 0.8em;\n    content: "Eff x";\n  }\n']))),se=s.b.div(oe||(oe=Object(l.a)(["\n  flex: 5;\n"]))),ue=s.b.div(re||(re=Object(l.a)(["\n  --itemHeight: calc(var(--boxSize) / 6);\n\n  height: var(--itemHeight);\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  font-size: 0.8em;\n  font-weight: bold;\n"])));var me,pe,de,he,fe,ve=Object(c.b)((function(e){return{save:e.resources}}),{craftStart:I,craftUpdate:F})((function(e){var n=e.Resource,t=e.save,a=n?n.effectMultiply(t):1,o=n.randomGrantOnCraft.map((function(e){return[Math.min(1,e[0]*a),e[1]]}));return 0!==o.length||1!==a?Object(V.jsxs)(ce,{children:[Object(V.jsx)(le,{children:U(a)}),Object(V.jsx)(se,{children:o.map((function(e){var n=Object(u.a)(e,2),a=n[0],o=n[1],r=O[o];return Object(V.jsxs)(ue,{children:[t[r.order].unlocked?Object(V.jsx)(X,{size:"var(--itemHeight)",position:r.position}):Object(V.jsx)("span",{children:"?\xa0"}),Object(V.jsxs)("span",{children:[(100*a).toFixed(2).padStart(6,"0"),"%"]})]},r.name)}))})]}):Object(V.jsx)(V.Fragment,{})})),be=Object(s.c)(me||(me=Object(l.a)(["\n  from {\n    opacity: 0;\n    transform: translateY(100%) scale(0.2, 1);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1, 1);\n  }\n"]))),ge=s.b.div(pe||(pe=Object(l.a)(["\n  --margin: calc(var(--cellSize) / 10);\n  --boxRatio: 1.3;\n  --boxSize: calc(var(--cellSize) - var(--margin));\n  --cellWidth: calc(var(--boxSize) / var(--boxRatio));\n  --cellHeight: var(--boxSize);\n  --borderRadius: calc(var(--boxSize) / 15);\n\n  margin: calc(var(--margin) / 2);\n\n  width: var(--cellWidth);\n  height: var(--cellHeight);\n  \n  background-color: var(--colMain3);\n  border-radius: var(--borderRadius);\n  box-shadow: var(--baseShadow);\n\n  transform: scale(1);\n  cursor: pointer;\n\n  transition: all 0.3s cubic-bezier(0,.79,.32,1);\n\n  &:hover {\n    width: calc(var(--boxSize) / var(--boxRatio) * 2);\n    background-color: var(--colMain4);\n    transform: scale(1.4);\n    z-index: 1;\n  }\n\n  &:hover::before {\n    content: attr(name);\n\n    padding: 1% 5%;\n    \n    min-width: 60%;\n    height: 15%;\n\n    position: absolute;\n    top: -15%;\n    left: 5%;\n\n    color: var(--colMainReverse);\n    word-spacing: -0.3em;\n    font-size: 0.9em;\n    text-align: center;\n\n    background-color: var(--colMain4);\n    border-radius: calc(var(--cellSize) / 30);\n\n    animation: "," 0.4s cubic-bezier(.12,.81,.31,.95);\n    \n    pointer-events: none;\n  }\n"])),be),we=s.b.div(de||(de=Object(l.a)(["\n  display: flex;\n  overflow: hidden;\n  \n  & > span {\n    display: inline-block;\n\n    width: calc(var(--boxSize) / var(--boxRatio));\n    height: calc(var(--boxSize));\n  }\n"]))),Ae=s.b.span(he||(he=Object(l.a)(["\n  position: absolute;\n  bottom: 0;\n\n  width: 100%;\n  height: 0%;\n  max-height: 100%;\n\n  background-color: var(--colOverlay);\n  border-radius: var(--borderRadius);\n\n  z-index: -1;\n"]))),Oe=s.b.div(fe||(fe=Object(l.a)(["\n  padding-right: calc(var(--boxSize) / 20);\n\n  text-align: right;\n  font-weight: bolder;\n  color: var(--colReverse);\n"])));var Me,ye,Se,ke=Object(c.b)((function(){return{}}),{craftStart:I,toggleAuto:function(e){return{type:z,order:e}}})((function(e){var n,t=e.Resource,o=e.index,r=e.craftStart,i=e.autoToggleMode,l=e.toggleAuto,s=Object(a.useState)(!1),m=Object(u.a)(s,2),p=m[0],d=m[1],h=t?t.name.replace(/(.)([A-Z])/g,"$1 $2"):"",f=Object(c.c)((function(e){return e.resources[o]})),v=t?Object.entries(null!==(n=t.cost(f.have))&&void 0!==n?n:{}):[],b=j[o],g=f.unlocked&&(!i||-1!==b);return Object(V.jsx)(ge,{onClick:function(){var e;i?l(o):t&&0!==Object.keys(null!==(e=t.cost(f.have))&&void 0!==e?e:{}).length&&r(o)},onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},name:h,style:{backgroundColor:f.automationDisabled||i&&g?f.automationDisabled?"#541212":"#1c5412":void 0,opacity:g?void 0:.3,pointerEvents:g?void 0:"none"},children:g&&t&&Object(V.jsxs)(we,{children:[Object(V.jsxs)("span",{children:[Object(V.jsx)(X,{size:"calc(var(--boxSize) / var(--boxRatio) - var(--margin))",position:t.position,style:{filter:"drop-shadow(var(--baseShadow))",margin:"calc(var(--margin) / 2)"}}),Object(V.jsx)(Oe,{children:U(f.have)}),Object(V.jsx)(Ae,{style:{height:"".concat(100*f.progress,"%")}})]}),p&&Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(K,{cost:v}),Object(V.jsx)(ve,{Resource:t}),Object(V.jsx)(ie,{Resource:t})]})]})})})),je=s.b.div(Me||(Me=Object(l.a)(["\n  position: absolute;\n  left: calc(var(--h) / 50);\n  bottom: calc(var(--w) / 100);\n\n  padding: calc(var(--h) / 100) calc(var(--w) / 200);\n  \n  font-weight: bold;\n  color: var(--colReverseWeak);\n\n  box-shadow: var(--baseShadow);\n  background-color: var(--colMain3);\n\n  cursor: pointer;\n  z-index: 1;\n\n  transition: all 0.5s cubic-bezier(.12,.74,.14,.99);\n\n  &:hover {\n    background-color: var(--colMain4);\n    transform: scale(1.2);\n  }\n"]))),Ce=s.b.div(ye||(ye=Object(l.a)(["\n  --cellSize: calc(var(--min) / 9);\n\n  flex: 9;\n\n  display: grid;\n  grid-template-columns: repeat(9, minmax(var(--cellSize), 1fr));\n  grid-auto-rows: var(--cellSize);\n  grid-auto-columns: var(--cellSize);\n  place-items: center;\n"]))),xe=s.b.div(Se||(Se=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  color: var(--colReverseWeak);\n  font-weight: bold;\n  font-size: 2em;\n  opacity: 0.3;\n\n  flex: 7;\n"])));var Re,Te,Ee=function(e){var n=e.craftStart,t=Object(a.useState)(!1),o=Object(u.a)(t,2),r=o[0],i=o[1];return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(je,{onClick:Object(a.useCallback)((function(){i(!r)}),[r]),style:{backgroundColor:r?"var(--colAlt1)":void 0,color:r?"var(--colMain1)":void 0},children:"Toggle Auto"}),Object(V.jsx)(Ce,{children:M.map((function(e,t){return Object(V.jsx)(ke,{Resource:e,autoToggleMode:r,index:t,craftStart:n},null!==e?e.name:"empty_".concat(t))}))}),Object(V.jsx)(xe,{children:"- Nothing -"})]})},Ge=Object(s.a)(Re||(Re=Object(l.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n  \n    white-space: nowrap;\n    \n    user-select: none;\n  }\n  \n  body {\n    width: 100vw;\n    height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    overflow: hidden;\n\n    color: var(--colReverse);\n\n    background-color: var(--colMain1);\n  }\n  body#theme-dark, body:not(#theme-light){\n    --colStrong: #000000;\n    --colMain1: #191919;\n    --colMain2: #2a2a2a;\n    --colMain3: #3a3a3a;\n    --colMain4: #4a4a4a;\n    --colReverse: #ffffff;\n    --colReverseWeak: #efefef;\n    --colReverseWeaker: #cdcdcd;\n    --colAlt1: #13d1f2;\n    --colOverlay: #fff3;\n    --colOverlayReverse: #0006;\n  }\n  body#theme-light {\n    --colStrong: #ffffff;\n    --colMain1: #ffffff;\n    --colMain2: #efefef;\n    --colMain3: #dedede;\n    --colMain4: #cdcdcd;\n    --colReverse: #191919;\n    --colReverseWeak: #2a2a2a;\n    --colReverseWeaker: #4a4a4a;\n    --colAlt1: #f29913;\n    --colOverlay: #0003;\n    --colOverlayReverse: #fff6;\n  }\n"]))),Be=s.b.div(Te||(Te=Object(l.a)(["\n  --min: min(var(--w), var(--h));\n\n  --baseShadow: calc(var(--min) / 250) calc(var(--min) / 250) 0 var(--colStrong);\n  --baseShadowSmall: calc(var(--min) / 500) calc(var(--min) / 500) 0 var(--colStrong);\n\n  display: flex;\n\n  width: var(--w);\n  height: var(--h);\n\n  border-radius: calc(var(--min) / 50);\n\n  transition: \n    background-image 0.5s linear,\n    background-color 0.3s ease-out;\n\n  @media only screen and (orientation: portrait) {\n    --baseSize: 90vw;\n  }\n  @media only screen and (orientation: landscape) {\n    --baseSize: min(83vw, 160vh);\n  }\n  --w: var(--baseSize);\n  --h: calc(var(--baseSize) * 9 / 16);\n  font-size: calc(var(--baseSize) * 9 / 16 / 70);\n  /* @media only screen and (min-width: 1600px) and (min-height: 900px) {\n    --w: 1600px;\n    --h: 900px;\n    font-size: calc(var(--h) / 70);\n  } */\n"])));var ze=function(){return Object(V.jsxs)("div",{className:"App",children:[Object(V.jsx)(Ge,{}),Object(V.jsxs)(Be,{children:[!1,Object(V.jsx)(Ee,{})]})]})},Ie=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,40)).then((function(n){var t=n.getCLS,a=n.getFID,o=n.getFCP,r=n.getLCP,i=n.getTTFB;t(e),a(e),o(e),r(e),i(e)}))},Fe=t(15),Pe=Object(Fe.a)({resources:Q}),De=Object(Fe.b)(Pe),Qe=(new Date).getTime();var We=function(){var e=De.getState(),n=(new Date).getTime();n-Qe>5e3&&function(e){localStorage.setItem(d,JSON.stringify(e))}(e);for(var t=0;t<M.length;t++){var a,o=M[t];if(null!==o){var r=t,i=e.resources[r],c=1<=(null===(a=e.resources[j[r]])||void 0===a?void 0:a.have);if(!i.unlocked&&(i.have>=1||T(o.name,e.resources))&&De.dispatch(P(r)),o.automates&&i.have>=1)for(var l=0;l<o.automates.length;l++){var s=O[o.automates[l]],u=s.order;null!==e.resources[u].lastTime||0===x(s.name,e)||e.resources[u].automationDisabled||De.dispatch(I(u,!0))}var m=i.lastTime;if(null!==m){var p=(n-m)/R(o.name,e)*1;De.dispatch(F({order:t,isAuto:c,Time:n,progressIncrement:p}))}}}};i.a.render(Object(V.jsx)(o.a.StrictMode,{children:Object(V.jsx)(c.a,{store:De,children:Object(V.jsx)(ze,{})})}),document.getElementById("root")),setInterval((function(){return We(f)}),1e3/60),Ie()}},[[39,1,2]]]);
//# sourceMappingURL=main.4c4a6dba.chunk.js.map