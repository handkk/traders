"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[588],{588:(S,g,s)=>{s.r(g),s.d(g,{BillPrintModule:()=>q});var u=s(6895),p=s(4575),m=s(5439),f=s(9646),y=s(4351),x=s(4004),_=s(8746),t=s(4650),A=s(2566),h=s(433),M=s(5259),Z=s(1949);function b(i,a){if(1&i&&(t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.qZA(),t.TgZ(3,"td",17),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",16),t._uU(8),t.qZA(),t.TgZ(9,"td",16),t._uU(10),t.qZA()()),2&i){const e=a.$implicit;t.xp6(2),t.Oqu(e.vegetable_name),t.xp6(2),t.Oqu(e.notes),t.xp6(2),t.Oqu(e.quantity),t.xp6(2),t.Oqu(e.rate),t.xp6(2),t.Oqu(e.total_amount)}}function T(i,a){if(1&i&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td"),t._uU(5),t.qZA(),t._UZ(6,"td")(7,"td")(8,"td"),t.qZA()),2&i){const e=a.$implicit;t.xp6(2),t.Oqu(t.xi3(3,2,e.collection_date,"dd/MM/yyyy")),t.xp6(3),t.Oqu(e.amount)}}function P(i,a){if(1&i&&(t.TgZ(0,"div",6)(1,"table",7)(2,"tr")(3,"td",8)(4,"span",9),t._uU(5,"Sri Sainath Traders"),t.qZA(),t._uU(6," (9640443322) "),t.qZA()(),t.TgZ(7,"tr")(8,"td",10),t._uU(9),t.qZA(),t.TgZ(10,"td",11)(11,"span"),t._uU(12),t.qZA(),t._uU(13),t.ALo(14,"date"),t.qZA()(),t.TgZ(15,"tr")(16,"td",12),t._UZ(17,"hr",13),t.qZA()(),t.YNc(18,b,11,5,"tr",14),t.TgZ(19,"tr"),t._UZ(20,"td")(21,"td")(22,"td")(23,"td"),t.TgZ(24,"td"),t._UZ(25,"hr",13),t.qZA()(),t.TgZ(26,"tr")(27,"td",15),t._uU(28,"Last 2 Collections"),t.qZA(),t._UZ(29,"td")(30,"td")(31,"td"),t.TgZ(32,"td",16),t._uU(33),t.qZA()(),t.YNc(34,T,9,5,"tr",14),t.TgZ(35,"tr"),t._UZ(36,"td")(37,"td")(38,"td")(39,"td")(40,"td"),t.qZA(),t.TgZ(41,"tr"),t._UZ(42,"td")(43,"td")(44,"td")(45,"td"),t.TgZ(46,"td"),t._UZ(47,"hr",13),t.qZA()(),t.TgZ(48,"tr"),t._UZ(49,"td")(50,"td")(51,"td")(52,"td"),t.TgZ(53,"td",16),t._uU(54),t.qZA(),t._UZ(55,"td"),t.qZA(),t.TgZ(56,"tr"),t._UZ(57,"td")(58,"td")(59,"td")(60,"td"),t.TgZ(61,"td"),t._UZ(62,"hr",13),t.qZA()(),t.TgZ(63,"tr"),t._UZ(64,"td")(65,"td")(66,"td")(67,"td"),t.TgZ(68,"td",16),t._uU(69),t.qZA()()()()),2&i){const e=a.$implicit,n=t.oxw();t.xp6(9),t.Oqu(e.customer_name),t.xp6(3),t.Oqu(0===n.day?"Sun,":1===n.day?"Mon,":2===n.day?"Tue,":3===n.day?"Wed,":4===n.day?"Thu,":5===n.day?"Fri,":6===n.day?"Sat,":""),t.xp6(1),t.hij(" ",t.xi3(14,8,n.date,"dd-MM-yyyy")," "),t.xp6(5),t.Q6J("ngForOf",e.records),t.xp6(15),t.Oqu(e.total_amount),t.xp6(1),t.Q6J("ngForOf",e.collectionData),t.xp6(20),t.Oqu(e.balance),t.xp6(15),t.Oqu(e.total_amount)}}const U=[{path:"",component:(()=>{class i{constructor(e){this.mainService=e,this.isVisible=!1,this.todayDate="",this.day=0,this.tablestring="",this.printData=[],this.collectionsData=[],this.date=new Date,this.maxCount=2,this.breakCount=9,this.finalArray=[]}ngOnInit(){const e=new Date;this.day=this.date.getDay(),this.todayDate=m(e).format("DD-MM-YYYY"),this.printCustomerBills()}showModal(){this.isVisible=!0}handleOk(){this.isVisible=!1}handleCancel(){this.isVisible=!1}print(){window.open()}getbalance_statement(e){this.mainService.get_balance_statement(e).subscribe(n=>{n.table&&(this.tablestring=n.table)},n=>{console.log("get customers err ",n)})}getCollectionsByCustomerId(e){this.mainService.getCollectionsByCustomerId(e).subscribe(n=>{let o=[];n&&n.length>0&&(o.push(n[0]),o.push(n[1])),this.printData.forEach(r=>{r.cusomer_id===e&&(r.collections=o)})},n=>(console.log("get customers err ",n),n))}onReturnDesiredCount(e,n){for(let r of n);}returnSum(e){return e.reduce((n,o)=>o.total_amount+n,0)}maxRecordsCount(e){let o=[];e.forEach((l,C)=>{if(l.records.length>this.breakCount+1){let O=l.records.slice(0,this.breakCount),D=l.records.slice(this.breakCount),d={...l};d.records=O;let c={...l};c.records=D,c.total_amount=this.returnSum(c.records),d.total_amount=this.returnSum(d.records),o.push(d),o.push(c)}else l.total_amount=this.returnSum(l.records),o.push(l)}),this.finalArray=o;let r=o.some(l=>l.records.length>this.breakCount+1);console.log("hasCollectionExceedingLimit",r),r?this.maxRecordsCount(this.finalArray):console.log("filteredArray >>>>>",o)}printCustomerBills(){this.day=this.date.getDay();const o={skip:0,limit:1e3,bill_date:m(this.date).format("YYYY-MM-DD")};this.mainService.printCustomerBills(o).subscribe(r=>{r&&r.length>0?(this.printData=r,this.printData&&(0,f.of)(...this.printData).pipe((0,y.b)(l=>this.mainService.getCollectionsByCustomerId(l.customer_id).pipe((0,x.U)(C=>({item:l,data:C})))),(0,_.x)(()=>{this.maxRecordsCount(r)})).subscribe(l=>{l.item.collectionData=l.data}),console.log("this.printData",this.printData)):this.printData=[],this.mainService.spinning.emit(!1)},r=>{console.log("get customers err ",r),this.mainService.spinning.emit(!1)})}getCollections(){this.mainService.getCollections({}).subscribe(n=>{this.collectionsData=n.data,this.printCustomerBills()},n=>{console.log("get customers err ",n),this.collectionsData=[]})}onChange(e){this.printCustomerBills()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(A.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-bill-print"]],decls:11,vars:3,consts:[[1,"header-print"],[3,"click"],[1,"date-picker"],[3,"ngModel","nzAllowClear","ngModelChange"],[1,"container"],["class","bill",4,"ngFor","ngForOf"],[1,"bill"],[2,"width","100%"],["colspan","5",1,"text-center"],[1,"shop-title"],["colspan","4"],[2,"text-align","right"],["colspan","5",2,"width","100%"],[2,"border","1px dashed #000"],[4,"ngFor","ngForOf"],[2,"text-decoration","underline"],[1,"number"],[1,"upper-case"]],template:function(e,n){1&e&&(t.TgZ(0,"h2",0),t._uU(1,"Bill Print"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){return n.maxRecordsCount(n.finalArray)}),t._uU(3,"check max"),t.qZA(),t.TgZ(4,"div",2),t._UZ(5,"br"),t.TgZ(6,"nz-date-picker",3),t.NdJ("ngModelChange",function(r){return n.date=r})("ngModelChange",function(r){return n.onChange(r)}),t.qZA(),t._UZ(7,"br"),t.qZA(),t.TgZ(8,"body")(9,"div",4),t.YNc(10,P,70,11,"div",5),t.qZA()()),2&e&&(t.xp6(6),t.Q6J("ngModel",n.date)("nzAllowClear",!1),t.xp6(4),t.Q6J("ngForOf",n.finalArray))},dependencies:[u.sg,h.JJ,h.On,M.uw,Z.Uo,Z.$Z,u.uU],styles:[".shop-title[_ngcontent-%COMP%]{color:#06f706}.print-box-width[_ngcontent-%COMP%]{width:386px;height:365px}body[_ngcontent-%COMP%]{margin:0;padding:0}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,2fr);grid-gap:20px}.bill[_ngcontent-%COMP%]{width:396.85px;height:374.7px;border:1px solid #000;padding:5px;box-sizing:border-box;page-break-inside:avoid}tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:12px}.number[_ngcontent-%COMP%]{text-align:right!important}.upper-case[_ngcontent-%COMP%]{text-transform:uppercase}@page{size:A4;margin:5mm 5mm 5mm -8mm}@media print{body[_ngcontent-%COMP%]{width:0;height:0}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,2fr);margin:0;padding:0}.bill[_ngcontent-%COMP%]{width:396.85px;height:374.7px;border:1px solid #000;box-sizing:border-box;page-break-inside:avoid}.header-print[_ngcontent-%COMP%], .date-picker[_ngcontent-%COMP%]{display:none}}h2[_ngcontent-%COMP%]{text-align:center}"]}),i})()}];let v=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(U),p.Bz]}),i})();var B=s(9912);let q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,B.m,v]}),i})()}}]);