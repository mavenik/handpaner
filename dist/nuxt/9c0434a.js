(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{185:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("12543984",content,!0,{sourceMap:!1})},186:function(t,e,n){var content=n(216);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("ec76f832",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";n(185)},214:function(t,e,n){(e=n(33)(!1)).push([t.i,".record[data-v-f4058f74]{height:30px;display:flex;justify-content:center;margin:0 -8px}.record>*[data-v-f4058f74]{margin:0 8px}button[data-v-f4058f74]:not(:disabled){cursor:pointer}.btn-rec[data-v-f4058f74]{border:1px solid red;background:#fcc;width:30px;height:30px;border-radius:30px}",""]),t.exports=e},215:function(t,e,n){"use strict";n(186)},216:function(t,e,n){(e=n(33)(!1)).push([t.i,"[data-v-aaca9c4a] .handpan-diagram{--deg:90deg;width:100vw;height:calc(100vh - 90px);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-wrap:wrap}@media (orientation:portrait){[data-v-aaca9c4a] .handpan-diagram{--size:98vw}}@media (orientation:landscape){[data-v-aaca9c4a] .handpan-diagram{--size:calc(98vh - 90px)}}@media (orientation:portrait){[data-v-aaca9c4a] .handpan-diagram.hasBottom{--size:calc(49vh - 45px)}}@media (orientation:landscape){[data-v-aaca9c4a] .handpan-diagram.hasBottom{--size:calc(49vh - 45px)}}[data-v-aaca9c4a] .handpan-shape{width:var(--size);height:var(--size);border-radius:var(--size)}[data-v-aaca9c4a] .ding,[data-v-aaca9c4a] .gu,[data-v-aaca9c4a] .note span{width:calc(var(--size)*0.23);height:calc(var(--size)*0.23);margin-left:calc(var(--size)*-0.1);margin-top:calc(var(--size)*-0.1);font-size:calc(var(--size)*0.05)}[data-v-aaca9c4a] .note{top:calc(var(--size)*0.432);padding-left:calc(var(--size)*0.432*2)}[data-v-aaca9c4a] .inside{width:calc(var(--size)*0.1);height:calc(var(--size)*0.1);border-radius:calc(var(--size)*0.1)}[data-v-aaca9c4a] .ding .inside{width:calc(var(--size)*0.12);height:calc(var(--size)*0.12);border-radius:calc(var(--size)*0.12)}[data-v-aaca9c4a] .ding{width:calc(var(--size)*0.34);height:calc(var(--size)*0.34);margin-left:calc(var(--size)*-0.17);margin-top:calc(var(--size)*-0.17)}",""]),t.exports=e},223:function(t,e,n){"use strict";n.r(e);n(47);var c=n(1),r=n(189),o=n(115),d=c.a.extend({data:function(){return{inputRecord:"",isPlaying:!1}},computed:{isListening:function(){return this.$store.state.recorder.isListening},isRecording:function(){return this.$store.state.recorder.isRecording}},methods:{startListening:function(){this.$store.commit("recorder/startListening")},stopRecord:function(){this.$store.commit("recorder/stopRecord"),this.inputRecord=Object(o.stringifyStateRecord)(this.$store.state.recorder)},playRecord:function(){this.isPlaying=!0,this.$root.$emit("playRecord",Object(o.parseRecord)(this.inputRecord))},stopPlayback:function(){this.isPlaying=!1,this.$root.$emit("stopPlayback")}}}),l=(n(213),n(14)),h=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record"},[t.isRecording?t._e():n("button",{staticClass:"btn-rec",on:{click:function(e){return t.startListening()}}},[t.isListening?[t._v("…")]:[t._v("rec")]],2),t._v(" "),t.isRecording?n("button",{staticClass:"btn-stop",on:{click:function(e){return t.stopRecord()}}},[t._v("stop")]):t._e(),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputRecord,expression:"inputRecord"}],domProps:{value:t.inputRecord},on:{input:function(e){e.target.composing||(t.inputRecord=e.target.value)}}}),t._v(" "),t.isPlaying?t._e():n("button",{attrs:{disabled:!t.inputRecord},on:{click:function(e){return t.playRecord()}}},[t._v("play")]),t._v(" "),t.isPlaying?n("button",{on:{click:function(e){return t.stopPlayback()}}},[t._v("stop")]):t._e()])}),[],!1,null,"f4058f74",null).exports,v=n(170),f=c.a.extend({components:{HandpanDiagram:r.a,Record:h},layout:"empty",head:function(){return{meta:[{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0"}]}},data:function(){return{handpan:null,selectedChord:{label:"",root:"",type:"",noteNames:[]}}},computed:{volume:{get:function(){return this.$store.getters["options/getVolume"]},set:function(t){this.$store.commit("options/setVolume",t)}}},mounted:function(){if(this.handpan=new v.a,this.$nuxt.$route.hash){var t=this.$nuxt.$route.hash.substr(1);this.handpan.loadFromAbsNotation(t.replace(/-/g," "))}else this.handpan.loadFromAbsNotation("D/ G A C D E F G A C D")}}),m=(n(215),Object(l.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Record"),this._v(" "),this.handpan?e("HandpanDiagram",{attrs:{handpan:this.handpan,selectedChord:this.selectedChord,selectedPanScale:null,selectedScale:null}}):this._e()],1)}),[],!1,null,"aaca9c4a",null));e.default=m.exports}}]);