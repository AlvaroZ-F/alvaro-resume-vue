(function(e){function a(a){for(var s,l,r=a[0],o=a[1],c=a[2],d=0,g=[];d<r.length;d++)l=r[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&g.push(n[l][0]),n[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(a);while(g.length)g.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var e,a=0;a<i.length;a++){for(var t=i[a],s=!0,r=1;r<t.length;r++){var o=t[r];0!==n[o]&&(s=!1)}s&&(i.splice(a--,1),e=l(l.s=t[0]))}return e}var s={},n={app:0},i=[];function l(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=s,l.d=function(e,a,t){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)l.d(t,s,function(a){return e[a]}.bind(null,s));return t},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var u=o;i.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var s=t("85ec"),n=t.n(s);n.a},4184:function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a);t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"language-sect"},["en"==e.language?t("button",{staticClass:"btn btn-primary",attrs:{id:"buttonLang"},on:{click:e.changeLanguage}},[e._v("Change Language")]):e._e(),"es"==e.language?t("button",{staticClass:"btn btn-primary",attrs:{id:"buttonLang"},on:{click:e.changeLanguage}},[e._v("Cambiar Idioma")]):e._e()]),t("Navigation",{attrs:{name:e.name,database:e.database}}),t("b-container",{staticClass:"p-0",attrs:{fluid:""}},[t("About",{attrs:{name:e.name,database:e.database,language:e.language}}),t("Border"),t("Education",{attrs:{database:e.database,language:e.language}}),t("Border"),t("Experience",{attrs:{database:e.database,language:e.language}}),t("Border"),t("Skills",{attrs:{database:e.database,language:e.language}}),t("Border"),t("Interests",{attrs:{database:e.database,language:e.language}}),t("Border"),t("Projects",{attrs:{database:e.database,language:e.language}})],1)],1)},i=[],l=t("491f"),r=t.n(l),o=t("bc3a"),c=t.n(o),u=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"about"}},[t("div",{staticClass:"w-100"},[t("h1",{staticClass:"mb-0"},[e._v(" "+e._s(e.name.first)+" "),t("span",{staticClass:"text-primary"},[e._v(e._s(e.name.last))])]),t("div",{staticClass:"subheading mb-5"},[e._v(" "+e._s(e.address.street)+" · "+e._s(e.address.town)+", "+e._s(e.address.state)+" "+e._s(e.address.zip)+" · "+e._s(e.telephone)+" · "),t("a",{attrs:{href:"mailto:"+e.email}},[e._v(e._s(e.email))])]),t("p",{staticClass:"lead mb-5"},[e._v(" "+e._s(e.database.about)+" ")]),t("div",{staticClass:"social-icons"},e._l(e.database.social,(function(e,a){return t("a",{key:a,attrs:{href:e.url}},[t("font-awesome-icon",{attrs:{icon:["fab",e.icon]}})],1)})),0)])])},d=[],g={name:"About",props:{name:Object,database:Object},data:function(){return{address:{street:"Sofocles, n1, esc 5, 4B",town:"Granada",city:"Granada",cod:"18014"},telephone:"(34) 635 96 81 54",email:"azambranafdz.daw@gmail.com"}}},m=g,b=t("2877"),p=Object(b["a"])(m,u,d,!1,null,null,null),f=p.exports,v=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"education"}},[t("div",{staticClass:"w-100"},["en"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"title-edu"}},[e._v("Education")]):e._e(),"es"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"title-edu"}},[e._v("Educacion")]):e._e(),e._l(e.database.education,(function(a,s){return t("div",{key:s,staticClass:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},[t("div",{staticClass:"resume-content"},[t("h3",{staticClass:"mb-0"},[e._v(e._s(a.school))]),t("div",{staticClass:"subheading mb-3"},[e._v(e._s(a.course))]),t("p",{staticClass:"mb-0"},[e._v(e._s(a.description))])]),t("div",{staticClass:"resume-date text-md-right"},e._l(a.dates,(function(a,s){return t("span",{key:s,staticClass:"text-primary"},[e._v(" "+e._s(a.end)+" ")])})),0)])}))],2)])},_=[],h={name:"Education",props:{database:Object,language:String},data:function(){return{}}},C=h,y=Object(b["a"])(C,v,_,!1,null,null,null),x=y.exports,j=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"experience"}},[t("div",{staticClass:"w-100"},["en"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"expTitle"}},[e._v("Experience")]):e._e(),"es"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"expTitle"}},[e._v("Experiencia")]):e._e(),e._l(e.database.experience,(function(a,s){return t("div",{key:s,staticClass:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},[t("div",{staticClass:"resume-content"},[t("h3",{staticClass:"mb-0"},[e._v(e._s(a.position))]),t("p",{staticClass:"mb-0"},[e._v(e._s(a.summary))])]),t("div",{staticClass:"resume-date text-md-right"},e._l(a.dates,(function(a,s){return t("span",{key:s,staticClass:"text-primary"},[e._v(" "+e._s(a.start)+" - "+e._s(a.end)+" ")])})),0)])}))],2)])},w=[],k={name:"Experience",props:{database:Object,language:String},data:function(){return{}}},O=k,S=Object(b["a"])(O,j,w,!1,null,null,null),E=S.exports,P=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume.section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"skills"}},[t("div",{staticClass:"w-100"},["en"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"skillTitle"}},[e._v("Skills")]):e._e(),"es"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"skillTitle"}},[e._v("Habilidades")]):e._e(),"en"==e.language?t("div",{staticClass:"subheading mb-3",attrs:{id:"skillSubTitle"}},[e._v("Programming Languages & Tools")]):e._e(),"es"==e.language?t("div",{staticClass:"subheading mb-3",attrs:{id:"skillSubTitle"}},[e._v("Lenguajes de Programacion & Herramientas")]):e._e(),t("ul",{staticClass:"list-inline dev-icons"},e._l(e.database.tools,(function(e,a){return t("li",{key:a,staticClass:"list-inline-item"},[t("font-awesome-icon",{attrs:{icon:["fab",e.icon]}})],1)})),0)])])},T=[],L={name:"Skills",props:{database:Object,language:String}},A=L,I=Object(b["a"])(A,P,T,!1,null,null,null),$=I.exports,z=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume-section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"interests"}},[t("div",{staticClass:"w-100"},["en"==e.language?t("h2",{staticClass:"mb-5"},[e._v("Interests")]):e._e(),"es"==e.language?t("h2",{staticClass:"mb-5"},[e._v("Intereses")]):e._e(),"en"==e.language?t("p",[e._v("Apart from being a web developer, I enjoy most of my time drawing digitally or on paper. I also enjoy practicing different sports such as biking, soccer or taking long walks outdoors.")]):e._e(),"es"==e.language?t("p",[e._v("Ademas de ser un desarrollador web, disfruto la mayor parte de mi tiempo dibujando de forma digital o a papel. Tambien practico distintos deportes como el ciclismo, futbol, o caminando largos paseos en los alrededores.")]):e._e(),"en"==e.language?t("p",{staticClass:"mb-0"},[e._v(" Indoors I enjoy playing videogames, or watching sci-fi or fantasy genre movies. ")]):e._e(),"es"==e.language?t("p",{staticClass:"mb-0"},[e._v(" En casa paso el tiempo jugando videojuegos, o viendo peliculas del genero sci-fi o fantasia. ")]):e._e()])])},B=[],N={name:"Interests",props:{language:String}},J=N,M=Object(b["a"])(J,z,B,!1,null,null,null),R=M.exports,G=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("b-navbar",{staticClass:"bg-primary fixed-top",attrs:{toggleable:"lg",type:"dark",id:"sideNav"}},[s("b-navbar-brand",{attrs:{to:"#app"}},[s("span",{staticClass:"d-block d-lg-none"},[e._v(e._s(e.name.first)+" "+e._s(e.name.last))]),s("span",{staticClass:"d-lg-none d-lg-block"},[s("img",{staticClass:"img-fluid img-profile rounded-circle mx-auto mb-2",attrs:{src:t("b988"),alt:"name.first + ' ' + name.last"}})])]),s("b-navbar-toggle",{attrs:{target:"navbarSupportedContent"}}),s("b-collapse",{attrs:{id:"navbarSupportedContent","is-nav":""}},[s("b-navbar-nav",{directives:[{name:"b-scrollspy",rawName:"v-b-scrollspy"}]},e._l(e.database.navigation,(function(a,t){return s("b-nav-item",{key:t,staticClass:"js-scroll-trigger",attrs:{href:a.url}},[e._v(" "+e._s(a.title)+" ")])})),1)],1)],1)},H=[],D={name:"Navigation",props:{name:{type:Object},database:{type:Object},language:{type:String}},data:function(){return{}}},F=D,U=Object(b["a"])(F,G,H,!1,null,null,null),Z=U.exports,q=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("section",{staticClass:"resume.section p-3 p-lg-5 d-flex align-items-center",attrs:{id:"projects"}},[t("div",{staticClass:"w-100"},["en"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"projectsTitle"}},[e._v("Projects")]):e._e(),"es"==e.language?t("h2",{staticClass:"mb-5",attrs:{id:"projectsTitle"}},[e._v("Proyectos")]):e._e(),e._l(e.database.projects,(function(a,s){return t("div",{key:s,staticClass:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},[t("div",{staticClass:"resume-content"},[t("h3",{staticClass:"mb-0"},[e._v(e._s(a.name))]),t("p",{staticClass:"mb-0"},[e._v(e._s(a.description))]),t("a",{staticClass:"proy-links",attrs:{href:a.link}},[t("font-awesome-icon",{attrs:{icon:["fab","github"]}}),"en"==e.language?t("b",[e._v("Repository")]):e._e(),"es"==e.language?t("b",[e._v("Repositorio")]):e._e()],1),t("a",{staticClass:"proy-links",attrs:{href:a.prodlink}},[t("font-awesome-icon",{attrs:{icon:["fab","github"]}}),"en"==e.language?t("b",[e._v("Deployed")]):e._e(),"es"==e.language?t("b",[e._v("Lanzado")]):e._e()],1)]),t("div",{staticClass:"resume-modal text-md-right"},["en"==e.language?t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-"+a.id,expression:"'modal-' + project.id"}],staticClass:"btn",attrs:{id:"btnmodal"}},[e._v("Show Preview")]):e._e(),"es"==e.language?t("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal",value:"modal-"+a.id,expression:"'modal-' + project.id"}],staticClass:"btn",attrs:{id:"btnmodal"}},[e._v("Mostrar Avance")]):e._e()],1),"en"==e.language?t("b-modal",{attrs:{id:"modal-"+a.id,size:"lg",title:"preview",centered:""}},[t("img",{staticClass:"modal-img",attrs:{src:a.preview}})]):e._e(),"es"==e.language?t("b-modal",{attrs:{id:"modal-"+a.id,size:"lg",title:"Avance",centered:""}},[t("img",{staticClass:"modal-img",attrs:{src:a.preview}})]):e._e()],1)}))],2)])},K=[],Q={name:"Projects",props:{database:Object,language:String},data:function(){return{}}},V=Q,W=(t("f6ca"),Object(b["a"])(V,q,K,!1,null,null,null)),X=W.exports,Y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("hr",{staticClass:"m-0"})},ee=[],ae={},te=ae,se=Object(b["a"])(te,Y,ee,!1,null,null,null),ne=se.exports,ie={name:"app",data:function(){return{name:{first:"Alvaro",last:"Zambrana Fernandez"},language:"en",database:{},fullJson:{}}},components:{About:f,Education:x,Skills:$,Experience:E,Interests:R,Navigation:Z,Projects:X,Border:ne},created:function(){new r.a('a[href*="#"',{updateURL:!1})},methods:{changeLanguage:function(){"en"==this.language?(this.language="es",console.log("Se ha cambiado el idioma a espanol"),this.database=this.fullJson.es):"es"==this.language&&(this.language="en",console.log("Language has been changed to English"),this.database=this.fullJson.en)}},mounted:function(){var e=this;c.a.get("data.json").then((function(a){e.fullJson=a.data,console.log(a.data),"en"==e.language?(e.database=a.data.en,console.log("Applied")):"es"==e.language&&(e.database=a.data.es,console.log("Aplicado"))}))}},le=ie,re=(t("034f"),Object(b["a"])(le,n,i,!1,null,null,null)),oe=re.exports,ce=t("2f62");s["default"].use(ce["a"]);var ue=new ce["a"].Store({state:{},mutations:{},actions:{},modules:{}}),de=t("1881"),ge=t.n(de),me=t("5f5b"),be=t("ecee"),pe=t("f2d1"),fe=t("ad3d");t("4184");s["default"].use(ge.a),s["default"].use(me["a"]),be["b"].watch(),be["d"].add(pe["f"],pe["e"],pe["c"],pe["b"],pe["d"],pe["j"],pe["g"],pe["a"],pe["k"],pe["i"],pe["h"]),s["default"].component("font-awesome-icon",fe["a"]),s["default"].config.productionTip=!1,new s["default"]({store:ue,render:function(e){return e(oe)}}).$mount("#app")},6556:function(e,a,t){},"85ec":function(e,a,t){},b988:function(e,a,t){e.exports=t.p+"img/pfp.8d45d893.png"},f6ca:function(e,a,t){"use strict";var s=t("6556"),n=t.n(s);n.a}});
//# sourceMappingURL=app.a1d37821.js.map