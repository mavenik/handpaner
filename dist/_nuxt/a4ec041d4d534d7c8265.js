(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{152:function(t,n,e){"use strict";var strong=e(161),r=e(157);t.exports=e(162)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},153:function(t,n,e){var content=e(166);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("69c30581",content,!0,{sourceMap:!1})},154:function(t,n,e){var content=e(168);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(60).default)("71909a81",content,!0,{sourceMap:!1})},155:function(t,n,e){"use strict";var r=e(6),o=e(159),l=e(20),c=e(16),d=e(43),h=e(156);r(r.P,"Array",{flatMap:function(t){var n,e,r=l(this);return d(t),n=c(r.length),e=h(r,0),o(e,r,r,n,0,1,t,arguments[1]),e}}),e(77)("flatMap")},156:function(t,n,e){var r=e(160);t.exports=function(t,n){return new(r(t))(n)}},157:function(t,n,e){var r=e(9);t.exports=function(t,n){if(!r(t)||t._t!==n)throw TypeError("Incompatible receiver, "+n+" required!");return t}},158:function(t,n,e){t.exports=e.p+"img/1fbf4bd.png"},159:function(t,n,e){"use strict";var r=e(108),o=e(9),l=e(16),c=e(19),d=e(2)("isConcatSpreadable");t.exports=function t(n,e,source,h,m,v,f,y){for(var element,_,x=m,C=0,S=!!f&&c(f,y,3);C<h;){if(C in source){if(element=S?S(source[C],C,e):source[C],_=!1,o(element)&&(_=void 0!==(_=element[d])?!!_:r(element)),_&&v>0)x=t(n,e,element,l(element.length),x,v-1)-1;else{if(x>=9007199254740991)throw TypeError();n[x]=element}x++}C++}return x}},160:function(t,n,e){var r=e(9),o=e(108),l=e(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[l])&&(n=void 0)),void 0===n?Array:n}},161:function(t,n,e){"use strict";var r=e(8).f,o=e(79),l=e(111),c=e(19),d=e(109),h=e(110),m=e(81),v=e(112),f=e(82),y=e(7),_=e(107).fastKey,x=e(157),C=y?"_s":"size",S=function(t,n){var e,r=_(n);if("F"!==r)return t._i[r];for(e=t._f;e;e=e.n)if(e.k==n)return e};t.exports={getConstructor:function(t,n,e,m){var v=t((function(t,r){d(t,v,n,"_i"),t._t=n,t._i=o(null),t._f=void 0,t._l=void 0,t[C]=0,null!=r&&h(r,e,t[m],t)}));return l(v.prototype,{clear:function(){for(var t=x(this,n),data=t._i,e=t._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete data[e.i];t._f=t._l=void 0,t[C]=0},delete:function(t){var e=x(this,n),r=S(e,t);if(r){var o=r.n,l=r.p;delete e._i[r.i],r.r=!0,l&&(l.n=o),o&&(o.p=l),e._f==r&&(e._f=o),e._l==r&&(e._l=l),e[C]--}return!!r},forEach:function(t){x(this,n);for(var e,r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.n:this._f;)for(r(e.v,e.k,this);e&&e.r;)e=e.p},has:function(t){return!!S(x(this,n),t)}}),y&&r(v.prototype,"size",{get:function(){return x(this,n)[C]}}),v},def:function(t,n,e){var r,o,l=S(t,n);return l?l.v=e:(t._l=l={i:o=_(n,!0),k:n,v:e,p:r=t._l,n:void 0,r:!1},t._f||(t._f=l),r&&(r.n=l),t[C]++,"F"!==o&&(t._i[o]=l)),t},getEntry:S,setStrong:function(t,n,e){m(t,n,(function(t,e){this._t=x(t,n),this._k=e,this._l=void 0}),(function(){for(var t=this._k,n=this._l;n&&n.r;)n=n.p;return this._t&&(this._l=n=n?n.n:this._t._f)?v(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(this._t=void 0,v(1))}),e?"entries":"values",!e,!0),f(n)}}},162:function(t,n,e){"use strict";var r=e(3),o=e(6),l=e(11),c=e(111),meta=e(107),d=e(110),h=e(109),m=e(9),v=e(10),f=e(80),y=e(44),_=e(114);t.exports=function(t,n,e,x,C,S){var N=r[t],w=N,A=C?"set":"add",k=w&&w.prototype,H={},P=function(t){var n=k[t];l(k,t,"delete"==t||"has"==t?function(a){return!(S&&!m(a))&&n.call(this,0===a?0:a)}:"get"==t?function(a){return S&&!m(a)?void 0:n.call(this,0===a?0:a)}:"add"==t?function(a){return n.call(this,0===a?0:a),this}:function(a,b){return n.call(this,0===a?0:a,b),this})};if("function"==typeof w&&(S||k.forEach&&!v((function(){(new w).entries().next()})))){var O=new w,M=O[A](S?{}:-0,1)!=O,j=v((function(){O.has(1)})),E=f((function(t){new w(t)})),D=!S&&v((function(){for(var t=new w,n=5;n--;)t[A](n,n);return!t.has(-0)}));E||((w=n((function(n,e){h(n,w,t);var r=_(new N,n,w);return null!=e&&d(e,C,r[A],r),r}))).prototype=k,k.constructor=w),(j||D)&&(P("delete"),P("has"),C&&P("get")),(D||M)&&P(A),S&&k.clear&&delete k.clear}else w=x.getConstructor(n,t,C,A),c(w.prototype,e),meta.NEED=!0;return y(w,t),H[t]=w,o(o.G+o.W+o.F*(w!=N),H),S||x.setStrong(w,t,C),w}},163:function(t,n,e){"use strict";var r=e(6),o=e(164)(5),l=!0;"find"in[]&&Array(1).find((function(){l=!1})),r(r.P+r.F*l,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(77)("find")},164:function(t,n,e){var r=e(19),o=e(78),l=e(20),c=e(16),d=e(156);t.exports=function(t,n){var e=1==t,h=2==t,m=3==t,v=4==t,f=6==t,y=5==t||f,_=n||d;return function(n,d,x){for(var C,S,N=l(n),w=o(N),A=r(d,x,3),k=c(w.length),H=0,P=e?_(n,k):h?_(n,0):void 0;k>H;H++)if((y||H in w)&&(S=A(C=w[H],H,N),t))if(e)P[H]=S;else if(S)switch(t){case 3:return!0;case 5:return C;case 6:return H;case 2:P.push(C)}else if(v)return!1;return f?-1:m||v?v:P}}},165:function(t,n,e){"use strict";var r=e(153);e.n(r).a},166:function(t,n,e){(n=e(59)(!1)).push([t.i,".handpan-shape[data-v-a5a6784a]{position:relative;width:200px;height:200px;border-radius:200px;background:#ccc}.handpan-shape.is-bottom[data-v-a5a6784a]{margin-left:25px;width:150px;height:150px;border-radius:150px;background:#666}.ding[data-v-a5a6784a],.gu[data-v-a5a6784a]{position:absolute;left:50%;top:50%}.ding[data-v-a5a6784a],.gu[data-v-a5a6784a],.note span[data-v-a5a6784a]{border:1px solid #333;background:#ddd;display:flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:999px;margin-left:-20px;margin-top:-20px}.gu[data-v-a5a6784a]{background:#333}.note[data-v-a5a6784a]{position:absolute;top:90px;padding-left:175px}.is-bottom .note[data-v-a5a6784a]{top:65px;padding-left:125px}sub[data-v-a5a6784a]{margin-bottom:-10px;font-size:11px}.handpan-shape .highlight[data-v-a5a6784a]{background:rgba(0,255,0,.50196)!important}.handpan-shape .isroot[data-v-a5a6784a]{background:rgba(0,255,204,.50196)!important}.handpan-shape .special[data-v-a5a6784a]{border-color:#f0f!important}.bad .highlight[data-v-a5a6784a]{background:rgba(255,0,0,.50196)!important}.note[data-v-a5a6784a]:first-child{transform:rotate(var(--deg))}.note:first-child span[data-v-a5a6784a]{transform:rotate(calc(var(--deg)*-1))}.note[data-v-a5a6784a]:nth-child(2){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)))}.note:nth-child(2) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes))*-1))}.note[data-v-a5a6784a]:nth-child(3){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)))}.note:nth-child(3) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes))*-1))}.note[data-v-a5a6784a]:nth-child(4){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*2))}.note:nth-child(4) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*2)*-1))}.note[data-v-a5a6784a]:nth-child(5){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*2))}.note:nth-child(5) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*2)*-1))}.note[data-v-a5a6784a]:nth-child(6){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*3))}.note:nth-child(6) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*3)*-1))}.note[data-v-a5a6784a]:nth-child(7){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*3))}.note:nth-child(7) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*3)*-1))}.note[data-v-a5a6784a]:nth-child(8){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*4))}.note:nth-child(8) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*4)*-1))}.note[data-v-a5a6784a]:nth-child(9){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*4))}.note:nth-child(9) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*4)*-1))}.note[data-v-a5a6784a]:nth-child(10){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*5))}.note:nth-child(10) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*5)*-1))}.note[data-v-a5a6784a]:nth-child(11){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*5))}.note:nth-child(11) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*5)*-1))}.note[data-v-a5a6784a]:nth-child(12){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*6))}.note:nth-child(12) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*6)*-1))}.note[data-v-a5a6784a]:nth-child(13){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*6))}.note:nth-child(13) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*6)*-1))}.note[data-v-a5a6784a]:nth-child(14){transform:rotate(calc(var(--deg) + 1turn/var(--nbnotes)*7))}.note:nth-child(14) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) + 1turn/var(--nbnotes)*7)*-1))}.note[data-v-a5a6784a]:nth-child(15){transform:rotate(calc(var(--deg) - 1turn/var(--nbnotes)*7))}.note:nth-child(15) span[data-v-a5a6784a]{transform:rotate(calc((var(--deg) - 1turn/var(--nbnotes)*7)*-1))}",""]),t.exports=n},167:function(t,n,e){"use strict";var r=e(154);e.n(r).a},168:function(t,n,e){(n=e(59)(!1)).push([t.i,"#app[data-v-56fabf49]{position:relative}.chord-type[data-v-56fabf49],.panscales[data-v-56fabf49],.scales[data-v-56fabf49]{display:flex;flex-wrap:wrap;margin-top:4px}.chord-type-name[data-v-56fabf49]{min-width:28px;padding-right:8px;text-align:right}.chord[data-v-56fabf49],.panscale[data-v-56fabf49],.scale[data-v-56fabf49]{border:1px solid #333;border-radius:3px;padding:0 5px;cursor:pointer;min-width:32px;text-align:center;margin-left:4px}.panscale[data-v-56fabf49],.scale[data-v-56fabf49]{margin-top:4px}.chord.highlight[data-v-56fabf49],.panscale.highlight[data-v-56fabf49],.scale.highlight[data-v-56fabf49]{background:rgba(0,255,204,.50196)!important}.tabs[data-v-56fabf49]{display:flex;align-items:center;margin-top:-1px}.tab[data-v-56fabf49],.tabs[data-v-56fabf49]{position:relative}.tab[data-v-56fabf49]{width:150px;padding:8px 0;font-weight:700;text-align:center;cursor:pointer;background:#fff;border-bottom:1px solid #666;margin-bottom:-1px}.tab.selected[data-v-56fabf49]{border:1px solid #666;border-bottom:none}.tab[data-v-56fabf49]:not(.selected):hover{color:#0cc}.tab-content[data-v-56fabf49]{border:1px solid #666;min-height:130px;padding:8px}.zone[data-v-56fabf49]{margin-top:16px}.handpans[data-v-56fabf49]{display:flex;flex-wrap:wrap}.delete[data-v-56fabf49]{position:absolute;right:2px;top:2px;cursor:pointer;padding:6px;margin-left:16px}.delete[data-v-56fabf49]:hover{color:red}.config[data-v-56fabf49]{position:absolute;right:0;top:0;display:none}.toggle[data-v-56fabf49]{font-size:32px}",""]),t.exports=n},169:function(t,n,e){"use strict";e.r(n);e(155),e(42),e(27),e(13),e(41),e(152);var r=e(73);var o=e(101);function l(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e(163),e(76),e(106);var c=e(1),d=["C","C♯","D♭","D","D♯","E♭","E","F","F♯","G♭","G","G♯","A♭","A","A♯","B♭","B"],h=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],m=["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"],v=[{val:"1/ 5 7m 1 2 3m 4 5",name:"Amara 8"},{val:"1/ 5 7m 1 2 3m 4 5 7m",name:"Amara 9"},{val:"1/ 3 5 7 1 3 T 5 7",name:"Aegean 9"},{val:"1/ 4 5 6m 7m 1 2m 3m 4",name:"Aeolian 9"},{val:"1/ 3m 4 7m 1 3m 4 5 7m",name:"Chao Guo 9"},{val:"1/ 3m 5 6m 7m 1 2 3m",name:"Equinox 8"},{val:"1/ 3m 5 6m 7m 1 2 3m 5",name:"Equinox 9"},{val:"1/ 4 5 6m 7m 1 2m 3 4 5",name:"Harmonic minor 9"},{val:"1/ 5 6m 7 1 2 3m 4 5",name:"Hijaz 9"},{val:"1/ 4 T 6 7m 1 2m 3m 4",name:"Hijaz (Mercury) 9"},{val:"1/ 4 T 6 7m 1 2m 3m 3",name:"Hijaz Kar (Mercury) 9"},{val:"1/ 5 6m 1 2 3m 4 5",name:"Insen 8"},{val:"1/ 5 6m 1 2 3m 4 5 6m",name:"Insen 9"},{val:"1/ 5 6m 7m 1 2 3m 5 7m",name:"Integral (Mercury) 9"},{val:"1/ 5 6m 7m 1 2 3m 5 6m",name:"Integral (Sam) 9"},{val:"1/ 4 5 6 7m 1 2 3m 4",name:"Jibuk 9"},{val:"1/ 5 6 1 2 3 4 5 1",name:"Anahata"},{val:"1/ 4 5 6m 1 2 3m 4",name:"Minor 8"},{val:"1/ 4 5 6m 1 2 3m 4 5",name:"Minor 9"},{val:"1/ 5 6m 7m 1 2 3m 4",name:"Kurd 8"},{val:"1/ 5 6m 7m 1 2 3m 4 5",name:"Kurd 9"},{val:"1/ 3m 5 6 7m 1 2 3m",name:"La Sirena 8"},{val:"1/ 3m 5 6 7m 1 2 3m 5",name:"La Sirena 9"},{val:"1/ 3m 5 7m 1 2 3m 5",name:"Magic Voyage 8"},{val:"1/ 3m 5 7m 1 2 3m 5 7m",name:"Magic Voyage 9"},{val:"1/ 4 5 6 7 1 2 3",name:"Major 8"},{val:"1/ 4 5 6 7 1 2 3 5",name:"Major 9"},{val:"1/ 3 4 5 7 1 3 4 5",name:"Melog Selisir 9"},{val:"1/ 3m 5 6m 1 2 3m 5",name:"Mystic (Mercury) 8"},{val:"1/ 5 6m 1 2 3m 4 5 7m",name:"Mystic (Sam) 9"},{val:"1/ 5 6 7m 1 2 3 5",name:"Mixolydian 8"},{val:"1/ 5 6 7m 1 2 3 5 6",name:"Mixolydian 9"},{val:"1/ 3 4 5 6 1 3 4 5",name:"Oxalis 9"},{val:"1/ 4 5 6m 1 3m 4 5 6m",name:"Pygmy (Mercury) 9"},{val:"1/ 2 3m 5 7m 1 2 3m 5",name:"Pygmy 9"},{val:"1/ 5 7m 1 2m 3 4 5 7m",name:"Raga Desh 9"},{val:"1/ 4 5 6m 7 1 2 3m 5",name:"Romanian Hijaz 9"},{val:"1/ 4 5 6m 1 2m 4 5 6m",name:"Akebono 9"},{val:"1/ 5 7 1 2 3 4 5 1",name:"Ysha Savita 9"},{val:"1/ 5 6m 1 3 4 5 6m 1",name:"Onoleo 9"},{val:"1/ 5 7 1 2 3 T 5 7",name:"Lydian"}],f=[{name:"Bebop major",ecarts:["1","2","3","4","5","6m","6","7"],special:"6m"},{name:"Bebop dorian",ecarts:["1","2","3m","3","4","5","6","7m"],special:"3"},{name:"Bebop dominant",ecarts:["1","2","3","4","5","6","7m","7"],special:"7"},{name:"Bebop phrygian dominant",ecarts:["1","2m","3","4","5","6m","7m","7"]},{name:"Bebop locrian",ecarts:["1","2m","3m","4","T","5","6m","7m"],special:"5"},{name:"Major/Ionian",ecarts:["1","2","3","4","5","6","7"]},{name:"Dorian",ecarts:["1","2","3m","4","5","6","7m"],special:"6"},{name:"Phrygian",ecarts:["1","2m","3m","4","5","6m","7m"],special:"2m"},{name:"Lydian",ecarts:["1","2","3","T","5","6","7"],special:"T"},{name:"Mixolydian",ecarts:["1","2","3","4","5","6","7m"],special:"7m"},{name:"Minor/Aeolian",ecarts:["1","2","3m","4","5","6m","7m"]},{name:"Locrian",ecarts:["1","2m","3m","4","T","6m","7m"]},{name:"Harmonic minor",ecarts:["1","2","3m","4","5","6m","7"],special:"7"},{name:"Phrygian dominant/Hijaz",ecarts:["1","2m","3","4","5","6m","7m"],special:"3"},{name:"Melodic minor (asc)",ecarts:["1","2","3m","4","5","6","7"],special:"3m"},{name:"Hexatonic major",ecarts:["1","2","3","4","5","6"]},{name:"Hexatonic major Blues",ecarts:["1","2","3m","3","5","6"],special:"3m"},{name:"Hexatonic minor",ecarts:["1","2","3m","4","5","7m"]},{name:"Hexatonic minor Blues T",ecarts:["1","3m","4","T","5","7m"],special:"T"},{name:"Hexatonic minor Blues 3",ecarts:["1","3m","3","4","5","7m"],special:"3"},{name:"Pentatonic major",ecarts:["1","2","3","5","6"]},{name:"Pentatonic minor",ecarts:["1","3m","4","5","7m"]},{name:"Hirajoshi",ecarts:["1","2","3m","5","6m"]},{name:"Iwato",ecarts:["1","2m","4","T","7m"]},{name:"Insen",ecarts:["1","2m","4","5","7m"]},{name:"Yo",ecarts:["1","2","4","5","6"]},{name:"Kumoï",ecarts:["1","2","3m","5","6"]},{name:"Pygmy",ecarts:["1","2","3m","5","7m"]}],y=["1","2m","2","3m","3","4","T","5","6m","6","7m","7"],_=[{type:"maj",chords:[{val:"1 3 5",name:"Major",abbr:""}]},{type:"min",chords:[{val:"1 3m 5",name:"Minor",abbr:"m"}]},{type:"7th",chords:[{val:"1 3 5 7m",name:"Dominant seventh",abbr:"⁷"},{val:"1 3 5 7",name:"Major seventh",abbr:"M⁷"},{val:"1 3m 5 7m",name:"Minor seventh",abbr:"m⁷"}]},{type:"sus",chords:[{val:"1 4 5",name:"Suspended 4",abbr:"<sup>sus4</sup>"}]},{type:"bad",chords:[{val:"1 2m",name:"second minor",abbr:"m²"},{val:"1 T",name:"tritone",abbr:"<sub>tt</sub>"},{val:"1 3m T",name:"Diminished",abbr:"<sub>dim</sub>"}]}];function x(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}e(83),e(29),e(61);var C=e(54);e(28),e(113);function S(object,t){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),n.push.apply(n,e)}return n}function N(t){var n=h.indexOf(t),e=m.indexOf(t);return-1!==n?m[n]:h[e]}function w(t,n){var e=-1!==h.indexOf(t)?h.indexOf(t):m.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var r=y.indexOf(n);if(-1===r)throw new Error("Unknown interval: "+n);return m[(e+r+12)%12]}function A(t,n){var e=-1!==h.indexOf(t)?h.indexOf(t):m.indexOf(t);if(-1===e)throw new Error("Unknown note: "+t);var r=y.indexOf(n);if(-1===r)throw new Error("Unknown interval: "+n);return h[(e+r+12)%12]}var k=function(t){return _.map((function(n){var e=[];return t.forEach((function(r){n.chords.forEach((function(n){var o=n.val.split(" ");o.every((function(n){return t.indexOf(A(r,n))>=0||t.indexOf(w(r,n))>=0}))&&e.push({root:r,notes:o,label:r+n.abbr})}))})),{type:n.type,chords:e}}))},H=function(t){return t.flatMap((function(t){return v.map((function(n){var e=new O;return e.loadFromRelNotation(t.ding,n.val),{ding:t.ding,name:n.name,notesAll:e.notesAll}}))})).filter((function(n){return n.notesAll.every((function(n){return t.flatMap((function(t){return t.notesAll})).some((function(t){var e=m.indexOf(t.name),r=-1!==e?h[e]:t.name;return n.octave===t.octave&&n.name===r}))}))}))},P=function(t){var n=t.flatMap((function(t){return[t.ding].concat(l(t.notesAll.map((function(t){return t.name}))))})),e=l(new Set(n));return e.flatMap((function(r){return f.map((function(t){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?S(Object(source),!0).forEach((function(n){Object(C.a)(t,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):S(Object(source)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(source,n))}))}return t}({},t,{absSharp:t.ecarts.map((function(t){return A(r,t)}))})})).filter((function(t){return t.absSharp.every((function(t){var n=N(t);return-1!==e.indexOf(t)||-1!==e.indexOf(n)}))})).filter((function(t){var e=N(r);return n.filter((function(t){return t===r||t===e})).length>=2})).map((function(n){return{id:r+" "+n.name,tonic:r,noteNames:n.absSharp,name:n.name,totalNotes:t.flatMap((function(t){return[t.ding].concat(l(t.notesAll.map((function(t){return t.name}))))})).filter((function(t){var e=N(t);return-1!==n.absSharp.indexOf(t)||-1!==n.absSharp.indexOf(e)})).length,special:n.special?A(r,n.special):null}}))}))},O=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.absNotationUser="",this.absNotationClean="",this.relNotation="",this.ding="",this.notesTop=[],this.notesBottom=[],this.notesAll=[],this.chords=[],this.panScales=[],this.scales=[],this.id=(new Date).getTime()}var n,e,r;return n=t,(e=[{key:"loadFromRelNotation",value:function(t,n){var e=this;this.ding=t,this.relNotation=n;var r=n.split("/");if(!(r.length<2)){var o=r[1].trim().split(" ").filter(Boolean).map((function(t){var n="("===t[0],r=t.replace(/\(|\)/g,""),o=-1!==h.indexOf(e.ding)?A(e.ding,r):w(e.ding,r);return n?"("+o+")":o}));this.absNotationClean=this.ding+"/ "+o.join(" "),this.absNotationUser=this.ding.replace(/♯/g,"#").replace(/♭/g,"b")+"/ "+o.join(" ").replace(/♯/g,"#").replace(/♭/g,"b"),this.genNotes(this.ding,o)}}},{key:"loadFromAbsNotation",value:function(t){this.absNotationUser=t;var n=this.absNotationUser.replace(/#/g,"♯").replace(/b/g,"♭").replace(/ {1,}/g," "),e=n.split("/");if(!(e.length<2)){this.ding=e[0].trim(),this.absNotationClean=n,this.relNotation=function(t,n){var e=h.indexOf(t);-1===e&&(e=m.indexOf(t));for(var r=[],i=0;i<12;i++)r.push(y[(12-e+i)%12]);for(var o=n+" ",l=0;l<12;l++)o=(o=o.replace(new RegExp(h[l]+"([^♯♭])","g"),r[l]+"$1")).replace(new RegExp(m[l]+"([^♯♭])","g"),r[l]+"$1");return o.trim()}(this.ding,n);var r=e[1].trim().split(" ").filter(Boolean);this.genNotes(this.ding,r)}}},{key:"genNotes",value:function(t,n){var e=3,r=d.indexOf(t);this.notesAll=n.map((function(t,n){var o=t.replace(/\(/g,"").replace(/\)/g,""),l=d.indexOf(o);if(-1===l)throw new Error("Unknown note: "+o);return r||(r=l),l<r&&e++,r=l,{key:n,octave:e,name:o,isBottom:"("===t[0]}})),this.notesTop=this.notesAll.filter((function(t){return!t.isBottom})),this.notesBottom=this.notesAll.filter((function(t){return t.isBottom}))}},{key:"getUniqueNotes",value:function(){return l(new Set(Array.from(this.absNotationClean.matchAll(/[A-G][♯♭]?/g)).map((function(t){return t[0]}))))}},{key:"genChords",value:function(){this.chords=k(this.getUniqueNotes())}},{key:"genPanScales",value:function(){this.panScales=H([this])}},{key:"genScales",value:function(){this.scales=P([this])}}])&&x(n.prototype,e),r&&x(n,r),t}(),M=c.a.extend({props:{handpan:O,selectedChord:Object,selectedPanScale:Object,selectedScale:Object},computed:{nbNotesTop:function(){return{"--nbnotes":this.handpan.notesTop.length}},nbNotesBottom:function(){return{"--nbnotes":this.handpan.notesBottom.length}}},methods:{isSpecial:function(t){var n,e,r=N(t);return t===(null===(n=this.selectedScale)||void 0===n?void 0:n.special)||r===(null===(e=this.selectedScale)||void 0===e?void 0:e.special)},isRoot:function(t){var n,e,r,o,l,c,d=N(t),h=t===(null===(n=this.selectedChord)||void 0===n?void 0:n.root)||d===(null===(e=this.selectedChord)||void 0===e?void 0:e.root),m=t===(null===(r=this.selectedScale)||void 0===r?void 0:r.tonic)||d===(null===(o=this.selectedScale)||void 0===o?void 0:o.tonic),v=t===(null===(l=this.selectedPanScale)||void 0===l?void 0:l.ding)||d===(null===(c=this.selectedPanScale)||void 0===c?void 0:c.ding);return h||m||v},isHighlighted:function(t,n){var e=N(t),r=!1,o=!1,l=!1;return this.selectedChord&&(l=-1!==this.selectedChord.noteNames.indexOf(t)||-1!==this.selectedChord.noteNames.indexOf(e)),this.selectedScale&&this.selectedScale.noteNames&&(r=-1!==this.selectedScale.noteNames.indexOf(t)||-1!==this.selectedScale.noteNames.indexOf(e)),this.selectedPanScale&&this.selectedPanScale.notesAll&&(o=this.selectedPanScale.notesAll.some((function(r){return r.octave===n&&(r.name===t||r.name===e)}))),l||r||o}}}),j=(e(165),e(24)),E=Object(j.a)(M,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"handpan-diagram",class:{bad:"bad"===t.selectedChord.type}},[e("div",{staticClass:"handpan-shape is-top"},[e("div",{staticClass:"ding",class:{highlight:t.isHighlighted(t.handpan.ding,3),isroot:t.isRoot(t.handpan.ding)}},[t._v("\n            "+t._s(t.handpan.ding)),e("sub",[t._v("3")])]),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesTop},t._l(t.handpan.notesTop,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),isroot:t.isRoot(n.name)}},[t._v(t._s(n.name)),e("sub",[t._v(t._s(n.octave))])])])})),0)]),t._v(" "),t.handpan.notesBottom.length?e("div",{staticClass:"handpan-shape is-bottom"},[e("div",{staticClass:"gu"}),t._v(" "),e("div",{staticClass:"notes",style:t.nbNotesBottom},t._l(t.handpan.notesBottom,(function(n){return e("div",{key:n.key,staticClass:"note"},[e("span",{class:{highlight:t.isHighlighted(n.name,n.octave),special:t.isSpecial(n.name),isroot:t.isRoot(n.name,n.octave)}},[t._v(t._s(n.name)),e("sub",[t._v(t._s(n.octave))])])])})),0)]):t._e()])}),[],!1,null,"a5a6784a",null).exports,D=c.a.extend({components:{HandpanDiagram:E},data:function(){return{displayMode:"panScales",displayedHandpanIndex:0,handpans:[],inputAbsNotation:"",inputDing:"",inputPanscale:{},inputRelNotation:"",notes:[],abs:"",panScales:v,scales:f,notesAll:d,chords:{},selectedPanScale:{},selectedScale:{},selectedChord:{label:"",root:"",type:"",noteNames:[]},selectedChordNoteNames:[],displayedScales:[],displayedChords:[],displayedPanScales:[],ignoreNextHashChange:!1}},created:function(){var t=this;setTimeout((function(){if(t.$nuxt.$route.hash)t.loadHandpansFromHash();else{var n=new O;n.loadFromAbsNotation("D/ A C D E F G A C"),t.handpans.push(n),t.genScalesAndChords(n),t.panChanged()}}),1)},computed:{displayedScalesSorted:function(){return this.displayedScales.sort((function(a,b){return b.totalNotes-a.totalNotes}))},displayedHandpan:function(){return this.handpans[this.displayedHandpanIndex]}},watch:{$route:function(){this.ignoreNextHashChange?this.ignoreNextHashChange=!1:(this.handpans=[],this.loadHandpansFromHash())}},methods:{loadHandpansFromHash:function(){var t,n=this;this.$nuxt.$route.hash.substr(1).split("_").forEach((function(e){(t=new O).loadFromAbsNotation(e.replace(/-/g," ")),n.handpans.push(t),n.panChanged()}))},removeHandpan:function(t,n){t.stopPropagation(),this.handpans.splice(n,1),this.displayedHandpanIndex>=this.handpans.length&&this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans(),this.displayHandpan()},addHandpan:function(){var t=new O;t.loadFromAbsNotation("C/ C"),this.handpans.push(t),this.selectHandpan(this.handpans.length-1),this.genScalesAndChordsAllPans()},panScaleChanged:function(){this.inputRelNotation=this.inputPanscale.val,this.relChanged()},relChanged:function(){try{this.displayedHandpan.loadFromRelNotation(this.inputDing,this.inputRelNotation),this.panChanged(),this.updateHash()}catch(t){console.error("Cannot load handpan",t)}},absChanged:function(){try{this.displayedHandpan.loadFromAbsNotation(this.inputAbsNotation),this.panChanged(),this.updateHash()}catch(t){console.error("Cannot load handpan",t)}},updateHash:function(){var t=this.$nuxt.$route.hash,n="#"+this.handpans.map((function(t){return t.absNotationUser.replace(/ /g,"-")})).join("_");n!==t&&(this.ignoreNextHashChange=!0,this.$nuxt.$router.replace(n))},panChanged:function(){var t=this,n=v.find((function(n){return t.displayedHandpan.relNotation.trim()===n.val.trim()}));this.inputPanscale=n||null,this.genScalesAndChords(this.displayedHandpan),this.displayHandpan(),this.genScalesAndChordsAllPans()},genScalesAndChordsAllPans:function(){var t=l(new Set(Array.from(this.handpans.flatMap((function(t){return t.getUniqueNotes()})))));this.displayedScales=P(this.handpans),this.displayedPanScales=H(this.handpans),this.displayedChords=k(t)},genScalesAndChords:function(t){t.genChords(),t.genPanScales(),t.genScales()},selectHandpan:function(t){this.displayedHandpanIndex=t,this.displayHandpan()},displayHandpan:function(){var t=this.handpans[this.displayedHandpanIndex];this.inputDing=t.ding,this.inputRelNotation=t.relNotation,this.inputAbsNotation=t.absNotationUser},selectPanScale:function(t){this.selectedPanScale=t},unselectPanScale:function(){this.selectedPanScale={}},selectScale:function(t){this.selectedScale=t},unselectScale:function(){this.selectedScale={}},selectChord:function(t,n){this.selectedChord={label:n.label,root:n.root,type:t.type,noteNames:[].concat(l(n.notes.map((function(t){return A(n.root,t)}))),l(n.notes.map((function(t){return w(n.root,t)}))))}},unselectChord:function(){this.selectedChord={label:"",type:"",root:"",noteNames:[]}}}}),T=(e(167),Object(j.a)(D,(function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),r("img",{attrs:{src:e(158)}}),t._v(" "),r("div",{staticClass:"tabs"},[t._l(t.handpans,(function(n,e){return r("div",{key:n.id,staticClass:"tab",class:{selected:t.displayedHandpanIndex===e},on:{click:function(n){return t.selectHandpan(e)}}},[t._v("\n            Pan n°"+t._s(e+1)+"\n            "),t.handpans.length>1?r("span",{staticClass:"delete",on:{click:function(n){return t.removeHandpan(n,e)}}},[t._v("×")]):t._e()])})),t._v(" "),r("div",{staticClass:"tab",on:{click:function(n){return t.addHandpan()}}},[t._v("+")])],2),t._v(" "),r("div",{staticClass:"tab-content"},[r("div",[r("h3",[t._v("Absolute input")]),t._v("\n            Notes\n            "),r("br"),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAbsNotation,expression:"inputAbsNotation"}],attrs:{size:"40"},domProps:{value:t.inputAbsNotation},on:{keyup:t.absChanged,input:function(n){n.target.composing||(t.inputAbsNotation=n.target.value)}}})]),t._v(" "),r("div",[r("h3",[t._v("Relative input")]),t._v("\n            Ding\n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.inputDing,expression:"inputDing"}],on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inputDing=n.target.multiple?e:e[0]},t.relChanged]}},t._l(t.notesAll,(function(n){return r("option",{key:n},[t._v(t._s(n))])})),0),t._v(" "),r("br"),t._v("Relative scale\n            "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputRelNotation,expression:"inputRelNotation"}],attrs:{size:"40"},domProps:{value:t.inputRelNotation},on:{keyup:t.relChanged,input:function(n){n.target.composing||(t.inputRelNotation=n.target.value)}}}),t._v(" "),r("br"),t._v("Handpan scale\n            "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.inputPanscale,expression:"inputPanscale"}],on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.inputPanscale=n.target.multiple?e:e[0]},t.panScaleChanged]}},t._l(t.panScales,(function(n){return r("option",{key:n.name,domProps:{value:n}},[t._v(t._s(n.name))])})),0)])]),t._v(" "),t.displayedHandpan?r("div",[r("div",{staticClass:"zone"},[r("div",{staticClass:"tabs"},[r("div",{staticClass:"tab",class:{selected:"panScales"===t.displayMode},on:{click:function(n){t.displayMode="panScales"}}},[t._v("\n                    Handpan scales\n                ")]),t._v(" "),r("div",{staticClass:"tab",class:{selected:"scales"===t.displayMode},on:{click:function(n){t.displayMode="scales"}}},[t._v("Scales")]),t._v(" "),r("div",{staticClass:"tab",class:{selected:"chords"===t.displayMode},on:{click:function(n){t.displayMode="chords"}}},[t._v("Chords")])]),t._v(" "),"panScales"===t.displayMode?r("div",{staticClass:"tab-content"},[r("div",{staticClass:"panscales"},[t._l(t.displayedPanScales,(function(n){return r("div",{key:n.ding+n.name,staticClass:"panscale",class:{highlight:n.ding===t.selectedPanScale.ding&&n.name===t.selectedPanScale.name},on:{click:function(e){return t.selectPanScale(n)},mouseover:function(e){return t.selectPanScale(n)},mouseout:function(n){return t.unselectPanScale()}}},[t.handpans.length>1?r("span",[t._v(t._s(n.ding))]):t._e(),t._v(" "+t._s(n.name)+"\n                    ")])})),t._v(" "),t.displayedPanScales.length?t._e():r("div",[t._v("\n                        Nothing…\n                    ")])],2)]):t._e(),t._v(" "),"scales"===t.displayMode?r("div",{staticClass:"tab-content"},[r("div",{staticClass:"scales"},[t._l(t.displayedScalesSorted,(function(n){return r("div",{key:n.id,staticClass:"scale",class:{highlight:n.id===t.selectedScale.id},on:{click:function(e){return t.selectScale(n)},mouseover:function(e){return t.selectScale(n)},mouseout:function(n){return t.unselectScale()}}},[t._v("\n                        "+t._s(n.tonic)+" "+t._s(n.name)+"\n                    ")])})),t._v(" "),t.displayedScales.length?t._e():r("div",[t._v("\n                        Nothing…\n                    ")])],2)]):t._e(),t._v(" "),"chords"===t.displayMode?r("div",{staticClass:"tab-content"},t._l(t.displayedChords,(function(n){return r("div",{key:n.type,staticClass:"chord-type"},[r("div",{staticClass:"chord-type-name"},[t._v(t._s(n.type))]),t._v(" "),t._l(n.chords,(function(e){return r("div",{key:e.label,staticClass:"chord",class:{highlight:e.label===t.selectedChord.label},domProps:{innerHTML:t._s(e.label)},on:{click:function(r){return t.selectChord(n,e)},mouseover:function(r){return t.selectChord(n,e)},mouseout:function(n){return t.unselectChord()}}})}))],2)})),0):t._e()]),t._v(" "),r("div",{staticClass:"zone handpans"},t._l(t.handpans,(function(n){return r("HandpanDiagram",{key:n.id,attrs:{handpan:n,selectedChord:t.selectedChord,selectedPanScale:t.selectedPanScale,selectedScale:t.selectedScale}})})),1)]):t._e()])}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"config"},[n("div",{staticClass:"toggle"},[this._v("☰")])])}],!1,null,"56fabf49",null));n.default=T.exports}}]);