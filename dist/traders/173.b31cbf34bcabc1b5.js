"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[173],{6173:(V,f,o)=>{o.r(f),o.d(f,{FarmerModule:()=>Y});var p=o(6895),h=o(2564),m=o(433),_=o(4327),d=o(574),e=o(4650),x=o(9651),v=o(529);let T=(()=>{class n{constructor(t){this.http=t,this.api_host="https://api.srisainathtraders.com/"}getFarmers(){const r=this.api_host+"farmers",a=sessionStorage.getItem("userinfo"),i=JSON.parse(a);return this.http.post(r,{userId:i.userId,sessionId:i.sessionId})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(v.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var A=o(2566),S=o(7570),Z=o(1102),g=o(3679),u=o(6704),z=o(5635),F=o(8231),C=o(6616),N=o(7044),b=o(1811),c=o(2587),y=o(6497);function J(n,s){1&n&&(e.TgZ(0,"nz-select",30),e._UZ(1,"nz-option",31),e.qZA())}function O(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"span",33),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.clearfield("address"))}),e.qZA()}}function P(n,s){if(1&n&&e.YNc(0,O,1,0,"span",32),2&n){const t=e.oxw();e.Q6J("ngIf",t.validateForm.controls.address.value)}}function E(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"span",33),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.clearfield("notes"))}),e.qZA()}}function U(n,s){if(1&n&&e.YNc(0,E,1,0,"span",32),2&n){const t=e.oxw();e.Q6J("ngIf",t.validateForm.controls.notes.value)}}function I(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"a",37),e.NdJ("click",function(){const i=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.editFarmer(i))}),e._UZ(11,"span",38),e.qZA(),e._uU(12,"\xa0\xa0 "),e.TgZ(13,"a",39),e.NdJ("nzOnConfirm",function(){const i=e.CHM(t).$implicit,l=e.oxw(2);return e.KtG(l.confirm(i._id))})("nzOnCancel",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.cancel())}),e._UZ(14,"span",40),e.qZA()()()}if(2&n){const t=s.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.phone_number),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.Oqu(t.notes)}}function M(n,s){if(1&n&&(e.TgZ(0,"nz-table",34,35)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Phone Number"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Address"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Notes"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Actions"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,I,15,4,"tr",36),e.qZA()()),2&n){const t=e.oxw();e.Q6J("nzData",t.farmersData)("nzShowPagination",!0)("nzPageIndex",t.index)("nzTotal",t.total)("nzPageSize",t.pageSize)("nzFrontPagination",!1)("nzLoading",t.loading),e.xp6(15),e.Q6J("ngForOf",t.farmersData)}}const q=[{path:"",component:(()=>{class n{constructor(t,r,a,i){this.fb=t,this.message=r,this.farmerService=a,this.mainService=i,this.farmersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=9,this.pageSize=5,this.loading=!0,this.edit=!1,this.farmerId=""}ngOnInit(){this.validateForm=this.fb.group({name:[null,[m.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],address:[null],notes:[null]}),this.getAllFarmers()}getAllFarmers(){this.loading=!0,document.getElementById("farmerName")?.focus(),this.farmerService.getFarmers().subscribe(t=>{this.farmersData=t,this.loading=!1},t=>{console.log("get farmers err ",t),this.farmersData=[],this.loading=!1})}clearfield(t){this.validateForm.controls[t].reset()}submitForm(){if(this.validateForm.valid){const t={name:this.validateForm.value.name,phone_number:this.validateForm.value.phoneNumber?parseInt(this.validateForm.value.phoneNumber):null,address:this.validateForm.value.address,notes:this.validateForm.value.notes};this.edit?this.mainService.updateFarmer(this.farmerId,t).subscribe(r=>{this.message.create("success",`${this.validateForm.value.name} farmer updated Successfully`),this.reset(),this.loading=!0,this.edit=!1,this.getAllFarmers()},r=>{console.log("get customers err ",r),this.loading=!1,this.getAllFarmers()}):this.mainService.createFarmer(t).subscribe(r=>{this.message.create("success",`${this.validateForm.value.name} farmer added Successfully`),this.reset(),this.loading=!0,this.getAllFarmers()},r=>{console.log("get customers err ",r),this.loading=!1,this.getAllFarmers()})}else Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}editFarmer(t){this.edit=!0,this.farmerId=t._id,this.validateForm.controls.phoneNumber.setValue(t.phone_number),this.validateForm.controls.name.setValue(t.name),this.validateForm.controls.notes.setValue(t.notes),this.validateForm.controls.address.setValue(t.address)}confirm(t){this.mainService.removeFarmer(t).subscribe(r=>{this.loading=!1,r&&r.success&&(this.message.create("success",r.message),this.getAllFarmers())},r=>{console.log("get customers err ",r),this.loading=!1})}cancel(){}exportJsonAsExcelFile(t,r){const i={Sheets:{data:d.P6.json_to_sheet(t)},SheetNames:["data"]},l=d.cW(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(l,r)}exportTableAsExcelFile(t,r){const i={Sheets:{data:d.P6.table_to_sheet(t)},SheetNames:["data"]},l=d.cW(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(l,r)}saveAsExcelFile(t,r){const a=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});_.saveAs(a,r+(new Date).getTime()+".xlsx")}exportToExcel(){let t=[];this.farmersData.forEach(r=>{t.push({Name:r.name,"Phone Number":r.phone_number,Address:r.address,Notes:r.notes})}),this.exportJsonAsExcelFile(t,"farmers")}reset(){this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset(),this.edit=!1}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.QS),e.Y36(x.dD),e.Y36(T),e.Y36(A.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-farmer"]],decls:50,vars:28,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","farmerName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","farmerName","formControlName","name","placeholder","Name"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","default",3,"click"],["nz-button","","nzType","primary"],["nz-tooltip","","nzTooltipTitle","Export as Excel",3,"click"],["nz-icon","","nzType","file-excel","nzTheme","fill"],[3,"nzData","nzShowPagination","nzPageIndex","nzTotal","nzPageSize","nzFrontPagination","nzLoading",4,"ngIf"],["nzShowSearch","","nzAllowClear","","formControlName","phoneNumberPrefix",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzShowPagination","nzPageIndex","nzTotal","nzPageSize","nzFrontPagination","nzLoading"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Farmer","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(t,r){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Farmer"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return r.submitForm()}),e.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),e._uU(11,"Name"),e.qZA()(),e.TgZ(12,"nz-form-control",7),e._UZ(13,"input",8),e.qZA()(),e.TgZ(14,"nz-form-item")(15,"nz-form-label",9),e._uU(16,"Phone Number"),e.qZA(),e.TgZ(17,"nz-form-control",10)(18,"nz-input-group",11),e.YNc(19,J,2,0,"ng-template",null,12,e.W1O),e._UZ(21,"input",13),e.qZA()()(),e.TgZ(22,"nz-form-item")(23,"nz-form-label",14),e._uU(24,"Address"),e.qZA(),e.TgZ(25,"nz-form-control",15)(26,"nz-input-group",16),e._UZ(27,"textarea",17),e.qZA(),e.YNc(28,P,1,1,"ng-template",null,18,e.W1O),e.qZA()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",19),e._uU(32,"Notes"),e.qZA(),e.TgZ(33,"nz-form-control",20)(34,"nz-input-group",16),e._UZ(35,"textarea",21),e.qZA(),e.YNc(36,U,1,1,"ng-template",null,22,e.W1O),e.qZA()(),e.TgZ(38,"nz-form-item",23)(39,"nz-form-control",24)(40,"button",25),e.NdJ("click",function(){return r.reset()}),e._uU(41,"Reset"),e.qZA(),e._uU(42,"\xa0 "),e.TgZ(43,"button",26),e._uU(44),e.qZA()()()()(),e.TgZ(45,"div",4)(46,"div")(47,"a",27),e.NdJ("click",function(){return r.exportToExcel()}),e._UZ(48,"span",28),e.qZA()(),e.YNc(49,M,16,8,"nz-table",29),e.qZA()()()),2&t){const a=e.MAs(20),i=e.MAs(29),l=e.MAs(37);e.xp6(7),e.Q6J("formGroup",r.validateForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",r.validateForm.controls.phoneNumber),e.xp6(1),e.Q6J("nzAddOnBefore",a),e.xp6(3),e.Q6J("maxlength",10),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",r.validateForm.controls.address),e.xp6(1),e.Q6J("nzSuffix",i),e.xp6(5),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",r.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",l),e.xp6(5),e.Q6J("nzSpan",14)("nzOffset",6),e.xp6(5),e.Oqu(r.edit?"Update":"Create"),e.xp6(5),e.Q6J("ngIf",r.farmersData)}},dependencies:[p.sg,p.O5,S.SY,Z.Ls,g.t3,g.SK,u.Lr,u.Nx,u.iK,u.Fd,m._Y,m.Fj,m.JJ,m.JL,m.nD,m.sg,m.u,z.Zp,z.gB,z.ke,F.Ip,F.Vq,C.ix,N.w,b.dQ,c.N8,c.Uo,c._C,c.Om,c.p0,c.$Z,y.JW],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}"]}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(q),h.Bz]}),n})();var D=o(4973);let Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,w,D.m]}),n})()}}]);