"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[396],{3396:(D,m,t)=>{t.r(m),t.d(m,{WelcomeModule:()=>P});var l=t(4575),n=t(4650),f=t(9651),h=t(2566),Z=t(6895),a=t(8284),c=t(3325),d=t(1102),z=t(7044),s=t(9562);function T(e,i){if(1&e&&(n.TgZ(0,"a",14),n._uU(1),n._UZ(2,"span",15),n.qZA()),2&e){const o=n.oxw(),r=n.MAs(7);n.Q6J("nzDropdownMenu",r),n.xp6(1),n.hij(" ",o.loggedInUser.name," ")}}const M=function(){return["customer"]},U=function(){return["bill"]},C=function(){return["customer-collection"]},A=function(){return["today_bills"]},v=function(){return["bill_print"]},x=function(){return["farmer"]},y=function(){return["vegetables"]},S=function(){return["user_settings"]},O=[{path:"",component:(()=>{class e{constructor(o,r,u){this.router=o,this.message=r,this.mainService=u,sessionStorage.getItem("userinfo")||(sessionStorage.clear(),this.message.create("warning","User session expired please login"),this.router.navigateByUrl("/login"))}ngOnInit(){let o=sessionStorage.getItem("userinfo");const r=JSON.parse(o);this.loggedInUser=r}logout(){let o=sessionStorage.getItem("userinfo");const r=JSON.parse(o);r?this.mainService.logout({userId:r.userId,sessionId:r.sessionId}).subscribe(g=>{sessionStorage.clear(),this.message.create("success","User logged out successfully"),this.router.navigateByUrl("/login")},g=>{console.log("login err ",g),this.message.create("error","invalid credentials"),sessionStorage.clear(),this.router.navigateByUrl("/login")}):(sessionStorage.clear(),this.router.navigateByUrl("/login"))}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.F0),n.Y36(f.dD),n.Y36(h.J))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-welcome"]],decls:61,vars:17,consts:[[1,"logo"],["src",".../../../../../assets/images/SST.jpg","alt","Sri Sainath Traders",1,"welcome-page-logo"],["nz-dropdown","","nzTrigger","click","class","logout",3,"nzDropdownMenu",4,"ngIf"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["nz-menu-item","",3,"click"],[1,"outer-content"],["nz-menu","","nzMode","horizontal"],["nz-submenu","","nzTitle","Customers"],[3,"routerLink"],["nz-submenu","","nzTitle","Farmer"],["nz-submenu","","nzTitle","Vegetables",3,"routerLink"],["nz-submenu","","nzTitle","Settings"],["nz-dropdown","","nzTrigger","click",1,"logout",3,"nzDropdownMenu"],["nz-icon","","nzType","user","nzTheme","outline"]],template:function(o,r){1&o&&(n.TgZ(0,"nz-layout")(1,"nz-header")(2,"div",0),n._UZ(3,"img",1),n._uU(4," Sri Sainath Traders "),n.YNc(5,T,3,2,"a",2),n.TgZ(6,"nz-dropdown-menu",null,3)(8,"ul",4)(9,"li",5),n._uU(10,"Profile"),n.qZA(),n.TgZ(11,"li",6),n.NdJ("click",function(){return r.logout()}),n._uU(12,"Logout"),n.qZA()()()()(),n.TgZ(13,"nz-content",7)(14,"ul",8)(15,"li",9)(16,"ul")(17,"li",5)(18,"a",10),n._uU(19,"New Customer"),n.qZA()(),n.TgZ(20,"li",5)(21,"a",10),n._uU(22,"Bill"),n.qZA()(),n.TgZ(23,"li",5)(24,"a",10),n._uU(25,"Collection"),n.qZA()(),n.TgZ(26,"li",5)(27,"a",10),n._uU(28,"Today Bills"),n.qZA()(),n.TgZ(29,"li",5),n._uU(30,"Statement"),n.qZA(),n.TgZ(31,"li",5)(32,"a",10),n._uU(33,"Bill Print"),n.qZA()(),n.TgZ(34,"li",5),n._uU(35,"Customer Account"),n.qZA()()(),n.TgZ(36,"li",11)(37,"ul")(38,"li",5)(39,"a",10),n._uU(40,"New Farmer"),n.qZA()(),n.TgZ(41,"li",5),n._uU(42,"Bill"),n.qZA(),n.TgZ(43,"li",5),n._uU(44,"Hamali"),n.qZA(),n.TgZ(45,"li",5),n._uU(46,"Payment"),n.qZA(),n.TgZ(47,"li",5),n._uU(48,"Statement"),n.qZA()()(),n._UZ(49,"li",12),n.TgZ(50,"li",13)(51,"ul")(52,"li",5)(53,"a",10),n._uU(54,"User Accounts"),n.qZA()(),n.TgZ(55,"li",5),n._uU(56,"Account Details"),n.qZA(),n.TgZ(57,"li",5),n._uU(58,"Delete All"),n.qZA()()()(),n.TgZ(59,"div"),n._UZ(60,"router-outlet"),n.qZA()()()),2&o&&(n.xp6(5),n.Q6J("ngIf",r.loggedInUser),n.xp6(13),n.Q6J("routerLink",n.DdM(9,M)),n.xp6(3),n.Q6J("routerLink",n.DdM(10,U)),n.xp6(3),n.Q6J("routerLink",n.DdM(11,C)),n.xp6(3),n.Q6J("routerLink",n.DdM(12,A)),n.xp6(5),n.Q6J("routerLink",n.DdM(13,v)),n.xp6(7),n.Q6J("routerLink",n.DdM(14,x)),n.xp6(10),n.Q6J("routerLink",n.DdM(15,y)),n.xp6(4),n.Q6J("routerLink",n.DdM(16,S)))},dependencies:[l.lC,l.rH,Z.O5,a.hw,a.E8,a.OK,c.wO,c.r9,c.rY,d.Ls,z.w,s.cm,s.Ws,s.RR],styles:[".logo[_ngcontent-%COMP%]{width:100%;background:transparent;float:left;color:#fff}.header-menu[_ngcontent-%COMP%]{line-height:64px}.outer-content[_ngcontent-%COMP%]{padding:0 50px}nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}.inner-layout[_ngcontent-%COMP%]{padding:24px 0}.sider-menu[_ngcontent-%COMP%]{height:100%}.inner-content[_ngcontent-%COMP%]{padding:0 24px;min-height:280px}nz-footer[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;bottom:0;right:0}a.logout[_ngcontent-%COMP%]{float:right!important;color:#fff!important}.welcome-page-logo[_ngcontent-%COMP%]{width:50px;height:auto;margin-right:10px;border-radius:20px}@media print{nz-header[_ngcontent-%COMP%]{display:none}ul[_ngcontent-%COMP%]{display:none}}"]}),e})(),loadChildren:()=>t.e(288).then(t.bind(t,8288)).then(e=>e.CustomerModule)}];let J=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(O),l.Bz]}),e})();var p=t(9912);let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[J,p.m,d.PV,s.b1,p.m]}),e})()}}]);