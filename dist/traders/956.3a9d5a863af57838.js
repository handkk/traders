"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[956],{3956:(q,g,i)=>{i.r(g),i.d(g,{CustomerCollectionModule:()=>Q});var u=i(6895),z=i(2564),l=i(433),f=i(5439),n=i(4650),h=i(9651),_=i(2566),v=i(1102),C=i(3679),c=i(6704),d=i(5635),p=i(8231),S=i(6616),T=i(7044),Z=i(1811),x=i(7096),A=i(5259),m=i(7635),O=i(6497),F=i(1634);function J(o,s){if(1&o&&n._UZ(0,"nz-option",28),2&o){const t=s.$implicit;n.Q6J("nzLabel",t.name)("nzValue",t)}}function M(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"span",30),n.NdJ("click",function(){n.CHM(t);const a=n.oxw(2);return n.KtG(a.clearfield("notes"))}),n.qZA()}}function P(o,s){if(1&o&&n.YNc(0,M,1,0,"span",29),2&o){const t=n.oxw();n.Q6J("ngIf",t.validateForm.controls.notes.value)}}function b(o,s){if(1&o){const t=n.EpF();n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td")(8,"a",31),n.NdJ("nzOnConfirm",function(){const r=n.CHM(t).$implicit,I=n.oxw();return n.KtG(I.deleteConfirm(r._id))})("nzOnCancel",function(){n.CHM(t);const a=n.oxw();return n.KtG(a.cancel())}),n._UZ(9,"span",32),n.qZA()()()}if(2&o){const t=s.$implicit;n.xp6(2),n.Oqu(t.customer_name),n.xp6(2),n.Oqu(t.amount),n.xp6(2),n.Oqu(t.notes)}}const y=[{path:"",component:(()=>{class o{constructor(t,e,a,r){this.fb=t,this.el=e,this.message=a,this.mainService=r,this.customers=[{name:"Srinivas",id:"c1"},{name:"Sai",id:"c2"},{name:"Raju",id:"c3"},{name:"Chandu",id:"c4"}],this.vegetablesList=[{name:"Cabage",id:"v1"},{name:"Onion",id:"v2"},{name:"Potato",id:"v3"},{name:"Tomato",id:"v4"}],this.farmersList=[{name:"Teja",id:"f1"},{name:"Ravi",id:"f2"},{name:"Venkatesh",id:"f3"},{name:"Sai",id:"f4"}],this.date=new Date,this.defaultDate=new Date,this.collectionsData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name",sortOrder:"ascend"},{item:"Item",sortOrder:null},{rate:"Rate",sortOrder:null},{quantity:"quantity",sortOrder:null}],this.index=1,this.total=0,this.pageSize=10,this.loading=!1}ngOnInit(){this.validateForm=this.fb.group({customer:[null,[l.kI.required]],amount:[null,[l.kI.required]],date:[this.date,[l.kI.required]],notes:[null]}),this.getCustomers(),this.getCollections()}getCollections(){const t={skip:this.index,limit:this.pageSize};setTimeout(()=>{document.getElementById("collectionCustomerInput")?.children[0].children[0]?.children[0].setAttribute("id","collectionCustIn"),document.getElementById("collectionCustIn")?.focus()},500),this.loading=!0,this.mainService.getCollections(t).subscribe(e=>{this.collectionsData=e.data,this.total=e.total,this.loading=!1},e=>{console.log("get customers err ",e),this.collectionsData=[],this.loading=!1})}getCustomers(){this.mainService.getCustomers({}).subscribe(e=>{this.customers=e.data},e=>{console.log("get customers err ",e),this.customers=[]})}clearfield(t){this.validateForm.controls[t].reset()}submitForm(){if(this.validateForm.valid){const t=f(this.validateForm.value.date).format("YYYY-MM-DDTHH:mm:ss.000");this.mainService.createCollection({customer_name:this.validateForm.value.customer.name,customer_id:this.validateForm.value.customer._id,notes:this.validateForm.value.notes,amount:this.validateForm.value.amount,collection_date:t}).subscribe(a=>{this.message.create("success","Collection added Successfully"),this.reset(),this.loading=!0,this.getCollections()},a=>{console.log("get customers err ",a),this.loading=!1,this.getCollections()})}else Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}reset(){this.validateForm.controls.amount.reset(),this.validateForm.controls.notes.reset()}onChange(t){}deleteConfirm(t){this.loading=!0,this.mainService.removeCollection(t).subscribe(e=>{this.loading=!1,e&&e.success&&(this.message.create("success",e.message),this.getCollections())},e=>{console.log("get customers err ",e),this.loading=!1})}cancel(){}onPageSizeChange(t){this.pageSize=t,this.getCollections()}onPageChange(t){this.index=t,this.getCollections()}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(l.QS),n.Y36(n.SBq),n.Y36(h.dD),n.Y36(_.J))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-customer-collection"]],decls:60,vars:34,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","","appFocus","",3,"formGroup","ngSubmit"],["nzRequired","",3,"nzSm","nzXs"],[3,"nzSm","nzXs"],["formControlName","date",3,"ngModel","nzAllowClear","ngModelChange"],["nzShowSearch","","nzAllowClear","","formControlName","customer","id","collectionCustomerInput"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","amountCollection","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Add amount!",3,"nzSm","nzXs"],["id","amountCollection","formControlName","amount",3,"nzMin","nzStep"],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["basicTable",""],[4,"ngFor","ngForOf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],[3,"nzLabel","nzValue"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Collection","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(t,e){if(1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),n._uU(4,"Customer Collections"),n.qZA()()(),n.TgZ(5,"div",1)(6,"div",4)(7,"form",5),n.NdJ("ngSubmit",function(){return e.submitForm()}),n.TgZ(8,"nz-form-item")(9,"nz-form-label",6),n._uU(10,"Date"),n.qZA(),n.TgZ(11,"nz-form-control",7)(12,"nz-date-picker",8),n.NdJ("ngModelChange",function(r){return e.date=r})("ngModelChange",function(r){return e.onChange(r)}),n.qZA()()(),n.TgZ(13,"nz-form-item")(14,"nz-form-label",6)(15,"span"),n._uU(16,"Customer"),n.qZA()(),n.TgZ(17,"nz-form-control",7)(18,"nz-select",9),n.YNc(19,J,1,2,"nz-option",10),n.qZA()()(),n.TgZ(20,"nz-form-item")(21,"nz-form-label",11)(22,"span"),n._uU(23,"Amount"),n.qZA()(),n.TgZ(24,"nz-form-control",12),n._UZ(25,"nz-input-number",13),n.qZA()(),n.TgZ(26,"nz-form-item")(27,"nz-form-label",14),n._uU(28,"Notes"),n.qZA(),n.TgZ(29,"nz-form-control",15)(30,"nz-input-group",16),n._UZ(31,"textarea",17),n.qZA(),n.YNc(32,P,1,1,"ng-template",null,18,n.W1O),n.qZA()(),n.TgZ(34,"nz-form-item",19)(35,"nz-form-control",20)(36,"button",21),n._uU(37,"Create"),n.qZA(),n._uU(38,"\xa0 "),n.TgZ(39,"button",22),n.NdJ("click",function(){return e.reset()}),n._uU(40,"Reset"),n.qZA()()()()(),n.TgZ(41,"div",4)(42,"nz-table",23,24)(44,"thead")(45,"tr")(46,"th"),n._uU(47,"Customer Name"),n.qZA(),n.TgZ(48,"th"),n._uU(49,"Amount"),n.qZA(),n.TgZ(50,"th"),n._uU(51,"Notes"),n.qZA(),n.TgZ(52,"th"),n._uU(53,"Actions"),n.qZA()()(),n.TgZ(54,"tbody"),n.YNc(55,b,10,3,"tr",25),n.qZA()(),n.TgZ(56,"div",26),n._UZ(57,"br"),n.TgZ(58,"nz-pagination",27),n.NdJ("nzPageIndexChange",function(r){return e.onPageChange(r)})("nzPageSizeChange",function(r){return e.onPageSizeChange(r)}),n.qZA(),n._UZ(59,"br"),n.qZA()()()()),2&t){const a=n.MAs(33);n.xp6(7),n.Q6J("formGroup",e.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("ngModel",e.date)("nzAllowClear",!1),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(3),n.Q6J("nzSm",14)("nzXs",24),n.xp6(2),n.Q6J("ngForOf",e.customers),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(3),n.Q6J("nzSm",14)("nzXs",24),n.xp6(1),n.Q6J("nzMin",1)("nzStep",1),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",e.validateForm.controls.notes),n.xp6(1),n.Q6J("nzSuffix",a),n.xp6(5),n.Q6J("nzSpan",14)("nzOffset",6),n.xp6(7),n.Q6J("nzData",e.collectionsData)("nzLoading",e.loading)("nzShowPagination",!1),n.xp6(13),n.Q6J("ngForOf",e.collectionsData),n.xp6(3),n.Q6J("nzPageIndex",e.index)("nzTotal",e.total)("nzShowSizeChanger",!0)("nzPageSize",e.pageSize)}},dependencies:[u.sg,u.O5,v.Ls,C.t3,C.SK,c.Lr,c.Nx,c.iK,c.Fd,l._Y,l.Fj,l.JJ,l.JL,l.sg,l.u,d.Zp,d.gB,d.ke,p.Ip,p.Vq,S.ix,T.w,Z.dQ,x._V,A.uw,m.N8,m.Uo,m._C,m.Om,m.p0,m.$Z,O.JW,F.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}nz-date-picker[_ngcontent-%COMP%]{margin:0 8px 12px 0}input[type=number][_ngcontent-%COMP%]{border:1px solid #d9d9d9!important}input[type=number][_ngcontent-%COMP%]:focus{border:1px solid #40a9ff!important}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),o})()}];let N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[z.Bz.forChild(y),z.Bz]}),o})();var U=i(4973);let Q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez,N,U.m]}),o})()}}]);