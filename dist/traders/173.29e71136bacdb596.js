"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[173],{6173:(I,z,o)=>{o.r(z),o.d(z,{FarmerModule:()=>M});var u=o(6895),g=o(5263),m=o(433),n=o(4650),F=o(9651),v=o(529);let x=(()=>{class t{constructor(e){this.http=e,this.api_host="https://api.srisainathtraders.com/"}getFarmers(){const a=this.api_host+"farmers",s=sessionStorage.getItem("userinfo"),c=JSON.parse(s);return this.http.post(a,{userId:c.userId,sessionId:c.sessionId})}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(v.eN))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var S=o(1102),f=o(3679),l=o(6704),d=o(5635),h=o(8231),Z=o(6616),T=o(7044),_=o(1811),i=o(2587);function A(t,r){1&t&&(n.TgZ(0,"nz-select",27),n._UZ(1,"nz-option",28),n.qZA())}function N(t,r){if(1&t){const e=n.EpF();n.TgZ(0,"span",30),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(2);return n.KtG(s.clearfield("address"))}),n.qZA()}}function C(t,r){if(1&t&&n.YNc(0,N,1,0,"span",29),2&t){const e=n.oxw();n.Q6J("ngIf",e.validateForm.controls.address.value)}}function b(t,r){if(1&t){const e=n.EpF();n.TgZ(0,"span",30),n.NdJ("click",function(){n.CHM(e);const s=n.oxw(2);return n.KtG(s.clearfield("notes"))}),n.qZA()}}function J(t,r){if(1&t&&n.YNc(0,b,1,0,"span",29),2&t){const e=n.oxw();n.Q6J("ngIf",e.validateForm.controls.notes.value)}}function P(t,r){if(1&t&&(n.TgZ(0,"tr")(1,"td"),n._uU(2),n.qZA(),n.TgZ(3,"td"),n._uU(4),n.qZA(),n.TgZ(5,"td"),n._uU(6),n.qZA(),n.TgZ(7,"td"),n._uU(8),n.qZA()()),2&t){const e=r.$implicit;n.xp6(2),n.Oqu(e.name),n.xp6(2),n.Oqu(e.phone_number),n.xp6(2),n.Oqu(e.address),n.xp6(2),n.Oqu(e.notes)}}function O(t,r){if(1&t&&(n.TgZ(0,"nz-table",31,32)(2,"thead")(3,"tr")(4,"th"),n._uU(5,"Name"),n.qZA(),n.TgZ(6,"th"),n._uU(7,"Phone Number"),n.qZA(),n.TgZ(8,"th"),n._uU(9,"Address"),n.qZA(),n.TgZ(10,"th"),n._uU(11,"Notes"),n.qZA()()(),n.TgZ(12,"tbody"),n.YNc(13,P,9,4,"tr",33),n.qZA()()),2&t){const e=n.oxw();n.Q6J("nzData",e.customersData)("nzShowPagination",!0)("nzPageIndex",e.index)("nzTotal",e.total)("nzPageSize",e.pageSize)("nzFrontPagination",!1)("nzLoading",e.loading),n.xp6(13),n.Q6J("ngForOf",e.customersData)}}const y=[{path:"",component:(()=>{class t{constructor(e,a,s){this.fb=e,this.message=a,this.farmerService=s,this.customersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=9,this.pageSize=5,this.loading=!0}ngOnInit(){this.validateForm=this.fb.group({name:[null,[m.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],address:[null],notes:[null]}),this.farmerService.getFarmers().subscribe(e=>{console.log("get farmers ",e),this.customersData=e,this.loading=!1},e=>{console.log("get farmers err ",e),this.customersData=[],this.loading=!1})}clearfield(e){this.validateForm.controls[e].reset()}submitForm(){this.validateForm.valid?(console.log("submit",this.validateForm.value),this.customersData.push({name:this.validateForm.value.name,phoneNumber:this.validateForm.value.phoneNumber,address:this.validateForm.value.address,notes:this.validateForm.value.notes}),this.message.create("success",`${this.validateForm.value.name} farmer added Successfully`),this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset()):Object.values(this.validateForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(m.QS),n.Y36(F.dD),n.Y36(x))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-farmer"]],decls:44,vars:27,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","name","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","name","formControlName","name","placeholder","Name"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],[3,"nzData","nzShowPagination","nzPageIndex","nzTotal","nzPageSize","nzFrontPagination","nzLoading",4,"ngIf"],["nzShowSearch","","nzAllowClear","","formControlName","phoneNumberPrefix",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzShowPagination","nzPageIndex","nzTotal","nzPageSize","nzFrontPagination","nzLoading"],["basicTable",""],[4,"ngFor","ngForOf"]],template:function(e,a){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),n._uU(4,"Farmer"),n.qZA()()(),n.TgZ(5,"div",1)(6,"div",4)(7,"form",5),n.NdJ("ngSubmit",function(){return a.submitForm()}),n.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),n._uU(11,"Name"),n.qZA()(),n.TgZ(12,"nz-form-control",7),n._UZ(13,"input",8),n.qZA()(),n.TgZ(14,"nz-form-item")(15,"nz-form-label",9),n._uU(16,"Phone Number"),n.qZA(),n.TgZ(17,"nz-form-control",10)(18,"nz-input-group",11),n.YNc(19,A,2,0,"ng-template",null,12,n.W1O),n._UZ(21,"input",13),n.qZA()()(),n.TgZ(22,"nz-form-item")(23,"nz-form-label",14),n._uU(24,"Address"),n.qZA(),n.TgZ(25,"nz-form-control",15)(26,"nz-input-group",16),n._UZ(27,"textarea",17),n.qZA(),n.YNc(28,C,1,1,"ng-template",null,18,n.W1O),n.qZA()(),n.TgZ(30,"nz-form-item")(31,"nz-form-label",19),n._uU(32,"Notes"),n.qZA(),n.TgZ(33,"nz-form-control",20)(34,"nz-input-group",16),n._UZ(35,"textarea",21),n.qZA(),n.YNc(36,J,1,1,"ng-template",null,22,n.W1O),n.qZA()(),n.TgZ(38,"nz-form-item",23)(39,"nz-form-control",24)(40,"button",25),n._uU(41,"Submit"),n.qZA()()()()(),n.TgZ(42,"div",4),n.YNc(43,O,14,8,"nz-table",26),n.qZA()()()),2&e){const s=n.MAs(20),c=n.MAs(29),p=n.MAs(37);n.xp6(7),n.Q6J("formGroup",a.validateForm),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(3),n.Q6J("nzSm",14)("nzXs",24),n.xp6(3),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",a.validateForm.controls.phoneNumber),n.xp6(1),n.Q6J("nzAddOnBefore",s),n.xp6(3),n.Q6J("maxlength",10),n.xp6(2),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",a.validateForm.controls.address),n.xp6(1),n.Q6J("nzSuffix",c),n.xp6(5),n.Q6J("nzSm",6)("nzXs",24),n.xp6(2),n.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",a.validateForm.controls.notes),n.xp6(1),n.Q6J("nzSuffix",p),n.xp6(5),n.Q6J("nzSpan",14)("nzOffset",6),n.xp6(4),n.Q6J("ngIf",a.customersData)}},dependencies:[u.sg,u.O5,S.Ls,f.t3,f.SK,l.Lr,l.Nx,l.iK,l.Fd,m._Y,m.Fj,m.JJ,m.JL,m.nD,m.sg,m.u,d.Zp,d.gB,d.ke,h.Ip,h.Vq,Z.ix,T.w,_.dQ,i.N8,i.Uo,i._C,i.Om,i.p0,i.$Z],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}"]}),t})()}];let Q=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[g.Bz.forChild(y),g.Bz]}),t})();var U=o(4973);let M=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,Q,U.m]}),t})()}}]);