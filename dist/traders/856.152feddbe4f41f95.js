"use strict";(self.webpackChunktraders=self.webpackChunktraders||[]).push([[856],{856:(y,p,t)=>{t.r(p),t.d(p,{ForgotpasswordModule:()=>P});var f=t(6895),d=t(2564),s=t(433),o=t(4650),c=t(9651),w=t(2566),u=t(3679),m=t(6704),z=t(5635),h=t(6616),v=t(7044),F=t(1811);const S=[{path:"",component:(()=>{class r{constructor(n,e,i,g){this.fb=n,this.message=e,this.router=i,this.mainService=g,sessionStorage.clear()}ngOnInit(){this.forgotPasswordForm=this.fb.group({username:[null,[s.kI.required]],new_password:[null,[s.kI.required]],confirm_password:[null,[s.kI.required]]})}ngOnDestroy(){}submitForm(){this.forgotPasswordForm.valid?this.mainService.resetpassword({username:this.forgotPasswordForm.value.username,new_password:this.forgotPasswordForm.value.new_password,confirm_password:this.forgotPasswordForm.value.confirm_password}).subscribe(l=>{this.message.create("success",l.message),this.router.navigateByUrl("/login")},l=>{console.log("login err ",l),this.message.create("error","Username is not found")}):Object.values(this.forgotPasswordForm.controls).forEach(n=>{n.invalid&&(n.markAsDirty(),n.updateValueAndValidity({onlySelf:!0}))})}loginPage(){this.router.navigateByUrl("/login")}}return r.\u0275fac=function(n){return new(n||r)(o.Y36(s.QS),o.Y36(c.dD),o.Y36(d.F0),o.Y36(w.J))},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-forgotpassword"]],decls:29,vars:10,consts:[["nz-row",""],["nz-col","","nzSpan","8"],["nz-col","","nzSpan","8",1,"login-card"],[1,"text-center"],["src","../../../assets/images/SST.jpg","alt","Sri Sainath Traders",1,"img-logo-login"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","Username required",3,"nzSm","nzXs"],["nz-input","","type","text","id","username","formControlName","username","placeholder","Username"],["nzErrorTip","New password required and should be minimum 8 characters",3,"nzSm","nzXs"],["nz-input","","type","password","id","new_pwd","formControlName","new_password","placeholder","New Password","minlength","8"],["nzErrorTip","Confirm password required",3,"nzSm","nzXs"],["nz-input","","type","password","id","confirm_pwd","formControlName","confirm_password","placeholder","Confirm Password","minlength","8"],["nz-row","",1,"register"],[3,"nzSpan","nzOffset"],["nz-button","","nzType","primary",3,"disabled"],[2,"text-align","center"],["nz-button","","nzType","link",1,"forgot-password",3,"click"]],template:function(n,e){1&n&&(o.TgZ(0,"div")(1,"div",0),o._UZ(2,"div",1),o.TgZ(3,"div",2)(4,"div",3),o._UZ(5,"img",4),o.qZA(),o.TgZ(6,"div",3)(7,"h2"),o._uU(8,"Reset Password"),o.qZA()(),o.TgZ(9,"form",5),o.NdJ("ngSubmit",function(){return e.submitForm()}),o.TgZ(10,"nz-form-item")(11,"nz-form-control",6),o._UZ(12,"input",7),o.qZA()(),o.TgZ(13,"nz-form-item")(14,"nz-form-control",8),o._UZ(15,"input",9),o.qZA()(),o.TgZ(16,"nz-form-item")(17,"nz-form-control",10),o._UZ(18,"input",11),o.qZA()(),o.TgZ(19,"nz-form-item",12)(20,"nz-form-control",13)(21,"button",14),o._uU(22,"Reset Password"),o.qZA()()()(),o.TgZ(23,"div",15)(24,"h3"),o._uU(25,"Already have an account ?"),o.qZA(),o.TgZ(26,"a",16),o.NdJ("click",function(){return e.loginPage()}),o._uU(27,"Sign in"),o.qZA()()(),o._UZ(28,"div",1),o.qZA()()),2&n&&(o.xp6(9),o.Q6J("formGroup",e.forgotPasswordForm),o.xp6(2),o.Q6J("nzSm",16)("nzXs",24),o.xp6(3),o.Q6J("nzSm",16)("nzXs",24),o.xp6(3),o.Q6J("nzSm",16)("nzXs",24),o.xp6(3),o.Q6J("nzSpan",22)("nzOffset",3),o.xp6(1),o.Q6J("disabled",!e.forgotPasswordForm.valid))},dependencies:[s._Y,s.Fj,s.JJ,s.JL,s.wO,u.t3,u.SK,m.Lr,m.Nx,m.Fd,s.sg,s.u,z.Zp,h.ix,v.w,F.dQ],styles:["nz-form-item.ant-form-item[_ngcontent-%COMP%]{transition:none;width:100%}.login-form[_ngcontent-%COMP%]{margin-top:25px;margin-left:25%}nz-form-item.ant-form-item[_ngcontent-%COMP%], .register-area[_ngcontent-%COMP%]{transition:none;width:100%}.img-logo-login[_ngcontent-%COMP%]{width:150px;height:auto}.login-card[_ngcontent-%COMP%]{border-radius:8px;margin-top:5%;background-color:#fff;padding:10px}.forgot-password[_ngcontent-%COMP%]:hover{border:1px solid #1890ff}.text-center[_ngcontent-%COMP%]{text-align:center}"]}),r})()}];let Z=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[d.Bz.forChild(S),d.Bz]}),r})();var C=t(4973);let P=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[f.ez,s.u5,C.m,Z]}),r})()}}]);