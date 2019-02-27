import { Component } from "@angular/core";
import { BasicDetails } from "../Models/basicDetails.model";
import { Router } from "@angular/router";
import { CommonService } from "../Services/commonService.service";
import { FormGroup,FormBuilder,Validators } from "@angular/forms";

@Component({
templateUrl:"./addNewRecord.component.html"
})
export class AddNewRecordComponent{
    NewRecord=new BasicDetails();
    myForm: FormGroup;
public patternd:any=new RegExp("^[a-zA-Z]+$");
    constructor(private rout:Router,private common:CommonService,private Fb:FormBuilder){

    }
    ngOnInit() {
        this.myForm = this.Fb.group({
            Name: ['', [Validators.required,Validators.minLength(4),Validators.pattern('^[a-zA-Z]+$')]],
            Age: ['', [Validators.required]],
            DOB: ['', [Validators.required]],
            Qualification: ['', [Validators.required]],
            Work: ['', [Validators.required]],
            Salary: ['', [Validators.required]],
            Phone: ['', [Validators.required,Validators.minLength(10),Validators.pattern('[0-9]+')]]

        });
        }
    //this is for button Submit changes ------------------
    onSubmit(form:any){

       
    

       
        var dateObject = new Date(form.value.DOB);//bidning those form values to Our Model 
      
        this.NewRecord=form.value;
        this.NewRecord.DOB=dateObject;
      
this.common.AddNewRecord(this.NewRecord).subscribe((data)=>{
    alert("Record Added Successfully");
    this.rout.navigate(["homePage"]);
    
})
        console.log(this.NewRecord);
    }
    GoBack(){
this.rout.navigate(["homePage"]);
    }
}