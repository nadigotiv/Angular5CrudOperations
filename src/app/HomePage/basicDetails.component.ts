import { Component, OnInit } from "@angular/core";
import { AppConstant } from "../Services/appConstant.service";
import { BasicDetails } from "../Models/basicDetails.model";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UpdateDetailsComponent} from "../DialogDetails/updateDetail.component"
import { CommonService } from "../Services/commonService.service";
import { Router } from "@angular/router";
import{DeleteComponent} from "../DialogDetails/delete.component"

@Component({
    templateUrl:"./basicDetails.component.html"
})
export class BasicDetailsComponent implements OnInit{
    public LoggedUsername:string;
    public basicDetals:BasicDetails[]=[];
    queryString:string="";
    constructor(private appconstant:AppConstant,public dialog: MatDialog,private common :CommonService,private rout:Router){

    }
    ngOnInit(){
       
        if((window.localStorage.getItem("name")!=null))
       {
       this.common.GetBasicDetails().subscribe((data)=>{
           
           this.appconstant.AllRecords=data;
           this.basicDetals=this.appconstant.AllRecords;
          
       })
    }
    else
    {
        this.rout.navigate(["Login"]);
    }
     

        this.LoggedUsername=window.localStorage.getItem("name");
    }

    //this code for model dailog
    openDialog(id:number,Name:string): void {
        if(Name=='Update')
        {
        const dialogRef = this.dialog.open(UpdateDetailsComponent, {
          data:{
              id:id
          }
         
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          
        });
      }
      else
      {
        const dialogRef = this.dialog.open(DeleteComponent, {
            data:{
                id:id
            }
           
          });
      
          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            
          });
      }
      
    }
    
    
      LogOut(){
       window.localStorage.removeItem('name');
      window.localStorage.removeItem("JWTToken");
      
       this.rout.navigate(["Login"]);
      }
      AddNewRecord(){
          this.rout.navigate(["AddNewRecord"]);
      }
    
}