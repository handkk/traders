"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[918],{1918:(B,g,o)=>{o.r(g),o.d(g,{UserSettingsModule:()=>Y});var p=o(6895),h=o(2564),l=o(433),S=o(4327),d=o(574),e=o(4650),x=o(9651),T=o(2566),Z=o(7570),v=o(1102),f=o(3679),c=o(6704),z=o(5635),_=o(8231),U=o(6616),A=o(7044),C=o(1811),u=o(7635),F=o(6497),N=o(1634);function b(s,a){1&s&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label",36)(2,"span"),e._uU(3,"Username"),e.qZA()(),e.TgZ(4,"nz-form-control",37),e._UZ(5,"input",38),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("disabled",!0))}function J(s,a){1&s&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label",39)(2,"span"),e._uU(3,"Password"),e.qZA()(),e.TgZ(4,"nz-form-control",40),e._UZ(5,"input",41),e.qZA()()),2&s&&(e.xp6(1),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("disabled",!0))}function P(s,a){1&s&&(e.TgZ(0,"nz-select",42),e._UZ(1,"nz-option",43),e.qZA())}function y(s,a){if(1&s){const n=e.EpF();e.TgZ(0,"span",45),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.clearfield("address"))}),e.qZA()}}function E(s,a){if(1&s&&e.YNc(0,y,1,0,"span",44),2&s){const n=e.oxw();e.Q6J("ngIf",n.validateForm.controls.address.value)}}function O(s,a){if(1&s){const n=e.EpF();e.TgZ(0,"span",45),e.NdJ("click",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.clearfield("notes"))}),e.qZA()}}function Q(s,a){if(1&s&&e.YNc(0,O,1,0,"span",44),2&s){const n=e.oxw();e.Q6J("ngIf",n.validateForm.controls.notes.value)}}function X(s,a){if(1&s){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"a",49),e.NdJ("click",function(){const i=e.CHM(n).$implicit,m=e.oxw(2);return e.KtG(m.editUser(i))}),e._UZ(13,"span",50),e.qZA(),e._uU(14,"\xa0\xa0 "),e.TgZ(15,"a",51),e.NdJ("nzOnConfirm",function(){const i=e.CHM(n).$implicit,m=e.oxw(2);return e.KtG(m.confirm(i._id))})("nzOnCancel",function(){e.CHM(n);const r=e.oxw(2);return e.KtG(r.cancel())}),e._UZ(16,"span",52),e.qZA()()()}if(2&s){const n=a.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.phone_number),e.xp6(2),e.Oqu(n.email),e.xp6(2),e.Oqu(n.address),e.xp6(2),e.Oqu(n.notes)}}function q(s,a){if(1&s&&(e.TgZ(0,"nz-table",46,47)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Phone Number"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Email"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Address"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Notes"),e.qZA(),e.TgZ(14,"th"),e._uU(15,"Actions"),e.qZA()()(),e.TgZ(16,"tbody"),e.YNc(17,X,17,5,"tr",48),e.qZA()()),2&s){const n=e.oxw();e.Q6J("nzData",n.usersData)("nzLoading",n.loading)("nzShowPagination",!1),e.xp6(17),e.Q6J("ngForOf",n.usersData)}}const M=[{path:"",component:(()=>{class s{constructor(n,t,r){this.fb=n,this.message=t,this.mainService=r,this.usersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=0,this.pageSize=10,this.loading=!0,this.edit=!1,this.userId=""}ngOnInit(){this.validateForm=this.fb.group({name:[null,[l.kI.required]],username:[null,[l.kI.required]],password:[null,[l.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],email:[null],address:[null],notes:[null]}),this.getAllUsers()}getAllUsers(){this.loading=!0,document.getElementById("userFullName")?.focus(),this.mainService.getAllUsers().subscribe(n=>{this.usersData=n.data,this.total=n.total,this.loading=!1},n=>{console.log("get users err ",n),this.usersData=[],this.loading=!1})}clearfield(n){this.validateForm.controls[n].reset()}submitForm(){if(this.validateForm.valid){let n={name:this.validateForm.value.name,phone_number:this.validateForm.value.phoneNumber?parseInt(this.validateForm.value.phoneNumber):null,address:this.validateForm.value.address,notes:this.validateForm.value.notes,email:this.validateForm.value.email};this.edit||(n.password=this.validateForm.value.password,n.username=this.validateForm.value.username),this.edit?this.mainService.updateUser(this.userId,n).subscribe(t=>{this.message.create("success",`${this.validateForm.value.name} user updated Successfully`),this.reset(),this.loading=!0,this.edit=!1,this.getAllUsers()},t=>{console.log("get customers err ",t),this.loading=!1,this.getAllUsers()}):this.mainService.createUser(n).subscribe(t=>{this.message.create("success","User created successfully"),this.reset(),this.loading=!0,this.getAllUsers()},t=>{console.log("get customers err ",t),this.loading=!1,this.message.create("success",t.error.message)})}else Object.values(this.validateForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}editUser(n){this.edit=!0,this.userId=n._id,this.validateForm.controls.phoneNumber.setValue(n.phone_number),this.validateForm.controls.name.setValue(n.name),this.validateForm.controls.notes.setValue(n.notes),this.validateForm.controls.address.setValue(n.address),this.validateForm.controls.username.setValue(n.username),this.validateForm.controls.email.setValue(n.email),this.validateForm.controls.password.setValue(n.password)}confirm(n){this.mainService.removeUser(n).subscribe(t=>{this.loading=!1,t&&t.success&&(this.message.create("success",t.message),this.getAllUsers())},t=>{console.log("get customers err ",t),this.loading=!1})}cancel(){}exportJsonAsExcelFile(n,t){const i={Sheets:{data:d.P6.json_to_sheet(n)},SheetNames:["data"]},m=d.cW(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(m,t)}exportTableAsExcelFile(n,t){const i={Sheets:{data:d.P6.table_to_sheet(n)},SheetNames:["data"]},m=d.cW(i,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(m,t)}saveAsExcelFile(n,t){const r=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});S.saveAs(r,t+(new Date).getTime()+".xlsx")}exportToExcel(){let n=[];this.usersData.forEach(t=>{n.push({Name:t.name,"Phone Number":t.phone_number,Email:t.email,Address:t.address,Notes:t.notes})}),this.exportJsonAsExcelFile(n,"users")}reset(){this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset(),this.validateForm.controls.username.reset(),this.validateForm.controls.email.reset(),this.validateForm.controls.password.reset(),this.edit=!1}onPageSizeChange(n){this.pageSize=n,this.getAllUsers()}onPageChange(n){this.index=n,this.getAllUsers()}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(l.QS),e.Y36(x.dD),e.Y36(T.J))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-user-settings"]],decls:62,vars:38,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","userFullName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","userFullName","formControlName","name","placeholder","Name"],[4,"ngIf"],["nzFor","email",3,"nzSm","nzXs"],["nzErrorTip","Please input your email!",3,"nzSm","nzXs"],["nz-input","","type","email","id","email","formControlName","email","placeholder","E-mail"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],["nz-tooltip","","nzTooltipTitle","Export as Excel",3,"click"],["nz-icon","","nzType","file-excel","nzTheme","fill"],[3,"nzData","nzLoading","nzShowPagination",4,"ngIf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],["nzFor","userName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your username!",3,"nzSm","nzXs"],["nz-input","","type","text","id","userName","formControlName","username","placeholder","Username",3,"disabled"],["nzFor","password","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your password!",3,"nzSm","nzXs"],["nz-input","","type","password","id","password","formControlName","password","placeholder","Password",3,"disabled"],["nzShowSearch","","nzAllowClear","","nzDisabled","","formControlName","phoneNumberPrefix",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["basicTable",""],[4,"ngFor","ngForOf"],[3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this User","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Users"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return t.submitForm()}),e.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),e._uU(11,"Name"),e.qZA()(),e.TgZ(12,"nz-form-control",7),e._UZ(13,"input",8),e.qZA()(),e.YNc(14,b,6,5,"nz-form-item",9),e.YNc(15,J,6,5,"nz-form-item",9),e.TgZ(16,"nz-form-item")(17,"nz-form-label",10)(18,"span"),e._uU(19,"E-mail"),e.qZA()(),e.TgZ(20,"nz-form-control",11),e._UZ(21,"input",12),e.qZA()(),e.TgZ(22,"nz-form-item")(23,"nz-form-label",13),e._uU(24,"Phone Number"),e.qZA(),e.TgZ(25,"nz-form-control",14)(26,"nz-input-group",15),e.YNc(27,P,2,0,"ng-template",null,16,e.W1O),e._UZ(29,"input",17),e.qZA()()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",18),e._uU(32,"Address"),e.qZA(),e.TgZ(33,"nz-form-control",19)(34,"nz-input-group",20),e._UZ(35,"textarea",21),e.qZA(),e.YNc(36,E,1,1,"ng-template",null,22,e.W1O),e.qZA()(),e.TgZ(38,"nz-form-item")(39,"nz-form-label",23),e._uU(40,"Notes"),e.qZA(),e.TgZ(41,"nz-form-control",24)(42,"nz-input-group",20),e._UZ(43,"textarea",25),e.qZA(),e.YNc(44,Q,1,1,"ng-template",null,26,e.W1O),e.qZA()(),e.TgZ(46,"nz-form-item",27)(47,"nz-form-control",28)(48,"button",29),e._uU(49),e.qZA(),e._uU(50,"\xa0 "),e.TgZ(51,"button",30),e.NdJ("click",function(){return t.reset()}),e._uU(52,"Reset"),e.qZA()()()()(),e.TgZ(53,"div",4)(54,"div")(55,"a",31),e.NdJ("click",function(){return t.exportToExcel()}),e._UZ(56,"span",32),e.qZA()(),e.YNc(57,q,18,4,"nz-table",33),e.TgZ(58,"div",34),e._UZ(59,"br"),e.TgZ(60,"nz-pagination",35),e.NdJ("nzPageIndexChange",function(i){return t.onPageChange(i)})("nzPageSizeChange",function(i){return t.onPageSizeChange(i)}),e.qZA(),e._UZ(61,"br"),e.qZA()()()()),2&n){const r=e.MAs(28),i=e.MAs(37),m=e.MAs(45);e.xp6(7),e.Q6J("formGroup",t.validateForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(2),e.Q6J("ngIf",!t.edit),e.xp6(1),e.Q6J("ngIf",!t.edit),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.phoneNumber),e.xp6(1),e.Q6J("nzAddOnBefore",r),e.xp6(3),e.Q6J("maxlength",10),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.address),e.xp6(1),e.Q6J("nzSuffix",i),e.xp6(5),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",m),e.xp6(5),e.Q6J("nzSpan",14)("nzOffset",6),e.xp6(2),e.Oqu(t.edit?"Update":"Create"),e.xp6(8),e.Q6J("ngIf",t.usersData),e.xp6(3),e.Q6J("nzPageIndex",t.index)("nzTotal",t.total)("nzShowSizeChanger",!0)("nzPageSize",t.pageSize)}},dependencies:[p.sg,p.O5,Z.SY,v.Ls,f.t3,f.SK,c.Lr,c.Nx,c.iK,c.Fd,l._Y,l.Fj,l.JJ,l.JL,l.nD,l.sg,l.u,z.Zp,z.gB,z.ke,_.Ip,_.Vq,U.ix,A.w,C.dQ,u.N8,u.Uo,u._C,u.Om,u.p0,u.$Z,F.JW,N.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),s})()}];let V=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[h.Bz.forChild(M),h.Bz]}),s})();var D=o(4973);let Y=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,V,D.m]}),s})()}}]);