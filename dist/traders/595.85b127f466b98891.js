"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[595],{1595:(Y,g,l)=>{l.r(g),l.d(g,{BillModule:()=>I});var u=l(6895),h=l(2564),r=l(433),p=l(5439),e=l(4650),C=l(9651),S=l(2566),Z=l(1883),T=l(7570),b=l(1102),f=l(3679),d=l(6704),z=l(5635),v=l(8231),A=l(6616),x=l(7044),B=l(1811),F=l(7096),q=l(5259),c=l(7635),J=l(6497),y=l(1243),M=l(1634);function O(i,a){if(1&i&&e._UZ(0,"nz-option",38),2&i){const t=a.$implicit;e.Q6J("nzLabel",t.name)("nzValue",t)}}function Q(i,a){if(1&i&&e._UZ(0,"nz-option",38),2&i){const t=a.$implicit;e.Q6J("nzLabel",t.name)("nzValue",t)}}function U(i,a){if(1&i&&e._UZ(0,"nz-option",38),2&i){const t=a.$implicit;e.Q6J("nzLabel",t.name)("nzValue",t)}}function N(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"span",40),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.clearfield("notes"))}),e.qZA()}}function V(i,a){if(1&i&&e.YNc(0,N,1,0,"span",39),2&i){const t=e.oxw();e.Q6J("ngIf",t.validateForm.controls.notes.value)}}function P(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td")(12,"a",41),e.NdJ("click",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.editBill(s))}),e._UZ(13,"span",42),e.qZA(),e._uU(14,"\xa0\xa0 "),e.TgZ(15,"a",43),e.NdJ("nzOnConfirm",function(){const s=e.CHM(t).$implicit,m=e.oxw();return e.KtG(m.deleteConfirm(s._id))})("nzOnCancel",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.cancel())}),e._UZ(16,"span",44),e.qZA()()()}if(2&i){const t=a.$implicit;e.xp6(2),e.Oqu(t.customer_name),e.xp6(2),e.Oqu(t.vegetable_name),e.xp6(2),e.Oqu(t.quantity),e.xp6(2),e.Oqu(t.rate),e.xp6(2),e.Oqu(t.total_amount)}}const D=function(){return{standalone:!0}},X=[{path:"",component:(()=>{class i{constructor(t,n,o,s,m){this.fb=t,this.el=n,this.message=o,this.mainService=s,this.farmerService=m,this.customers=[],this.vegetablesList=[],this.farmersList=[],this.date=new Date,this.defaultDate=new Date,this.billsData=[],this.sort=["ascend"],this.listOfColumns=[{name:"Name",sortOrder:"ascend"},{item:"Item",sortOrder:null},{rate:"Rate",sortOrder:null},{quantity:"quantity",sortOrder:null}],this.index=1,this.total=0,this.pageSize=10,this.loading=!0,this.edit=!1,this.switchValue=!1,this.dateDisable=!1}ngAfterViewInit(){}ngOnInit(){this.validateForm=this.fb.group({customer:[null,[r.kI.required]],quantity:[null,[r.kI.required]],rate:[null,[r.kI.required]],vegetables:[null,[r.kI.required]],farmer:[null,[r.kI.required]],date:[this.date,[r.kI.required]],notes:[null]}),this.total=this.billsData.length;const t=sessionStorage.getItem("userinfo");"admin"!==JSON.parse(t).username&&(this.dateDisable=!0),this.getCustomers(),this.getAllFarmers(),this.getAllVegetables(),this.getBills(),this.switchValue=!1}clearfield(t){this.validateForm.controls[t].reset()}getBills(){const n={skip:this.index,limit:this.pageSize,bill_date:p(new Date).format("YYYY-MM-DD")};this.loading=!0,this.mainService.getBills(n).subscribe(o=>{this.billsData=o.data,this.total=o.total,this.loading=!1,this.getCustomers(),setTimeout(()=>{document.getElementById("customerSelection")?.children[0].children[0]?.children[0].setAttribute("id","customerselect"),document.getElementById("customerselect")?.focus()},500)},o=>{console.log("get customers err ",o),this.billsData=[],this.loading=!1})}getCustomers(){this.mainService.getCustomers({}).subscribe(n=>{this.customers=n.data},n=>{console.log("get customers err ",n),this.customers=[]})}getAllFarmers(){this.farmerService.getFarmers({}).subscribe(n=>{this.farmersList=n.data},n=>{console.log("get farmers err ",n),this.farmersList=[]})}getAllVegetables(){this.mainService.getVegetables({}).subscribe(n=>{this.vegetablesList=n.data},n=>{console.log("get customers err ",n),this.vegetablesList=[]})}clickSwitch(){this.switchValue=!this.switchValue}submitForm(){if(this.validateForm.valid){const t=p(this.validateForm.value.date).format("YYYY-MM-DDTHH:mm:ss.000"),n={bill_date:this.edit?this.bill_data.bill_date:t,customer_name:this.validateForm.value.customer.name,customer_id:this.validateForm.value.customer._id,vegetable_name:this.validateForm.value.vegetables.name,vegetable_id:this.validateForm.value.vegetables._id,rate:this.validateForm.value.rate,quantity:this.validateForm.value.quantity,farmer_name:this.validateForm.value.farmer.name,farmer_id:this.validateForm.value.farmer._id,unit_wise:this.switchValue,notes:this.validateForm.value.notes,customer_balance_amount:this.validateForm.value.customer.balance_amount};this.edit?this.mainService.updateBill(this.bill_data._id,n).subscribe(o=>{this.message.create("success","Bill updated Successfully"),this.loading=!1,this.validateForm.controls.quantity.reset(),this.validateForm.controls.notes.reset(),this.index=1,this.pageSize=10,this.edit=!1,this.date=new Date,this.getBills()},o=>{console.log("get customers err ",o),this.loading=!1}):this.mainService.createBill(n).subscribe(o=>{this.message.create("success","Bill added Successfully"),this.loading=!1,this.validateForm.controls.quantity.reset(),this.validateForm.controls.notes.reset(),this.index=1,this.pageSize=10,this.getBills()},o=>{console.log("get customers err ",o),this.loading=!1})}else Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}onChange(t){}reset(){this.validateForm.controls.quantity.reset(),this.validateForm.controls.rate.reset(),this.validateForm.controls.notes.reset(),this.edit=!1,this.switchValue=!1}deleteConfirm(t){this.loading=!0,this.mainService.removeBill(t).subscribe(n=>{this.loading=!1,n&&n.success&&(this.message.create("success",n.message),this.getBills())},n=>{console.log("get customers err ",n),this.loading=!1})}cancel(){}onPageSizeChange(t){this.pageSize=t,this.getBills()}onPageChange(t){this.index=t,this.getBills()}editBill(t){this.edit=!0,this.bill_data=t,this.billId=t._id,this.date=t.bill_date;let n=this.customers.find(m=>m._id===t.customer_id),o=this.vegetablesList.find(m=>m._id===t.vegetable_id),s=this.farmersList.find(m=>m._id===t.farmer_id);this.validateForm.controls.customer.setValue(n),this.validateForm.controls.notes.setValue(t.notes),this.validateForm.controls.quantity.setValue(t.quantity),this.validateForm.controls.rate.setValue(t.rate),this.validateForm.controls.vegetables.setValue(o),this.validateForm.controls.farmer.setValue(s),this.switchValue=t.unit_wise}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(r.QS),e.Y36(e.SBq),e.Y36(C.dD),e.Y36(S.J),e.Y36(Z.y))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-bill"]],decls:107,vars:60,consts:[[1,"customer-form"],["nz-row",""],["nz-col","","nzSpan","24"],[1,"text-center"],["nz-col","","nzSpan","12"],["nz-form","",3,"formGroup","ngSubmit"],["nz-col","","nzSpan","14"],[3,"nzSm","nzXs"],["formControlName","date",3,"ngModel","nzAllowClear","nzDisabled","ngModelChange"],["nzRequired","",3,"nzSm","nzXs"],["nzShowSearch","","nzAllowClear","","formControlName","customer","id","customerSelection",3,"nzAutoFocus"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","quantityNumber","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Add quantity!",3,"nzSm","nzXs"],["id","quantityNumber","formControlName","quantity",3,"nzMin","nzStep"],["nzFor","rate","nzRequired","",3,"nzSm","nzXs"],["nzErrorTip","Add Rate!",3,"nzSm","nzXs"],["id","rate","formControlName","rate",3,"nzMin","nzStep"],["nz-col","","nzSpan","10"],[3,"ngModel","ngModelOptions","ngModelChange"],["nzFor","vegetables","nzRequired","",3,"nzSm","nzXs"],["nzShowSearch","","nzAllowClear","","formControlName","vegetables",1,"phone-selects"],["nzFor","farmer","nzRequired","",3,"nzSm","nzXs"],["nzShowSearch","","nzAllowClear","","formControlName","farmer",1,"phone-selects"],["nzFor","notes",3,"nzSm","nzXs"],["nzErrorTip","Please input your notes!",3,"nzSm","nzXs","nzValidateStatus"],[1,"ant-input-affix-wrapper-textarea-with-clear-btn",3,"nzSuffix"],["nz-input","","formControlName","notes","placeholder","Notes"],["textAreaClearNotes",""],["nz-col","",3,"nzSpan","nzOffset"],[1,"register-area"],["nz-button","","nzType","primary"],["nz-button","","nzType","default",3,"click"],[3,"nzData","nzLoading","nzShowPagination"],["basicTable",""],[4,"ngFor","ngForOf"],[1,"text-right"],[3,"nzPageIndex","nzTotal","nzShowSizeChanger","nzPageSize","nzPageIndexChange","nzPageSizeChange"],[3,"nzLabel","nzValue"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nz-tooltip","","nzTooltipTitle","Edit Bill","nzTooltipPlacement","left",3,"click"],["nz-icon","","nzType","edit","nzTheme","fill"],["nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this Bill","nzPopconfirmPlacement","bottom","nz-tooltip","","nzTooltipTitle","Remove Bill","nzTooltipPlacement","right",3,"nzOnConfirm","nzOnCancel"],["nz-icon","","nzType","delete","nzTheme","fill"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),e._uU(4,"Customer Bills"),e.qZA()()(),e.TgZ(5,"div",1)(6,"div",4)(7,"form",5),e.NdJ("ngSubmit",function(){return n.submitForm()}),e.TgZ(8,"div",1)(9,"div",6)(10,"nz-form-item")(11,"nz-form-label",7),e._uU(12,"Date"),e.qZA(),e.TgZ(13,"nz-form-control",7)(14,"nz-date-picker",8),e.NdJ("ngModelChange",function(s){return n.date=s})("ngModelChange",function(s){return n.onChange(s)}),e.qZA()()()()(),e.TgZ(15,"div",1)(16,"div",6)(17,"nz-form-item")(18,"nz-form-label",9)(19,"span"),e._uU(20,"Customer"),e.qZA()(),e.TgZ(21,"nz-form-control",7)(22,"nz-select",10),e.YNc(23,O,1,2,"nz-option",11),e.qZA()()()()(),e.TgZ(24,"div",1)(25,"div",6)(26,"nz-form-item")(27,"nz-form-label",12)(28,"span"),e._uU(29,"Quantity"),e.qZA()(),e.TgZ(30,"nz-form-control",13),e._UZ(31,"nz-input-number",14),e.qZA()()()(),e.TgZ(32,"div",1)(33,"div",6)(34,"nz-form-item")(35,"nz-form-label",15)(36,"span"),e._uU(37,"Rate"),e.qZA()(),e.TgZ(38,"nz-form-control",16),e._UZ(39,"nz-input-number",17),e.qZA()()(),e.TgZ(40,"div",18)(41,"nz-form-item")(42,"nz-form-label",7)(43,"span"),e._uU(44,"Unit wise"),e.qZA()(),e.TgZ(45,"nz-form-control",7)(46,"nz-switch",19),e.NdJ("ngModelChange",function(s){return n.switchValue=s}),e.qZA()()()()(),e.TgZ(47,"div",1)(48,"div",6)(49,"nz-form-item")(50,"nz-form-label",20)(51,"span"),e._uU(52,"Vegetables"),e.qZA()(),e.TgZ(53,"nz-form-control",7)(54,"nz-select",21),e.YNc(55,Q,1,2,"nz-option",11),e.qZA()()()()(),e.TgZ(56,"div",1)(57,"div",6)(58,"nz-form-item")(59,"nz-form-label",22)(60,"span"),e._uU(61,"Farmer"),e.qZA()(),e.TgZ(62,"nz-form-control",7)(63,"nz-select",23),e.YNc(64,U,1,2,"nz-option",11),e.qZA()()()()(),e.TgZ(65,"div",1)(66,"div",6)(67,"nz-form-item")(68,"nz-form-label",24),e._uU(69,"Notes"),e.qZA(),e.TgZ(70,"nz-form-control",25)(71,"nz-input-group",26),e._UZ(72,"textarea",27),e.qZA(),e.YNc(73,V,1,1,"ng-template",null,28,e.W1O),e.qZA()()()(),e.TgZ(75,"div",1)(76,"div",29)(77,"nz-form-item",30)(78,"nz-form-control")(79,"button",31),e._uU(80),e.qZA(),e._uU(81,"\xa0 "),e.TgZ(82,"button",32),e.NdJ("click",function(){return n.reset()}),e._uU(83,"Reset"),e.qZA()()()()()()(),e.TgZ(84,"div",4)(85,"nz-table",33,34)(87,"thead")(88,"tr")(89,"th"),e._uU(90,"Name"),e.qZA(),e.TgZ(91,"th"),e._uU(92,"Item"),e.qZA(),e.TgZ(93,"th"),e._uU(94,"Quantity"),e.qZA(),e.TgZ(95,"th"),e._uU(96,"Rate"),e.qZA(),e.TgZ(97,"th"),e._uU(98,"Total"),e.qZA(),e.TgZ(99,"th"),e._uU(100,"Actions"),e.qZA()()(),e.TgZ(101,"tbody"),e.YNc(102,P,17,5,"tr",35),e.qZA()(),e.TgZ(103,"div",36),e._UZ(104,"br"),e.TgZ(105,"nz-pagination",37),e.NdJ("nzPageIndexChange",function(s){return n.onPageChange(s)})("nzPageSizeChange",function(s){return n.onPageSizeChange(s)}),e.qZA(),e._UZ(106,"br"),e.qZA()()()()),2&t){const o=e.MAs(74);e.xp6(7),e.Q6J("formGroup",n.validateForm),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("ngModel",n.date)("nzAllowClear",!1)("nzDisabled",n.dateDisable),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("nzAutoFocus",!0),e.xp6(1),e.Q6J("ngForOf",n.customers),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("nzMin",1)("nzStep",1),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("nzMin",1)("nzStep",1),e.xp6(3),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(1),e.Q6J("ngModel",n.switchValue)("ngModelOptions",e.DdM(59,D)),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(2),e.Q6J("ngForOf",n.vegetablesList),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(3),e.Q6J("nzSm",14)("nzXs",24),e.xp6(2),e.Q6J("ngForOf",n.farmersList),e.xp6(4),e.Q6J("nzSm",6)("nzXs",24),e.xp6(2),e.Q6J("nzSm",14)("nzXs",24)("nzValidateStatus",n.validateForm.controls.notes),e.xp6(1),e.Q6J("nzSuffix",o),e.xp6(5),e.Q6J("nzSpan",12)("nzOffset",6),e.xp6(4),e.Oqu(n.edit?"Update":"Create"),e.xp6(5),e.Q6J("nzData",n.billsData)("nzLoading",n.loading)("nzShowPagination",!1),e.xp6(17),e.Q6J("ngForOf",n.billsData),e.xp6(3),e.Q6J("nzPageIndex",n.index)("nzTotal",n.total)("nzShowSizeChanger",!0)("nzPageSize",n.pageSize)}},dependencies:[u.sg,u.O5,T.SY,b.Ls,f.t3,f.SK,d.Lr,d.Nx,d.iK,d.Fd,r._Y,r.Fj,r.JJ,r.JL,r.On,r.sg,r.u,z.Zp,z.gB,z.ke,v.Ip,v.Vq,A.ix,x.w,B.dQ,F._V,q.uw,c.N8,c.Uo,c._C,c.Om,c.p0,c.$Z,J.JW,y.i,M.dE],styles:["[nz-form][_ngcontent-%COMP%]{max-width:600px}.phone-select[_ngcontent-%COMP%]{width:70px}.register-are[_ngcontent-%COMP%]{margin-bottom:8px}.customer-form[_ngcontent-%COMP%]{margin-top:20px}nz-date-picker[_ngcontent-%COMP%]{margin:0 8px 12px 0}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}"]}),i})()}];let w=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[h.Bz.forChild(X),h.Bz]}),i})();var _=l(4973);let I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,w,_.m,_.m]}),i})()}}]);