(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{160:function(e,n,t){var content=t(175);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(43).default)("cd342d4a",content,!0,{sourceMap:!1})},174:function(e,n,t){"use strict";var l=t(160);t.n(l).a},175:function(e,n,t){(n=t(42)(!1)).push([e.i,".bank-select[data-v-672eeca0]{height:30px;overflow-y:hidden}.bank-select[data-v-672eeca0],[data-v-672eeca0] .handpan-diagram{display:flex;align-items:center;justify-content:center}[data-v-672eeca0] .handpan-diagram{--deg:90deg;width:100vw;height:calc(100vh - 90px);overflow:hidden;flex-wrap:wrap}@media (orientation:portrait){[data-v-672eeca0] .handpan-diagram{--size:98vw}}@media (orientation:landscape){[data-v-672eeca0] .handpan-diagram{--size:calc(98vh - 90px)}}@media (orientation:portrait){[data-v-672eeca0] .handpan-diagram.hasBottom{--size:calc((98vh - 90px)/2)}}@media (orientation:landscape){[data-v-672eeca0] .handpan-diagram.hasBottom{--size:calc((98vh - 90px)/2)}}[data-v-672eeca0] .handpan-shape{width:var(--size);height:var(--size);border-radius:var(--size)}[data-v-672eeca0] .ding,[data-v-672eeca0] .gu,[data-v-672eeca0] .note span{width:calc(var(--size)*0.23);height:calc(var(--size)*0.23);margin-left:calc(var(--size)*-0.1);margin-top:calc(var(--size)*-0.1);font-size:calc(var(--size)*0.05)}[data-v-672eeca0] .note{top:calc(var(--size)*0.432);padding-left:calc(var(--size)*0.432*2)}",""]),e.exports=n},184:function(e,n,t){"use strict";t.r(n);t(77);var l=t(1),r=t(167),o=t(156),c=t(155),d=l.a.extend({components:{HandpanDiagram:r.a},layout:"empty",head:function(){return{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"}]}},data:function(){return{handpan:null,samplesBank:c.g[0],samplesBanks:c.g,selectedChord:{label:"",root:"",type:"",noteNames:[]}}},mounted:function(){if(this.handpan=new o.a,this.$nuxt.$route.hash){var e=this.$nuxt.$route.hash.substr(1);this.handpan.loadFromAbsNotation(e.replace(/-/g," "))}else this.handpan.loadFromAbsNotation("D/ G A C D E F G A C D")}}),m=(t(174),t(16)),component=Object(m.a)(d,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"bank-select"},[e._v("\n        Sample bank : \n        "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.samplesBank,expression:"samplesBank"}],on:{change:function(n){var t=Array.prototype.filter.call(n.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.samplesBank=n.target.multiple?t:t[0]}}},e._l(e.samplesBanks,(function(n){return t("option",{key:n.name,domProps:{value:n}},[e._v("\n                "+e._s(n.name)+"\n            ")])})),0),e._v(" "),e.samplesBank.website&&e.samplesBank.logo?t("span",[e.samplesBank.website?t("a",{attrs:{href:"//"+e.samplesBank.website}},[e.samplesBank.logo?t("img",{attrs:{src:e.samplesBank.logo}}):e._e()]):e._e()]):e._e(),e._v(" "),e.samplesBank.website&&!e.samplesBank.logo?t("span",[e.samplesBank.website?t("a",{attrs:{href:"//"+e.samplesBank.website}},[e._v(e._s(e.samplesBank.website))]):e._e()]):e._e()]),e._v(" "),e.handpan?t("HandpanDiagram",{attrs:{handpan:e.handpan,selectedChord:e.selectedChord,selectedPanScale:null,selectedScale:null,samplesBank:e.samplesBank}}):e._e()],1)}),[],!1,null,"672eeca0",null);n.default=component.exports}}]);