(self.webpackChunktraders=self.webpackChunktraders||[]).push([[288],{8288:(E,Z,n)=>{"use strict";n.r(Z),n.d(Z,{CustomerModule:()=>X});var x=n(6895),T=n(2564),p=n(433),z=n(4327),C=n(574),e=n(4650),h=n(9651),b=n(2566),S=n(901),a=n(7570),r=n(1102),u=n(3679),i=n(6704),d=n(5635),y=n(8231),F=n(6616),A=n(7044),N=n(1811),f=n(7635),v=n(6497),O=n(1634);function P(s,c){1&s&&(e.TgZ(0,"nz-select",32),e._UZ(1,"nz-option",33),e.qZA())}function _(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"span",35),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.clearfield("address"))}),e.qZA()}}function M(s,c){if(1&s&&e.YNc(0,_,1,0,"span",34),2&s){const t=e.oxw();e.Q6J("ngIf",t.validateForm.controls.address.value)}}function J(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"span",35),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.clearfield("notes"))}),e.qZA()}}function w(s,c){if(1&s&&e.YNc(0,J,1,0,"span",34),2&s){const t=e.oxw();e.Q6J("ngIf",t.validateForm.controls.notes.value)}}function L(s,c){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"a",39),e.NdJ("click",function(){const m=e.CHM(t).$implicit,g=e.oxw(2);return e.KtG(g.editCustomer(m))}),e._UZ(11,"span",40),e.qZA(),e._uU(12,"\xa0\xa0 "),e.TgZ(13,"a",41),e.NdJ("nzOnConfirm",function(){const m=e.CHM(t).$implicit,g=e.oxw(2);return e.KtG(g.deleteConfirm(m._id))})("nzOnCancel",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.cancel())}),e._UZ(14,"span",42),e.qZA()()()}if(2&s){const t=c.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.phone_number),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.Oqu(t.notes)}}function R(s,c){if(1&s&&(e.TgZ(0,"nz-table",36,37)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Phone Number"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Address"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Notes"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Actions"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,L,15,4,"tr",38),e.qZA()()),2&s){const t=e.oxw();e.Q6J("nzData",t.customersData)("nzLoading",t.loading)("nzShowPagination",!1),e.xp6(15),e.Q6J("ngForOf",t.customersData)}}const I=[{path:"customer",component:(()=>{class s{constructor(t,o,l,m){this.fb=t,this.message=o,this.mainService=l,this.exportAsService=m,this.customersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=0,this.pageSize=10,this.loading=!0,this.edit=!1,this.downloadAs="pdf",this.exportAsConfig={type:"pdf",elementIdOrContent:"sampleTable"}}ngOnInit(){this.validateForm=this.fb.group({name:[null,[p.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],address:[null],notes:[null]}),this.getCustomers()}getCustomers(){const t={skip:this.index,limit:this.pageSize};document.getElementById("customerName")?.focus(),this.mainService.getCustomers(t).subscribe(o=>{this.customersData=o.data,this.total=o.total,this.loading=!1},o=>{console.log("get customers err ",o),this.customersData=[],this.loading=!1})}clearfield(t){this.validateForm.controls[t].reset()}submitForm(){if(this.validateForm.valid){const t={name:this.validateForm.value.name,phone_number:this.validateForm.value.phoneNumber,address:this.validateForm.value.address,notes:this.validateForm.value.notes,email:"admin@traders.com"};this.edit?this.mainService.updateCustomer(this.customerId,t).subscribe(o=>{this.message.create("success",`${this.validateForm.value.name} customer updated Successfully`),this.reset(),this.loading=!0,this.edit=!1,this.getCustomers()},o=>{console.log("get customers err ",o),this.loading=!1,this.getCustomers()}):this.mainService.createCustomer(t).subscribe(o=>{this.message.create("success",`${this.validateForm.value.name} Customer added Successfully`),this.reset(),this.loading=!0,this.getCustomers()},o=>{console.log("get customers err ",o),this.loading=!1,this.getCustomers()})}else Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}exportJsonAsExcelFile(t,o){const m={Sheets:{data:C.P6.json_to_sheet(t)},SheetNames:["data"]},g=C.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,o)}exportTableAsExcelFile(t,o){const m={Sheets:{data:C.P6.table_to_sheet(t)},SheetNames:["data"]},g=C.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,o)}saveAsExcelFile(t,o){const l=new Blob([t],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});z.saveAs(l,o+(new Date).getTime()+".xlsx")}exportToExcel(){let t=[];this.customersData.forEach(l=>{t.push({Name:l.name,"Phone Number":l.phone_number,Address:l.address,Notes:l.notes})}),this.exportAsConfig.type=this.downloadAs,this.exportAsConfig.elementIdOrContent="<table><thead><tr><th>Name</th><th>Balance Amount</th><th>Paid Amount</th></tr></thead><tbody><tr><td>Rajesh</td><td>1500</td><td>500</td></tr><tr><td>Customer1</td><td>0</td><td>0</td></tr></tbody></table>",this.exportAsConfig.options={margins:{top:"50"}},this.exportAsService.save(this.exportAsConfig,"customers").subscribe(()=>{})}downloadFile(t,o){const l=(window.URL||window.webkitURL).createObjectURL(t);var m=document.createElement("a");m.href=window.URL.createObjectURL(t),m.download=o+".pdf",m.click(),setTimeout(()=>{window.URL.revokeObjectURL(l)},1e3)}reset(){this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset(),this.edit=!1,document.getElementById("customerName")?.focus()}editCustomer(t){this.edit=!0,this.customerId=t._id,this.validateForm.controls.phoneNumber.setValue(t.phone_number),this.validateForm.controls.name.setValue(t.name),this.validateForm.controls.notes.setValue(t.notes),this.validateForm.controls.address.setValue(t.address)}deleteConfirm(t){this.mainService.removeCustomer(t).subscribe(o=>{this.loading=!1,o&&o.success&&(this.message.create("success",o.message),this.getCustomers())},o=>{console.log("get customers err ",o),this.loading=!1})}cancel(){}onPageSizeChange(t){this.pageSize=t,this.getCustomers()}onPageChange(t){this.index=t,this.getCustomers()}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(p.QS),e.Y36(h.dD),e.Y36(b.J),e.Y36(S.f))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-customer"]],decls:54,vars:32,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","customerName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","customerName","formControlName","name","placeholder","Name"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],["nz-tooltip","","nzTooltipTitle","Export as Excel",3,"click"],["nz-icon","","nzType","file-excel","nzTheme","fill"],[3,"nzData","nzLoading","nzShowPagination",4,"ngIf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],["formControlName","phoneNumberPrefix","nzDisabled","",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["customerTable",""],[4,"ngFor","ngForOf"],[3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Customer","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Customers"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return o.submitForm()}),e.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),e._uU(11,"Name"),e.qZA()(),e.TgZ(12,"nz-form-control",7),e._UZ(13,"input",8),e.qZA()(),e.TgZ(14,"nz-form-item")(15,"nz-form-label",9),e._uU(16,"Phone Number"),e.qZA(),e.TgZ(17,"nz-form-control",10)(18,"nz-input-group",11),e.YNc(19,P,2,0,"ng-template",null,12,e.W1O),e._UZ(21,"input",13),e.qZA()()(),e.TgZ(22,"nz-form-item")(23,"nz-form-label",14),e._uU(24,"Address"),e.qZA(),e.TgZ(25,"nz-form-control",15)(26,"nz-input-group",16),e._UZ(27,"textarea",17),e.qZA(),e.YNc(28,M,1,1,"ng-template",null,18,e.W1O),e.qZA()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",19),e._uU(32,"Notes"),e.qZA(),e.TgZ(33,"nz-form-control",20)(34,"nz-input-group",16),e._UZ(35,"textarea",21),e.qZA(),e.YNc(36,w,1,1,"ng-template",null,22,e.W1O),e.qZA()(),e.TgZ(38,"nz-form-item",23)(39,"nz-form-control",24)(40,"button",25),e._uU(41),e.qZA(),e._uU(42,"\xa0 "),e.TgZ(43,"button",26),e.NdJ("click",function(){return o.reset()}),e._uU(44,"Reset"),e.qZA()()()()(),e.TgZ(45,"div",4)(46,"div")(47,"a",27),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(48,"span",28),e.qZA()(),e.YNc(49,R,16,4,"nz-table",29),e.TgZ(50,"div",30),e._UZ(51,"br"),e.TgZ(52,"nz-pagination",31),e.NdJ("nzPageIndexChange",function(m){return o.onPageChange(m)})("nzPageSizeChange",function(m){return o.onPageSizeChange(m)}),e.qZA(),e._UZ(53,"br"),e.qZA()()()()),2&t){const l=e.MAs(20),m=e.MAs(29),g=e.MAs(37);e.xp6(7),e.Q6J("formGroup",o.validateForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",o.validateForm.controls.phoneNumber),e.xp6(1),e.Q6J("nzAddOnBefore",l),e.xp6(3),e.Q6J("maxlength",10),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",o.validateForm.controls.address),e.xp6(1),e.Q6J("nzSuffix",m),e.xp6(5),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",o.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",g),e.xp6(5),e.Q6J("nzSpan",14)("nzOffset",6),e.xp6(2),e.Oqu(o.edit?"Update":"Create"),e.xp6(8),e.Q6J("ngIf",o.customersData),e.xp6(3),e.Q6J("nzPageIndex",o.index)("nzTotal",o.total)("nzShowSizeChanger",!0)("nzPageSize",o.pageSize)}},dependencies:[x.sg,x.O5,a.SY,r.Ls,u.t3,u.SK,i.Lr,i.Nx,i.iK,i.Fd,p._Y,p.Fj,p.JJ,p.JL,p.nD,p.sg,p.u,d.Zp,d.gB,d.ke,y.Ip,y.Vq,F.ix,A.w,N.dQ,f.N8,f.Uo,f._C,f.Om,f.p0,f.$Z,v.JW,O.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),s})(),title:"S S T | Customers"},{path:"bill",loadChildren:()=>Promise.all([n.e(439),n.e(592),n.e(595)]).then(n.bind(n,1595)).then(s=>s.BillModule),title:"S S T | Customer Bills"},{path:"farmer",loadChildren:()=>Promise.all([n.e(592),n.e(91)]).then(n.bind(n,1979)).then(s=>s.FarmerModule),title:"S S T | Farmers"},{path:"vegetables",loadChildren:()=>n.e(360).then(n.bind(n,9360)).then(s=>s.VegetablesModule),title:"S S T | Vegetables"},{path:"customer-collection",loadChildren:()=>Promise.all([n.e(439),n.e(956)]).then(n.bind(n,3956)).then(s=>s.CustomerCollectionModule),title:"S S T | Customer Collections"},{path:"user_settings",loadChildren:()=>n.e(918).then(n.bind(n,1918)).then(s=>s.UserSettingsModule),title:"S S T | Users"}];let Q=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[T.Bz.forChild(I),T.Bz]}),s})();var U=n(4973);let X=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[x.ez,Q,U.m,U.m]}),s})()},4327:function(E,Z){var n,T;void 0!==(T="function"==typeof(n=function(){"use strict";function z(a,r,u){var i=new XMLHttpRequest;i.open("GET",a),i.responseType="blob",i.onload=function(){S(i.response,r,u)},i.onerror=function(){console.error("could not download file")},i.send()}function C(a){var r=new XMLHttpRequest;r.open("HEAD",a,!1);try{r.send()}catch{}return 200<=r.status&&299>=r.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var r=document.createEvent("MouseEvents");r.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(r)}}var h="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,b=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),S=h.saveAs||("object"!=typeof window||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!b?function(a,r,u){var i=h.URL||h.webkitURL,d=document.createElement("a");d.download=r=r||a.name||"download",d.rel="noopener","string"==typeof a?(d.href=a,d.origin===location.origin?e(d):C(d.href)?z(a,r,u):e(d,d.target="_blank")):(d.href=i.createObjectURL(a),setTimeout(function(){i.revokeObjectURL(d.href)},4e4),setTimeout(function(){e(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,r,u){if(r=r||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function p(a,r){return typeof r>"u"?r={autoBom:!1}:"object"!=typeof r&&(console.warn("Deprecated: Expected third argument to be a object"),r={autoBom:!r}),r.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,u),r);else if(C(a))z(a,r,u);else{var i=document.createElement("a");i.href=a,i.target="_blank",setTimeout(function(){e(i)})}}:function(a,r,u,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof a)return z(a,r,u);var d="application/octet-stream"===a.type,y=/constructor/i.test(h.HTMLElement)||h.safari,F=/CriOS\/[\d]+/.test(navigator.userAgent);if((F||d&&y||b)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var v=A.result;v=F?v:v.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=v:location=v,i=null},A.readAsDataURL(a)}else{var N=h.URL||h.webkitURL,f=N.createObjectURL(a);i?i.location=f:location.href=f,i=null,setTimeout(function(){N.revokeObjectURL(f)},4e4)}});h.saveAs=S.saveAs=S,E.exports=S})?n.apply(Z,[]):n)&&(E.exports=T)}}]);