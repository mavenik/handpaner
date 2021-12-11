(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{193:function(t,n,e){"use strict";var strong=e(200),o=e(195);t.exports=e(201)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(o(this,"Set"),t=0===t?0:t,t)}},strong)},194:function(t,n,e){"use strict";var o=e(4),r=e(199),c=e(28),d=e(14),l=e(54),f=e(141);o(o.P,"Array",{flatMap:function(t){var n,e,o=c(this);return l(t),n=d(o.length),e=f(o,0),r(e,o,o,n,0,1,t,arguments[1]),e}}),e(72)("flatMap")},195:function(t,n,e){var o=e(11);t.exports=function(t,n){if(!o(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},198:function(t,n,e){"use strict";e.d(n,"d",(function(){return h})),e.d(n,"c",(function(){return v})),e.d(n,"a",(function(){return m})),e.d(n,"b",(function(){return E}));var o=e(10),r=e(196),c=e(120),d=e(121),l=(e(15),e(22),e(21),e(193),e(33),e(12),e(34),e(194),e(71),e(41),["C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"]),f=e(197),h=function(){function t(n){Object(c.a)(this,t),this.id=""+(new Date).getTime()+Math.round(1e6*Math.random()+1e6),this.handpanModel=y(n)}return Object(d.a)(t,[{key:"loadFromDefinition",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.handpanModel=y(t,n)}}]),t}(),v=function(){function t(n){Object(c.a)(this,t),this.name="",this.genericName="",this.notes=n}return Object(d.a)(t,[{key:"getDing",value:function(){var t=this.notes.filter((function(t){return!0===t.isDing}));if(1!==t.length)throw new Error("need only 1 ding");return t[0]}},{key:"getDingString",value:function(){var t=this.getDing();return t.noteName+t.octave}},{key:"getRestNotes",value:function(){return this.notes.filter((function(t){return!1===t.isDing}))}},{key:"getRestNotesTop",value:function(){return this.notes.filter((function(t){return!1===t.isDing&&!t.isBottom}))}},{key:"getRestNotesBottom",value:function(){return this.notes.filter((function(t){return!1===t.isDing&&t.isBottom}))}},{key:"getDefinition",value:function(){var t=this.getDing(),n=l.indexOf(t.noteName),e=t.octave;return t.noteName+(3!==t.octave?t.octave:"")+"/ "+this.getRestNotes().map((function(t){var o=l.indexOf(t.noteName);o<=n&&e++,n=o;var r=t.octave!==e?t.noteName+t.octave:t.noteName;return t.isBottom?"("+r+")":r})).join(" ")}},{key:"getUniqueNotesNames",value:function(){return Object(r.a)(new Set(this.notes.map((function(t){return t.noteName}))))}},{key:"getUniqueNotesString",value:function(){return Object(r.a)(new Set(this.notes.map((function(t){return t.noteName+t.octave}))))}}]),t}(),m=["E2","F2","F#2","G2","G#2","A2","A#2","B2","C3","C#3","D3","D#3","E3","F3","F#3","G3","G#3","A3","A#3","B3"];function A(t){return t.flatMap((function(t){return m.map((function(n){return y(t.definition,n,t.name)}))}))}var C=A([{definition:"F/ A C E F A B C E",name:"Aegean"},{definition:"E/ A B C D E F G A",name:"Aeolian"},{definition:"E/ A B C E F A B C",name:"Akebono"},{definition:"A/ E G A B C D E",name:"Amara"},{definition:"A/ E G A B C D E G",name:"Amara"},{definition:"A/ E G A B C D E A",name:"Amara triple"},{definition:"A/ (C) (D) E (F) G A B C D E (F) (G)",name:"Amarakurd mini"},{definition:"A/ (C) (D) E (F) G (G#) A B C D E (F) G A (B) (C)",name:"Amarakurdhijaz"},{definition:"C/ G A C D E F G C",name:"Anahata"},{definition:"A/ E F G A C E F G",name:"Arboreal"},{definition:"C/ (D) (E) F G A B C D E (F) G A (B) (C) (D) (E)",name:"Ashakiran"},{definition:"A/ C D E F G A C D",name:"Avalon"},{definition:"A/ C D E F G A C D E",name:"Avalon"},{definition:"A/ D F G G# A C D F",name:"Blues"},{definition:"A/ C D G A C D E G",name:"Chao Guo"},{definition:"A/ C E G A B C D E",name:"Deep Shello"},{definition:"E/ A B C D E F A B C",name:"DaNaYo"},{definition:"D/ A B C D E F G A",name:"Dorian"},{definition:"A/ C E F G A B C",name:"Equinox"},{definition:"A/ C E F G A B C E",name:"Equinox"},{definition:"F/ (C#3) (G) G# C C# D# F G G# C",name:"Equinox bottomised"},{definition:"A/ (B) (C) E F (F#) G A B C (D) E",name:"Equinox lowpygkurdorian mini"},{definition:"C/ E G A B C D F# G",name:"Golden Gate"},{definition:"A/ (B) (C) (D) E F G# A B C D E (G#) A (B) (C)",name:"Harmonic Lora"},{definition:"E/ A B C D E F G# A",name:"Harmonic minor"},{definition:"A/ C D E F A C D E",name:"High Avalon"},{definition:"B/ E F G# A B C D E",name:"Hijaz (Mercury)"},{definition:"A/ E F G# A B C D E",name:"Hijaz"},{definition:"B/ E F G# A B C D D#",name:"Hijaz Kar (Mercury)"},{definition:"E/ B C D E F G# A B",name:"Hijaz Major"},{definition:"D/ A A# C D D# F# G A C D",name:"Hijaz Tarznauyn"},{definition:"A/ E F A B C D E",name:"Insen"},{definition:"A/ E F A B C D E F",name:"Insen"},{definition:"A/ E F G A B C E G",name:"Integral (Mercury)"},{definition:"A/ E F G A B C E F",name:"Integral (Sam)"},{definition:"D/ G A B C D E F G",name:"Jibuk"},{definition:"A/ (B) (C) D E F (G) G# A B C D E (F) A",name:"Kamaji"},{definition:"A/ E F G A B C D",name:"Kurd"},{definition:"A/ E F G A B C D E",name:"Kurd"},{definition:"A/ (C) (D) E F G A B C D E F G (A) (B) (C) (D)",name:"Kurd extended"},{definition:"A/ (F3) (G) (C) (D) E F G A B C D E F G A",name:"Kurd extended (Gio)"},{definition:"A/ (F3) (G) (B) (C) (D) E F G A B C D E F G A",name:"Kurd extended (Gio)"},{definition:"D/ F A B C D E F",name:"La Sirena"},{definition:"D/ F A B C D E F A",name:"La Sirena"},{definition:"A/ C E F A B C E",name:"Low Mystic"},{definition:"A/ B C E G A B C E",name:"Low Pygmy"},{definition:"A2/ A3 B C E G A B C",name:"Low Pygmy Octave"},{definition:"F/ C E F G A B C E",name:"Lydian"},{definition:"A/ C E G A B C E",name:"Magic Voyage"},{definition:"A/ C E G A B C E G",name:"Magic Voyage"},{definition:"C/ F G A B C D E",name:"Major"},{definition:"C/ F G A B C D E G",name:"Major"},{definition:"C/ E F G B C E F G",name:"Melog Selisir"},{definition:"A/ D E F A B C D",name:"Minor"},{definition:"A/ D E F A B C D E",name:"Minor"},{definition:"G/ D E F G A B D",name:"Mixolydian (-4)"},{definition:"G/ D E F G A B D E",name:"Mixolydian (-4)"},{definition:"G/ D E G A B C D E",name:"Mixolydian (-7m)"},{definition:"A/ E F A B C E G",name:"Mystic (Hagane)"},{definition:"A/ E F A B C D E G",name:"Mystic (Sam)"},{definition:"A/ E F A C# D E F A",name:"Onoleo"},{definition:"C/ E F G A C E F G",name:"Oxalis"},{definition:"C/ E G B C D E G",name:"Paradise (v1)"},{definition:"C/ E F G C D E G",name:"Paradise (v2)"},{definition:"C/ F G A C D F G A",name:"Pentatonic Major"},{definition:"A/ D E F A C D E F",name:"Pygmy"},{definition:"A/ E G A C# D E G A",name:"Raga Desh"},{definition:"A/ D E F G# A B C E",name:"Romanian Hijaz"},{definition:"A/ D E F G# A B C D E",name:"Romanian Hijaz"},{definition:"A/ C E F G# A B C E",name:"Romanian mineur harmonique"},{definition:"C/ (D) (E) F G A B C D E (F) G (A) (B) (C) (D)",name:"Sabye"},{definition:"A/ E F A B C D E A",name:"Ursa minor"},{definition:"C/ G B C D E F G C",name:"Ysha Savita"}]);function E(t){return[].concat(Object(r.a)(C),Object(r.a)(A(t)))}function y(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",c=t.split("/"),d=Object(o.a)(c,2),h=d[0],m=d[1],A=Object(f.k)(h,3),C=n?Object(f.k)(n):A,E=Object(f.j)(A.noteName,A.octave,C.noteName,C.octave),y={noteName:C.noteName,octave:C.octave,isDing:!0,isBottom:!1},D=C.octave,G=l.indexOf(C.noteName),N=m.trim().replace(/\s\s+/g," ").split(" "),B=N.map((function(t){var n=t.replace(/\(|\)/g,""),e=Object(f.k)(n),o=Object(f.l)(e,E),r=l.indexOf(o.noteName),c=r<=G?D+1:D,d=o.octave?o.octave:c;return D=d,G=r,{noteName:o.noteName,octave:d,isDing:!1,isBottom:"("===t[0]}})),F=[y].concat(Object(r.a)(B)),k=new v(F);if(e){var x=B.filter((function(t){return!t.isBottom})).length,_=B.filter((function(t){return t.isBottom})).length,w=x+(_?"+"+_:"")+"+1",S=e+" "+w,j=y.noteName+(3!==y.octave?y.octave:"")+" "+S;k.name=j,k.genericName=S}return k}},199:function(t,n,e){"use strict";var o=e(100),r=e(11),c=e(14),d=e(27),l=e(2)("isConcatSpreadable");t.exports=function t(n,e,source,f,h,v,m,A){for(var element,C,E=h,y=0,D=!!m&&d(m,A,3);y<f;){if(y in source){if(element=D?D(source[y],y,e):source[y],C=!1,r(element)&&(C=void 0!==(C=element[l])?!!C:o(element)),C&&v>0)E=t(n,e,element,c(element.length),E,v-1)-1;else{if(E>=9007199254740991)throw TypeError();n[E]=element}E++}y++}return E}},200:function(t,n,e){"use strict";var o=e(13).f,r=e(97),c=e(136),d=e(27),l=e(135),f=e(138),h=e(101),v=e(140),m=e(99),A=e(8),C=e(137).fastKey,E=e(195),y=A?"_s":"size",D=function(t,n){var e,o=C(n);if("F"!==o)return t._i[o];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,h){var v=t((function(t,o){l(t,v,n,"_i"),t._t=n,t._i=r(null),t._f=void 0,t._l=void 0,t[y]=0,null!=o&&f(o,e,t[h],t)}));return c(v.prototype,{clear:function(){for(var t=E(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[y]=0},delete:function(t){var e=E(this,n),o=D(e,t);if(o){var r=o.n,c=o.p;delete e._i[o.i],o.r=!0,c&&(c.n=r),r&&(r.p=c),e._f==o&&(e._f=r),e._l==o&&(e._l=c),e[y]--}return!!o},forEach:function(t){E(this,n);for(var e,o=d(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(o(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!D(E(this,n),t)}}),A&&o(v.prototype,"size",{get:function(){return E(this,n)[y]}}),v},def:function(t,n,e){var o,r,c=D(t,n);return c?c.v=e:(t._l=c={i:r=C(n,!0),k:n,v:e,p:o=t._l,n:void 0,r:!1},t._f||(t._f=c),o&&(o.n=c),t[y]++,"F"!==r&&(t._i[r]=c)),t},getEntry:D,setStrong:function(t,n,e){h(t,n,(function(t,e){this._t=E(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this,n=t._k,e=t._l;e&&e.r;)e=e.p;return t._t&&(t._l=e=e?e.n:t._t._f)?v(0,"keys"==n?e.k:"values"==n?e.v:[e.k,e.v]):(t._t=void 0,v(1))}),e?"entries":"values",!e,!0),m(n)}}},201:function(t,n,e){"use strict";var o=e(5),r=e(4),c=e(16),d=e(136),meta=e(137),l=e(138),f=e(135),h=e(11),v=e(9),m=e(98),A=e(53),C=e(142);t.exports=function(t,n,e,E,y,D){var G=o[t],N=G,B=y?"set":"add",F=N&&N.prototype,k={},x=function(t){var n=F[t];c(F,t,"delete"==t||"has"==t?function(a){return!(D&&!h(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return D&&!h(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof N&&(D||F.forEach&&!v((function(){(new N).entries().next()})))){var _=new N,w=_[B](D?{}:-0,1)!=_,S=v((function(){_.has(1)})),j=m((function(t){new N(t)})),M=!D&&v((function(){for(var t=new N,n=5;n--;)t[B](n,n);return!t.has(-0)}));j||((N=n((function(n,e){f(n,N,t);var o=C(new G,n,N);return null!=e&&l(e,y,o[B],o),o}))).prototype=F,F.constructor=N),(S||M)&&(x("delete"),x("has"),y&&x("get")),(M||w)&&x(B),D&&F.clear&&delete F.clear}else N=E.getConstructor(n,t,y,B),d(N.prototype,e),meta.NEED=!0;return A(N,t),k[t]=N,r(r.G+r.W+r.F*(N!=G),k),D||E.setStrong(N,t,y),N}},205:function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},206:function(t,n,e){var content=e(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("4279d054",content,!0,{sourceMap:!1})},207:function(t,n,e){var content=e(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(40).default)("04da3723",content,!0,{sourceMap:!1})},223:function(t,n,e){"use strict";e(22),e(139);var o,r,c,d=e(1),l=e(197),f=d.a.extend({props:{note:Object},computed:{showRelative:function(){return this.$store.state.selection.showRelative},relativeNoteBase:function(){return this.$store.state.selection.relativeNoteBase},relative:function(){return Object(l.a)(this.relativeNoteBase,this.note.noteName)}}}),h=(e(231),e(19)),v=Object(h.a)(f,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.showRelative?[t._v("\n        "+t._s(t.relative)+"\n    ")]:[t._v("\n        "+t._s(t.note.noteName.replace("#","♯").replace("b","♭"))),e("sub",[t._v(t._s(t.note.octave))])]],2)}),[],!1,null,"49aacf04",null).exports,m=e(198),data=(e(41),e(36),e(12),e(15),e(20),e(35),e(33),e(34),e(95));function A(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return C(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return C(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,d=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){d=!0,r=t},f:function(){try{c||null==e.return||e.return()}finally{if(d)throw r}}}}function C(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,e=new Array(n);i<n;i++)e[i]=t[i];return e}function E(path,t){var n=new XMLHttpRequest;n.open("GET",path),n.responseType="arraybuffer",n.onload=function(){var e=n.response;o.decodeAudioData(e,t)},n.send()}o=new AudioContext;var y,D=A(data.f);try{var G=function(){var t,n=y.value,e=A(n.samplesDispo);try{var o=function(){var e=t.value;E("/"+n.folder+"/"+e.replace("#","s")+".flac",(function(data){return n.buffer[e]=data}))};for(e.s();!(t=e.n()).done;)o()}catch(t){e.e(t)}finally{e.f()}};for(D.s();!(y=D.n()).done;)G()}catch(t){D.e(t)}finally{D.f()}function N(t,n){var e=o.createGain();e.gain.value=n;var source=o.createBufferSource();source.buffer=t,e.connect(o.destination),source.connect(e),source.start(0)}E("/gu/D2.flac",(function(data){return c=data})),E("/clac/clac.flac",(function(data){return r=data}));var B=!1,F=d.a.extend({components:{HandpanNoteInside:v},props:{handpan:m.c,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},data:function(){return{playInterval:null,notesTimeouts:[],animatedNote:null,animatedNotes:[]}},computed:{nbNotesTop:function(){return this.handpan.getRestNotesTop().length},nbNotesBottom:function(){return this.handpan.getRestNotesBottom().length},cssNbNotesTop:function(){return{"--nbnotes":this.nbNotesTop}},cssNbNotesBottom:function(){return{"--nbnotes":this.nbNotesBottom}},recordPlaying:{get:function(){return this.$store.getters["player/getRecordPlaying"]},set:function(t){this.$store.commit("player/setRecordPlaying",t)}}},watch:{recordPlaying:function(t){null!==t?this.beginPlayback(t):(clearTimeout(this.playInterval),this.notesTimeouts.forEach((function(t){return clearTimeout(t)})))}},methods:{endAnim:function(t){this.animatedNotes=this.animatedNotes.filter((function(n){return n!==t}))},isAnim:function(t){return-1!==this.animatedNotes.indexOf(t)},beginPlayback:function(t){var n=this,e=this.$store.state.options.playbackSpeed,o=t.record[this.$store.state.selection.playbackStart].time,r=this.$store.state.selection.playbackEnd+1,c=(r<t.record.length?t.record[r].time:t.endTime)-o;this.notesTimeouts=[],t.record.forEach((function(t,i){var r=(t.time-o)/e;r<0||r>=c/e||n.notesTimeouts.push(setTimeout((function(){n.playNoteByFullname(t.note)}),r))})),this.playInterval=setTimeout((function(){n.beginPlayback(t)}),c/e)},playClacMouse:function(){B||this.playClac()},playClacTouch:function(){this.playClac()},playClac:function(){this.$store.state.options.enableClac&&function(t){N(r,t)}(this.$store.getters["options/getVolume"])},playGuMouse:function(t){t.stopPropagation(),B||this.playGu()},playGuTouch:function(t){t.stopPropagation(),this.playGu()},playGu:function(){!function(t){N(c,t)}(this.$store.getters["options/getVolume"])},playNoteTouch:function(t,n){t.stopPropagation(),B=!0,this.playNote(n)},playNoteMouse:function(t,n){t.stopPropagation(),B||this.playNote(n)},playNoteByFullname:function(t){var n=this.handpan.notes.find((function(n){return n.noteName+n.octave===t}));n?this.playNote(n):console.log("note not found in the pan",t)},playNote:function(t){var n=this,e=t.noteName,o=t.octave,r=Object(l.c)(e),c=this.$store.getters["options/getChosenSamplesBankIndex"],d=data.f[c].buffer[r+o];d&&(this.playSample(d),this.$store.dispatch("recorder/playNote",r+o),this.animatedNotes=this.animatedNotes.filter((function(n){return n!==t})),setTimeout((function(){n.animatedNotes.push(t)}),1))},playSample:function(t){N(t,this.$store.getters["options/getVolume"])},isSpecial:function(t){var n,e,o=Object(l.b)(t.noteName);return t.noteName===(null===(n=this.selectedScale)||void 0===n?void 0:n.special)||o===(null===(e=this.selectedScale)||void 0===e?void 0:e.special)},isRoot:function(t){var n,e,o,r,c=Object(l.b)(t.noteName),d=t.noteName===(null===(n=this.selectedChord)||void 0===n?void 0:n.root)||c===(null===(e=this.selectedChord)||void 0===e?void 0:e.root),f=t.noteName===(null===(o=this.selectedScale)||void 0===o?void 0:o.tonic)||c===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic),h=!1;return this.selectedPanScale&&(h=t.noteName===this.selectedPanScale.getDing().noteName||c===this.selectedPanScale.getDing().noteName),d||f||h},isNoteInModel:function(t){var n=!1,e=t.noteName,o=Object(l.b)(e);return this.selectedPanScale&&this.selectedPanScale.notes&&(n=this.selectedPanScale.notes.some((function(t){return t.noteName===e||t.noteName===o}))),n},isHighlighted:function(t){var n=t.noteName,e=t.octave;if(-1!==this.$store.state.selection.highlightedNotes.indexOf(n+e))return!0;var o=Object(l.b)(n),r=!1,c=!1,d=!1;return this.selectedChord&&(d=-1!==this.selectedChord.noteNames.indexOf(n)||-1!==this.selectedChord.noteNames.indexOf(o)),this.selectedScale&&this.selectedScale.noteNames&&(r=-1!==this.selectedScale.noteNames.indexOf(n)||-1!==this.selectedScale.noteNames.indexOf(o)),this.selectedPanScale&&this.selectedPanScale.notes&&(c=this.selectedPanScale.notes.some((function(t){return t.octave===e&&(t.noteName===n||t.noteName===o)}))),d||r||c}}}),k=(e(233),Object(h.a)(F,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"handpan-diagram",class:{bad:"bad"===t.selectedChord.type,hasBottom:t.nbNotesBottom>0}},[e("div",{staticClass:"handpan-shape is-top",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"ding",class:{highlight:t.isHighlighted(t.handpan.getDing()),highlightplus:t.isRoot(t.handpan.getDing()),highlightless:t.isNoteInModel(t.handpan.getDing())},on:{mousedown:function(n){t.playNoteMouse(n,t.handpan.getDing())},touchstart:function(n){t.playNoteTouch(n,t.handpan.getDing())}}},[e("HandpanNoteInside",{staticClass:"inside",attrs:{note:t.handpan.getDing()}}),t._v(" "),e("div",{staticClass:"animation",class:{animated:t.isAnim(t.handpan.getDing())},on:{animationend:function(n){t.endAnim(t.handpan.getDing())}}})],1),t._v(" "),e("div",{staticClass:"notes",style:t.cssNbNotesTop},t._l(t.handpan.getRestNotesTop(),(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n),special:t.isSpecial(n),highlightplus:t.isRoot(n),highlightless:t.isNoteInModel(n)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("HandpanNoteInside",{staticClass:"inside",attrs:{note:n}}),t._v(" "),e("div",{staticClass:"animation",class:{animated:t.isAnim(n)},on:{animationend:function(e){return t.endAnim(n)}}})],1)])})),0)]),t._v(" "),t.nbNotesBottom?e("div",{staticClass:"handpan-shape is-bottom",on:{mousedown:function(n){return t.playClacMouse()},touchstart:function(n){return t.playClacTouch()}}},[e("div",{staticClass:"gu",on:{mousedown:function(n){return t.playGuMouse(n)},touchstart:function(n){return t.playGuTouch(n)}}}),t._v(" "),e("div",{staticClass:"notes",style:t.cssNbNotesBottom},t._l(t.handpan.getRestNotesBottom(),(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n),special:t.isSpecial(n),highlightplus:t.isRoot(n),highlightless:t.isNoteInModel(n)},on:{mousedown:function(e){return t.playNoteMouse(e,n)},touchstart:function(e){return t.playNoteTouch(e,n)}}},[e("HandpanNoteInside",{staticClass:"inside",attrs:{note:n}}),t._v(" "),e("div",{staticClass:"animation",class:{animated:t.isAnim(n)},on:{animationend:function(e){return t.endAnim(n)}}})],1)])})),0)]):t._e()])}),[],!1,null,"abb517fa",null));n.a=k.exports},231:function(t,n,e){"use strict";e(206)},232:function(t,n,e){var o=e(39)(!1);o.push([t.i,"sub[data-v-49aacf04]{margin-bottom:-10px;font-size:.7em}",""]),t.exports=o},233:function(t,n,e){"use strict";e(207)},234:function(t,n,e){var o=e(39)(!1);o.push([t.i,".handpan-shape[data-v-abb517fa]{position:relative;background:radial-gradient(#fdfdfd,#606060)}.handpan-shape.is-bottom[data-v-abb517fa]{background:#666;--deg:80deg}.ding[data-v-abb517fa],.gu[data-v-abb517fa]{position:absolute;left:50%;top:50%}.ding[data-v-abb517fa],.gu[data-v-abb517fa],.note span[data-v-abb517fa]{border:1px solid grey;font-size:14px;border-radius:999px;pointer-events:all;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.ding[data-v-abb517fa],.gu[data-v-abb517fa],.inside[data-v-abb517fa],.note span[data-v-abb517fa]{display:flex;align-items:center;justify-content:center}.inside[data-v-abb517fa]{background:radial-gradient(#ccc,#a9a9a9);border:1px solid grey;position:absolute}.ding .inside[data-v-abb517fa]{background:radial-gradient(#fcfcfc,#a9a9a9)}.ding[data-v-abb517fa]{background:#e6e6e6}.note span[data-v-abb517fa]{background:#aaa}.gu[data-v-abb517fa]{background:#333}.note[data-v-abb517fa]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;position:absolute}.handpan-shape .highlightless[data-v-abb517fa]{background:rgba(255,255,0,.50196)!important}.handpan-shape .highlight[data-v-abb517fa]{background:rgba(0,255,0,.50196)!important}.handpan-shape .highlightplus[data-v-abb517fa]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-abb517fa]{border-color:#f0f!important}.bad .highlight[data-v-abb517fa]{background:rgba(255,0,0,.50196)!important}@-webkit-keyframes noteanim-data-v-abb517fa{0%{width:50px;height:50px}50%{width:60px;height:60px}to{width:50px;height:50px}}@keyframes noteanim-data-v-abb517fa{0%{width:50px;height:50px}50%{width:60px;height:60px}to{width:50px;height:50px}}.animation[data-v-abb517fa]{background:#fff;position:absolute;border-radius:100px;display:block}.animated[data-v-abb517fa]{-webkit-animation:noteanim-data-v-abb517fa .1s;animation:noteanim-data-v-abb517fa .1s}.note[data-v-abb517fa]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-abb517fa]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*-1))}.note[data-v-abb517fa]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*-1))}.note[data-v-abb517fa]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*2*-1))}.note[data-v-abb517fa]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*2*-1))}.note[data-v-abb517fa]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*3*-1))}.note[data-v-abb517fa]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*3*-1))}.note[data-v-abb517fa]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*4*-1))}.note[data-v-abb517fa]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*4*-1))}.note[data-v-abb517fa]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*5*-1))}.note[data-v-abb517fa]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*5*-1))}.note[data-v-abb517fa]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*6*-1))}.note[data-v-abb517fa]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*6*-1))}.note[data-v-abb517fa]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*7*-1))}.note[data-v-abb517fa]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*7*-1))}.note[data-v-abb517fa]:nth-child(16){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*8))}.note:nth-child(16) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*8*-1))}.note[data-v-abb517fa]:nth-child(17){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*8))}.note:nth-child(17) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*8*-1))}.note[data-v-abb517fa]:nth-child(18){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*9))}.note:nth-child(18) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 + 1turn/var(--nbnotes)*9*-1))}.note[data-v-abb517fa]:nth-child(19){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*9))}.note:nth-child(19) span[data-v-abb517fa]{transform:rotate(calc(var(--deg)*-1 - 1turn/var(--nbnotes)*9*-1))}",""]),t.exports=o}}]);