(self.webpackChunktraders=self.webpackChunktraders||[]).push([[288],{8288:(E,Z,n)=>{"use strict";n.r(Z),n.d(Z,{CustomerModule:()=>X});var x=n(6895),T=n(2564),p=n(433),z=n(4327),C=n(574),t=n(4650),h=n(9651),y=n(2566),S=n(901),a=n(7570),r=n(1102),u=n(3679),i=n(6704),d=n(5635),b=n(8231),F=n(6616),A=n(7044),N=n(1811),f=n(7635),v=n(6497),O=n(1634);function P(o,c){1&o&&(t.TgZ(0,"nz-select",32),t._UZ(1,"nz-option",33),t.qZA())}function M(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"span",35),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.clearfield("address"))}),t.qZA()}}function J(o,c){if(1&o&&t.YNc(0,M,1,0,"span",34),2&o){const e=t.oxw();t.Q6J("ngIf",e.validateForm.controls.address.value)}}function w(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"span",35),t.NdJ("click",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.clearfield("notes"))}),t.qZA()}}function L(o,c){if(1&o&&t.YNc(0,w,1,0,"span",34),2&o){const e=t.oxw();t.Q6J("ngIf",e.validateForm.controls.notes.value)}}function R(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"a",39),t.NdJ("click",function(){const m=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.editCustomer(m))}),t._UZ(11,"span",40),t.qZA(),t._uU(12,"\xa0\xa0 "),t.TgZ(13,"a",41),t.NdJ("nzOnConfirm",function(){const m=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.deleteConfirm(m._id))})("nzOnCancel",function(){t.CHM(e);const l=t.oxw(2);return t.KtG(l.cancel())}),t._UZ(14,"span",42),t.qZA()()()}if(2&o){const e=c.$implicit;t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.phone_number),t.xp6(2),t.Oqu(e.address),t.xp6(2),t.Oqu(e.notes)}}function _(o,c){if(1&o&&(t.TgZ(0,"nz-table",36,37)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Phone Number"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Address"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Notes"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Actions"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,R,15,4,"tr",38),t.qZA()()),2&o){const e=t.oxw();t.Q6J("nzData",e.customersData)("nzLoading",e.loading)("nzShowPagination",!1),t.xp6(15),t.Q6J("ngForOf",e.customersData)}}const I=[{path:"customer",component:(()=>{class o{constructor(e,s,l,m){this.fb=e,this.message=s,this.mainService=l,this.exportAsService=m,this.customersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=0,this.pageSize=10,this.loading=!0,this.edit=!1,this.downloadAs="pdf",this.exportAsConfig={type:"pdf",elementIdOrContent:"sampleTable"}}ngOnInit(){this.validateForm=this.fb.group({name:[null,[p.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],address:[null],notes:[null]}),this.getCustomers()}getCustomers(){const e={skip:this.index,limit:this.pageSize};document.getElementById("customerName")?.focus(),this.mainService.getCustomers(e).subscribe(s=>{this.customersData=s.data,this.total=s.total,this.loading=!1},s=>{console.log("get customers err ",s),this.customersData=[],this.loading=!1})}clearfield(e){this.validateForm.controls[e].reset()}submitForm(){if(this.validateForm.valid){const e={name:this.validateForm.value.name,phone_number:this.validateForm.value.phoneNumber,address:this.validateForm.value.address,notes:this.validateForm.value.notes};this.edit?this.mainService.updateCustomer(this.customerId,e).subscribe(s=>{this.message.create("success",`${this.validateForm.value.name} customer updated Successfully`),this.reset(),this.loading=!0,this.edit=!1,this.getCustomers()},s=>{console.log("get customers err ",s),this.loading=!1,this.getCustomers()}):this.mainService.createCustomer(e).subscribe(s=>{this.message.create("success",`${this.validateForm.value.name} Customer added Successfully`),this.reset(),this.loading=!0,this.getCustomers()},s=>{console.log("get customers err ",s),this.loading=!1,this.getCustomers()})}else Object.values(this.validateForm.controls).forEach(e=>{e.invalid&&(e.markAsDirty(),e.updateValueAndValidity({onlySelf:!0}))})}exportJsonAsExcelFile(e,s){const m={Sheets:{data:C.P6.json_to_sheet(e)},SheetNames:["data"]},g=C.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,s)}exportTableAsExcelFile(e,s){const m={Sheets:{data:C.P6.table_to_sheet(e)},SheetNames:["data"]},g=C.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,s)}saveAsExcelFile(e,s){const l=new Blob([e],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});z.saveAs(l,s+(new Date).getTime()+".xlsx")}exportToExcel(){let e=[];this.customersData.forEach(l=>{e.push({Name:l.name,"Phone Number":l.phone_number,Address:l.address,Notes:l.notes})}),this.exportAsConfig.type=this.downloadAs,this.exportAsConfig.elementIdOrContent="<table><thead><tr><th>Name</th><th>Balance Amount</th><th>Paid Amount</th></tr></thead><tbody><tr><td>Rajesh</td><td>1500</td><td>500</td></tr><tr><td>Customer1</td><td>0</td><td>0</td></tr></tbody></table>",this.exportAsConfig.options={margins:{top:"50"}},this.exportAsService.save(this.exportAsConfig,"customers").subscribe(()=>{})}downloadFile(e,s){const l=(window.URL||window.webkitURL).createObjectURL(e);var m=document.createElement("a");m.href=window.URL.createObjectURL(e),m.download=s+".pdf",m.click(),setTimeout(()=>{window.URL.revokeObjectURL(l)},1e3)}reset(){this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset(),this.edit=!1,document.getElementById("customerName")?.focus()}editCustomer(e){this.edit=!0,this.customerId=e._id,this.validateForm.controls.phoneNumber.setValue(e.phone_number),this.validateForm.controls.name.setValue(e.name),this.validateForm.controls.notes.setValue(e.notes),this.validateForm.controls.address.setValue(e.address)}deleteConfirm(e){this.mainService.removeCustomer(e).subscribe(s=>{this.loading=!1,s&&s.success&&(this.message.create("success",s.message),this.getCustomers())},s=>{console.log("get customers err ",s),this.loading=!1})}cancel(){}onPageSizeChange(e){this.pageSize=e,this.getCustomers()}onPageChange(e){this.index=e,this.getCustomers()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.QS),t.Y36(h.dD),t.Y36(y.J),t.Y36(S.f))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer"]],decls:54,vars:32,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","customerName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","customerName","formControlName","name","placeholder","Name"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],["nz-tooltip","","nzTooltipTitle","Export as Excel",3,"click"],["nz-icon","","nzType","file-excel","nzTheme","fill"],[3,"nzData","nzLoading","nzShowPagination",4,"ngIf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],["formControlName","phoneNumberPrefix","nzDisabled","",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["customerTable",""],[4,"ngFor","ngForOf"],[3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Customer","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"Customers"),t.qZA()()(),t.TgZ(5,"div",1)(6,"div",4)(7,"form",5),t.NdJ("ngSubmit",function(){return s.submitForm()}),t.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),t._uU(11,"Name"),t.qZA()(),t.TgZ(12,"nz-form-control",7),t._UZ(13,"input",8),t.qZA()(),t.TgZ(14,"nz-form-item")(15,"nz-form-label",9),t._uU(16,"Phone Number"),t.qZA(),t.TgZ(17,"nz-form-control",10)(18,"nz-input-group",11),t.YNc(19,P,2,0,"ng-template",null,12,t.W1O),t._UZ(21,"input",13),t.qZA()()(),t.TgZ(22,"nz-form-item")(23,"nz-form-label",14),t._uU(24,"Address"),t.qZA(),t.TgZ(25,"nz-form-control",15)(26,"nz-input-group",16),t._UZ(27,"textarea",17),t.qZA(),t.YNc(28,J,1,1,"ng-template",null,18,t.W1O),t.qZA()(),t.TgZ(30,"nz-form-item")(31,"nz-form-label",19),t._uU(32,"Notes"),t.qZA(),t.TgZ(33,"nz-form-control",20)(34,"nz-input-group",16),t._UZ(35,"textarea",21),t.qZA(),t.YNc(36,L,1,1,"ng-template",null,22,t.W1O),t.qZA()(),t.TgZ(38,"nz-form-item",23)(39,"nz-form-control",24)(40,"button",25),t._uU(41),t.qZA(),t._uU(42,"\xa0 "),t.TgZ(43,"button",26),t.NdJ("click",function(){return s.reset()}),t._uU(44,"Reset"),t.qZA()()()()(),t.TgZ(45,"div",4)(46,"div")(47,"a",27),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(48,"span",28),t.qZA()(),t.YNc(49,_,16,4,"nz-table",29),t.TgZ(50,"div",30),t._UZ(51,"br"),t.TgZ(52,"nz-pagination",31),t.NdJ("nzPageIndexChange",function(m){return s.onPageChange(m)})("nzPageSizeChange",function(m){return s.onPageSizeChange(m)}),t.qZA(),t._UZ(53,"br"),t.qZA()()()()),2&e){const l=t.MAs(20),m=t.MAs(29),g=t.MAs(37);t.xp6(7),t.Q6J("formGroup",s.validateForm),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(3),t.Q6J("nzSm",14)("nzXs",24),t.xp6(3),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",s.validateForm.controls.phoneNumber),t.xp6(1),t.Q6J("nzAddOnBefore",l),t.xp6(3),t.Q6J("maxlength",10),t.xp6(2),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",s.validateForm.controls.address),t.xp6(1),t.Q6J("nzSuffix",m),t.xp6(5),t.Q6J("nzSm",6)("nzXs",24),t.xp6(2),t.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",s.validateForm.controls.notes),t.xp6(1),t.Q6J("nzSuffix",g),t.xp6(5),t.Q6J("nzSpan",14)("nzOffset",6),t.xp6(2),t.Oqu(s.edit?"Update":"Create"),t.xp6(8),t.Q6J("ngIf",s.customersData),t.xp6(3),t.Q6J("nzPageIndex",s.index)("nzTotal",s.total)("nzShowSizeChanger",!0)("nzPageSize",s.pageSize)}},dependencies:[x.sg,x.O5,a.SY,r.Ls,u.t3,u.SK,i.Lr,i.Nx,i.iK,i.Fd,p._Y,p.Fj,p.JJ,p.JL,p.nD,p.sg,p.u,d.Zp,d.gB,d.ke,b.Ip,b.Vq,F.ix,A.w,N.dQ,f.N8,f.Uo,f._C,f.Om,f.p0,f.$Z,v.JW,O.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),o})(),title:"S S T | Customers"},{path:"bill",loadChildren:()=>Promise.all([n.e(439),n.e(592),n.e(595)]).then(n.bind(n,1595)).then(o=>o.BillModule),title:"S S T | Customer Bills"},{path:"farmer",loadChildren:()=>Promise.all([n.e(592),n.e(91)]).then(n.bind(n,1979)).then(o=>o.FarmerModule),title:"S S T | Farmers"},{path:"vegetables",loadChildren:()=>n.e(360).then(n.bind(n,9360)).then(o=>o.VegetablesModule),title:"S S T | Vegetables"},{path:"customer-collection",loadChildren:()=>Promise.all([n.e(439),n.e(956)]).then(n.bind(n,3956)).then(o=>o.CustomerCollectionModule),title:"S S T | Customer Collections"},{path:"user_settings",loadChildren:()=>n.e(918).then(n.bind(n,1918)).then(o=>o.UserSettingsModule),title:"S S T | Users"},{path:"today_bills",loadChildren:()=>n.e(620).then(n.bind(n,8620)).then(o=>o.DayCollectionsModule),title:"S S T | Today Bills"}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(I),T.Bz]}),o})();var U=n(4973);let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.ez,Q,U.m,U.m]}),o})()},4327:function(E,Z){var n,T;void 0!==(T="function"==typeof(n=function(){"use strict";function z(a,r,u){var i=new XMLHttpRequest;i.open("GET",a),i.responseType="blob",i.onload=function(){S(i.response,r,u)},i.onerror=function(){console.error("could not download file")},i.send()}function C(a){var r=new XMLHttpRequest;r.open("HEAD",a,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function t(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}var h="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,y=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),S=h.saveAs||("object"!=typeof window||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(a,r,u){var i=h.URL||h.webkitURL,d=document.createElement("a");d.download=r=r||a.name||"download",d.rel="noopener","string"==typeof a?(d.href=a,d.origin===location.origin?t(d):C(d.href)?z(a,r,u):t(d,d.target="_blank")):(d.href=i.createObjectURL(a),setTimeout(function(){i.revokeObjectURL(d.href)},4e4),setTimeout(function(){t(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,r,u){if(r=r||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function p(a,r){return typeof r>"u"?r={autoBom:!1}:"object"!=typeof r&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,u),r);else if(C(a))z(a,r,u);else{var i=document.createElement("a");i.href=a,i.target="_blank",setTimeout(function(){t(i)})}}:function(a,r,u,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof a)return z(a,r,u);var d="application/octet-stream"===a.type,b=/constructor/i.test(h.HTMLElement)||h.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||d&&b||y)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var v=A.result;v=F?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=v:location=v,i=null},A.readAsDataURL(a)}else{var N=h.URL||h.webkitURL,f=N.createObjectURL(a);i?i.location=f:location.href=f,i=null,setTimeout(function(){N.revokeObjectURL(f)},4e4)}});h.saveAs=S.saveAs=S,E.exports=S})?n.apply(Z,[]):n)&&(E.exports=T)}}]);