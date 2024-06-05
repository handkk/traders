"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[956],{3956:(q,C,s)=>{s.r(C),s.d(C,{CustomerCollectionModule:()=>I});var u=s(6895),g=s(4575),l=s(433),h=s(5439),e=s(4650),v=s(9651),_=s(2566),S=s(1102),p=s(3679),c=s(6704),d=s(5635),f=s(8231),T=s(6616),Z=s(7044),x=s(1811),A=s(7096),O=s(5259),m=s(1949),y=s(6497),F=s(1634);function J(o,r){if(1&o&&e._UZ(0,"nz-option",28),2&o){const n=r.$implicit;e.Q6J("nzLabel",n.name)("nzValue",n)}}function M(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"span",30),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(2);return e.KtG(i.clearfield("notes"))}),e.qZA()}}function P(o,r){if(1&o&&e.YNc(0,M,1,0,"span",29),2&o){const n=e.oxw();e.Q6J("ngIf",n.validateForm.controls.notes.value)}}function b(o,r){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td")(8,"a",31),e.NdJ("nzOnConfirm",function(){const a=e.CHM(n).$implicit,z=e.oxw();return e.KtG(z.deleteConfirm(a._id))})("nzOnCancel",function(){e.CHM(n);const i=e.oxw();return e.KtG(i.cancel())}),e._UZ(9,"span",32),e.qZA()()()}if(2&o){const n=r.$implicit;e.xp6(2),e.Oqu(n.customer_name),e.xp6(2),e.Oqu(n.amount),e.xp6(2),e.Oqu(n.notes)}}const U=[{path:"",component:(()=>{class o{constructor(n,t,i,a,z){this.fb=n,this.el=t,this.message=i,this.mainService=a,this.router=z,this.customers=[{name:"Srinivas",id:"c1"},{name:"Sai",id:"c2"},{name:"Raju",id:"c3"},{name:"Chandu",id:"c4"}],this.vegetablesList=[{name:"Cabage",id:"v1"},{name:"Onion",id:"v2"},{name:"Potato",id:"v3"},{name:"Tomato",id:"v4"}],this.farmersList=[{name:"Teja",id:"f1"},{name:"Ravi",id:"f2"},{name:"Venkatesh",id:"f3"},{name:"Sai",id:"f4"}],this.date=new Date,this.defaultDate=new Date,this.collectionsData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name",sortOrder:"ascend"},{item:"Item",sortOrder:null},{rate:"Rate",sortOrder:null},{quantity:"quantity",sortOrder:null}],this.index=1,this.total=0,this.pageSize=10,this.loading=!1,sessionStorage.getItem("userinfo")||(sessionStorage.clear(),this.message.create("warning","User session expired please login"),this.router.navigateByUrl("/login"))}ngOnInit(){this.validateForm=this.fb.group({customer:[null,[l.kI.required]],amount:[null,[l.kI.required]],date:[this.date,[l.kI.required]],notes:[null]}),this.getCustomers(),this.getCollections()}getCollections(){const n={skip:this.index,limit:this.pageSize};setTimeout(()=>{document.getElementById("collectionCustomerInput")?.children[0].children[0]?.children[0].setAttribute("id","collectionCustIn"),document.getElementById("collectionCustIn")?.focus()},500),this.loading=!0,this.mainService.getCollections(n).subscribe(t=>{this.collectionsData=t.data,this.total=t.total,this.loading=!1},t=>{console.log("get customers err ",t),this.collectionsData=[],this.loading=!1,t&&t.error&&!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login"))})}getCustomers(){this.mainService.getCustomers({}).subscribe(t=>{this.customers=t.data},t=>{console.log("get customers err ",t),this.customers=[]})}clearfield(n){this.validateForm.controls[n].reset()}submitForm(){if(this.validateForm.valid){const n=h(this.validateForm.value.date).format("YYYY-MM-DDTHH:mm:ss.000");this.mainService.createCollection({customer_name:this.validateForm.value.customer.name,customer_id:this.validateForm.value.customer._id,notes:this.validateForm.value.notes,amount:this.validateForm.value.amount,collection_date:n}).subscribe(i=>{this.message.create("success","Collection added Successfully"),this.reset(),this.loading=!0,this.getCollections()},i=>{console.log("get customers err ",i),this.loading=!1,i&&i.error?!i.error.success&&1e3===i.error.code&&(this.message.create("error",i.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login")):this.getCollections()})}else Object.values(this.validateForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}reset(){this.validateForm.controls.amount.reset(),this.validateForm.controls.notes.reset()}onChange(n){}deleteConfirm(n){this.loading=!0,this.mainService.removeCollection(n).subscribe(t=>{console.log("deleteConfirm data: ",t),this.loading=!1,t&&t.success&&(this.message.create("success",t.message),this.getCollections())},t=>{console.log("delete collection err ",t),t&&t.error&&!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login")),this.loading=!1})}cancel(){}onPageSizeChange(n){this.pageSize=n,this.getCollections()}onPageChange(n){this.index=n,this.getCollections()}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(l.QS),e.Y36(e.SBq),e.Y36(v.dD),e.Y36(_.J),e.Y36(g.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-customer-collection"]],decls:60,vars:34,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","","appFocus","",3,"formGroup","ngSubmit"],["nzRequired","",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["formControlName","date",3,"ngModel","nzAllowClear","ngModelChange"],["nzShowSearch","","nzAllowClear","","formControlName","customer","id","collectionCustomerInput"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","amountCollection","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Add amount!",3,"nzSm","nzXs"],["id","amountCollection","formControlName","amount",3,"nzMin","nzStep"],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["basicTable",""],[4,"ngFor","ngForOf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],[3,"nzLabel","nzValue"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Collection","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Customer Collections"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return t.submitForm()}),e.TgZ(8,"nz-form-item")(9,"nz-form-label",6),e._uU(10,"Date"),e.qZA(),e.TgZ(11,"nz-form-control",7)(12,"nz-date-picker",8),e.NdJ("ngModelChange",function(a){return t.date=a})("ngModelChange",function(a){return t.onChange(a)}),e.qZA()()(),e.TgZ(13,"nz-form-item")(14,"nz-form-label",6)(15,"span"),e._uU(16,"Customer"),e.qZA()(),e.TgZ(17,"nz-form-control",7)(18,"nz-select",9),e.YNc(19,J,1,2,"nz-option",10),e.qZA()()(),e.TgZ(20,"nz-form-item")(21,"nz-form-label",11)(22,"span"),e._uU(23,"Amount"),e.qZA()(),e.TgZ(24,"nz-form-control",12),e._UZ(25,"nz-input-number",13),e.qZA()(),e.TgZ(26,"nz-form-item")(27,"nz-form-label",14),e._uU(28,"Notes"),e.qZA(),e.TgZ(29,"nz-form-control",15)(30,"nz-input-group",16),e._UZ(31,"textarea",17),e.qZA(),e.YNc(32,P,1,1,"ng-template",null,18,e.W1O),e.qZA()(),e.TgZ(34,"nz-form-item",19)(35,"nz-form-control",20)(36,"button",21),e._uU(37,"Create"),e.qZA(),e._uU(38,"\xa0 "),e.TgZ(39,"button",22),e.NdJ("click",function(){return t.reset()}),e._uU(40,"Reset"),e.qZA()()()()(),e.TgZ(41,"div",4)(42,"nz-table",23,24)(44,"thead")(45,"tr")(46,"th"),e._uU(47,"Customer Name"),e.qZA(),e.TgZ(48,"th"),e._uU(49,"Amount"),e.qZA(),e.TgZ(50,"th"),e._uU(51,"Notes"),e.qZA(),e.TgZ(52,"th"),e._uU(53,"Actions"),e.qZA()()(),e.TgZ(54,"tbody"),e.YNc(55,b,10,3,"tr",25),e.qZA()(),e.TgZ(56,"div",26),e._UZ(57,"br"),e.TgZ(58,"nz-pagination",27),e.NdJ("nzPageIndexChange",function(a){return t.onPageChange(a)})("nzPageSizeChange",function(a){return t.onPageSizeChange(a)}),e.qZA(),e._UZ(59,"br"),e.qZA()()()()),2&n){const i=e.MAs(33);e.xp6(7),e.Q6J("formGroup",t.validateForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("ngModel",t.date)("nzAllowClear",!1),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(2),e.Q6J("ngForOf",t.customers),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("nzMin",1)("nzStep",1),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",i),e.xp6(5),e.Q6J("nzSpan",14)("nzOffset",6),e.xp6(7),e.Q6J("nzData",t.collectionsData)("nzLoading",t.loading)("nzShowPagination",!1),e.xp6(13),e.Q6J("ngForOf",t.collectionsData),e.xp6(3),e.Q6J("nzPageIndex",t.index)("nzTotal",t.total)("nzShowSizeChanger",!0)("nzPageSize",t.pageSize)}},dependencies:[u.sg,u.O5,S.Ls,p.t3,p.SK,c.Lr,c.Nx,c.iK,c.Fd,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.Zp,d.gB,d.ke,f.Ip,f.Vq,T.ix,Z.w,x.dQ,A._V,O.uw,m.N8,m.Uo,m._C,m.Om,m.p0,m.$Z,y.JW,F.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}nz-date-picker[_ngcontent-%COMP%]{margin:0 8px 12px 0}input[type=number][_ngcontent-%COMP%]{border:1px solid #d9d9d9!important}input[type=number][_ngcontent-%COMP%]:focus{border:1px solid #40a9ff!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(U),g.Bz]}),o})();var Q=s(9912);let I=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,N,Q.m]}),o})()}}]);