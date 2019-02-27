import { Component, Inject, OnInit } from "@angular/core";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { AppConstant } from "../Services/appConstant.service";
import { BasicDetails } from "../Models/basicDetails.model";
import { CommonService } from "../Services/commonService.service";
@Component({
templateUrl:"./updateDetails.component.html"
})
export class UpdateDetailsComponent implements OnInit{
    public SingleUserDetails:BasicDetails
    public list:any=[];
constructor(public dialogRef: MatDialogRef<UpdateDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private constant:AppConstant,private common:CommonService){
       
this.list=this.constant.AllRecords.filter(x=>x.Id===data.id);
this.SingleUserDetails=this.list;
}
ngOnInit(){
   
}
Update(){
 this.common.UpdateRecord(this.SingleUserDetails).subscribe((data)=>{
     alert("Updated Records");
     //here i am doing update tht record 
   
    
     
 })
    
    this.dialogRef.close();
}
Cancel(){
    alert("are you sure ,you want to close this stuff");
    this.dialogRef.close();
}
}