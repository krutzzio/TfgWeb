(function(){"use strict";var e={2440:function(e,o,t){var a=t(9242),s=t(3396);function n(e,o){const t=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(t)}var i=t(89);const l={},r=(0,i.Z)(l,[["render",n]]);var p=r,c=t(2483);const u={class:"menuContainer"},m={key:0,class:"backgroundForm"},d={key:0,class:"formContainer"},h={style:{margin:"5%"}};function b(e,o,t,a,n,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",u,[(0,s._)("button",{class:"btn btn-primary d-flex align-items-center btn-lg btnHome",onClick:o[0]||(o[0]=e=>i.showRouter())}," Començar "),n.sRouter?((0,s.wg)(),(0,s.iD)("div",m,[n.sRouter?((0,s.wg)(),(0,s.iD)("div",d,[(0,s._)("h2",h,[(0,s.Uk)("Si us plau abans de començar ompliu el següent "),(0,s._)("a",{href:"https://forms.gle/GrEQz3siwvi3LzLS7",target:"_blank",onClick:o[1]||(o[1]=e=>i.showForm())}," formulari")]),n.sForm?((0,s.wg)(),(0,s.j4)(l,{key:0,class:"btn btn-primary d-flex align-items-center mt-4 p-3 btn-lg btnHome",to:{name:"intro",params:{index:n.index,fomo:n.fomo}}},{default:(0,s.w5)((()=>[(0,s.Uk)("Començar Joc")])),_:1},8,["to"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])):(0,s.kq)("",!0)])}var g={data(){return{fomo:75,index:0,sRouter:!1,sForm:!1}},methods:{showRouter(){this.sRouter=!0},showForm(){this.sForm=!0}}};const w=(0,i.Z)(g,[["render",b],["__scopeId","data-v-1e016572"]]);var f=w,v=t(7139);const x={class:"introContainer"},k={key:0},_=(0,s._)("br",null,null,-1),y=(0,s._)("br",null,null,-1),N={key:1},U=(0,s._)("br",null,null,-1),q=(0,s._)("br",null,null,-1),P={key:2,class:"resultsContainer"},D=(0,s._)("h1",null,"Aquest són els teus resultats:",-1),T=(0,s._)("br",null,null,-1),j={key:0},z={key:1},A={key:2},C={key:3},F={key:4},R={key:5},M=(0,s._)("h2",null,[(0,s.Uk)(" Si us plau completa aquest "),(0,s._)("a",{href:"https://forms.gle/9V17mqGC91SjvNoU8",target:"_blank"}," formulari"),(0,s.Uk)(" per acabar.")],-1);function S(e,o,t,a,n,i){const l=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)("div",x,[n.index<3?((0,s.wg)(),(0,s.iD)("div",k,[(0,s._)("h1",null,[(0,s.Uk)((0,v.zw)(n.primerIntro[n.index])+" ",1),_,y]),(0,s._)("h1",null,(0,v.zw)(n.segonIntro[n.index]),1),n.showNext?((0,s.wg)(),(0,s.j4)(l,{key:0,to:{name:"room",params:{index:n.index,fomo:n.fomo}},class:"btn btn-primary d-flex align-items-center btn-lg btnIntro"},{default:(0,s.w5)((()=>[(0,s.Uk)("Ves a l'habitació")])),_:1},8,["to"])):(0,s.kq)("",!0)])):(0,s.kq)("",!0),3==n.index&&0==n.resultats?((0,s.wg)(),(0,s.iD)("div",N,[(0,s._)("h1",null,[(0,s.Uk)((0,v.zw)(n.primerIntro[n.index])+" ",1),U,q]),(0,s._)("h1",null,(0,v.zw)(n.segonIntro[n.index]),1),(0,s._)("button",{class:"btn btn-primary d-flex align-items-center btn-lg btnResultats",onClick:o[0]||(o[0]=(...e)=>i.goResultats&&i.goResultats(...e))}," Veure Resultats ")])):(0,s.kq)("",!0),n.resultats?((0,s.wg)(),(0,s.iD)("div",P,[D,T,(0,s._)("div",null,[n.fomo<=15?((0,s.wg)(),(0,s.iD)("h3",j,(0,v.zw)(n.resultat[0]),1)):n.fomo<=45&&n.fomo>15?((0,s.wg)(),(0,s.iD)("h3",z,(0,v.zw)(n.resultat[1]),1)):n.fomo<=75&&n.fomo>45?((0,s.wg)(),(0,s.iD)("h3",A,(0,v.zw)(n.resultat[2]),1)):n.fomo<=105&&n.fomo>75?((0,s.wg)(),(0,s.iD)("h3",C,(0,v.zw)(n.resultat[3]),1)):n.fomo<135&&n.fomo>105?((0,s.wg)(),(0,s.iD)("h3",F,(0,v.zw)(n.resultat[4]),1)):e.fomoReceiver>=135?((0,s.wg)(),(0,s.iD)("h3",R,(0,v.zw)(n.resultat[5]),1)):(0,s.kq)("",!0)]),(0,s._)("div",{class:(0,v.C_)([{"imgF i1":n.fomo<=15},{"imgF i2":n.fomo<=45&&n.fomo>15},{"imgF i3":n.fomo<=75&&n.fomo>45},{"imgF i4":n.fomo<=105&&n.fomo>75},{"imgF i5":n.fomo<135&&n.fomo>105},{"imgF i6":n.fomo>=135}])},null,2),M])):(0,s.kq)("",!0)])}var E={data(){return{resultats:!1,showNext:!1,index:this.$route.params.index,fomo:this.$route.params.fomo,primerIntro:["Has estat seleccionat per fer un experiment!","S'ha acavat la primera setmana del experiment!","Ja només et queda aquesta última setmana per acabar l'estudi!","Ja has acabat el estudi!!!"],segonIntro:["Durant les següents 3 setmanes un grup d'estudiants analitzarà el que facis al arribar a casa després del institut. A part et demanaran que abans d'anar a dormir mostris com et sents dibuixant un emogi.","Ha estat una setmana dura, pero el cap de setmana t'ha ajudat a relaxar-te i preparar-te per la segona setmana del estudi.","Ja tens ganes de veure els resultats del estudi. Preguntant a un dels estudiants que participava en el estudi et va dir que quan acabes la setmana els podries veure.","Han estat 3 setmanes que se't han fet curtes. Els estudiants es senten un moment amb tu per parlar dels resultats i ..."],resultat:["Felicitats! Tens uns hàbits excelents. Saps disfrutar del teu temps sense estar lligat amb les xarxes socials i clarament es nota amb el teu estat emocional.","Tens uns hàbits molt bons amb les xarxes socials. Saps controlar-te i disfrutar de no estar tota la estona connectat.","Es nota que saps desconectar-te i no passar tota la estona davant la pantalla, encara que t'agrada estar connectat i saber que passa a les xarxes.","Prefereixes estar connectat a internet abans que fer altres activitats. Has d'anar amb compte perque si no controles podries desenvolupar FoMo.","Fas un ús excessiu del mobil. Hauries de començar a fer activitats i relacionar-te amb gent sense el ús de les xarxes socials. Estas de camí a desenvolupar FoMo.","No pots estar sense entrar a les xarxes socials. Tens una clara dependencia i addicció, a estar tota la estona connectat. Si no canvies els teus hàbits desenvoluparàs FoMo i hauries de tractar-ho si no vols desenvolupar majors problemes."]}},methods:{goResultats(){this.resultats=!0}},mounted(){setTimeout((()=>{this.showNext=!0}),4e3)}};const L=(0,i.Z)(E,[["render",S]]);var I=L,O=t.p+"img/bed1.7b8b2152.jpg",H=t.p+"img/bed2.f37d3acd.jpg",B=t.p+"img/bed3.9af23754.jpg",$=t.p+"img/plant1.710b462e.jpg",G=t.p+"img/plant2.8a7d3f1e.jpg",J=t.p+"img/plant3.54293395.jpg",Q=t.p+"img/table1.d4bde164.jpg",Z=t.p+"img/table2.fed35e43.jpg",V=t.p+"img/table3.e04a1a2c.jpg",W=t.p+"img/skate1.a96d370b.jpg",Y=t.p+"img/skate2.44527691.jpg",K=t.p+"img/skate3.5391df13.jpg",X=t.p+"img/door1.31237a5a.jpg",ee=t.p+"img/door2.137f7e03.jpg",oe=t.p+"img/door3.eb2b0454.jpg",te=t.p+"img/sofa1.bee0e8c5.jpg",ae=t.p+"img/sofa2.70fc7837.jpg",se=t.p+"img/sofa3.45483106.jpg",ne=t.p+"img/meditate1.f54b49ca.jpg",ie=t.p+"img/meditate2.34a03aa8.jpg",le=t.p+"img/meditate3.7a769111.jpg",re=t.p+"img/mobile1.96af9684.jpg",pe=t.p+"img/Not1.4c9c1f8c.jpg",ce=t.p+"img/Not2.bc645bc7.jpg",ue=t.p+"img/Not3.7e7cb2bc.jpg",me=t.p+"img/Not4.ab06daaa.jpg",de=t.p+"img/Not5.f8490927.jpg",he=t.p+"img/Not6.759d0890.jpg",be=t.p+"img/Not7.21fefae2.jpg",ge=t.p+"img/Not8.a8dec8e4.jpg",we=t.p+"img/Not9.fec7ad26.jpg",fe=t.p+"img/Not10.c1a9dbe4.jpg";const ve={class:"roomContainer"},xe={key:0,class:"PopUpOverlay"},ke={key:1,class:"PopUp"},_e={key:0},ye=(0,s._)("img",{src:O},null,-1),Ne={key:1},Ue=(0,s._)("img",{src:H},null,-1),qe={key:2},Pe=(0,s._)("img",{src:B},null,-1),De={key:2,class:"PopUp"},Te={key:0},je=(0,s._)("img",{src:$},null,-1),ze={key:1},Ae=(0,s._)("img",{src:G},null,-1),Ce={key:2},Fe=(0,s._)("img",{src:J},null,-1),Re={key:3,class:"PopUp"},Me={key:0},Se=(0,s._)("img",{src:Q},null,-1),Ee={key:1},Le=(0,s._)("img",{src:Z},null,-1),Ie={key:2},Oe=(0,s._)("img",{src:V},null,-1),He={key:4,class:"PopUp"},Be={key:0},$e=(0,s._)("img",{src:W},null,-1),Ge={key:1},Je=(0,s._)("img",{src:Y},null,-1),Qe={key:2},Ze=(0,s._)("img",{src:K},null,-1),Ve={key:5,class:"PopUp"},We={key:0},Ye=(0,s._)("img",{src:X},null,-1),Ke={key:1},Xe=(0,s._)("img",{src:ee},null,-1),eo={key:2},oo=(0,s._)("img",{src:oe},null,-1),to={key:6,class:"PopUp"},ao={key:0},so=(0,s._)("img",{src:te},null,-1),no={key:1},io=(0,s._)("img",{src:ae},null,-1),lo={key:2},ro=(0,s._)("img",{src:se},null,-1),po={key:7,class:"PopUp"},co={key:0},uo=(0,s._)("img",{src:ne},null,-1),mo={key:1},ho=(0,s._)("img",{src:ie},null,-1),bo={key:2},go=(0,s._)("img",{src:le},null,-1),wo={key:8,class:"PopUp"},fo=(0,s._)("img",{src:re},null,-1),vo={key:9,class:"PopUp"},xo=(0,s._)("img",{src:pe},null,-1),ko={key:10,class:"PopUp"},_o=(0,s._)("img",{src:ce},null,-1),yo={key:11,class:"PopUp"},No=(0,s._)("img",{src:ue},null,-1),Uo={key:12,class:"PopUp"},qo=(0,s._)("img",{src:me},null,-1),Po={key:13,class:"PopUp"},Do=(0,s._)("img",{src:de},null,-1),To={key:14,class:"PopUp"},jo=(0,s._)("img",{src:he},null,-1),zo={key:15,class:"PopUp"},Ao=(0,s._)("img",{src:be},null,-1),Co={key:16,class:"PopUp"},Fo=(0,s._)("img",{src:ge},null,-1),Ro={key:17,class:"PopUp"},Mo=(0,s._)("img",{src:we},null,-1),So={key:18,class:"PopUp"},Eo=(0,s._)("img",{src:fe},null,-1);function Lo(e,o,t,n,i,l){return(0,s.wg)(),(0,s.iD)("div",ve,[(0,s.wy)((0,s._)("button",{class:"btnRoom Bed",onClick:o[0]||(o[0]=o=>e.change2bool("showPopUp","spBed"))},null,512),[[a.F8,e.showBed]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Skate",onClick:o[1]||(o[1]=o=>e.change2bool("showPopUp","spSkate"))},null,512),[[a.F8,e.showSkate]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Plant",onClick:o[2]||(o[2]=o=>e.change2bool("showPopUp","spPlant"))},null,512),[[a.F8,e.showPlant]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Table",onClick:o[3]||(o[3]=o=>e.change2bool("showPopUp","spTable"))},null,512),[[a.F8,e.showTable]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Sofa",onClick:o[4]||(o[4]=o=>e.change2bool("showPopUp","spSofa"))},null,512),[[a.F8,e.showSofa]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Door",onClick:o[5]||(o[5]=o=>e.change2bool("showPopUp","spDoor"))},null,512),[[a.F8,e.showDoor]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Meditate",onClick:o[6]||(o[6]=o=>e.change2bool("showPopUp","spMeditate"))},null,512),[[a.F8,e.showMeditate]]),(0,s.wy)((0,s._)("button",{class:"btnRoom Mobile",onClick:o[7]||(o[7]=o=>e.change2bool("showPopUp","spMobile"))},null,512),[[a.F8,e.showMobile]]),(0,s.wy)((0,s._)("button",{class:"not n1",onClick:o[8]||(o[8]=o=>e.change3bool("showPopUp","spNot1","showNot1"))},null,512),[[a.F8,e.showNot1]]),(0,s.wy)((0,s._)("button",{class:"not n2",onClick:o[9]||(o[9]=o=>e.change3bool("showPopUp","spNot2","showNot2"))},null,512),[[a.F8,e.showNot2]]),(0,s.wy)((0,s._)("button",{class:"not n3",onClick:o[10]||(o[10]=o=>e.change3bool("showPopUp","spNot3","showNot3"))},null,512),[[a.F8,e.showNot3]]),(0,s.wy)((0,s._)("button",{class:"not n4",onClick:o[11]||(o[11]=o=>e.change3bool("showPopUp","spNot4","showNot4"))},null,512),[[a.F8,e.showNot4]]),(0,s.wy)((0,s._)("button",{class:"not n5",onClick:o[12]||(o[12]=o=>e.change3bool("showPopUp","spNot5","showNot5"))},null,512),[[a.F8,e.showNot5]]),(0,s.wy)((0,s._)("button",{class:"not n6",onClick:o[13]||(o[13]=o=>e.change3bool("showPopUp","spNot6","showNot6"))},null,512),[[a.F8,e.showNot6]]),(0,s.wy)((0,s._)("button",{class:"not n7",onClick:o[14]||(o[14]=o=>e.change3bool("showPopUp","spNot7","showNot7"))},null,512),[[a.F8,e.showNot7]]),(0,s.wy)((0,s._)("button",{class:"not n8",onClick:o[15]||(o[15]=o=>e.change3bool("showPopUp","spNot8","showNot8"))},null,512),[[a.F8,e.showNot8]]),(0,s.wy)((0,s._)("button",{class:"not n9",onClick:o[16]||(o[16]=o=>e.change3bool("showPopUp","spNot9","showNot9"))},null,512),[[a.F8,e.showNot9]]),(0,s.wy)((0,s._)("button",{class:"not n10",onClick:o[17]||(o[17]=o=>e.change3bool("showPopUp","spNot10","showNot10"))},null,512),[[a.F8,e.showNot10]]),e.showPopUp?((0,s.wg)(),(0,s.iD)("div",xe)):(0,s.kq)("",!0),e.spBed?((0,s.wg)(),(0,s.iD)("div",ke,[0==e.index?((0,s.wg)(),(0,s.iD)("div",_e,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].bed),1),ye])):1==e.index?((0,s.wg)(),(0,s.iD)("div",Ne,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].bed),1),Ue])):2==e.index?((0,s.wg)(),(0,s.iD)("div",qe,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].bed),1),Pe])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[18]||(o[18]=o=>{e.change3bool("showPopUp","spBed","showBed"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spPlant?((0,s.wg)(),(0,s.iD)("div",De,[0==e.index?((0,s.wg)(),(0,s.iD)("div",Te,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].plant),1),je])):1==e.index?((0,s.wg)(),(0,s.iD)("div",ze,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].plant),1),Ae])):2==e.index?((0,s.wg)(),(0,s.iD)("div",Ce,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].plant),1),Fe])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[19]||(o[19]=o=>{e.change3bool("showPopUp","spPlant","showPlant"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spTable?((0,s.wg)(),(0,s.iD)("div",Re,[0==e.index?((0,s.wg)(),(0,s.iD)("div",Me,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].table),1),Se])):1==e.index?((0,s.wg)(),(0,s.iD)("div",Ee,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].table),1),Le])):2==e.index?((0,s.wg)(),(0,s.iD)("div",Ie,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].table),1),Oe])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[20]||(o[20]=o=>{e.change3bool("showPopUp","spTable","showTable"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spSkate?((0,s.wg)(),(0,s.iD)("div",He,[0==e.index?((0,s.wg)(),(0,s.iD)("div",Be,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].skate),1),$e])):1==e.index?((0,s.wg)(),(0,s.iD)("div",Ge,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].skate),1),Je])):2==e.index?((0,s.wg)(),(0,s.iD)("div",Qe,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].skate),1),Ze])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[21]||(o[21]=o=>{e.change3bool("showPopUp","spSkate","showSkate"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spDoor?((0,s.wg)(),(0,s.iD)("div",Ve,[0==e.index?((0,s.wg)(),(0,s.iD)("div",We,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].door),1),Ye])):1==e.index?((0,s.wg)(),(0,s.iD)("div",Ke,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].door),1),Xe])):2==e.index?((0,s.wg)(),(0,s.iD)("div",eo,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].door),1),oo])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[22]||(o[22]=o=>{e.change3bool("showPopUp","spDoor","showDoor"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spSofa?((0,s.wg)(),(0,s.iD)("div",to,[0==e.index?((0,s.wg)(),(0,s.iD)("div",ao,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].sofa),1),so])):1==e.index?((0,s.wg)(),(0,s.iD)("div",no,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].sofa),1),io])):2==e.index?((0,s.wg)(),(0,s.iD)("div",lo,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].sofa),1),ro])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[23]||(o[23]=o=>{e.change3bool("showPopUp","spSofa","showSofa"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spMeditate?((0,s.wg)(),(0,s.iD)("div",po,[0==e.index?((0,s.wg)(),(0,s.iD)("div",co,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].meditate),1),uo])):1==e.index?((0,s.wg)(),(0,s.iD)("div",mo,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].meditate),1),ho])):2==e.index?((0,s.wg)(),(0,s.iD)("div",bo,[(0,s._)("h3",null,(0,v.zw)(e.popUpText[e.index].meditate),1),go])):(0,s.kq)("",!0),(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[24]||(o[24]=o=>{e.change3bool("showPopUp","spMeditate","showMeditate"),e.Action(),e.fomoDown()})}," Torna a l'habitació ",32)])):e.spMobile?((0,s.wg)(),(0,s.iD)("div",wo,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].mobile),1),fo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[25]||(o[25]=o=>{e.change2bool("showPopUp","spMobile"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot1?((0,s.wg)(),(0,s.iD)("div",vo,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),xo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[26]||(o[26]=o=>{e.change2bool("showPopUp","spNot1"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot2?((0,s.wg)(),(0,s.iD)("div",ko,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notPhoto),1),_o,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[27]||(o[27]=o=>{e.change2bool("showPopUp","spNot2"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot3?((0,s.wg)(),(0,s.iD)("div",yo,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notQue),1),No,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[28]||(o[28]=o=>{e.change2bool("showPopUp","spNot3"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot4?((0,s.wg)(),(0,s.iD)("div",Uo,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notPiuPiu),1),qo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[29]||(o[29]=o=>{e.change2bool("showPopUp","spNot4"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot5?((0,s.wg)(),(0,s.iD)("div",Po,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notNow),1),Do,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[30]||(o[30]=o=>{e.change2bool("showPopUp","spNot5"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot6?((0,s.wg)(),(0,s.iD)("div",To,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),jo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[31]||(o[31]=o=>{e.change2bool("showPopUp","spNot6"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot7?((0,s.wg)(),(0,s.iD)("div",zo,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),Ao,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[32]||(o[32]=o=>{e.change2bool("showPopUp","spNot7"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot8?((0,s.wg)(),(0,s.iD)("div",Co,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),Fo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[33]||(o[33]=o=>{e.change2bool("showPopUp","spNot8"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot9?((0,s.wg)(),(0,s.iD)("div",Ro,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),Mo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[34]||(o[34]=o=>{e.change2bool("showPopUp","spNot9"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):e.spNot10?((0,s.wg)(),(0,s.iD)("div",So,[(0,s._)("h3",null,(0,v.zw)(e.popUpNot[e.index].notMusic),1),Eo,(0,s._)("button",{class:"btn btn-primary mt-4","on:click":o[35]||(o[35]=o=>{e.change2bool("showPopUp","spNot10"),e.Action(),e.fomoUp()})}," Torna a l'habitació ",32)])):(0,s.kq)("",!0)])}t(7658);var Io={setup(){return{}},data(){return{showPopUp:!1,spBed:!1,spPlant:!1,spDoor:!1,spTable:!1,spSofa:!1,spSkate:!1,spMeditate:!1,showMobile:!0,showBed:!0,showPlant:!0,showDoor:!0,showTable:!0,showSofa:!0,showSkate:!0,showMeditate:!0,spMobile:!1,showNot1:!1,showNot2:!1,showNot3:!1,showNot4:!1,showNot5:!1,showNot6:!1,showNot7:!1,showNot8:!1,showNot9:!1,showNot10:!1,timeNot1:5,timeNot2:9,timeNot3:20,timeNot4:26,timeNot5:15,spNot1:!1,spNot2:!1,spNot3:!1,spNot4:!1,spNot5:!1,spNot6:!1,spNot7:!1,spNot8:!1,spNot9:!1,spNot10:!1,actions:0,fomoLv:0,index:this.$route.params.index,fomo:parseInt(this.$route.params.fomo),notSelect:6*Math.random(),popUpText:[{bed:"Prefereixes estirar-te al llit durant una estona per descansar. Mentrestant disfrutes d'una estona sense preocupar-te de res.",plant:"Recordes que tens una planta nova i la prepares per posar-la a la teva habitació.",table:"Mires l'agenda i veus que els exàmens s'apropen. Aquesta vegada vols estar més preparat que l'última vegada.",skate:"Et tornen a venir ganes d'anar al skatepark per fer alguns trucs amb la teva vella taula.",door:"Escoltes un soroll a la porta. És el Dobby, i et demana que el treguis a passejar. Com s'ha portat tant bé, prepares les coses i aneu a una piscina per a gossos.",meditate:"Tens una estona per meditar i fer una mica de Yoga, et va bé per aclarir el cap.",sofa:"Agafes el teu llibre preferit i seus al sofà per passar una bona tarda."},{bed:"Agafes la antiga guitarra del teu pare, li treus la pols i practiques comences a apendre alguns acords fàcils.",plant:"La teva avia et va regalar un petit cactus durant el cap de setmana, i ara li busques un bon lloc a l'habitació.",table:"Tens una presentació de un treball i has convidat als teus amics per acabar de planificar-la.",skate:"Has quedat per seguir practicant skate amb un amic que feia temps que no veies i us ho passeu molt bé.",door:"Aprofites per quedar amb uns quants amics després de classe per anar a fer una volta, us ho passeu molt bé.",meditate:"Fa temps que vas decidir fer més exercici, així que agafes l'estoreta i comences amb la teva rutina.",sofa:"Has vist un album de fotos antigues i el tornes a mirar recordant alguns dels viatges que has fet."},{bed:"Has passat molt mala nit i no aguantes més, t'estires al llit i et dorms.",plant:"Segueixes cuidant les plantes que tens a l'habitació.",table:"Avançes feina que tenies atrassada per posar-te al dia amb algunes assignatures.",skate:"Avui ja has intentat fer algun truc més avançat, encara que t'hagis caigut, ha valgut la pena.",door:"Es la festa del Cine i a sobre feia unes setmanes que va sortir una peli que portaves temps esperant. Vas al cine sense dubtar-ho.",meditate:"L'última vegada que vas fer exercici et vas olvidar d'estirar, i el dia següent no podies casi ni caminar. Avui no faràs el mateix error.",sofa:"Has pogut comprar-te una guitarra nova per poder practicar més, així ja no li robes la del teu pare."}],popUpNot:[{mobile:"Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",notMusic:"Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",notPhoto:"Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",notQue:"Entres al chat d'amics i discutiu sobre el que ha passat al institut.",notPiuPiu:"Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",notNow:"Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària."},{mobile:"Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",notMusic:"Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",notPhoto:"Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",notQue:"Entres al chat d'amics i discutiu sobre el que ha passat al institut.",notPiuPiu:"Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",notNow:"Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària."},{mobile:"Agafes el mobil i et passes una estona mirant les xarxes socials, al cap d'una estona et sorpren que hagi passat més d'una hora.",notMusic:"Escoltes les noves cançons mentres busques opinions del nou ranking musical per les xarxes.",notPhoto:"Comences a mirar les fotos que han pujat a PhotoGram els teus amics, els hi comentes a tots perque vegin que l'has vist.",notQue:"Entres al chat d'amics i discutiu sobre el que ha passat al institut.",notPiuPiu:"Entres a PiuPiu sabent que trobaràs molta gent criticant tot el que passa, tu també ho fas.",notNow:"Al sortir la notificació corres a buscar un bon lloc a l'habitació per fer la foto diària."}]}},watch:{actions(e){e>=5&&this.$router.push({name:"info",params:{index:this.index,fomoLv:this.finalFomo}})}},computed:{finalFomo(){return this.fomoLv+this.fomo}},mounted(){setTimeout((()=>{0==this.index||2==this.index?this.showNot1=!0:this.showNot6=!0}),1e3*this.timeNot1),setTimeout((()=>{0==this.index||2==this.index?this.showNot2=!0:this.showNot7=!0}),1e3*this.timeNot2),setTimeout((()=>{0==this.index||2==this.index?this.showNot3=!0:this.showNot8=!0}),1e3*this.timeNot3),setTimeout((()=>{0==this.index||2==this.index?this.showNot4=!0:this.showNot9=!0}),1e3*this.timeNot4),setTimeout((()=>{0==this.index||2==this.index?this.showNot5=!0:this.showNot10=!0}),1e3*this.timeNot5)},methods:{fomoUp(){this.fomoLv=this.fomoLv+5},fomoDown(){this.fomoLv=this.fomoLv-5},changebool(e){this[e]=!this[e]},change2bool(e,o){this[e]=!this[e],this[o]=!this[o]},change3bool(e,o,t){this[e]=!this[e],this[o]=!this[o],this[t]=!this[t]},Action(){this.actions=this.actions+1}}};const Oo=(0,i.Z)(Io,[["render",Lo]]);var Ho=Oo;const Bo={class:"infoContainer"},$o={class:"wrapper"},Go={class:"emogiContainer"},Jo={key:0},Qo={key:1},Zo={key:2},Vo={key:3},Wo={key:4},Yo={key:5},Ko=(0,s._)("h3",null,"Aixi ho demostres en el emogi que envies:",-1),Xo={class:"questionContainer"},et=["for"],ot=["id","value","disabled"],tt={class:"wrapper"},at={class:"sabiesContainer"},st={style:{"text-align":"center"}},nt=(0,s._)("br",null,null,-1);function it(e,o,t,a,n,i){return(0,s.wg)(),(0,s.iD)("div",Bo,[(0,s._)("div",null,[(0,s._)("div",$o,[(0,s._)("div",Go,[(0,s._)("div",null,[e.fomoReceiver<=15?((0,s.wg)(),(0,s.iD)("h3",Jo,(0,v.zw)(e.feel[0]),1)):e.fomoReceiver<=45&&e.fomoReceiver>15?((0,s.wg)(),(0,s.iD)("h3",Qo,(0,v.zw)(e.feel[1]),1)):e.fomoReceiver<=75&&e.fomoReceiver>45?((0,s.wg)(),(0,s.iD)("h3",Zo,(0,v.zw)(e.feel[2]),1)):e.fomoReceiver<=105&&e.fomoReceiver>75?((0,s.wg)(),(0,s.iD)("h3",Vo,(0,v.zw)(e.feel[3]),1)):e.fomoReceiver<135&&e.fomoReceiver>105?((0,s.wg)(),(0,s.iD)("h3",Wo,(0,v.zw)(e.feel[4]),1)):e.fomoReceiver>=135?((0,s.wg)(),(0,s.iD)("h3",Yo,(0,v.zw)(e.feel[5]),1)):(0,s.kq)("",!0),Ko]),(0,s._)("div",{class:(0,v.C_)([{"img i1":e.fomoReceiver<=15},{"img i2":e.fomoReceiver<=45&&e.fomoReceiver>15},{"img i3":e.fomoReceiver<=75&&e.fomoReceiver>45},{"img i4":e.fomoReceiver<=105&&e.fomoReceiver>75},{"img i5":e.fomoReceiver<135&&e.fomoReceiver>105},{"img i6":e.fomoReceiver>=135}])},null,2)]),(0,s._)("div",Xo,[(0,s._)("h1",null,(0,v.zw)(e.questions[e.index]["question"]),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.questions[e.index]["answer"],((t,a)=>((0,s.wg)(),(0,s.iD)("label",{for:a,style:{"text-align":"center","align-items":"center","justify-content":"center",display:"block",outline:"solid 1px black",margin:"5%","margin-left":"20%",width:"60%","box-shadow":"2px 2px"},key:t.id,class:(0,v.C_)([{answer:" "==e.selectedAns},{"answer nonSelected":" "!=e.selectedAns&&e.selectedAns!=a&&a!=e.questions[e.index]["correct"]},{"answer Incorrect":e.selectedAns==a&&a!=e.questions[e.index]["correct"]},{"answer Correct":" "!=e.selectedAns&&a==e.questions[e.index]["correct"]}])},[(0,s._)("input",{style:{display:"none"},type:"radio",id:a,value:a,onClick:o[0]||(o[0]=o=>e.selected(o)),disabled:" "!=e.selectedAns},null,8,ot),(0,s.Uk)(" "+(0,v.zw)(t),1)],10,et)))),128))])]),(0,s._)("div",tt,[(0,s._)("div",at,[(0,s._)("h2",st,[(0,s.Uk)(" Sabies que..."),nt,(0,s.Uk)(" "+(0,v.zw)(e.sabies[e.index]),1)])])]),e.Answered&&e.index<2?((0,s.wg)(),(0,s.iD)("button",{key:0,class:"btn btn-primary d-flex align-items-center btn-lg btnInfo",onClick:o[1]||(o[1]=o=>e.incrementIndex())}," Passar la nit ")):(0,s.kq)("",!0),e.Answered&&2==e.index?((0,s.wg)(),(0,s.iD)("button",{key:1,class:"btn btn-primary d-flex align-items-center btn-lg btnInfo",onClick:o[2]||(o[2]=o=>e.incrementIndex())}," Resultats ")):(0,s.kq)("",!0)])])}var lt={data(){return{Answered:!1,index:this.$route.params.index,fomoReceiver:this.$route.params.fomoLv,selectedAns:" ",questions:[{question:"Què signifiquen les sigles de FoMo?",answer:{a:"Friends of Marco organization",b:"Fear of Missing out",c:"Fathers out, Mothers out",d:"Financial oportunity Missed out"},correct:"b"},{question:"El FoMo és:",answer:{a:"La sensació d'ansietat que es produeix al pensar que pots perdret un esdeveniment.",b:"La por a estar massa estona connectat.",c:"La ansietat que es genera al pensar que et pots perdre en un bosc.",d:"Cap de les anteriors."},correct:"a"},{question:"A quin grup de edat pot afectar més el FoMo?",answer:{a:"Gent gran",b:"Adults",c:"Adolescents",d:"Cap dels anterios"},correct:"c"}],sabies:["Gastem més de 6:30 hores diarament a internet a arreu el món. A Espanya, en particular, la mitja és una mica més baixa però supera les 5:30 hores.","Els sintomes del FoMo poden arribar a ser: ansietat, inquietud, constant comparació, poca energia i incapacitat per concentrar-se entre altres.","El JoMo (Joy of Missing out) es la satisfacció de perdret coses. Alguns habits com deixar de fer moltes tasques a la vegada, fer respiracions profundes poden ajudar a aumentar-lo"],feel:["Et sents ple de energia, feliç i amb moltes ganes de fer coses.","Et sents bastant bé i feliç.","Estas content al final del dia.","Estas una mica trist.","Estas bastant trist, notes que necessites mirar el mobil avans d'anar a dormir.","Estas molt trist. L'unica cosa que et ve de gust per calmar l'ansietat es estar més estona a les xarxes socials, per no perdre't cap notificació."]}},methods:{selected(e){this.selectedAns=e.target.value,this.Answered=!0},incrementIndex(){this.index++,this.$router.push({name:"intro",params:{index:this.index,fomo:this.fomoReceiver}})}}};const rt=(0,i.Z)(lt,[["render",it]]);var pt=rt;const ct=[{path:"/",name:"home",component:f},{path:"/intro/:fomo/:index/",name:"intro",component:I},{path:"/room/:fomo/:index/",name:"room",component:Ho},{path:"/info/:fomoLv/:index",name:"info",component:pt,props:!0}],ut=(0,c.p7)({history:(0,c.PO)("/TfgWeb/"),routes:ct});var mt=ut;t(5654);(0,a.ri)(p).use(mt).mount("#app")}},o={};function t(a){var s=o[a];if(void 0!==s)return s.exports;var n=o[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(o,a,s,n){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],s=e[c][1],n=e[c][2];for(var l=!0,r=0;r<a.length;r++)(!1&n||i>=n)&&Object.keys(t.O).every((function(e){return t.O[e](a[r])}))?a.splice(r--,1):(l=!1,n<i&&(i=n));if(l){e.splice(c--,1);var p=s();void 0!==p&&(o=p)}}return o}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]}}(),function(){t.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(o,{a:o}),o}}(),function(){t.d=function(e,o){for(var a in o)t.o(o,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:o[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/TfgWeb/"}(),function(){var e={143:0};t.O.j=function(o){return 0===e[o]};var o=function(o,a){var s,n,i=a[0],l=a[1],r=a[2],p=0;if(i.some((function(o){return 0!==e[o]}))){for(s in l)t.o(l,s)&&(t.m[s]=l[s]);if(r)var c=r(t)}for(o&&o(a);p<i.length;p++)n=i[p],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(c)},a=self["webpackChunkproves"]=self["webpackChunkproves"]||[];a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(2440)}));a=t.O(a)})();
//# sourceMappingURL=app.9a2072fa.js.map