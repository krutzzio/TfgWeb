(function(){"use strict";var o={5125:function(o,t,e){var n=e(9242),s=e(3396);function a(o,t){const e=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(e)}var i=e(89);const r={},l=(0,i.Z)(r,[["render",a]]);var p=l,c=e(2483);const u={class:"menuContainer"};function h(o,t,e,n,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s.Wm)(r,{class:"btn btn-primary d-flex align-items-center btn-lg btnHome",to:{name:"intro",params:{index:a.index,fomo:a.fomo}}},{default:(0,s.w5)((()=>[(0,s.Uk)("Començar")])),_:1},8,["to"])])}var m={data(){return{fomo:75,index:0}}};const b=(0,i.Z)(m,[["render",h],["__scopeId","data-v-0499c17a"]]);var d=b,w=e(7139);const g={class:"introContainer"},f={key:0};function v(o,t,e,n,a,i){const r=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",g,[a.index<3?((0,s.wg)(),(0,s.iD)("div",f,[(0,s._)("h1",null,(0,w.zw)(a.intro[a.index]),1),a.showNext?((0,s.wg)(),(0,s.j4)(r,{key:0,to:{name:"room",params:{index:a.index,fomo:a.fomo}},class:"btn btn-primary d-flex align-items-center btn-lg btnIntro"},{default:(0,s.w5)((()=>[(0,s.Uk)("Ves a l'habitació")])),_:1},8,["to"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])}var N={data(){return{showNext:!1,index:this.$route.params.index,fomo:this.$route.params.fomo,intro:["Ets l'Alex, i has estat seleccionat per fer un experiment, per obtenir informació del gustos dels adolescents. Durant les següents setmanes un grup de cientifics analitzarà el que facis al arribar a casa després del institut. A part et demanen que quan acabi el dia mostris com et sents amb un dibuix.","Ha passat ja una setmana despres de començar el estudi. Et sents una mica extrany que vegin el que estas fent, pero ja quda","Ja has arribat a la última setmana del experiment. Notes que ja per fi s'acabarà i podràs estar més tranquil"]}},mounted(){setTimeout((()=>{this.showNext=!0}),1e3)}};const k=(0,i.Z)(N,[["render",v],["__scopeId","data-v-70adeef0"]]);var _=k,y=e.p+"img/bed1.7b8b2152.jpg",x=e.p+"img/plant1.710b462e.jpg",U=e.p+"img/table1.d4bde164.jpg",P=e.p+"img/skate1.a96d370b.jpg",q=e.p+"img/door1.be35a13f.jpg",D=e.p+"img/sofa1.bee0e8c5.jpg",T=e.p+"img/meditate1.f54b49ca.jpg",C=e.p+"img/mobile1.110cce1a.jpg",A=e.p+"img/Not1.293f1cc4.jpg",j=e.p+"img/Not2.c1905075.jpg",M=e.p+"img/Not3.51437d21.jpg",R=e.p+"img/Not4.f4ef2ede.jpg",z=e.p+"img/Not5.68d6ad29.jpg";const F={class:"roomContainer"},S={key:0,class:"PopUpOverlay"},O={key:1,class:"PopUp"},E=(0,s._)("img",{src:y},null,-1),L={key:2,class:"PopUp"},I=(0,s._)("img",{src:x},null,-1),$={key:3,class:"PopUp"},B=(0,s._)("img",{src:U},null,-1),Z={key:4,class:"PopUp"},H=(0,s._)("img",{src:P},null,-1),Q={key:5,class:"PopUpV"},W=(0,s._)("img",{src:q,style:{width:"100%"}},null,-1),G={key:6,class:"PopUp"},V=(0,s._)("img",{src:D},null,-1),J={key:7,class:"PopUp"},K=(0,s._)("img",{src:T},null,-1),Y={key:8,class:"PopUp"},X=(0,s._)("img",{src:C,style:{width:"100%"}},null,-1),oo={key:9,class:"PopUp"},to=(0,s._)("img",{src:A,style:{width:"100%"}},null,-1),eo={key:10,class:"PopUp"},no=(0,s._)("img",{src:j,style:{width:"100%"}},null,-1),so={key:11,class:"PopUp"},ao=(0,s._)("img",{src:M,style:{width:"100%"}},null,-1),io={key:12,class:"PopUp"},ro=(0,s._)("img",{src:R,style:{width:"100%"}},null,-1),lo={key:13,class:"PopUp"},po=(0,s._)("img",{src:z,style:{width:"100%"}},null,-1),co={key:14,class:"PopUp"},uo=(0,s._)("img",{src:A,style:{width:"100%"}},null,-1);function ho(o,t,e,a,i,r){return(0,s.wg)(),(0,s.iD)("div",F,[(0,s._)("button",{class:"btnRoom Bed",onClick:t[0]||(t[0]=t=>o.change2bool("showPopUp","spBed"))}),(0,s._)("button",{class:"btnRoom Skate",onClick:t[1]||(t[1]=t=>o.change2bool("showPopUp","spSkate"))}),(0,s._)("button",{class:"btnRoom Plant",onClick:t[2]||(t[2]=t=>o.change2bool("showPopUp","spPlant"))}),(0,s._)("button",{class:"btnRoom Table",onClick:t[3]||(t[3]=t=>o.change2bool("showPopUp","spTable"))}),(0,s._)("button",{class:"btnRoom Sofa",onClick:t[4]||(t[4]=t=>o.change2bool("showPopUp","spSofa"))}),(0,s._)("button",{class:"btnRoom Door",onClick:t[5]||(t[5]=t=>o.change2bool("showPopUp","spDoor"))}),(0,s._)("button",{class:"btnRoom Meditate",onClick:t[6]||(t[6]=t=>o.change2bool("showPopUp","spMeditate"))}),(0,s._)("button",{class:"btnRoom Mobile",onClick:t[7]||(t[7]=t=>o.change2bool("showPopUp","spMobile"))}),(0,s.wy)((0,s._)("button",{class:"not n1",onClick:t[8]||(t[8]=t=>o.change3bool("showPopUp","spNot1","showNot1"))},null,512),[[n.F8,o.showNot1]]),(0,s.wy)((0,s._)("button",{class:"not n2",onClick:t[9]||(t[9]=t=>o.change3bool("showPopUp","spNot2","showNot2"))},null,512),[[n.F8,o.showNot2]]),(0,s.wy)((0,s._)("button",{class:"not n3",onClick:t[10]||(t[10]=t=>o.change3bool("showPopUp","spNot3","showNot3"))},null,512),[[n.F8,o.showNot3]]),(0,s.wy)((0,s._)("button",{class:"not n4",onClick:t[11]||(t[11]=t=>o.change3bool("showPopUp","spNot4","showNot4"))},null,512),[[n.F8,o.showNot4]]),(0,s.wy)((0,s._)("button",{class:"not n5",onClick:t[12]||(t[12]=t=>o.change3bool("showPopUp","spNot5","showNot5"))},null,512),[[n.F8,o.showNot5]]),(0,s.wy)((0,s._)("button",{class:"not n6",onClick:t[13]||(t[13]=t=>o.change3bool("showPopUp","spNot6","showNot6"))}," not n6 ",512),[[n.F8,o.showNot6]]),(0,s.wy)((0,s._)("button",{class:"not n7",onClick:t[14]||(t[14]=t=>o.change3bool("showPopUp","spNot7","showNot7"))}," not n7 ",512),[[n.F8,o.showNot7]]),(0,s.wy)((0,s._)("button",{class:"not n8",onClick:t[15]||(t[15]=t=>o.change3bool("showPopUp","spNot8","showNot8"))}," not n8 ",512),[[n.F8,o.showNot8]]),(0,s.wy)((0,s._)("button",{class:"not n9",onClick:t[16]||(t[16]=t=>o.change3bool("showPopUp","spNot9","showNot9"))}," not n9 ",512),[[n.F8,o.showNot9]]),(0,s.wy)((0,s._)("button",{class:"not n10",onClick:t[17]||(t[17]=t=>o.change3bool("showPopUp","spNot10","showNot10"))}," not n10 ",512),[[n.F8,o.showNot10]]),o.showPopUp?((0,s.wg)(),(0,s.iD)("div",S)):(0,s.kq)("",!0),o.spBed?((0,s.wg)(),(0,s.iD)("div",O,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].bed),1),E,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[18]||(t[18]=t=>{o.change2bool("showPopUp","spBed"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spPlant?((0,s.wg)(),(0,s.iD)("div",L,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].plant),1),I,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[19]||(t[19]=t=>{o.change2bool("showPopUp","spPlant"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spTable?((0,s.wg)(),(0,s.iD)("div",$,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].table),1),B,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[20]||(t[20]=t=>{o.change2bool("showPopUp","spTable"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spSkate?((0,s.wg)(),(0,s.iD)("div",Z,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].skate),1),H,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[21]||(t[21]=t=>{o.change2bool("showPopUp","spSkate"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spDoor?((0,s.wg)(),(0,s.iD)("div",Q,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].door),1),W,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[22]||(t[22]=t=>{o.change2bool("showPopUp","spDoor"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spSofa?((0,s.wg)(),(0,s.iD)("div",G,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].sofa),1),V,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[23]||(t[23]=t=>{o.change2bool("showPopUp","spSofa"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spMeditate?((0,s.wg)(),(0,s.iD)("div",J,[(0,s._)("h3",null,(0,w.zw)(o.popUpText[0].meditate),1),K,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[24]||(t[24]=t=>{o.change2bool("showPopUp","spMeditate"),o.Action(),o.fomoDown()})}," Torna a l'habitació ",32)])):o.spMobile?((0,s.wg)(),(0,s.iD)("div",Y,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].mobile),1),X,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[25]||(t[25]=t=>{o.change2bool("showPopUp","spMobile"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot1?((0,s.wg)(),(0,s.iD)("div",oo,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notMusic),1),to,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[26]||(t[26]=t=>{o.change2bool("showPopUp","spNot1"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot2?((0,s.wg)(),(0,s.iD)("div",eo,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notPhoto),1),no,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[27]||(t[27]=t=>{o.change2bool("showPopUp","spNot2"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot3?((0,s.wg)(),(0,s.iD)("div",so,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notQue),1),ao,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[28]||(t[28]=t=>{o.change2bool("showPopUp","spNot3"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot4?((0,s.wg)(),(0,s.iD)("div",io,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notPiuPiu),1),ro,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[29]||(t[29]=t=>{o.change2bool("showPopUp","spNot4"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot5?((0,s.wg)(),(0,s.iD)("div",lo,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notNow),1),po,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[30]||(t[30]=t=>{o.change2bool("showPopUp","spNot5"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):o.spNot6?((0,s.wg)(),(0,s.iD)("div",co,[(0,s._)("h3",null,(0,w.zw)(o.popUpNot[0].notMusic),1),uo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":t[31]||(t[31]=t=>{o.change2bool("showPopUp","spNot1"),o.Action(),o.fomoUp()})}," Torna a l'habitació ",32)])):(0,s.kq)("",!0)])}e(7658);var mo={setup(){return{}},data(){return{showPopUp:!1,spBed:!1,spPlant:!1,spDoor:!1,spTable:!1,spSofa:!1,spSkate:!1,spMeditate:!1,spMobile:!1,showNot1:!1,showNot2:!1,showNot3:!1,showNot4:!1,showNot5:!1,showNot6:!1,showNot7:!1,showNot8:!1,showNot9:!1,showNot10:!1,timeNot1:5,timeNot2:9,timeNot3:20,timeNot4:26,timeNot5:15,spNot1:!1,spNot2:!1,spNot3:!1,spNot4:!1,spNot5:!1,spNot6:!1,spNot7:!1,spNot8:!1,spNot9:!1,spNot10:!1,actions:0,fomoLv:0,index:this.$route.params.index,fomo:parseInt(this.$route.params.fomo),notSelect:6*Math.random(),popUpText:[{bed:"Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant disfrutes de una estona sense preocupar-te de res.",plant:"Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",table:"Mires l'agenda i veus que els examens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",skate:"Et tornen a venir ganes d'anar al skatepark per fer alguns trucs amb la teva vella taula.",door:"Escoltes un soroll a la porta. Es el Dobby, i et demana que el treguis a passejar. Com s'ha portat tant bé, prepares les coses i aneu a una piscina per a gossos.",meditate:"Fa temps que vas decidir fer més exercici, així que agafes l'estoreta i comences amb la teva rutina.",sofa:"Agafes el teu llibre preferit i et seus al sofà per passar una bona tarda."}],popUpNot:[{mobile:"Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",notMusic:"Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",notPhoto:"Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",notQue:"Entres al chat d'amics i discutiu sobre el que ha passat al institut.",notPiuPiu:"Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",notNow:"Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària."}]}},watch:{actions(o){o>=5&&this.$router.push({name:"info",params:{index:this.index,fomoLv:this.finalFomo}})}},computed:{finalFomo(){return this.fomoLv+this.fomo}},mounted(){setTimeout((()=>{0==this.index||2==this.index?this.showNot1=!0:this.showNot6=!0}),1e3*this.timeNot1),setTimeout((()=>{0==this.index||2==this.index?this.showNot2=!0:this.showNot7=!0}),1e3*this.timeNot2),setTimeout((()=>{0==this.index||2==this.index?this.showNot3=!0:this.showNot8=!0}),1e3*this.timeNot3),setTimeout((()=>{0==this.index||2==this.index?this.showNot4=!0:this.showNot9=!0}),1e3*this.timeNot4),setTimeout((()=>{0==this.index||2==this.index?this.showNot5=!0:this.showNot10=!0}),1e3*this.timeNot5)},methods:{fomoUp(){this.fomoLv=this.fomoLv+5},fomoDown(){this.fomoLv=this.fomoLv-5},changebool(o){this[o]=!this[o]},change2bool(o,t){this[o]=!this[o],this[t]=!this[t]},change3bool(o,t,e){this[o]=!this[o],this[t]=!this[t],this[e]=!this[e]},Action(){this.actions=this.actions+1}}};const bo=(0,i.Z)(mo,[["render",ho]]);var wo=bo;const go={class:"infoContainer"},fo={class:"wrapper"},vo={class:"questionContainer"},No=["for"],ko=["id","value","disabled"],_o={class:"wrapper"},yo={class:"sabiesContainer"},xo={style:{"text-align":"center"}},Uo=(0,s._)("br",null,null,-1);function Po(o,t,e,n,a,i){return(0,s.wg)(),(0,s.iD)("div",go,[(0,s._)("div",null,[(0,s._)("div",fo,[(0,s._)("div",null,[(0,s._)("div",{class:(0,w.C_)([{img1:o.fomoReceiver<=15},{img2:o.fomoReceiver<=45&&o.fomoReceiver>15},{img3:o.fomoReceiver<=75&&o.fomoReceiver>45},{img4:o.fomoReceiver<=105&&o.fomoReceiver>75},{img5:o.fomoReceiver<135&&o.fomoReceiver>105},{img6:o.fomoReceiver>=135}])},null,2)]),(0,s._)("div",vo,[(0,s._)("h1",null,(0,w.zw)(o.questions[o.index]["question"]),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.questions[o.index]["answer"],((e,n)=>((0,s.wg)(),(0,s.iD)("label",{for:n,style:{"text-align":"center","align-items":"center","justify-content":"center",display:"block",outline:"solid 1px black",margin:"5%","margin-left":"25%",width:"50%","box-shadow":"2px 2px"},key:e.id,class:(0,w.C_)([{answer:" "==o.selectedAns},{"answer nonSelected":" "!=o.selectedAns&&o.selectedAns!=n&&n!=o.questions[o.index]["correct"]},{"answer Incorrect":o.selectedAns==n&&n!=o.questions[o.index]["correct"]},{"answer Correct":" "!=o.selectedAns&&n==o.questions[o.index]["correct"]}])},[(0,s._)("input",{style:{display:"none"},type:"radio",id:n,value:n,onClick:t[0]||(t[0]=t=>o.selected(t)),disabled:" "!=o.selectedAns},null,8,ko),(0,s.Uk)(" "+(0,w.zw)(e),1)],10,No)))),128))])]),(0,s._)("div",_o,[(0,s._)("div",yo,[(0,s._)("h1",xo,[(0,s.Uk)(" Sabies que..."),Uo,(0,s.Uk)(" "+(0,w.zw)(o.sabies[o.index]),1)])])]),o.Answered&&o.index<2?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-primary d-flex align-items-center btn-lg btnInfo",onClick:t[1]||(t[1]=t=>o.incrementIndex())}," Passar la nit ")):(0,s.kq)("",!0),o.Answered&&2==o.index?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"btn btn-primary d-flex align-items-center btn-lg btnInfo",onClick:t[2]||(t[2]=t=>o.incrementIndex())}," Resultats ")):(0,s.kq)("",!0)])])}var qo={data(){return{imagen1:"@/assets/cara_ejemplo1.jpg",Answered:!1,index:this.$route.params.index,fomoReceiver:this.$route.params.fomoLv,selectedAns:" ",questions:[{question:"Què signifiquen les sigles de FoMo?",answer:{a:"Friends of Marco organization",b:"Fear of Missing out",c:"Fathers out, Mothers out",d:"Financial oportunity Missed out"},correct:"b"},{question:"Pregunta 2",answer:{a:"A",b:"B",c:"C",d:"D"},correct:"d"},{question:"Pregunta 3",answer:{a:"A",b:"B",c:"C",d:"D"},correct:"d"}],sabies:["Gastem més de 6:30 hores diarament a internet a arreu el món. A Espanya, en particular, la mitja és una mica més baixa però supera les 5:30 hores.","LOREM 2","LOREM 3"]}},methods:{selected(o){this.selectedAns=o.target.value,this.Answered=!0},incrementIndex(){this.index++,this.$router.push({name:"intro",params:{index:this.index,fomo:this.fomoReceiver}})}}};const Do=(0,i.Z)(qo,[["render",Po]]);var To=Do;const Co=[{path:"/",name:"home",component:d},{path:"/intro/:fomo/:index/",name:"intro",component:_},{path:"/room/:fomo/:index/",name:"room",component:wo},{path:"/info/:fomoLv/:index",name:"info",component:To,props:!0}],Ao=(0,c.p7)({history:(0,c.PO)("/TfgWeb/"),routes:Co});var jo=Ao;e(5654);(0,n.ri)(p).use(jo).mount("#app")}},t={};function e(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return o[n].call(a.exports,a,a.exports,e),a.exports}e.m=o,function(){var o=[];e.O=function(t,n,s,a){if(!n){var i=1/0;for(c=0;c<o.length;c++){n=o[c][0],s=o[c][1],a=o[c][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||i>=a)&&Object.keys(e.O).every((function(o){return e.O[o](n[l])}))?n.splice(l--,1):(r=!1,a<i&&(i=a));if(r){o.splice(c--,1);var p=s();void 0!==p&&(t=p)}}return t}a=a||0;for(var c=o.length;c>0&&o[c-1][2]>a;c--)o[c]=o[c-1];o[c]=[n,s,a]}}(),function(){e.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return e.d(t,{a:t}),t}}(),function(){e.d=function(o,t){for(var n in t)e.o(t,n)&&!e.o(o,n)&&Object.defineProperty(o,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(o){if("object"===typeof window)return window}}()}(),function(){e.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)}}(),function(){e.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}}(),function(){e.p="/TfgWeb/"}(),function(){var o={143:0};e.O.j=function(t){return 0===o[t]};var t=function(t,n){var s,a,i=n[0],r=n[1],l=n[2],p=0;if(i.some((function(t){return 0!==o[t]}))){for(s in r)e.o(r,s)&&(e.m[s]=r[s]);if(l)var c=l(e)}for(t&&t(n);p<i.length;p++)a=i[p],e.o(o,a)&&o[a]&&o[a][0](),o[a]=0;return e.O(c)},n=self["webpackChunkproves"]=self["webpackChunkproves"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5125)}));n=e.O(n)})();
//# sourceMappingURL=app.630d81d2.js.map