"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[588],{588:(M,d,l)=>{l.r(d),l.d(d,{BillPrintModule:()=>x});var a=l(6895),c=l(4575),g=l(5439),t=l(4650),m=l(2566),p=l(433),h=l(5259),u=l(1949);function Z(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td",16),t._uU(2),t.qZA(),t.TgZ(3,"td",16),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",15),t._uU(8),t.qZA(),t.TgZ(9,"td",15),t._uU(10),t.qZA()()),2&i){const n=o.$implicit;t.xp6(2),t.Oqu(n.vegetable_name),t.xp6(2),t.Oqu(n.notes),t.xp6(2),t.Oqu(n.quantity),t.xp6(2),t.Oqu(n.rate),t.xp6(2),t.Oqu(n.total_amount)}}function _(i,o){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t._UZ(6,"td")(7,"td")(8,"td"),t.qZA()),2&i){const n=o.$implicit;t.xp6(2),t.Oqu(t.xi3(3,2,n.collection_date,"dd/MM/yyyy")),t.xp6(3),t.Oqu(n.amount)}}function C(i,o){if(1&i&&(t.TgZ(0,"div",5)(1,"table",6)(2,"tr")(3,"td",7)(4,"span",8),t._uU(5,"Sri Sainath Traders"),t.qZA(),t._uU(6," (9640443322) "),t.qZA()(),t.TgZ(7,"tr")(8,"td",9),t._uU(9),t.qZA(),t.TgZ(10,"td",10)(11,"span"),t._uU(12),t.qZA(),t._uU(13),t.ALo(14,"date"),t.qZA()(),t.TgZ(15,"tr")(16,"td",11),t._UZ(17,"hr",12),t.qZA()(),t.YNc(18,Z,11,5,"tr",13),t.TgZ(19,"tr"),t._UZ(20,"td")(21,"td")(22,"td")(23,"td"),t.TgZ(24,"td"),t._UZ(25,"hr",12),t.qZA()(),t.TgZ(26,"tr")(27,"td",14),t._uU(28,"Last 2 Collections"),t.qZA(),t._UZ(29,"td")(30,"td")(31,"td"),t.TgZ(32,"td",15),t._uU(33),t.qZA()(),t.YNc(34,_,9,5,"tr",13),t.TgZ(35,"tr"),t._UZ(36,"td")(37,"td")(38,"td")(39,"td")(40,"td"),t.qZA(),t.TgZ(41,"tr"),t._UZ(42,"td")(43,"td")(44,"td")(45,"td"),t.TgZ(46,"td"),t._UZ(47,"hr",12),t.qZA()(),t.TgZ(48,"tr"),t._UZ(49,"td")(50,"td")(51,"td")(52,"td"),t.TgZ(53,"td",15),t._uU(54),t.qZA(),t._UZ(55,"td"),t.qZA(),t.TgZ(56,"tr"),t._UZ(57,"td")(58,"td")(59,"td")(60,"td"),t.TgZ(61,"td"),t._UZ(62,"hr",12),t.qZA()(),t.TgZ(63,"tr"),t._UZ(64,"td")(65,"td")(66,"td")(67,"td"),t.TgZ(68,"td",15),t._uU(69),t.qZA()()()()),2&i){const n=o.$implicit,e=t.oxw();t.xp6(9),t.Oqu(n.customer_name),t.xp6(3),t.Oqu(0===e.day?"Sun,":1===e.day?"Mon,":2===e.day?"Tue,":3===e.day?"Wed,":4===e.day?"Thu,":5===e.day?"Fri,":6===e.day?"Sat,":""),t.xp6(1),t.hij(" ",t.xi3(14,8,e.date,"dd-MM-yyyy")," "),t.xp6(5),t.Q6J("ngForOf",n.records),t.xp6(15),t.Oqu(n.total_amount),t.xp6(1),t.Q6J("ngForOf",n.collections),t.xp6(20),t.Oqu(n.balance),t.xp6(15),t.Oqu(n.total_amount)}}const f=[{path:"",component:(()=>{class i{constructor(n){this.mainService=n,this.isVisible=!1,this.todayDate="",this.day=0,this.tablestring="",this.printData=[],this.collectionsData=[],this.date=new Date}ngOnInit(){const n=new Date;this.day=this.date.getDay(),this.todayDate=g(n).format("DD-MM-YYYY"),this.printCustomerBills()}showModal(){this.isVisible=!0}handleOk(){this.isVisible=!1}handleCancel(){this.isVisible=!1}print(){window.open()}getbalance_statement(){this.mainService.get_balance_statement({}).subscribe(e=>{e.table&&(this.tablestring=e.table)},e=>{console.log("get customers err ",e)})}getCollectionsByCustomerId(n){this.mainService.getCollectionsByCustomerId(n).subscribe(e=>{let s=[];e&&e.length>0&&(s.push(e[0]),s.push(e[1])),this.printData.forEach(r=>{r.cusomer_id===n&&(r.collections=s)})},e=>(console.log("get customers err ",e),e))}printCustomerBills(){this.day=this.date.getDay();const s={skip:0,limit:1e3,bill_date:g(this.date).format("YYYY-MM-DD")};this.mainService.printCustomerBills(s).subscribe(r=>{this.printData=r&&r.length>0?r:[],this.mainService.spinning.emit(!1)},r=>{console.log("get customers err ",r),this.mainService.spinning.emit(!1)})}getCollections(){this.mainService.getCollections({}).subscribe(e=>{this.collectionsData=e.data,this.printCustomerBills()},e=>{console.log("get customers err ",e),this.collectionsData=[]})}onChange(n){this.printCustomerBills()}}return i.\u0275fac=function(n){return new(n||i)(t.Y36(m.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-bill-print"]],decls:9,vars:3,consts:[[1,"header-print"],[1,"date-picker"],[3,"ngModel","nzAllowClear","ngModelChange"],[1,"container"],["class","bill",4,"ngFor","ngForOf"],[1,"bill"],[2,"width","100%"],["colspan","5",1,"text-center"],[1,"shop-title"],["colspan","4"],[2,"text-align","right"],["colspan","5",2,"width","100%"],[2,"border","1px dashed #000"],[4,"ngFor","ngForOf"],[2,"text-decoration","underline"],[1,"number"],[1,"upper-case"]],template:function(n,e){1&n&&(t.TgZ(0,"h2",0),t._uU(1,"Bill Print"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"br"),t.TgZ(4,"nz-date-picker",2),t.NdJ("ngModelChange",function(r){return e.date=r})("ngModelChange",function(r){return e.onChange(r)}),t.qZA(),t._UZ(5,"br"),t.qZA(),t.TgZ(6,"body")(7,"div",3),t.YNc(8,C,70,11,"div",4),t.qZA()()),2&n&&(t.xp6(4),t.Q6J("ngModel",e.date)("nzAllowClear",!1),t.xp6(4),t.Q6J("ngForOf",e.printData))},dependencies:[a.sg,p.JJ,p.On,h.uw,u.Uo,u.$Z,a.uU],styles:[".shop-title[_ngcontent-%COMP%]{color:#06f706}.print-box-width[_ngcontent-%COMP%]{width:386px;height:365px}body[_ngcontent-%COMP%]{margin:0;padding:0}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,2fr);grid-gap:20px}.bill[_ngcontent-%COMP%]{width:396.85px;height:374.7px;border:1px solid #000;padding:5px;box-sizing:border-box;page-break-inside:avoid}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}.number[_ngcontent-%COMP%]{text-align:right!important}.upper-case[_ngcontent-%COMP%]{text-transform:uppercase}@page{size:A4;margin:5mm 5mm 5mm -8mm}@media print{body[_ngcontent-%COMP%]{width:0;height:0}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,2fr);margin:0;padding:0}.bill[_ngcontent-%COMP%]{width:396.85px;height:374.7px;border:1px solid #000;box-sizing:border-box;page-break-inside:avoid}.header-print[_ngcontent-%COMP%], .date-picker[_ngcontent-%COMP%]{display:none}}h2[_ngcontent-%COMP%]{text-align:center}"]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(f),c.Bz]}),i})();var b=l(9912);let x=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[a.ez,b.m,y]}),i})()}}]);