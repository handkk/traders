(self.webpackChunktraders=self.webpackChunktraders||[]).push([[288],{8288:(U,Z,o)=>{"use strict";o.r(Z),o.d(Z,{CustomerModule:()=>j});var x=o(6895),z=o(4575),p=o(433),C=o(4327),v=o(574),e=o(4650),h=o(9651),y=o(2566),T=o(901),a=o(7570),i=o(1102),u=o(3679),r=o(6704),d=o(5635),F=o(8231),N=o(6616),A=o(7044),b=o(1811),f=o(1949),S=o(6497),P=o(1634);function O(s,c){1&s&&(e.TgZ(0,"nz-select",32),e._UZ(1,"nz-option",33),e.qZA())}function M(s,c){if(1&s){const n=e.EpF();e.TgZ(0,"span",35),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.clearfield("address"))}),e.qZA()}}function J(s,c){if(1&s&&e.YNc(0,M,1,0,"span",34),2&s){const n=e.oxw();e.Q6J("ngIf",n.validateForm.controls.address.value)}}function B(s,c){if(1&s){const n=e.EpF();e.TgZ(0,"span",35),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.clearfield("notes"))}),e.qZA()}}function L(s,c){if(1&s&&e.YNc(0,B,1,0,"span",34),2&s){const n=e.oxw();e.Q6J("ngIf",n.validateForm.controls.notes.value)}}function R(s,c){if(1&s){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td")(10,"a",39),e.NdJ("click",function(){const m=e.CHM(n).$implicit,g=e.oxw(2);return e.KtG(g.editCustomer(m))}),e._UZ(11,"span",40),e.qZA(),e._uU(12,"\xa0\xa0 "),e.TgZ(13,"a",41),e.NdJ("nzOnConfirm",function(){const m=e.CHM(n).$implicit,g=e.oxw(2);return e.KtG(g.deleteConfirm(m._id))})("nzOnCancel",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.cancel())}),e._UZ(14,"span",42),e.qZA()()()}if(2&s){const n=c.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.phone_number),e.xp6(2),e.Oqu(n.address),e.xp6(2),e.Oqu(n.notes)}}function w(s,c){if(1&s&&(e.TgZ(0,"nz-table",36,37)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Name"),e.qZA(),e.TgZ(6,"th"),e._uU(7,"Phone Number"),e.qZA(),e.TgZ(8,"th"),e._uU(9,"Address"),e.qZA(),e.TgZ(10,"th"),e._uU(11,"Notes"),e.qZA(),e.TgZ(12,"th"),e._uU(13,"Actions"),e.qZA()()(),e.TgZ(14,"tbody"),e.YNc(15,R,15,4,"tr",38),e.qZA()()),2&s){const n=e.oxw();e.Q6J("nzData",n.customersData)("nzLoading",n.loading)("nzShowPagination",!1),e.xp6(15),e.Q6J("ngForOf",n.customersData)}}const Q=[{path:"customer",component:(()=>{class s{constructor(n,t,l,m,g){this.fb=n,this.message=t,this.mainService=l,this.exportAsService=m,this.router=g,this.customersData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name"},{phoneNumber:"Phone Number"},{address:"Address"},{notes:"Note"}],this.index=1,this.total=0,this.pageSize=10,this.loading=!0,this.edit=!1,this.downloadAs="pdf",this.exportAsConfig={type:"pdf",elementIdOrContent:"sampleTable"},this.mainService.getLoggedInUser()||(sessionStorage.clear(),this.message.create("warning","User session expired please login"),this.router.navigateByUrl("/login"))}ngOnInit(){this.validateForm=this.fb.group({name:[null,[p.kI.required]],phoneNumberPrefix:["+91"],phoneNumber:[null],address:[null],notes:[null]}),this.getCustomers()}getCustomers(){const n={skip:this.index,limit:this.pageSize};document.getElementById("customerName")?.focus(),this.mainService.spinning.emit(!0),this.mainService.getCustomers(n).subscribe(t=>{const l=t.data;this.mainService.spinning.emit(!1),this.customersData=l,this.total=t.total,this.loading=!1},t=>{console.log("get customers err ",t),this.mainService.spinning.emit(!1),this.customersData=[],this.loading=!1,t&&t.error&&!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login"))})}clearfield(n){this.validateForm.controls[n].reset()}submitForm(){if(this.validateForm.valid){const n={name:this.validateForm.value.name,phone_number:this.validateForm.value.phoneNumber,address:this.validateForm.value.address,notes:this.validateForm.value.notes};this.mainService.spinning.emit(!0),this.edit?this.mainService.updateCustomer(this.customerId,n).subscribe(t=>{this.message.create("success",`${this.validateForm.value.name} customer updated Successfully`),this.reset(),this.loading=!0,this.edit=!1,this.mainService.spinning.emit(!1),this.getCustomers()},t=>{console.log("get customers err ",t),this.loading=!1,this.mainService.spinning.emit(!1),t&&t.error?!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login")):this.getCustomers()}):this.mainService.createCustomer(n).subscribe(t=>{this.message.create("success",`${this.validateForm.value.name} Customer added Successfully`),this.reset(),this.loading=!0,this.mainService.spinning.emit(!1),this.getCustomers()},t=>{console.log("get customers err ",t),this.loading=!1,this.mainService.spinning.emit(!1),t&&t.error?!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login")):this.getCustomers()})}else this.mainService.spinning.emit(!1),Object.values(this.validateForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}exportJsonAsExcelFile(n,t){const m={Sheets:{data:v.P6.json_to_sheet(n)},SheetNames:["data"]},g=v.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,t)}exportTableAsExcelFile(n,t){const m={Sheets:{data:v.P6.table_to_sheet(n)},SheetNames:["data"]},g=v.cW(m,{bookType:"xlsx",type:"array"});this.saveAsExcelFile(g,t)}saveAsExcelFile(n,t){const l=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});C.saveAs(l,t+(new Date).getTime()+".xlsx")}exportToExcel(){let n=[];this.customersData.forEach(l=>{n.push({Name:l.name,"Phone Number":l.phone_number,Address:l.address,Notes:l.notes})}),this.exportAsConfig.type=this.downloadAs,this.exportAsConfig.elementIdOrContent="<table><thead><tr><th>Name</th><th>Balance Amount</th><th>Paid Amount</th></tr></thead><tbody><tr><td>Rajesh</td><td>1500</td><td>500</td></tr><tr><td>Customer1</td><td>0</td><td>0</td></tr></tbody></table>",this.exportAsConfig.options={margins:{top:"50"}},this.exportAsService.save(this.exportAsConfig,"customers").subscribe(()=>{})}downloadFile(n,t){const l=(window.URL||window.webkitURL).createObjectURL(n);var m=document.createElement("a");m.href=window.URL.createObjectURL(n),m.download=t+".pdf",m.click(),setTimeout(()=>{window.URL.revokeObjectURL(l)},1e3)}reset(){this.validateForm.controls.name.reset(),this.validateForm.controls.phoneNumber.reset(),this.validateForm.controls.address.reset(),this.validateForm.controls.notes.reset(),this.edit=!1,document.getElementById("customerName")?.focus()}editCustomer(n){this.edit=!0,this.customerId=n._id,this.validateForm.controls.phoneNumber.setValue(n.phone_number),this.validateForm.controls.name.setValue(n.name),this.validateForm.controls.notes.setValue(n.notes),this.validateForm.controls.address.setValue(n.address)}deleteConfirm(n){this.mainService.removeCustomer(n).subscribe(t=>{this.loading=!1,t&&t.success?(this.message.create("success",t.message),this.getCustomers()):t.success||this.message.create("warning",t.message)},t=>{console.log("get customers err ",t),this.loading=!1,t&&t.error&&!t.error.success&&1e3===t.error.code&&(this.message.create("error",t.error.message),sessionStorage.clear(),this.router.navigateByUrl("/login"))})}cancel(){}onPageSizeChange(n){this.pageSize=n,this.getCustomers()}onPageChange(n){this.index=n,this.getCustomers()}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(p.QS),e.Y36(h.dD),e.Y36(y.J),e.Y36(T.f),e.Y36(z.F0))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-customer"]],decls:54,vars:33,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nzFor","customerName","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Please input your name!",3,"nzSm","nzXs"],["nz-input","","id","customerName","formControlName","name","placeholder","Name","autocomplete","off"],["nzFor","phoneNumber",3,"nzSm","nzXs"],["nzErrorTip","Please input your phone number!",3,"nzSm","nzXs","nzValidateStatus"],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input","","autocomplete","off",3,"maxlength"],["nzFor","address",3,"nzSm","nzXs"],["nzErrorTip","Please input your address!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","address","placeholder","Address"],["textAreaClearTpl",""],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-row","",1,"register-area"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"disabled"],["nz-button","","nzType","default",3,"click"],["nz-tooltip","","nzTooltipTitle","Export as Excel",3,"click"],["nz-icon","","nzType","file-excel","nzTheme","fill"],[3,"nzData","nzLoading","nzShowPagination",4,"ngIf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],["formControlName","phoneNumberPrefix","nzDisabled","",1,"phone-select"],["nzLabel","+91","nzValue","+91"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["customerTable",""],[4,"ngFor","ngForOf"],[3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Customer","nzPopconfirmPlacement","bottom",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(n,t){if(1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Customers"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return t.submitForm()}),e.TgZ(8,"nz-form-item")(9,"nz-form-label",6)(10,"span"),e._uU(11,"Name"),e.qZA()(),e.TgZ(12,"nz-form-control",7),e._UZ(13,"input",8),e.qZA()(),e.TgZ(14,"nz-form-item")(15,"nz-form-label",9),e._uU(16,"Phone Number"),e.qZA(),e.TgZ(17,"nz-form-control",10)(18,"nz-input-group",11),e.YNc(19,O,2,0,"ng-template",null,12,e.W1O),e._UZ(21,"input",13),e.qZA()()(),e.TgZ(22,"nz-form-item")(23,"nz-form-label",14),e._uU(24,"Address"),e.qZA(),e.TgZ(25,"nz-form-control",15)(26,"nz-input-group",16),e._UZ(27,"textarea",17),e.qZA(),e.YNc(28,J,1,1,"ng-template",null,18,e.W1O),e.qZA()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",19),e._uU(32,"Notes"),e.qZA(),e.TgZ(33,"nz-form-control",20)(34,"nz-input-group",16),e._UZ(35,"textarea",21),e.qZA(),e.YNc(36,L,1,1,"ng-template",null,22,e.W1O),e.qZA()(),e.TgZ(38,"nz-form-item",23)(39,"nz-form-control",24)(40,"button",25),e._uU(41),e.qZA(),e._uU(42,"\xa0 "),e.TgZ(43,"button",26),e.NdJ("click",function(){return t.reset()}),e._uU(44,"Reset"),e.qZA()()()()(),e.TgZ(45,"div",4)(46,"div")(47,"a",27),e.NdJ("click",function(){return t.exportToExcel()}),e._UZ(48,"span",28),e.qZA()(),e.YNc(49,w,16,4,"nz-table",29),e.TgZ(50,"div",30),e._UZ(51,"br"),e.TgZ(52,"nz-pagination",31),e.NdJ("nzPageIndexChange",function(m){return t.onPageChange(m)})("nzPageSizeChange",function(m){return t.onPageSizeChange(m)}),e.qZA(),e._UZ(53,"br"),e.qZA()()()()),2&n){const l=e.MAs(20),m=e.MAs(29),g=e.MAs(37);e.xp6(7),e.Q6J("formGroup",t.validateForm),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.phoneNumber),e.xp6(1),e.Q6J("nzAddOnBefore",l),e.xp6(3),e.Q6J("maxlength",10),e.xp6(2),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.address),e.xp6(1),e.Q6J("nzSuffix",m),e.xp6(5),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",t.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",g),e.xp6(5),e.Q6J("nzSpan",14)("nzOffset",6),e.xp6(1),e.Q6J("disabled",!t.validateForm.valid),e.xp6(1),e.Oqu(t.edit?"Update":"Create"),e.xp6(8),e.Q6J("ngIf",t.customersData),e.xp6(3),e.Q6J("nzPageIndex",t.index)("nzTotal",t.total)("nzShowSizeChanger",!0)("nzPageSize",t.pageSize)}},dependencies:[x.sg,x.O5,a.SY,i.Ls,u.t3,u.SK,r.Lr,r.Nx,r.iK,r.Fd,p._Y,p.Fj,p.JJ,p.JL,p.nD,p.sg,p.u,d.Zp,d.gB,d.ke,F.Ip,F.Vq,N.ix,A.w,b.dQ,f.N8,f.Uo,f._C,f.Om,f.p0,f.$Z,S.JW,P.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),s})(),title:"S S T | Customers"},{path:"bill",loadChildren:()=>Promise.all([o.e(439),o.e(592),o.e(595)]).then(o.bind(o,1595)).then(s=>s.BillModule),title:"S S T | Customer Bills"},{path:"farmer",loadChildren:()=>Promise.all([o.e(592),o.e(91)]).then(o.bind(o,1979)).then(s=>s.FarmerModule),title:"S S T | Farmers"},{path:"vegetables",loadChildren:()=>o.e(360).then(o.bind(o,9360)).then(s=>s.VegetablesModule),title:"S S T | Vegetables"},{path:"customer-collection",loadChildren:()=>Promise.all([o.e(439),o.e(956)]).then(o.bind(o,3956)).then(s=>s.CustomerCollectionModule),title:"S S T | Customer Collections"},{path:"user_settings",loadChildren:()=>o.e(918).then(o.bind(o,1918)).then(s=>s.UserSettingsModule),title:"S S T | Users"},{path:"today_bills",loadChildren:()=>Promise.all([o.e(439),o.e(620)]).then(o.bind(o,8620)).then(s=>s.DayCollectionsModule),title:"S S T | Today Bills"},{path:"bill_print",loadChildren:()=>Promise.all([o.e(439),o.e(588)]).then(o.bind(o,588)).then(s=>s.BillPrintModule),title:"S S T | Bill Print"},{path:"statement",loadChildren:()=>Promise.all([o.e(439),o.e(850)]).then(o.bind(o,5850)).then(s=>s.StatementModule),title:"S S T | Statement"}];let X=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[z.Bz.forChild(Q),z.Bz]}),s})();var E=o(9912);let j=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[x.ez,X,E.m,E.m]}),s})()},4327:function(U,Z){var o,z;void 0!==(z="function"==typeof(o=function(){"use strict";function C(a,i,u){var r=new XMLHttpRequest;r.open("GET",a),r.responseType="blob",r.onload=function(){T(r.response,i,u)},r.onerror=function(){console.error("could not download file")},r.send()}function v(a){var i=new XMLHttpRequest;i.open("HEAD",a,!1);try{i.send()}catch{}return 200<=i.status&&299>=i.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch{var i=document.createEvent("MouseEvents");i.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(i)}}var h="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,y=h.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),T=h.saveAs||("object"!=typeof window||window!==h?function(){}:"download"in HTMLAnchorElement.prototype&&!y?function(a,i,u){var r=h.URL||h.webkitURL,d=document.createElement("a");d.download=i=i||a.name||"download",d.rel="noopener","string"==typeof a?(d.href=a,d.origin===location.origin?e(d):v(d.href)?C(a,i,u):e(d,d.target="_blank")):(d.href=r.createObjectURL(a),setTimeout(function(){r.revokeObjectURL(d.href)},4e4),setTimeout(function(){e(d)},0))}:"msSaveOrOpenBlob"in navigator?function(a,i,u){if(i=i||a.name||"download","string"!=typeof a)navigator.msSaveOrOpenBlob(function p(a,i){return typeof i>"u"?i={autoBom:!1}:"object"!=typeof i&&(console.warn("Deprecated: Expected third argument to be a object"),i={autoBom:!i}),i.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}(a,u),i);else if(v(a))C(a,i,u);else{var r=document.createElement("a");r.href=a,r.target="_blank",setTimeout(function(){e(r)})}}:function(a,i,u,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof a)return C(a,i,u);var d="application/octet-stream"===a.type,F=/constructor/i.test(h.HTMLElement)||h.safari,N=/CriOS\/[\d]+/.test(navigator.userAgent);if((N||d&&F||y)&&typeof FileReader<"u"){var A=new FileReader;A.onloadend=function(){var S=A.result;S=N?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=S:location=S,r=null},A.readAsDataURL(a)}else{var b=h.URL||h.webkitURL,f=b.createObjectURL(a);r?r.location=f:location.href=f,r=null,setTimeout(function(){b.revokeObjectURL(f)},4e4)}});h.saveAs=T.saveAs=T,U.exports=T})?o.apply(Z,[]):o)&&(U.exports=z)}}]);