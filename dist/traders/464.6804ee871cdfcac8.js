"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[464],{7464:(w,d,o)=>{o.r(d),o.d(d,{LandingModule:()=>I});var r=o(6895),g=o(4575),n=o(4650),u=o(9651),h=o(2566),l=o(8284),m=o(3325),f=o(1102),p=o(3679),z=o(7044),x=o(1971),a=o(9562);function C(t,s){if(1&t&&(n.TgZ(0,"a",11),n._uU(1),n._UZ(2,"span",12),n.qZA()),2&t){const e=n.oxw(),i=n.MAs(7);n.Q6J("nzDropdownMenu",i),n.xp6(1),n.hij(" ",e.loggedInUser.name," ")}}function v(t,s){if(1&t&&n._UZ(0,"img",18),2&t){const e=n.oxw().$implicit;n.s9C("alt",e.name)}}function _(t,s){if(1&t&&n._UZ(0,"img",19),2&t){const e=n.oxw().$implicit;n.s9C("alt",e.name)}}function y(t,s){if(1&t&&n._UZ(0,"img",20),2&t){const e=n.oxw().$implicit;n.s9C("alt",e.name)}}function M(t,s){if(1&t){const e=n.EpF();n.TgZ(0,"div",13),n.NdJ("click",function(){const O=n.CHM(e).$implicit,S=n.oxw();return n.KtG(S.selectCard(O))}),n.TgZ(1,"nz-card",14)(2,"div"),n.YNc(3,v,1,1,"img",15),n.YNc(4,_,1,1,"img",16),n.YNc(5,y,1,1,"img",17),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA()()()}if(2&t){const e=s.$implicit;n.Q6J("nzSpan",8),n.xp6(3),n.Q6J("ngIf","Bills"===e.name),n.xp6(1),n.Q6J("ngIf","Customers"===e.name),n.xp6(1),n.Q6J("ngIf","Collections"===e.name),n.xp6(2),n.Oqu(e.name)}}const U=[{path:"",component:(()=>{class t{constructor(e,i,c){this.router=e,this.message=i,this.mainService=c,this.cardsList=[{name:"Customers",link:"customer"},{name:"Bills",link:"bill"},{name:"Collections",link:"customer-collection"}],this.loggedInUser=this.mainService.getLoggedInUser(),this.loggedInUser||(sessionStorage.clear(),this.message.create("warning","User session expired please login"),this.router.navigateByUrl("/login"))}ngOnInit(){this.mainService.spinning.emit(!1)}logout(){this.loggedInUser?this.mainService.logout({userId:this.loggedInUser.userId,sessionId:this.loggedInUser.sessionId}).subscribe(i=>{sessionStorage.clear(),this.message.create("success","User logged out successfully"),this.router.navigateByUrl("/login")},i=>{console.log("login err ",i),this.message.create("error","invalid credentials"),sessionStorage.clear(),this.router.navigateByUrl("/login")}):(sessionStorage.clear(),this.router.navigateByUrl("/login"))}selectCard(e){this.router.navigateByUrl("/"+e.link)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(g.F0),n.Y36(u.dD),n.Y36(h.J))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-landing"]],decls:17,vars:3,consts:[[1,"logo"],["src",".../../../../../assets/images/SST.jpg","alt","Sri Sainath Traders",1,"welcome-page-logo"],["nz-dropdown","","nzTrigger","click","class","logout",3,"nzDropdownMenu",4,"ngIf"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["nz-menu-item","",3,"click"],[1,"outer-content"],[2,"padding","30px","height","300px","position","relative","top","100px"],["nz-row","","nzJustify","center","nzAlign","middle",3,"nzGutter"],["nz-col","","class","padding-15",3,"nzSpan","click",4,"ngFor","ngForOf"],["nz-dropdown","","nzTrigger","click",1,"logout",3,"nzDropdownMenu"],["nz-icon","","nzType","user","nzTheme","outline"],["nz-col","",1,"padding-15",3,"nzSpan","click"],["nzHoverable","true",1,"card-shadow","text-center","border-radius-10"],["src","../../../assets/images/bill_8685644.png","class","card-image-style",3,"alt",4,"ngIf"],["src","../../../assets/images/group_121704.png","class","card-image-style",3,"alt",4,"ngIf"],["src","../../../assets/images/money_4199686.png","class","card-image-style",3,"alt",4,"ngIf"],["src","../../../assets/images/bill_8685644.png",1,"card-image-style",3,"alt"],["src","../../../assets/images/group_121704.png",1,"card-image-style",3,"alt"],["src","../../../assets/images/money_4199686.png",1,"card-image-style",3,"alt"]],template:function(e,i){1&e&&(n.TgZ(0,"nz-layout")(1,"nz-header")(2,"div",0),n._UZ(3,"img",1),n._uU(4," Sri Sainath Traders "),n.YNc(5,C,3,2,"a",2),n.TgZ(6,"nz-dropdown-menu",null,3)(8,"ul",4)(9,"li",5),n._uU(10,"Profile"),n.qZA(),n.TgZ(11,"li",6),n.NdJ("click",function(){return i.logout()}),n._uU(12,"Logout"),n.qZA()()()()(),n.TgZ(13,"nz-content",7)(14,"div",8)(15,"div",9),n.YNc(16,M,8,5,"div",10),n.qZA()()()()),2&e&&(n.xp6(5),n.Q6J("ngIf",i.loggedInUser),n.xp6(10),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("ngForOf",i.cardsList))},dependencies:[r.sg,r.O5,l.hw,l.E8,l.OK,m.wO,m.r9,f.Ls,p.t3,p.SK,z.w,x.bd,a.cm,a.Ws,a.RR],styles:[".logo[_ngcontent-%COMP%]{width:100%;background:transparent;float:left;color:#fff}.header-menu[_ngcontent-%COMP%]{line-height:64px}.outer-content[_ngcontent-%COMP%]{padding:0 50px}nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}.inner-layout[_ngcontent-%COMP%]{padding:24px 0}.sider-menu[_ngcontent-%COMP%]{height:100%}.inner-content[_ngcontent-%COMP%]{padding:0 24px;min-height:280px}nz-footer[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;bottom:0;right:0}a.logout[_ngcontent-%COMP%]{float:right!important;color:#fff!important}.welcome-page-logo[_ngcontent-%COMP%]{width:50px;height:auto;margin-right:10px;border-radius:20px}@media print{nz-header[_ngcontent-%COMP%]{display:none}ul[_ngcontent-%COMP%]{display:none}}.card-shadow[_ngcontent-%COMP%]{box-shadow:0 4px 8px #0003,0 6px 20px #00000030;height:250px;font-size:25px;font-weight:700;align-content:space-around;background-color:#559043;border-color:#559043;color:#001529}.card-image-style[_ngcontent-%COMP%]{width:50px}"]}),t})()}];let L=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(U),g.Bz]}),t})();var T=o(9912);let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.ez,L,T.m,a.b1]}),t})()}}]);