(function(){"use strict";var o={4872:function(o,t,e){var s=e(9242),n=e(3396);function i(o,t){const e=(0,n.up)("router-view"),s=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(e),(0,n.Wm)(s,{to:"/"},{default:(0,n.w5)((()=>[(0,n.Uk)("Home")])),_:1}),(0,n.Uk)("| "),(0,n.Wm)(s,{to:"/room"},{default:(0,n.w5)((()=>[(0,n.Uk)("Room")])),_:1}),(0,n.Uk)("| "),(0,n.Wm)(s,{to:"/intro"},{default:(0,n.w5)((()=>[(0,n.Uk)("intro")])),_:1})],64)}var a=e(89);const r={},l=(0,a.Z)(r,[["render",i]]);var p=l,c=e(2483);const u={class:"menu"};function h(o,t,e,s,i,a){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",u,[(0,n.Wm)(r,{class:"btnComençar",to:{name:"intro",params:{index:i.index,fomo:i.fomo}}},{default:(0,n.w5)((()=>[(0,n.Uk)("Començar")])),_:1},8,["to"])])}var d={data(){return{fomo:75,index:0}}};const w=(0,a.Z)(d,[["render",h],["__scopeId","data-v-6d9b3376"]]);var m=w;const f=o=>((0,n.dD)("data-v-95c38e50"),o=o(),(0,n.Cn)(),o),b={class:"intro"},v=f((()=>(0,n._)("h1",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore cupiditate voluptate iusto, itaque ad aliquam quos, debitis rem vitae earum, magnam voluptatibus. Quasi amet dolorem quos quibusdam soluta nobis accusamus. ",-1)));function P(o,t,e,s,i,a){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",b,[v,i.showNext?((0,n.wg)(),(0,n.j4)(r,{key:0,to:{name:"room",params:{index:i.index,fomo:i.fomo}},class:"btn btn-primary",style:{left:"85%",top:"90%"}},{default:(0,n.w5)((()=>[(0,n.Uk)("Ves a l'habitació")])),_:1},8,["to"])):(0,n.kq)("",!0)])}var g={data(){return{showNext:!1,index:this.$route.params.index,fomo:this.$route.params.fomo,intro:[{}]}},mounted(){setTimeout((()=>{this.showNext=!0}),4e3)}};const k=(0,a.Z)(g,[["render",P],["__scopeId","data-v-95c38e50"]]);var _=k,U=e(7139),y=e.p+"img/bed1.7b8b2152.jpg",N=e.p+"img/plant1.710b462e.jpg",x=e.p+"img/table1.d4bde164.jpg",D=e.p+"img/skate1.a96d370b.jpg",I=e.p+"img/plant.356dfede.jpg",T=e.p+"img/sofa1.bee0e8c5.jpg",C=e.p+"img/meditate1.f54b49ca.jpg",A=e.p+"img/mobile1.b16d1954.jpg";const q={class:"room"},S={key:0,class:"PopUpOverlay"},O={key:1,class:"PopUp"},j=(0,n._)("img",{src:y},null,-1),L={key:2,class:"PopUp"},M=(0,n._)("img",{src:N},null,-1),F={key:3,class:"PopUp"},B=(0,n._)("img",{src:x},null,-1),R={key:4,class:"PopUp"},W=(0,n._)("img",{src:D},null,-1),$={key:5,class:"PopUp"},z=(0,n._)("h1",null,"TITUL DOOR",-1),Z=(0,n._)("img",{src:I},null,-1),H={key:6,class:"PopUp"},E=(0,n._)("h1",null,"TITUL SOFA",-1),Y=(0,n._)("img",{src:T},null,-1),K={key:7,class:"PopUp"},Q=(0,n._)("h1",null,"TITUL Meditacio",-1),V=(0,n._)("img",{src:C},null,-1),G={key:8,class:"PopUp"},J=(0,n._)("h1",null,"NOTIFICACIO 1",-1),X=(0,n._)("img",{class:"img Not",src:A},null,-1);function oo(o,t,e,i,a,r){return(0,n.wg)(),(0,n.iD)("div",q,[(0,n._)("button",{class:"btn Bed",onClick:t[0]||(t[0]=t=>o.showPopupIt("showPopUp","spBed"))}),(0,n._)("button",{class:"btn Skate",onClick:t[1]||(t[1]=t=>o.showPopupIt("showPopUp","spSkate"))}),(0,n._)("button",{class:"btn Plant",onClick:t[2]||(t[2]=t=>o.showPopupIt("showPopUp","spPlant"))}),(0,n._)("button",{class:"btn Table",onClick:t[3]||(t[3]=t=>o.showPopupIt("showPopUp","spTable"))}),(0,n._)("button",{class:"btn Sofa",onClick:t[4]||(t[4]=t=>o.showPopupIt("showPopUp","spSofa"))}),(0,n._)("button",{class:"btn Door",onClick:t[5]||(t[5]=t=>o.showPopupIt("showPopUp","spDoor"))}),(0,n._)("button",{class:"btn Meditate",onClick:t[6]||(t[6]=t=>o.showPopupIt("showPopUp","spMeditate"))}),(0,n._)("button",{class:"btn Mobile",onClick:t[7]||(t[7]=t=>o.showPopupIt("showPopUp","clNot1"))}),(0,n.wy)((0,n._)("button",{class:"not n1",onClick:t[8]||(t[8]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot1]]),(0,n.wy)((0,n._)("button",{class:"not n2",onClick:t[9]||(t[9]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot2]]),(0,n.wy)((0,n._)("button",{class:"not n3",onClick:t[10]||(t[10]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot3]]),(0,n.wy)((0,n._)("button",{class:"not n4",onClick:t[11]||(t[11]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot4]]),(0,n.wy)((0,n._)("button",{class:"not n5",onClick:t[12]||(t[12]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot5]]),(0,n.wy)((0,n._)("button",{class:"not n6",onClick:t[13]||(t[13]=t=>o.showPopupIt("showPopUp","clNot1"))},null,512),[[s.F8,o.showNot6]]),o.showPopUp?((0,n.wg)(),(0,n.iD)("div",S)):(0,n.kq)("",!0),o.spBed?((0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("h3",null,(0,U.zw)(o.popUpText[0].bed),1),j,(0,n._)("button",{class:"btnPop","on:click":t[14]||(t[14]=t=>{o.showPopupIt("showPopUp","spBed"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spPlant?((0,n.wg)(),(0,n.iD)("div",L,[(0,n._)("h3",null,(0,U.zw)(o.popUpText[0].plant),1),M,(0,n._)("button",{class:"btnPop","on:click":t[15]||(t[15]=t=>{o.showPopupIt("showPopUp","spPlant"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spTable?((0,n.wg)(),(0,n.iD)("div",F,[(0,n._)("h3",null,(0,U.zw)(o.popUpText[0].table),1),B,(0,n._)("button",{class:"btnPop","on:click":t[16]||(t[16]=t=>{o.showPopupIt("showPopUp","spTable"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spSkate?((0,n.wg)(),(0,n.iD)("div",R,[(0,n._)("h3",null,(0,U.zw)(o.popUpText[0].skate),1),W,(0,n._)("button",{class:"btnPop","on:click":t[17]||(t[17]=t=>{o.showPopupIt("showPopUp","spSkate"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spDoor?((0,n.wg)(),(0,n.iD)("div",$,[z,Z,(0,n._)("button",{class:"btnPop","on:click":t[18]||(t[18]=t=>{o.showPopupIt("showPopUp","spDoor"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spSofa?((0,n.wg)(),(0,n.iD)("div",H,[E,Y,(0,n._)("button",{class:"btnPop","on:click":t[19]||(t[19]=t=>{o.showPopupIt("showPopUp","spSofa"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spMeditate?((0,n.wg)(),(0,n.iD)("div",K,[Q,V,(0,n._)("button",{class:"btnPop","on:click":t[20]||(t[20]=t=>{o.showPopupIt("showPopUp","spMeditate"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.clNot1?((0,n.wg)(),(0,n.iD)("div",G,[J,X,(0,n._)("button",{class:"btnPop","on:click":t[21]||(t[21]=t=>{o.showPopupIt("showPopUp","clNot1"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):(0,n.kq)("",!0)])}e(7658);var to={setup(){return{}},data(){return{showPopUp:!1,spBed:!1,spPlant:!1,spDoor:!1,spTable:!1,spSofa:!1,spSkate:!1,spMeditate:!1,showNot1:!1,showNot2:!1,showNot3:!1,showNot4:!1,showNot5:!1,showNot6:!1,showNot7:!1,showNot8:!1,showNot9:!1,showNot10:!1,clNot1:!1,actions:0,fomoLv:0,index:this.$route.params.index,fomo:parseInt(this.$route.params.fomo),notSelect:6*Math.random(),popUpText:[{bed:"Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant disfrutes de una estona sense preocupar-te de res",plant:"Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",table:"Mires l'agenda i veus que els examens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",skate:"Et tornen a venir ganes d'anar al skate Park per fer alguns trucs amb la teva vella taula"}]}},watch:{actions(o){o>=5&&(console.log("HEo"),this.$router.push({name:"info",params:{index:this.index,fomoLv:this.finalFomo}}))}},computed:{finalFomo(){return this.fomoLv+this.fomo}},mounted(){setTimeout((()=>{this.notSelect>=3&&this.notSelect<6&&(this.showNot1=!0,this.showNot2=!0,this.showNot3=!0,this.showNot4=!1,this.showNot5=!1,this.showNot6=!1)}),1e3),setTimeout((()=>{this.notSelect>=0&&this.notSelect<3&&(this.showNot1=!1,this.showNot2=!1,this.showNot3=!1,this.showNot4=!0,this.showNot5=!0,this.showNot6=!0)}),5e3)},methods:{showPopupOv(o){this[o]=!this[o]},fomoUp(){this.fomoLv=this.fomoLv+5},fomoDown(){this.fomoLv=this.fomoLv-5},showPopupIt(o,t){this[o]=!this[o],this[t]=!this[t]},Action(){this.actions=this.actions+1}}};const eo=(0,a.Z)(to,[["render",oo]]);var so=eo;const no={class:"info"},io={class:"wrapper"},ao={key:0,class:"img1"},ro={key:1,class:"img2"},lo={class:"questionContainer"},po=["for"],co=["id","value","disabled"],uo=(0,n._)("div",{style:{"text-align":"center"}},[(0,n._)("div",{class:"sabiesContainer"},[(0,n._)("h1",null," Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, sed. Iste deserunt voluptatem quia sapiente nihil quasi assumenda voluptates dolorem maiores adipisci molestias ratione sed corrupti eaque ipsa, alias nisi! ")])],-1);function ho(o,t,e,s,i,a){const r=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",no,[(0,n._)("div",null,[(0,n._)("div",io,[(0,n._)("div",null,[o.fomoReceiver>=6?((0,n.wg)(),(0,n.iD)("div",ao)):o.fomoReceiver<6?((0,n.wg)(),(0,n.iD)("div",ro)):(0,n.kq)("",!0)]),(0,n._)("div",lo,[(0,n._)("h1",null,(0,U.zw)(o.questions[0]["question"]),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.questions[0]["answer"],((e,s)=>((0,n.wg)(),(0,n.iD)("label",{for:s,style:{display:"block",outline:"solid 1px black",margin:"5%","margin-left":"25%",width:"50%","box-shadow":"2px 2px"},key:e.id,class:(0,U.C_)([{answer:" "==o.selectedAns},{"answer nonSelected":" "!=o.selectedAns&&o.selectedAns!=s&&s!=o.questions[0]["correct"]},{"answer Incorrect":o.selectedAns==s&&s!=o.questions[0]["correct"]},{"answer Correct":" "!=o.selectedAns&&s==o.questions[0]["correct"]}])},[(0,n._)("input",{style:{display:"none"},type:"radio",id:s,value:s,onClick:t[0]||(t[0]=t=>o.selected(t)),disabled:" "!=o.selectedAns},null,8,co),(0,n.Uk)(" "+(0,U.zw)(e),1)],10,po)))),128))])]),uo,(0,n._)("button",{onClick:t[1]||(t[1]=t=>o.incrementIndex())}),o.Answered?((0,n.wg)(),(0,n.j4)(r,{key:0,onClick:t[2]||(t[2]=t=>o.incrementIndex()),style:{left:"90%",top:"93%"},type:"button",class:"btn btn-primary",to:{name:"intro",params:{index:o.index,fomo:o.fomoReceiver}}},{default:(0,n.w5)((()=>[(0,n.Uk)("Passar la Nit")])),_:1},8,["to"])):(0,n.kq)("",!0)])])}var wo={data(){return{Answered:!1,index:this.$route.params.index,fomoReceiver:this.$route.params.fomoLv,selectedAns:" ",questions:[{question:"unta 1 1Pregunta 1 1u1Pregunta 1 1",answer:{a:"AAAA",b:"BBBB",c:"CCCC",d:"DDDD"},correct:"b"},{question:"Pregunta 2",answer:{a:"A",b:"B",c:"C",d:"D"},correct:"a"}]}},methods:{selected(o){this.selectedAns=o.target.value,this.Answered=!0},incrementIndex(){this.index++}}};const mo=(0,a.Z)(wo,[["render",ho]]);var fo=mo;const bo=[{path:"/",name:"home",component:m},{path:"/intro/:fomo/:index/",name:"intro",component:_},{path:"/room/:fomo/:index/",name:"room",component:so},{path:"/info/:fomoLv/:index",name:"info",component:fo,props:!0}],vo=(0,c.p7)({history:(0,c.PO)("/TfgWeb/"),routes:bo});var Po=vo;e(5654);(0,s.ri)(p).use(Po).mount("#app")}},t={};function e(s){var n=t[s];if(void 0!==n)return n.exports;var i=t[s]={exports:{}};return o[s].call(i.exports,i,i.exports,e),i.exports}e.m=o,function(){var o=[];e.O=function(t,s,n,i){if(!s){var a=1/0;for(c=0;c<o.length;c++){s=o[c][0],n=o[c][1],i=o[c][2];for(var r=!0,l=0;l<s.length;l++)(!1&i||a>=i)&&Object.keys(e.O).every((function(o){return e.O[o](s[l])}))?s.splice(l--,1):(r=!1,i<a&&(a=i));if(r){o.splice(c--,1);var p=n();void 0!==p&&(t=p)}}return t}i=i||0;for(var c=o.length;c>0&&o[c-1][2]>i;c--)o[c]=o[c-1];o[c]=[s,n,i]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var s in t)e.o(t,s)&&!e.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:t[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){e.p="/TfgWeb/"}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,s){var n,i,a=s[0],r=s[1],l=s[2],p=0;if(a.some((function(t){return 0!==o[t]}))){for(n in r)e.o(r,n)&&(e.m[n]=r[n]);if(l)var c=l(e)}for(t&&t(s);p<a.length;p++)i=a[p],e.o(o,i)&&o[i]&&o[i][0](),o[i]=0;return e.O(c)},s=self["webpackChunkproves"]=self["webpackChunkproves"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(4872)}));s=e.O(s)})();
//# sourceMappingURL=app.766b979e.js.map