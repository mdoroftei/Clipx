var gapi=window.gapi=window.gapi||{};gapi._bs=new Date().getTime();(function(){var n=void 0,q=!0,r=null,t=!1,aa=encodeURIComponent,u=window,ba=Object,w=document,x=String,ca=decodeURIComponent;function da(a,b){return a.type=b}
var ea="appendChild",y="push",z="test",fa="exec",ga="width",A="replace",ha="getElementById",B="concat",ia="JSON",C="indexOf",ja="match",ka="readyState",D="createElement",F="setAttribute",G="getTime",la="getElementsByTagName",ma="substr",H="length",na="prototype",I="split",K="location",L="style",oa="removeChild",pa="call",M="getAttribute",N="charCodeAt",O="href",qa="substring",ra="action",P="apply",sa="attributes",Q="parentNode",ta="update",ua="height",R="join",va="toLowerCase";var S=u,T=w,wa=S[K],xa=function(){},ya=/\[native code\]/,U=function(a,b,c){return a[b]=a[b]||c},za=function(a){for(var b=0;b<this[H];b++)if(this[b]===a)return b;return-1},Aa=function(a){a=a.sort();for(var b=[],c=n,e=0;e<a[H];e++){var d=a[e];d!=c&&b[y](d);c=d}return b},Ba=/&/g,Ca=/</g,Da=/>/g,Ea=/"/g,Fa=/'/g,Ga=function(a){return x(a)[A](Ba,"&amp;")[A](Ca,"&lt;")[A](Da,"&gt;")[A](Ea,"&quot;")[A](Fa,"&#39;")},V=function(){var a;if((a=ba.create)&&ya[z](a))a=a(r);else{a={};for(var b in a)a[b]=n}return a},
W=function(a,b){return ba[na].hasOwnProperty[pa](a,b)},Ha=function(a){if(ya[z](ba.keys))return ba.keys(a);var b=[],c;for(c in a)W(a,c)&&b[y](c);return b},Ia=function(a,b){a=a||{};for(var c in a)W(a,c)&&(b[c]=a[c])},Ja=function(a){return function(){S.setTimeout(a,0)}},Ka=function(a,b){if(!a)throw Error(b||"");},X=U(S,"gapi",{});var La=function(a,b,c){var e=RegExp("([#].*&|[#])"+b+"=([^&#]*)","g");b=RegExp("([?#].*&|[?#])"+b+"=([^&#]*)","g");if(a=a&&(e[fa](a)||b[fa](a)))try{c=ca(a[2])}catch(d){}return c},Ma=/^([^?#]*)(\?([^#]*))?(\#(.*))?$/,Na=function(a){a=a[ja](Ma);var b=V();b.u=a[1];b.d=a[3]?[a[3]]:[];b.k=a[5]?[a[5]]:[];return b},Oa=function(a){return a.u+(0<a.d[H]?"?"+a.d[R]("&"):"")+(0<a.k[H]?"#"+a.k[R]("&"):"")},Pa=function(a){var b=[];if(a)for(var c in a)W(a,c)&&a[c]!=r&&b[y](aa(c)+"="+aa(a[c]));return b},Qa=function(a,
b,c){a=Na(a);a.d[y][P](a.d,Pa(b));a.k[y][P](a.k,Pa(c));return Oa(a)},Ra=function(a,b){var c="";2E3<b[H]&&(c=b[qa](2E3),b=b[qa](0,2E3));var e=a[D]("div"),d=a[D]("a");d.href=b;e[ea](d);e.innerHTML=e.innerHTML;b=x(e.firstChild[O]);e[Q]&&e[Q][oa](e);return b+c},Sa=/^https?:\/\/[^\/%\\?#\s]+\/[^\s]*$/i;var Ta=function(a,b,c,e){if(S[c+"EventListener"])S[c+"EventListener"](a,b,t);else if(S[e+"tachEvent"])S[e+"tachEvent"]("on"+a,b)},Wa=function(a){var b=Ua;if("complete"!==T[ka])try{b()}catch(c){}Va(a)},Va=function(a){if("complete"===T[ka])a();else{var b=t,c=function(){if(!b)return b=q,a[P](this,arguments)};S.addEventListener?(S.addEventListener("load",c,t),S.addEventListener("DOMContentLoaded",c,t)):S.attachEvent&&(S.attachEvent("onreadystatechange",function(){"complete"===T[ka]&&c[P](this,arguments)}),
S.attachEvent("onload",c))}},Xa=function(a){for(;a.firstChild;)a[oa](a.firstChild)},Ya={button:q,div:q,span:q};var Y;Y=U(S,"___jsl",V());U(Y,"I",0);U(Y,"hel",10);var Za=function(a){return!Y.dpo?La(a,"jsh",Y.h):Y.h},ab=function(a){var b=U(Y,"sws",[]);b[y][P](b,a)},bb=function(a){return U(U(Y,"H",V()),a,V())};var cb=U(Y,"perf",V()),db=U(cb,"g",V()),eb=U(cb,"i",V());U(cb,"r",[]);V();V();var fb=function(a,b,c){var e=cb.r;"function"===typeof e?e(a,b,c):e[y]([a,b,c])},gb=function(a,b,c){db[a]=!b&&db[a]||c||(new Date)[G]();fb(a)},ib=function(a,b,c){b&&0<b[H]&&(b=hb(b),c&&0<c[H]&&(b+="___"+hb(c)),28<b[H]&&(b=b[ma](0,28)+(b[H]-28)),c=b,b=U(eb,"_p",V()),U(b,c,V())[a]=(new Date)[G](),fb(a,"_p",c))},hb=function(a){return a[R]("__")[A](/\./g,"_")[A](/\-/g,"_")[A](/\,/g,"_")};var jb=V(),kb=[],Z;Z={c:"callback",z:"sync",v:"config",j:"_c",o:"h",A:"platform",q:"jsl",TIMEOUT:"timeout",w:"ontimeout",C:"mh",B:"u"};kb[y]([Z.q,function(a){for(var b in a)if(W(a,b)){var c=a[b];"object"==typeof c?Y[b]=U(Y,b,[])[B](c):U(Y,b,c)}if(b=a[Z.B])a=U(Y,"us",[]),a[y](b),(b=/^https:(.*)$/[fa](b))&&a[y]("http:"+b[1])}]);var lb=decodeURI("%73cript");jb.m=function(a){var b=Y.ms||"https://apis.google.com";a=a[0];if(!a||0<=a[C](".."))throw"Bad hint";return b+"/"+a[A](/^\//,"")};
var mb=function(a){return a[R](",")[A](/\./g,"_")[A](/-/g,"_")},nb=function(a,b){for(var c=[],e=0;e<a[H];++e){var d=a[e];d&&0>za[pa](b,d)&&c[y](d)}return c},ob=function(){var a=Za(wa[O]);if(!a)throw"Bad hint";return a},pb=function(a){var b=a[I](";"),c=jb[b.shift()],b=c&&c(b);if(!b)throw"Bad hint:"+a;return b},qb=/^[\/_a-zA-Z0-9,.\-!:=]+$/,rb=/^https?:\/\/[^\/\?#]+\.google\.com(:\d+)?\/[^\?#]+$/,sb=/\/cb=/g,tb=/\/\//g,ub=function(a){var b=a[ja](tb),c=a[ja](sb);return!!c&&1===c[H]&&rb[z](a)&&qb[z](a)&&
!!b&&1===b[H]},wb=function(a){"loading"!=T[ka]?vb(a):T.write("<"+lb+' src="'+encodeURI(a)+'"></'+lb+">")},vb=function(a){var b=T[D](lb);b[F]("src",a);b.async="true";(a=T[la](lb)[0])?a[Q].insertBefore(b,a):(T.head||T.body||T.documentElement)[ea](b)},xb=function(a,b){var c=b&&b[Z.j];if(c)for(var e=0;e<kb[H];e++){var d=kb[e][0],g=kb[e][1];g&&W(c,d)&&g(c[d],a,b)}},zb=function(a,b){yb(function(){var c;c=b===Za(wa[O])?U(X,"_",V()):V();c=U(bb(b),"_",c);a(c)})},Bb=function(a,b){var c=b||{};"function"==typeof b&&
(c={},c[Z.c]=b);xb(a,c);var e=a?a[I](":"):[],d=c[Z.o]||ob(),g=U(Y,"ah",V());if(!g["::"]||!e[H])Ab(e||[],c,d);else{for(var m=[],h=r;h=e.shift();){var l=h[I]("."),l=g[h]||g[l[1]&&"ns:"+l[0]||""]||d,f=m[H]&&m[m[H]-1]||r,k=f;if(!f||f.hint!=l)k={hint:l,p:[]},m[y](k);k.p[y](h)}var v=m[H];if(1<v){var E=c[Z.c];E&&(c[Z.c]=function(){0==--v&&E()})}for(;e=m.shift();)Ab(e.p,c,e.hint)}},Ab=function(a,b,c){a=Aa(a)||[];var e=b[Z.c],d=b[Z.v],g=b[Z.TIMEOUT],m=b[Z.w],h=r,l=t;if(g&&!m||!g&&m)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";
var f=U(bb(c),"r",[]).sort(),k=U(bb(c),"L",[]).sort(),v=[][B](f),E=function(a,b){if(l)return 0;S.clearTimeout(h);k[y][P](k,p);var f=((X||{}).config||{})[ta];f?f(d):d&&U(Y,"cu",[])[y](d);if(b){ib("me0",a,v);try{zb(b,c)}finally{ib("me1",a,v)}}e&&e();return 1};0<g&&(h=S.setTimeout(function(){l=q;m()},g));var p=nb(a,k);if(p[H]){var p=nb(a,f),s=U(Y,"CP",[]),J=s[H];s[J]=function(a){if(!a)return 0;ib("ml1",p,v);var b=function(){s[J]=r;return E(p,a)};if(0<J&&s[J-1])s[J]=b;else for(b();(b=s[++J])&&b(););};
if(p[H]){var $a="loaded_"+Y.I++;X[$a]=function(a){s[J](a);X[$a]=r};a=pb(c);a=a[A]("__features__",mb(p))[A](/\/$/,"")+(f[H]?"/ed=1/exm="+mb(f):"")+("/cb=gapi."+$a);if(!ub(a))throw"Bad URL "+a;f[y][P](f,p);ib("ml0",p,v);b[Z.z]||S.___gapisync?wb(a):vb(a)}else s[J](xa)}else E(p)};var yb=function(a){if(Y.hee&&0<Y.hel)try{return a()}catch(b){Y.hel--,Bb("debug_error",function(){u.___jsl.hefn(b)})}else return a()};X.load=function(a,b){return yb(function(){return Bb(a,b)})};var Cb=function(a){var b=u.___jsl=u.___jsl||{};b[a]=b[a]||[];return b[a]},Db=function(a){var b=u.___jsl=u.___jsl||{};b.cfg=!a&&b.cfg||{};return b.cfg},Eb=function(a){return"object"===typeof a&&/\[native code\]/[z](a[y])},Fb=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&(a[c]&&b[c]&&"object"===typeof a[c]&&"object"===typeof b[c]&&!Eb(a[c])&&!Eb(b[c])?Fb(a[c],b[c]):b[c]&&"object"===typeof b[c]?(a[c]=Eb(b[c])?[]:{},Fb(a[c],b[c])):a[c]=b[c])},Gb=function(a){if(a&&!/^\s+$/[z](a)){for(;0==a[N](a[H]-
1);)a=a[qa](0,a[H]-1);var b;try{b=u[ia].parse(a)}catch(c){}if("object"===typeof b)return b;try{b=(new Function("return ("+a+"\n)"))()}catch(e){}if("object"===typeof b)return b;try{b=(new Function("return ({"+a+"\n})"))()}catch(d){}return"object"===typeof b?b:{}}},$=function(a){if(!a)return Db();a=a[I]("/");for(var b=Db(),c=0,e=a[H];b&&"object"===typeof b&&c<e;++c)b=b[a[c]];return c===a[H]&&b!==n?b:n},Hb=function(){Db(q);var a=u.___gcfg,b=Cb("cu");if(a&&a!==u.___gu){var c={};Fb(c,a);b[y](c);u.___gu=
a}var a=Cb("cu"),e=w.scripts||w[la]("script")||[],c=[],d=[];d[y][P](d,Cb("us"));for(var g=0;g<e[H];++g)for(var m=e[g],h=0;h<d[H];++h)m.src&&0==m.src[C](d[h])&&c[y](m);0==c[H]&&(0<e[H]&&e[e[H]-1].src)&&c[y](e[e[H]-1]);for(e=0;e<c[H];++e)c[e][M]("gapi_processed")||(c[e][F]("gapi_processed",q),(d=c[e])?(g=d.nodeType,d=3==g||4==g?d.nodeValue:d.textContent||d.innerText||d.innerHTML||""):d=n,(d=Gb(d))&&a[y](d));e=Cb("cd");a=0;for(c=e[H];a<c;++a)Fb(Db(),e[a]);e=Cb("ci");a=0;for(c=e[H];a<c;++a)Fb(Db(),e[a]);
a=0;for(c=b[H];a<c;++a)Fb(Db(),b[a])};var Ib=function(){var a=u.__GOOGLEAPIS;a&&(a.googleapis&&!a["googleapis.config"]&&(a["googleapis.config"]=a.googleapis),U(Y,"ci",[])[y](a),u.__GOOGLEAPIS=n)};var Jb=u.console,Kb=Jb&&Jb.log||function(){};var Lb=U(Y,"rw",V()),Mb=function(a,b){var c=Lb[a];c&&c.state<b&&(c.state=b)};var Nb=function(a){var b;a[ja](/^https?%3A/i)&&(b=ca(a));return Ra(w,b?b:a)},Ob=function(a){a=a||"canonical";for(var b=w[la]("link"),c=0,e=b[H];c<e;c++){var d=b[c],g=d[M]("rel");if(g&&g[va]()==a&&(d=d[M]("href")))return Nb(d)}return u[K][O]};var Pb;var Qb=function(){};var Rb=function(){this.b=[];this.l=[];this.t=[];this.i=[];this.i[0]=128;for(var a=1;64>a;++a)this.i[a]=0;this.reset()};(function(){function a(){}a.prototype=Qb[na];Rb.D=Qb[na];Rb.prototype=new a})();Rb[na].reset=function(){this.b[0]=1732584193;this.b[1]=4023233417;this.b[2]=2562383102;this.b[3]=271733878;this.b[4]=3285377520;this.n=this.g=0};
var Sb=function(a,b,c){c||(c=0);var e=a.t;if("string"==typeof b)for(var d=0;16>d;d++)e[d]=b[N](c++)<<24|b[N](c++)<<16|b[N](c++)<<8|b[N](c++);else for(d=0;16>d;d++)e[d]=b[c++]<<24|b[c++]<<16|b[c++]<<8|b[c++];for(d=16;80>d;d++){var g=e[d-3]^e[d-8]^e[d-14]^e[d-16];e[d]=(g<<1|g>>>31)&4294967295}b=a.b[0];c=a.b[1];for(var m=a.b[2],h=a.b[3],l=a.b[4],f,d=0;80>d;d++)40>d?20>d?(g=h^c&(m^h),f=1518500249):(g=c^m^h,f=1859775393):60>d?(g=c&m|h&(c|m),f=2400959708):(g=c^m^h,f=3395469782),g=(b<<5|b>>>27)+g+l+f+e[d]&
4294967295,l=h,h=m,m=(c<<30|c>>>2)&4294967295,c=b,b=g;a.b[0]=a.b[0]+b&4294967295;a.b[1]=a.b[1]+c&4294967295;a.b[2]=a.b[2]+m&4294967295;a.b[3]=a.b[3]+h&4294967295;a.b[4]=a.b[4]+l&4294967295};Rb[na].update=function(a,b){b===n&&(b=a[H]);for(var c=b-64,e=0,d=this.l,g=this.g;e<b;){if(0==g)for(;e<=c;)Sb(this,a,e),e+=64;if("string"==typeof a)for(;e<b;){if(d[g++]=a[N](e++),64==g){Sb(this,d);g=0;break}}else for(;e<b;)if(d[g++]=a[e++],64==g){Sb(this,d);g=0;break}}this.g=g;this.n+=b};var Zb=function(){var a;Tb?(a=new S.Uint32Array(1),Ub.getRandomValues(a),a=Number("0."+a[0])):(a=Vb,a+=parseInt(Wb[ma](0,20),16),Wb=Xb(Wb),a/=Yb+Math.pow(16,20));return a},Ub=S.crypto,Tb=t,$b=0,ac=0,Vb=1,Yb=0,Wb="",bc=function(a){a=a||S.event;var b=a.screenX+a.clientX<<16,b=b+(a.screenY+a.clientY),b=b*((new Date)[G]()%1E6);Vb=Vb*b%Yb;0<$b&&++ac==$b&&Ta("mousemove",bc,"remove","de")},Xb=function(a){var b=new Rb;b[ta](a);a=[];var c=8*b.n;56>b.g?b[ta](b.i,56-b.g):b[ta](b.i,64-(b.g-56));for(var e=63;56<=
e;e--)b.l[e]=c&255,c/=256;Sb(b,b.l);for(e=c=0;5>e;e++)for(var d=24;0<=d;d-=8)a[c++]=b.b[e]>>d&255;b="";for(e=0;e<a[H];e++)b+="0123456789ABCDEF".charAt(Math.floor(a[e]/16))+"0123456789ABCDEF".charAt(a[e]%16);return b},Tb=!!Ub&&"function"==typeof Ub.getRandomValues;Tb||(Yb=1E6*(screen[ga]*screen[ga]+screen[ua]),Wb=Xb(T.cookie+"|"+T[K]+"|"+(new Date)[G]()+"|"+Math.random()),$b=$("random/maxObserveMousemove")||0,0!=$b&&Ta("mousemove",bc,"add","at"));var cc=function(){var a=Y.onl;if(!a){a=V();Y.onl=a;var b=V();a.e=function(a){var e=b[a];e&&(delete b[a],e())};a.a=function(a,e){b[a]=e};a.r=function(a){delete b[a]}}return a},dc=function(a,b){var c=b.onload;return"function"===typeof c?(cc().a(a,c),c):r},ec=function(a){Ka(/^\w+$/[z](a),"Unsupported id - "+a);cc();return'onload="window.___jsl.onl.e(&#34;'+a+'&#34;)"'},fc=function(a){cc().r(a)};var gc={allowtransparency:"true",frameborder:"0",hspace:"0",marginheight:"0",marginwidth:"0",scrolling:"no",style:"",tabindex:"0",vspace:"0",width:"100%"},hc={allowtransparency:q,onload:q},ic=0,jc=function(a){Ka(!a||Sa[z](a),"Illegal url for new iframe - "+a)},kc=function(a,b,c,e,d){jc(c.src);var g,m=dc(e,c),h=m?ec(e):"";try{g=a[D]('<iframe frameborder="'+Ga(c.frameborder)+'" scrolling="'+Ga(c.scrolling)+'" '+h+' name="'+Ga(c.name)+'"/>')}catch(l){g=a[D]("iframe"),m&&(g.onload=function(){g.onload=
r;m[pa](this)},fc(e))}for(var f in c)a=c[f],"style"===f&&"object"===typeof a?Ia(a,g[L]):hc[f]||g[F](f,x(a));f=d&&d.beforeNode||r;!f&&(!d||!d.dontclear)&&Xa(b);b.insertBefore(g,f);g=f?f.previousSibling:b.lastChild;c.allowtransparency&&(g.allowTransparency=q);return g};var lc=/:([a-zA-Z_]+):/g,mc=function(){var a=$("googleapis.config/sessionIndex");a==r&&(a=u.__X_GOOG_AUTHUSER);if(a==r){var b=u.google;b&&(a=b.authuser)}a==r&&(a=n,a==r&&(a=u[K][O]),a=a?La(a,"authuser")||r:r);return a==r?r:x(a)},nc=function(a,b){if(!Pb){var c=$("iframes/:socialhost:"),e=mc()||"0",d=mc();Pb={socialhost:c,session_index:e,session_prefix:d!==n&&d!==r&&""!==d?"u/"+d+"/":"",im_prefix:$("googleapis.config/signedIn")===t?"_/im/":""}}return Pb[b]||""};var oc={style:"position:absolute;top:-10000px;width:300px;margin:0px;borderStyle:none"},pc="onPlusOne _ready _close,_open _resizeMe _renderstart oncircled".split(" "),qc=U(Y,"WI",V()),rc=["style","data-gapiscan"],sc=function(a){var b=n;"number"===typeof a?b=a:"string"===typeof a&&(b=parseInt(a,10));return b},tc=function(){};var uc,vc,wc,xc,yc,zc=/(?:^|\s)g-((\S)*)(?:$|\s)/;uc=U(Y,"SW",V());vc=U(Y,"SA",V());wc=U(Y,"SM",V());xc=U(Y,"FW",[]);yc=r;
var Bc=function(a,b){Ac(n,t,a,b)},Ac=function(a,b,c,e){gb("ps0",q);c=("string"===typeof c?w[ha](c):c)||T;var d;d=T.documentMode;if(c.querySelectorAll&&(!d||8<d)){d=e?[e]:Ha(uc)[B](Ha(vc))[B](Ha(wc));for(var g=[],m=0;m<d[H];m++){var h=d[m];g[y](".g-"+h,"g\\:"+h)}d=c.querySelectorAll(g[R](","))}else d=c[la]("*");c=V();for(g=0;g<d[H];g++){m=d[g];var l=m,h=e,f=l.nodeName[va](),k=n;l[M]("data-gapiscan")?h=r:(0==f[C]("g:")?k=f[ma](2):(l=(l=x(l.className||l[M]("class")))&&zc[fa](l))&&(k=l[1]),h=k&&(uc[k]||
vc[k]||wc[k])&&(!h||k===h)?k:r);h&&(m[F]("data-gapiscan",q),U(c,h,[])[y](m))}if(b)for(var v in c){b=c[v];for(e=0;e<b[H];e++)b[e][F]("data-onload",q)}for(var E in c)xc[y](E);gb("ps1",q);((v=xc[R](":"))||a)&&X.load(v,a);if(Cc(yc||{}))for(var p in c){a=c[p];E=0;for(b=a[H];E<b;E++)a[E].removeAttribute("data-gapiscan");Dc(p)}else{e=[];for(p in c){a=c[p];E=0;for(b=a[H];E<b;E++){m=a[E];d=p;h=g=m;m=V();k=0!=h.nodeName[va]()[C]("g:");l=0;for(f=h[sa][H];l<f;l++){var s=h[sa][l],J=s.name,s=s.value;0<=za[pa](rc,
J)||(k&&0!=J[C]("data-")||"null"===s)||(k&&(J=J[ma](5)),m[J[va]()]=s)}k=m;h=h[L];(l=sc(h&&h[ua]))&&(k.height=x(l));(h=sc(h&&h[ga]))&&(k.width=x(h));Ec(d,g,m,e,b)}}Fc(v,e)}},Gc=function(a){var b=U(X,a,{});b.go||(b.go=function(b){return Bc(b,a)},b.render=function(b,e){var d=e||{};da(d,a);var g=d.type;delete d.type;var m=("string"===typeof b?w[ha](b):b)||n;if(m){var h={},l;for(l in d)W(d,l)&&(h[l[va]()]=d[l]);h.rd=1;d=[];Ec(g,m,h,d,0);Fc(g,d)}else Kb("string"==="gapi."+g+".render: missing element "+
typeof b?b:"")})},Hc=function(a){uc[a]=q},Ic=function(a){vc[a]=q},Jc=function(a){wc[a]=q};var Dc=function(a,b){var c=U(Y,"watt",V())[a];b&&c?(c(b),(c=b.iframeNode)&&c[F]("data-gapiattached",q)):X.load(a,function(){var c=U(Y,"watt",V())[a],d=b&&b.iframeNode;!d||!c?(0,X[a].go)(d&&d[Q]):(c(b),d[F]("data-gapiattached",q))})},Cc=function(){return t},Fc=function(){},Ec=function(a,b,c,e,d){switch(Kc(b,a)){case 0:a=wc[a]?a+"_annotation":a;e={};e.iframeNode=b;e.userParams=c;Dc(a,e);break;case 1:var g;if(b[Q]){var m=q;c.dontclear&&(m=t);delete c.dontclear;var h,l,f;l=f=a;"plus"==a&&c[ra]&&(f=a+
"_"+c[ra],l=a+"/"+c[ra]);(f=$("iframes/"+f+"/url"))||(f=":socialhost:/_/widget/render/"+l);l=Ra(T,f[A](lc,nc));f={};Ia(c,f);f.hl=$("lang")||"en-US";f.origin=u[K].origin||u[K].protocol+"//"+u[K].host;f.exp=$("iframes/"+a+"/params/exp");var k=$("iframes/"+a+"/params/location");if(k)for(var v=0;v<k[H];v++){var E=k[v];f[E]=S[K][E]}switch(a){case "plus":case "follow":k=f[O];v=c[ra]?n:"publisher";k=(k="string"==typeof k?k:n)?Nb(k):Ob(v);f.url=k;delete f[O];break;case "plusone":case "recobox":f.url=c[O]?
Nb(c[O]):Ob();k=c.db;v=$();k==r&&v&&(k=v.db,k==r&&(k=v.gwidget&&v.gwidget.db));f.db=k||n;k=c.ecp;v=$();k==r&&v&&(k=v.ecp,k==r&&(k=v.gwidget&&v.gwidget.ecp));f.ecp=k||n;delete f[O];break;case "signin":f.url=Ob()}f.hl=$("lang")||"en-US";Y.ILI&&(f.iloader="1");delete f["data-onload"];delete f.rd;f.gsrc=$("iframes/:source:");k=$("inline/css");"undefined"!==typeof k&&(0<d&&k>=d)&&(f.ic="1");k=/^#|^fr-/;d={};for(h in f)W(f,h)&&k[z](h)&&(d[h[A](k,"")]=f[h],delete f[h]);h=[][B](pc);k=$("iframes/"+a+"/methods");
"object"===typeof k&&ya[z](k[y])&&(h=h[B](k));for(var p in c)if(W(c,p)&&/^on/[z](p)&&("plus"!=a||"onconnect"!=p))h[y](p),delete f[p];delete f.callback;d._methods=h[R](",");h=Qa(l,f,d);p={allowPost:1,attributes:oc};p.dontclear=!m;m={};m.userParams=c;m.url=h;da(m,a);c.rd?f=b:(f=w[D]("div"),b[F]("data-gapistub",q),f[L].cssText="position:absolute;width:100px;left:-10000px;",b[Q].insertBefore(f,b));m.siteElement=f;f.id||(b=f,U(qc,a,0),l="___"+a+"_"+qc[a]++,b.id=l);b=V();b[">type"]=a;Ia(c,b);f[F]("data-gwattr",
Pa(b)[R](":"));l=h;c=f;h=p||{};b=h[sa]||{};Ka(!h.allowPost||!b.onload,"onload is not supported by post iframe");p=b=l;/^:[\w]+$/[z](b)&&(p=$("iframes/"+p[qa](1)+"/url"),Ka(!!p,"Unknown iframe url config for - "+b));l=Ra(T,p[A](lc,nc));!h.rpctoken&&!La(l,"rpctoken")&&(h.rpctoken=x(Math.round(1E8*Zb())));b=c.ownerDocument||T;f=0;do p=h.id||["I",ic++,"_",(new Date)[G]()][R]("");while(b[ha](p)&&5>++f);Ka(5>f,"Error creating iframe id");var s;d=b[K][O];f=V();(k=La(d,"_bsh",Y.bsh))&&(f._bsh=k);(d=Za(d))&&
(f.jsh=d);d=V();d.id=p;d.parent=b[K].protocol+"//"+b[K].host;k=La(b[K][O],"id","");v=La(b[K][O],"pfname","");(k=k?v+"/"+k:"")&&(d.pfname=k);h.rpctoken&&(d.rpctoken=h.rpctoken);h.hintInFragment?Ia(f,d):s=f;s=Qa(l,s,d);f=V();Ia(gc,f);Ia(h[sa],f);f.name=f.id=p;f.src=s;if((h||{}).allowPost&&2E3<s[H]){l=Na(s);f.src="";f["data-postorigin"]=s;s=kc(b,c,f,p);-1!=navigator.userAgent[C]("WebKit")&&(g=s.contentWindow.document,g.open(),f=g[D]("div"),d={},k=p+"_inner",d.name=k,d.src="",d.style="display:none",kc(b,
f,d,k,h));f=(h=l.d[0])?h[I]("&"):[];h=[];for(d=0;d<f[H];d++)k=f[d][I]("=",2),h[y]([ca(k[0]),ca(k[1])]);l.d=[];f=Oa(l);l=b[D]("form");l.action=f;l.method="POST";l.target=p;l[L].display="none";for(p=0;p<h[H];p++)f=b[D]("input"),da(f,"hidden"),f.name=h[p][0],f.value=h[p][1],l[ea](f);c[ea](l);l.submit();l[Q][oa](l);g&&g.close();g=s}else g=kc(b,c,f,p,h);m.iframeNode=g;m.id=g[M]("id");g=m.id;s=V();s.id=g;s.userParams=m.userParams;s.url=m.url;da(s,m.type);s.state=1;Lb[g]=s;g=m}else g=r;g&&((s=g.id)&&e[y](s),
Dc(a,g))}},Kc=function(a,b){if(a&&1===a.nodeType&&b)if(wc[b]){if(Ya[a.nodeName[va]()]){var c=a.innerHTML;return c&&c[A](/^[\s\xa0]+|[\s\xa0]+$/g,"")?0:1}}else{if(vc[b])return 0;if(uc[b])return 1}return r};U(X,"platform",{}).go=Bc;var Cc=function(a){for(var b=[Z.j,Z.q,Z.o],c=0;c<b[H]&&a;c++)a=a[b[c]];b=Za(wa[O]);return!a||0!=a[C]("n;")&&0!=b[C]("n;")&&a!==b},Fc=function(a,b){Lc(a,b)},Ua=function(a){Ac(a,q)},Mc=function(a,b){for(var c=b||[],e=0;e<c[H];++e)a(c[e]);for(e=0;e<c[H];e++)Gc(c[e])};kb[y]([Z.A,function(a,b,c){yc=c;b&&xc[y](b);Mc(Hc,a);Mc(Ic,c[Z.j].annotation);Mc(Jc,c[Z.j].bimodal);Ib();Hb();if("explicit"!=$("parsetags")){ab(a);var e;if(c&&(a=c[Z.c]))e=Ja(a),delete c[Z.c];Wa(function(){Ua(e)})}}]);var Nc=function(a){a=(a=Lb[a])?a.oid:n;if(a){var b=T[ha](a);b&&b[Q][oa](b);delete Lb[a];Nc(a)}},tc=function(a,b,c){if(c[ga]&&c[ua]){a[L].cssText="";a:{c=c||{};var e=Y.ssfn;if(e&&e(n)){if("number"===typeof Y.ucs)break a;var d=b.id;if(d){e=(e=Lb[d])?e.state:n;if(1===e||4===e)break a;Nc(d)}}e=c[ga];c=c[ua];var g=a[L];g.textIndent="0";g.margin="0";g.padding="0";g.background="transparent";g.borderStyle="none";g.cssFloat="none";g.styleFloat="none";g.lineHeight="normal";g.fontSize="1px";g.verticalAlign=
"baseline";a[L].display="inline-block";a=b[L];a.position="static";a.left=0;a.top=0;a.visibility="visible";e&&(a.width=e+"px");c&&(a.height=c+"px");d&&Mb(d,3)}b["data-csi-wdt"]=(new Date)[G]()}};var Oc=/^\{h\:'/,Pc=/^!_/,Lc=function(a,b){function c(){Ta("message",e,"remove","de")}function e(e){var m=e.data,h=e.origin;if(Qc(m,b)){var l=d;d=t;l&&gb("rqe");Rc(a,function(){l&&gb("rqd");c();for(var a=U(Y,"RPMQ",[]),b=0;b<a[H];b++)a[b]({data:m,origin:h})})}}if(!(0===b[H]||!u[ia]||!u[ia].parse)){var d=q;Ta("message",e,"add","at");Bb(a,c)}},Qc=function(a,b){a=x(a);if(Oc[z](a))return q;a=a[A](Pc,"");if(!/^\{/[z](a))return t;try{var c=u[ia].parse(a)}catch(e){return t}if(!c)return t;var d=c.f;if(c.s&&
d&&-1!=za[pa](b,d)){if("_renderstart"===c.s){var c=c.a&&c.a[1],g=T[ha](d);Mb(d,2);(d=Lb[d])&&(d.args=c);c&&g&&tc(g[Q],g,c)}return q}return t},Rc=function(a,b){Bb(a,b)};gb("bs0",q,u.gapi._bs);gb("bs1",q);delete u.gapi._bs;})();
gapi.load("plusone",{callback:window["gapi_onload"],_c:{"jsl":{"ci":{"services":{},"deviceType":"desktop","lexps":[102,100,71,96,97,79,74,104,45,17,86,81,92,94,61,30,90],"inline":{"css":1},"report":{},"oauth-flow":{"authUrl":"https://accounts.google.com/o/oauth2/auth","proxyUrl":"https://accounts.google.com/o/oauth2/postmessageRelay"},"isPlusUser":true,"iframes":{"additnow":{"methods":["launchurl"],"url":"https://apis.google.com/additnow/additnow.html?bsv"},"plus":{"methods":["onauth"],"url":":socialhost:/u/:session_index:/_/pages/badge?bsv"},":socialhost:":"https://plusone.google.com","plus_followers":{"params":{"url":""},"url":":socialhost:/_/im/_/widget/render/plus/followers?bsv"},"recobox":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/recobox?bsv"},"autocomplete":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/render/autocomplete?bsv"},"plus_share":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/+1/sharebutton?plusShare\u003dtrue\u0026bsv"},"savetowallet":{"url":"https://clients5.google.com/s2w/o/savetowallet?bsv"},"plus_circle":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/widget/plus/circle?bsv"},"hangout":{"url":"https://talkgadget.google.com/widget/go?bsv"},"savetodrive":{"methods":["save"],"url":"https://drive.google.com/savetodrivebutton?bsv"},"card":{"url":":socialhost:/:session_prefix:_/hovercard/card?bsv"},"evwidget":{"params":{"url":""},"url":":socialhost:/:session_prefix:_/events/widget?bsv"},":signuphost:":"https://plus.google.com","plusone":{"preloadUrl":["https://ssl.gstatic.com/s2/oz/images/stars/po/Publisher/sprite4-a67f741843ffc4220554c34bd01bb0bb.png"],"params":{"count":"","size":"","url":""},"url":":socialhost:/:session_prefix:_/+1/fastbutton?bsv"}},"debug":{"host":"https://plusone.google.com","reportExceptionRate":0.05,"rethrowException":true},"csi":{"rate":0.0},"googleapis.config":{"mobilesignupurl":"https://m.google.com/app/plus/oob?"}},"h":"m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.AkwUl42KLUM.O/m\u003d__features__/am\u003dgQ/rt\u003dj/d\u003d1/rs\u003dAItRSTPZcy4p8hRbvKcLAxzZnJbFOKPg9w","u":"https://apis.google.com/js/plusone.js","hee":true,"fp":"7bbb888ea250c90ec7d200a2c44426c5ddb44756","dpo":false},"platform":["additnow","identity","plus","plusone","recobox","savetodrive","savetowallet","notifications","hangout"],"fp":"7bbb888ea250c90ec7d200a2c44426c5ddb44756","annotation":["autocomplete","profile"],"bimodal":[]}});
