(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{202:function(e,t,o){var content=o(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("187541f2",content,!0,{sourceMap:!1})},203:function(e,t,o){var content=o(227);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("1358c6d7",content,!0,{sourceMap:!1})},204:function(e,t,o){var content=o(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(40).default)("3f4dd168",content,!0,{sourceMap:!1})},224:function(e,t,o){"use strict";o(202)},225:function(e,t,o){var n=o(39)(!1);n.push([e.i,".select-volume[data-v-1f96cc46]{font-size:11px;display:flex;align-items:center;height:30px}",""]),e.exports=n},226:function(e,t,o){"use strict";o(203)},227:function(e,t,o){var n=o(39)(!1);n.push([e.i,".select-samplesbank[data-v-ecd060a4]{font-size:11px;display:flex;align-items:center;height:30px}",""]),e.exports=n},228:function(e,t,o){"use strict";o(204)},229:function(e,t,o){var n=o(39)(!1);n.push([e.i,".checks[data-v-44902e46]{display:flex;flex-direction:column}.checks>div[data-v-44902e46]{margin:8px 0}.checks label[data-v-44902e46]{padding:6px;cursor:pointer}",""]),e.exports=n},264:function(e,t,o){"use strict";o.r(t);var n=o(1),l=n.a.extend({computed:{volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(e){this.$store.commit("options/setVolume",e)}}}}),c=(o(224),o(19)),r=Object(c.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"select-volume"},[e._v("\n    Volume: \n    "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.volume,expression:"volume"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.volume=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[e._v("100%")]),e._v(" "),o("option",{domProps:{value:.9}},[e._v("90%")]),e._v(" "),o("option",{domProps:{value:.8}},[e._v("80%")]),e._v(" "),o("option",{domProps:{value:.7}},[e._v("70%")]),e._v(" "),o("option",{domProps:{value:.6}},[e._v("60%")]),e._v(" "),o("option",{domProps:{value:.5}},[e._v("50%")]),e._v(" "),o("option",{domProps:{value:.4}},[e._v("40%")]),e._v(" "),o("option",{domProps:{value:.3}},[e._v("30%")]),e._v(" "),o("option",{domProps:{value:.2}},[e._v("20%")]),e._v(" "),o("option",{domProps:{value:.1}},[e._v("10%")])])])}),[],!1,null,"1f96cc46",null).exports,m=o(95),v=n.a.extend({data:function(){return{handpan:null,samplesBanks:m.f}},computed:{samplesBank:{get:function(){return m.f[this.$store.getters["options/getChosenSamplesBankIndex"]]},set:function(e){this.$store.commit("options/setChosenSamplesBankIndex",m.f.indexOf(e))}},volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(e){this.$store.commit("options/setVolume",e)}}}}),d=(o(226),Object(c.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"select-samplesbank"},[e._v("\n    Samples: \n    "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.samplesBank,expression:"samplesBank"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.samplesBank=t.target.multiple?o:o[0]}}},e._l(e.samplesBanks,(function(t){return o("option",{key:t.name,domProps:{value:t}},[e._v("\n            "+e._s(t.name)+"\n        ")])})),0),e._v(" "),e.samplesBank.website&&e.samplesBank.logo?o("span",[e.samplesBank.website?o("a",{attrs:{href:"//"+e.samplesBank.website}},[e.samplesBank.logo?o("img",{attrs:{src:e.samplesBank.logo}}):e._e()]):e._e()]):e._e(),e._v(" "),e.samplesBank.website&&!e.samplesBank.logo?o("span",[e.samplesBank.website?o("a",{attrs:{href:"//"+e.samplesBank.website}},[e._v(e._s(e.samplesBank.website))]):e._e()]):e._e()])}),[],!1,null,"ecd060a4",null).exports),f=n.a.extend({components:{SelectVolume:r,SelectSamplesBank:d},data:function(){return{selectedCustomPanScale:null}},computed:{customPanScales:function(){return this.$store.state.options.customPanScales},enableClac:{get:function(){return this.$store.state.options.enableClac},set:function(e){this.$store.commit("options/enableClac",e)}},showBebop:{get:function(){return this.$store.state.options.showBebop},set:function(e){this.$store.commit("options/setShowBebop",e)}},hideFooter:{get:function(){return this.$store.state.options.hideFooter},set:function(e){this.$store.commit("options/setHideFooter",e)}}},methods:{removeCustomPanScale:function(e){this.$store.commit("options/removeCustomPanScale",e)}}}),h=(o(228),Object(c.a)(f,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",[e._v("Options")]),e._v(" "),o("SelectVolume"),e._v(" "),o("SelectSamplesBank"),e._v("\n    Sound models:\n    "),o("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedCustomPanScale,expression:"selectedCustomPanScale"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedCustomPanScale=t.target.multiple?o:o[0]}}},e._l(e.customPanScales,(function(t){return o("option",{key:t.name,domProps:{value:t}},[e._v("\n            "+e._s(t.name)+"\n        ")])})),0),e._v(" "),e.selectedCustomPanScale?o("button",{on:{click:function(t){return e.removeCustomPanScale(e.selectedCustomPanScale.name)}}},[e._v("Delete")]):e._e(),e._v(" "),o("div",{staticClass:"checks"},[o("div",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.enableClac,expression:"enableClac"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.enableClac)?e._i(e.enableClac,null)>-1:e.enableClac},on:{change:function(t){var o=e.enableClac,n=t.target,l=!!n.checked;if(Array.isArray(o)){var c=e._i(o,null);n.checked?c<0&&(e.enableClac=o.concat([null])):c>-1&&(e.enableClac=o.slice(0,c).concat(o.slice(c+1)))}else e.enableClac=l}}}),e._v(" Enable clac")])]),e._v(" "),o("div",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.showBebop,expression:"showBebop"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showBebop)?e._i(e.showBebop,null)>-1:e.showBebop},on:{change:function(t){var o=e.showBebop,n=t.target,l=!!n.checked;if(Array.isArray(o)){var c=e._i(o,null);n.checked?c<0&&(e.showBebop=o.concat([null])):c>-1&&(e.showBebop=o.slice(0,c).concat(o.slice(c+1)))}else e.showBebop=l}}}),e._v(" Show bebop scales")])]),e._v(" "),o("div",[o("label",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.hideFooter,expression:"hideFooter"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hideFooter)?e._i(e.hideFooter,null)>-1:e.hideFooter},on:{change:function(t){var o=e.hideFooter,n=t.target,l=!!n.checked;if(Array.isArray(o)){var c=e._i(o,null);n.checked?c<0&&(e.hideFooter=o.concat([null])):c>-1&&(e.hideFooter=o.slice(0,c).concat(o.slice(c+1)))}else e.hideFooter=l}}}),e._v(" Hide footer")])])])],1)}),[],!1,null,"44902e46",null));t.default=h.exports}}]);