import { Component } from "@angular/core";
import { UserDetails } from "../Models/userDetails.model";
import { AppConstant } from "../Services/appConstant.service";
import { Router } from "@angular/router";
import { CommonService } from "../Services/commonService.service";


@Component({
    templateUrl:'./login.component.html',
    styleUrls:['./Login.component.css']
})
export class LoginComponent{
public validate:string;
public users:UserDetails;
    userDetails=new UserDetails();
    public list:any=[];
    constructor(private AppConstant:AppConstant,private routernavigate:Router,private commons:CommonService){

    }
    validateUser(){
        if(this.userDetails.UserName!="" && this.userDetails.Password!="" )
        {
       this.commons.Validateuser(this.userDetails).subscribe((data)=>{
       this.AppConstant.userdetail=data;
       window.localStorage.setItem('name', data.UserName);
       window.localStorage.setItem('Role', data.Role);
       if((this.AppConstant.userdetail) && (this.AppConstant.userdetail.UserName!=null))
       {
   window.localStorage.setItem("JWTToken",data.Password);
        
       this.commons.GetBasicDetails().subscribe((data)=>{
           this.list=data;
           this.AppConstant.AllRecords=this.list;
           this.routernavigate.navigate(["homePage"]);
       })
       
    }
       });
    }
    else
 this.validate="Please Fill Login Details";
  
        
    }
}