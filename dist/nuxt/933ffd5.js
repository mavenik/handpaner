(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{187:function(e,t,n){var content=n(218);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("409dda2e",content,!0,{sourceMap:!1})},188:function(e,t,n){var content=n(220);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("a72252fc",content,!0,{sourceMap:!1})},217:function(e,t,n){"use strict";n(187)},218:function(e,t,n){(t=n(33)(!1)).push([e.i,".handpans[data-v-7741254b]{display:flex;flex-wrap:wrap}[data-v-7741254b] .handpan-shape{width:200px;height:200px;border-radius:200px}[data-v-7741254b] .handpan-shape.is-bottom{margin-left:25px;width:150px;height:150px;border-radius:150px}[data-v-7741254b] .ding{width:76px;height:76px;margin-left:-38px;margin-top:-38px}[data-v-7741254b] .gu,[data-v-7741254b] .note span{width:40px;height:40px;margin-left:-20px;margin-top:-20px}[data-v-7741254b] .note{top:90px;padding-left:175px}[data-v-7741254b] .is-bottom .note{top:65px;padding-left:125px}[data-v-7741254b] .inside{width:24px;height:24px;border-radius:24px}[data-v-7741254b] .ding .inside{width:32px;height:32px;border-radius:32px}",""]),e.exports=t},219:function(e,t,n){"use strict";n(188)},220:function(e,t,n){(t=n(33)(!1)).push([e.i,".chord-type[data-v-21132689],.panscales[data-v-21132689],.scales[data-v-21132689],.selectables[data-v-21132689]{display:flex;flex-wrap:wrap;margin-top:4px}.chord-type-name[data-v-21132689]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-21132689],.panscale[data-v-21132689],.scale[data-v-21132689],.selectable[data-v-21132689]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.panscale[data-v-21132689],.scale[data-v-21132689]{margin-top:4px}.chord.highlight[data-v-21132689],.panscale.highlight[data-v-21132689],.scale.highlight[data-v-21132689],.selectable.highlight[data-v-21132689]{background:rgba(0,255,204,.50196)!important}.tabs[data-v-21132689]{display:flex;align-items:center}.tab[data-v-21132689]{position:relative;width:150px;padding:8px 0;font-weight:700;text-align:center;cursor:pointer;border-bottom:1px solid #666;margin-bottom:-1px}.tab.selected[data-v-21132689]{background:#fff;border:1px solid #666;border-bottom:none}.tab[data-v-21132689]:not(.selected):hover{color:#0cc}.tab-content[data-v-21132689]{background:#fff;border:1px solid #666;min-height:130px;padding:8px}.zone[data-v-21132689]{margin-top:16px}.delete[data-v-21132689]{position:absolute;right:2px;top:2px;cursor:pointer;padding:6px;margin-left:16px}.delete[data-v-21132689]:hover{color:red}.play-options[data-v-21132689]{display:flex;justify-content:center}.play-options>*[data-v-21132689]{margin:0 8px}.form-line[data-v-21132689]{display:flex;align-items:center;height:30px}.form-line>span[data-v-21132689]{width:60px;padding-right:10px;text-align:right}.form-line select[data-v-21132689]{min-width:50px}.form-line input[type=text][data-v-21132689],.form-line select[data-v-21132689]{height:100%;box-sizing:border-box}.form-line select[data-v-21132689]:not(:first-of-type){margin-left:5px}.form-line[data-v-21132689]:not(:first-child){margin-top:5px}.play-full[data-v-21132689]{margin-top:10px;text-align:center}",""]),e.exports=t},224:function(e,t,n){"use strict";n.r(t);n(178),n(48),n(181),n(47),n(18),n(36),n(21),n(10),n(35),n(173);var o=n(174),l=n(1),d=n(80),c=n(170),r=n(171),h=n(189),v=l.a.extend({components:{HandpanDiagram:h.a},props:{handpans:Array,selectedChord:Object,selectedPanScale:Object,selectedScale:Object}}),f=(n(217),n(14)),m=Object(f.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"handpans"},e._l(e.handpans,(function(t){return n("HandpanDiagram",{key:t.id,attrs:{handpan:t,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})})),1)}),[],!1,null,"7741254b",null).exports,y=n(182),_=n(115),x=l.a.extend({components:{HandpanDiagrams:m},data:function(){return{displayMode:"panScales",displayedHandpanIndex:0,handpans:[],inputAbsNotation:"",inputDing:"",inputDingOctave:"3",inputPanscale:{},inputRelNotation:"",notes:[],abs:"",scales:d.g,notesAll:d.c,chords:{},selectedPanScale:{},selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[],displayedScales:[],displayedChords:[],displayedPanScales:[],displayedSongs:[],ignoreNextHashChange:!1,isPlaying:!1}},created:function(){var e=this;setTimeout((function(){if(e.$nuxt.$route.hash)e.loadHandpansFromHash();else{var t=new c.a;t.loadFromAbsNotation("D/ A C D E F G A C"),e.handpans.push(t),e.panChanged()}}),1)},computed:{showRelative:{get:function(){return this.$store.state.selection.showRelative},set:function(e){this.$store.commit("selection/setShowRelative",e)}},relativeNoteBase:{get:function(){return this.$store.state.selection.relativeNoteBase},set:function(e){this.$store.commit("selection/setRelativeNoteBase",e)}},selectedSong:{get:function(){return this.$store.state.selection.selectedSong},set:function(e){this.$store.commit("selection/setSelectedSong",e)}},showBebop:function(){return this.$store.state.options.showBebop},uniqueSongs:function(){return Object(o.a)(new Set(Array.from(this.displayedSongs.map((function(e){return e.name})))))},playPath:function(){return this.displayedHandpan?"play/#"+this.displayedHandpan.absNotationUser.replace(/ /g,"-"):"play/"},allPanScalesSorted:function(){return y.a.sort((function(a,b){return a.name.localeCompare(b.name)}))},displayedScalesSorted:function(){return this.displayedScales.sort((function(a,b){return b.totalNotes-a.totalNotes}))},displayedHandpan:function(){return this.handpans[this.displayedHandpanIndex]},uniqueNotesAllPans:function(){return Object(o.a)(new Set(Array.from(this.handpans.flatMap((function(e){return e.getUniqueNotes()})))))}},watch:{$route:function(){this.ignoreNextHashChange?this.ignoreNextHashChange=!1:(this.handpans=[],this.loadHandpansFromHash())}},mounted:function(){this.$store.commit("selection/setHighlightedNotes",[])},methods:{resetSelection:function(){this.unselectPanScale(),this.unselectScale(),this.unselectChord(),this.unselectSong()},loadHandpansFromHash:function(){var e,t=this;this.$nuxt.$route.hash.substr(1).split("_").forEach((function(n){(e=new c.a).loadFromAbsNotation(n.replace(/-/g," ")),t.handpans.push(e),t.panChanged()}))},removeHandpan:function(e,t){e.stopPropagation(),this.handpans.splice(t,1),this.displayedHandpanIndex>=this.handpans.length&&this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.displayHandpan(),this.updateHash()},addHandpan:function(){var e=new c.a;e.loadFromAbsNotation("C/ C"),this.handpans.push(e),this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.updateHash()},panScaleChanged:function(){this.inputPanscale&&(this.inputRelNotation=this.inputPanscale.relativeNotation),this.relChanged()},relChanged:function(){try{this.displayedHandpan.loadFromRelNotation(this.inputDing,this.inputRelNotation,parseInt(this.inputDingOctave,10)),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},absChanged:function(){try{this.displayedHandpan.loadFromAbsNotation(this.inputAbsNotation),this.panChanged(),this.updateHash()}catch(e){console.error("Cannot load handpan",e)}},updateHash:function(){var e=this.$nuxt.$route.hash,t="#"+this.handpans.map((function(e){return e.absNotationUser.replace(/ /g,"-")})).join("_");"-"!==t[t.length-1]&&(t+="-"),t!==e&&(this.ignoreNextHashChange=!0,this.$nuxt.$router.replace(t))},panChanged:function(){this.displayHandpan(),this.genScalesAndChordsAllPans()},genScalesAndChordsAllPans:function(){this.displayedScales=Object(r.g)(this.handpans,{showBebop:this.showBebop}),this.displayedPanScales=Object(r.f)(this.handpans),this.displayedChords=Object(r.e)(this.uniqueNotesAllPans),this.displayedSongs=Object(r.h)(this.handpans)},selectHandpan:function(e){this.displayedHandpanIndex=e,this.displayHandpan()},displayHandpan:function(){var e=this,t=y.a.find((function(t){return e.displayedHandpan.relNotation.trim()===t.relativeNotation.trim()}));this.inputPanscale=t||null,this.inputDing=this.displayedHandpan.ding,this.inputRelNotation=this.displayedHandpan.relNotation,this.inputAbsNotation=this.displayedHandpan.absNotationUser},selectPanScale:function(e){e.name===this.selectedPanScale.name?this.unselectPanScale():this.selectedPanScale=e},unselectPanScale:function(){this.selectedPanScale={}},selectScale:function(e){e.id===this.selectedScale.id?this.unselectScale():this.selectedScale=e},unselectScale:function(){this.selectedScale={}},stopSong:function(){this.isPlaying=!1,this.$root.$emit("stopPlayback")},playSong:function(){this.isPlaying=!0,console.log("play record",this.selectedSong.recording),this.$root.$emit("playRecord",Object(_.parseRecord)(this.selectedSong.recording))},selectSong:function(e){null!==this.selectedSong&&e===this.selectedSong?this.unselectSong():(this.$store.commit("selection/setHighlightedNotes",e.notes),this.selectedSong=e)},unselectSong:function(){this.$store.commit("selection/setHighlightedNotes",[]),this.selectedSong=null},selectChord:function(e,t){t.label===this.selectedChord.label?this.unselectChord():this.selectedChord={label:t.label,root:t.root,type:e.type,noteNames:[].concat(Object(o.a)(t.notes.map((function(e){return Object(r.j)(t.root,e)}))),Object(o.a)(t.notes.map((function(e){return Object(r.i)(t.root,e)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),S=(n(219),Object(f.a)(x,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"tabs",on:{click:function(t){return e.resetSelection()}}},[e._l(e.handpans,(function(t,o){return n("div",{key:t.id,staticClass:"tab",class:{selected:e.displayedHandpanIndex===o},on:{click:function(t){return e.selectHandpan(o)}}},[e._v("\n            Pan n°"+e._s(o+1)+"\n            "),e.handpans.length>1?n("span",{staticClass:"delete",on:{click:function(t){return e.removeHandpan(t,o)}}},[e._v("×")]):e._e()])})),e._v(" "),n("div",{staticClass:"tab",on:{click:function(t){return e.addHandpan()}}},[e._v("+")])],2),e._v(" "),n("div",{staticClass:"tab-content",on:{click:function(t){return e.resetSelection()}}},[n("div",[n("div",{staticClass:"form-line"},[n("span",[e._v("Ding")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDing,expression:"inputDing"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDing=t.target.multiple?n:n[0]},e.relChanged]}},e._l(e.notesAll,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputDingOctave,expression:"inputDingOctave"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputDingOctave=t.target.multiple?n:n[0]},e.relChanged]}},[n("option",[e._v("2")]),e._v(" "),n("option",[e._v("3")])])]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Model")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.inputPanscale,expression:"inputPanscale"}],on:{change:[function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.inputPanscale=t.target.multiple?n:n[0]},e.panScaleChanged]}},e._l(e.allPanScalesSorted,(function(t){return n("option",{key:t.name,domProps:{value:t}},[e._v("\n                        "+e._s(t.name)+"\n                    ")])})),0)]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Notes")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{type:"text",size:"30",placeholder:"Ex: C/ D E F G A B C"},domProps:{value:e.inputAbsNotation},on:{keyup:e.absChanged,input:function(t){t.target.composing||(e.inputAbsNotation=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"form-line"},[n("span",[e._v("Relative")]),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.relativeNoteBase,expression:"relativeNoteBase"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.relativeNoteBase=t.target.multiple?n:n[0]}}},e._l(e.uniqueNotesAllPans,(function(t){return n("option",{key:t},[e._v(e._s(t))])})),0),e._v(" "),n("label",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.showRelative,expression:"showRelative"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showRelative)?e._i(e.showRelative,null)>-1:e.showRelative},on:{change:function(t){var n=e.showRelative,o=t.target,l=!!o.checked;if(Array.isArray(n)){var d=e._i(n,null);o.checked?d<0&&(e.showRelative=n.concat([null])):d>-1&&(e.showRelative=n.slice(0,d).concat(n.slice(d+1)))}else e.showRelative=l}}}),e._v(" show relative")])]),e._v(" "),n("div",{staticClass:"play-full"},[n("nuxt-link",{attrs:{to:e.playPath}},[e._v("Play in full page")])],1)])]),e._v(" "),e.displayedHandpan?n("div",[n("div",{staticClass:"zone",on:{click:function(t){return e.resetSelection()}}},[n("div",{staticClass:"tabs"},[n("div",{staticClass:"tab",class:{selected:"panScales"===e.displayMode},on:{click:function(t){e.displayMode="panScales"}}},[e._v("\n                    Models\n                ")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"scales"===e.displayMode},on:{click:function(t){e.displayMode="scales"}}},[e._v("Scales")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"chords"===e.displayMode},on:{click:function(t){e.displayMode="chords"}}},[e._v("Chords")]),e._v(" "),n("div",{staticClass:"tab",class:{selected:"songs"===e.displayMode},on:{click:function(t){e.displayMode="songs"}}},[e._v("Songs")])]),e._v(" "),"panScales"===e.displayMode?n("div",{staticClass:"tab-content"},[n("div",{staticClass:"panscales"},[e._l(e.displayedPanScales,(function(t){return n("div",{key:t.ding+t.name,staticClass:"panscale",class:{highlight:t.ding===e.selectedPanScale.ding&&t.name===e.selectedPanScale.name},on:{click:function(n){return n.stopPropagation(),e.selectPanScale(t)}}},[e.handpans.length>1?n("span",[e._v(e._s(t.ding))]):e._e(),e._v(" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedPanScales.length?e._e():n("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"scales"===e.displayMode?n("div",{staticClass:"tab-content"},[n("div",{staticClass:"scales"},[e._l(e.displayedScalesSorted,(function(t){return n("div",{key:t.id,staticClass:"scale",class:{highlight:t.id===e.selectedScale.id},on:{click:function(n){return n.stopPropagation(),e.selectScale(t)}}},[e._v("\n                        "+e._s(t.tonic)+" "+e._s(t.name)+"\n                    ")])})),e._v(" "),e.displayedScales.length?e._e():n("div",[e._v("\n                        Nothing…\n                    ")])],2)]):e._e(),e._v(" "),"chords"===e.displayMode?n("div",{staticClass:"tab-content"},e._l(e.displayedChords,(function(t){return n("div",{key:t.type,staticClass:"chord-type"},[n("div",{staticClass:"chord-type-name"},[e._v(e._s(t.type))]),e._v(" "),e._l(t.chords,(function(o){return n("div",{key:o.label,staticClass:"chord",class:{highlight:o.label===e.selectedChord.label},domProps:{innerHTML:e._s(o.label)},on:{click:function(n){return n.stopPropagation(),e.selectChord(t,o)}}})}))],2)})),0):e._e(),e._v(" "),"songs"===e.displayMode?n("div",{staticClass:"tab-content"},[e._v("\n                "+e._s(e.uniqueSongs.length)+" different songs.\n                "),n("div",{staticClass:"selectables"},e._l(e.displayedSongs,(function(t){return n("div",{key:t.name+t.transpo,staticClass:"selectable",class:{highlight:e.selectedSong&&t.name===e.selectedSong.name&&t.transpo===e.selectedSong.transpo},on:{click:function(n){return n.stopPropagation(),e.selectSong(t)}}},[t.recording?[e._v("♫")]:e._e(),e._v(e._s(t.name)+" ("+e._s(t.transpo)+")\n                    ")],2)})),0),e._v(" "),e.isPlaying?n("button",{on:{click:function(t){return t.stopPropagation(),e.stopSong()}}},[e._v("Stop")]):e._e(),e._v(" "),e.selectedSong&&e.selectedSong.recording&&!e.isPlaying?n("button",{on:{click:function(t){return t.stopPropagation(),e.playSong()}}},[e._v("Play")]):e._e()]):e._e()]),e._v(" "),n("div",{staticClass:"zone"},[n("HandpanDiagrams",{attrs:{handpans:e.handpans,selectedChord:e.selectedChord,selectedPanScale:e.selectedPanScale,selectedScale:e.selectedScale}})],1)]):e._e()])}),[],!1,null,"21132689",null));t.default=S.exports}}]);