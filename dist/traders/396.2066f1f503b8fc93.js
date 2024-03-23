"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[396],{3396:(D,a,t)=>{t.r(a),t.d(a,{WelcomeModule:()=>P});var l=t(4575),n=t(4650),p=t(9651),h=t(2566),Z=t(6895),u=t(8284),c=t(3325),g=t(1102),z=t(7044),s=t(9562);function f(e,i){if(1&e&&(n.TgZ(0,"a",14),n._uU(1),n._UZ(2,"span",15),n.qZA()),2&e){const o=n.oxw(),r=n.MAs(7);n.Q6J("nzDropdownMenu",r),n.xp6(1),n.hij(" ",o.loggedInUser.name," ")}}const U=function(){return["customer"]},T=function(){return["bill"]},M=function(){return["customer-collection"]},C=function(){return["today_bills"]},A=function(){return["bill_print"]},v=function(){return["farmer"]},x=function(){return["vegetables"]},y=function(){return["user_settings"]},S=[{path:"",component:(()=>{class e{constructor(o,r,m){this.router=o,this.message=r,this.mainService=m,this.loggedInUser=this.mainService.getLoggedInUser(),this.loggedInUser||(sessionStorage.clear(),this.message.create("warning","User session expired please login"),this.router.navigateByUrl("/login"))}ngOnInit(){}logout(){this.loggedInUser?this.mainService.logout({userId:this.loggedInUser.userId,sessionId:this.loggedInUser.sessionId}).subscribe(r=>{sessionStorage.clear(),this.message.create("success","User logged out successfully"),this.router.navigateByUrl("/login")},r=>{console.log("login err ",r),this.message.create("error","invalid credentials"),sessionStorage.clear(),this.router.navigateByUrl("/login")}):(sessionStorage.clear(),this.router.navigateByUrl("/login"))}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(l.F0),n.Y36(p.dD),n.Y36(h.J))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-welcome"]],decls:63,vars:17,consts:[[1,"logo"],["src",".../../../../../assets/images/SST.jpg","alt","Sri Sainath Traders",1,"welcome-page-logo"],["nz-dropdown","","nzTrigger","click","class","logout",3,"nzDropdownMenu",4,"ngIf"],["menu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["nz-menu-item","",3,"click"],[1,"outer-content"],["nz-menu","","nzMode","horizontal"],["nz-submenu","","nzTitle","Customers"],[3,"routerLink"],["nz-submenu","","nzTitle","Farmer"],["nz-submenu","","nzTitle","Vegetables",3,"routerLink"],["nz-submenu","","nzTitle","Settings"],["nz-dropdown","","nzTrigger","click",1,"logout",3,"nzDropdownMenu"],["nz-icon","","nzType","user","nzTheme","outline"]],template:function(o,r){1&o&&(n.TgZ(0,"nz-layout")(1,"nz-header")(2,"div",0),n._UZ(3,"img",1),n._uU(4," Sri Sainath Traders "),n.YNc(5,f,3,2,"a",2),n.TgZ(6,"nz-dropdown-menu",null,3)(8,"ul",4)(9,"li",5),n._uU(10,"Profile"),n.qZA(),n.TgZ(11,"li",6),n.NdJ("click",function(){return r.logout()}),n._uU(12,"Logout"),n.qZA()()()()(),n.TgZ(13,"nz-content",7)(14,"ul",8)(15,"li",9)(16,"ul")(17,"li",5)(18,"a",10),n._uU(19,"New Customer"),n.qZA()(),n.TgZ(20,"li",5)(21,"a",10),n._uU(22,"Bill"),n.qZA()(),n.TgZ(23,"li",5)(24,"a",10),n._uU(25,"Collection"),n.qZA()(),n.TgZ(26,"li",5)(27,"a",10),n._uU(28,"Today Bills"),n.qZA()(),n.TgZ(29,"li",5),n._uU(30,"Statement"),n.qZA(),n.TgZ(31,"li",5),n._uU(32,"Balance Statement"),n.qZA(),n.TgZ(33,"li",5)(34,"a",10),n._uU(35,"Bill Print"),n.qZA()(),n.TgZ(36,"li",5),n._uU(37,"Customer Account"),n.qZA()()(),n.TgZ(38,"li",11)(39,"ul")(40,"li",5)(41,"a",10),n._uU(42,"New Farmer"),n.qZA()(),n.TgZ(43,"li",5),n._uU(44,"Bill"),n.qZA(),n.TgZ(45,"li",5),n._uU(46,"Hamali"),n.qZA(),n.TgZ(47,"li",5),n._uU(48,"Payment"),n.qZA(),n.TgZ(49,"li",5),n._uU(50,"Statement"),n.qZA()()(),n._UZ(51,"li",12),n.TgZ(52,"li",13)(53,"ul")(54,"li",5)(55,"a",10),n._uU(56,"User Accounts"),n.qZA()(),n.TgZ(57,"li",5),n._uU(58,"Account Details"),n.qZA(),n.TgZ(59,"li",5),n._uU(60,"Delete All"),n.qZA()()()(),n.TgZ(61,"div"),n._UZ(62,"router-outlet"),n.qZA()()()),2&o&&(n.xp6(5),n.Q6J("ngIf",r.loggedInUser),n.xp6(13),n.Q6J("routerLink",n.DdM(9,U)),n.xp6(3),n.Q6J("routerLink",n.DdM(10,T)),n.xp6(3),n.Q6J("routerLink",n.DdM(11,M)),n.xp6(3),n.Q6J("routerLink",n.DdM(12,C)),n.xp6(7),n.Q6J("routerLink",n.DdM(13,A)),n.xp6(7),n.Q6J("routerLink",n.DdM(14,v)),n.xp6(10),n.Q6J("routerLink",n.DdM(15,x)),n.xp6(4),n.Q6J("routerLink",n.DdM(16,y)))},dependencies:[l.lC,l.rH,Z.O5,u.hw,u.E8,u.OK,c.wO,c.r9,c.rY,g.Ls,z.w,s.cm,s.Ws,s.RR],styles:[".logo[_ngcontent-%COMP%]{width:100%;background:transparent;float:left;color:#fff}.header-menu[_ngcontent-%COMP%]{line-height:64px}.outer-content[_ngcontent-%COMP%]{padding:0 50px}nz-breadcrumb[_ngcontent-%COMP%]{margin:16px 0}.inner-layout[_ngcontent-%COMP%]{padding:24px 0}.sider-menu[_ngcontent-%COMP%]{height:100%}.inner-content[_ngcontent-%COMP%]{padding:0 24px;min-height:280px}nz-footer[_ngcontent-%COMP%]{text-align:center;position:absolute;width:100%;bottom:0;right:0}a.logout[_ngcontent-%COMP%]{float:right!important;color:#fff!important}.welcome-page-logo[_ngcontent-%COMP%]{width:50px;height:auto;margin-right:10px;border-radius:20px}@media print{nz-header[_ngcontent-%COMP%]{display:none}ul[_ngcontent-%COMP%]{display:none}}"]}),e})(),loadChildren:()=>t.e(288).then(t.bind(t,8288)).then(e=>e.CustomerModule)}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(S),l.Bz]}),e})();var d=t(9912);let P=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[O,d.m,g.PV,s.b1,d.m]}),e})()}}]);