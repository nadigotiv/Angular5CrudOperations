import { Injectable } from "@angular/core";
import { CommonService } from "./commonService.service";
import { UserDetails } from "../Models/userDetails.model";
import { BasicDetails } from "../Models/basicDetails.model";

@Injectable()
export class AppConstant{
    public userdetail:UserDetails;
    
public AllRecords:BasicDetails[]=[];
   
    constructor(private commonService:CommonService)
    {

    }
    // Validateuser(userdetails:UserDetails){
    //     return this.commonService.Validateuser(userdetails).subscribe((data)=>{
    //         this.userdetail=data;
    //     });
    // }
}