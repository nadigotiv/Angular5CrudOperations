import { Component,Inject } from "@angular/core";
import { AppConstant } from "../Services/appConstant.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CommonService } from "../Services/commonService.service";
import { Router } from "@angular/router";
@Component({
    templateUrl:'./delete.component.html'
})
export class DeleteComponent{
    private Id:number=0;
    constructor(public dialogRef: MatDialogRef<DeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,private constant:AppConstant,private common:CommonService,private rout:Router){
   this.Id=data.id;
}

Yes(){
//---Need to write Delete Login Record from DataBase---------------//

 this.common.DeleteRecord(this.Id).subscribe((data)=>{
     alert("deleted SuccessFully");
     for(let i=0;i<this.constant.AllRecords.length;i++)
     {
         if(this.constant.AllRecords[i].Id==this.Id)
          this.constant.AllRecords.splice(i,1);
     }

 })
    this.dialogRef.close();
    
    this.rout.navigate(["homePage"]);
}
No(){

    this.dialogRef.close();
}
}