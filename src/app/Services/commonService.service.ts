import { Injectable } from "@angular/core";
import{HttpClient,HttpHeaders} from "@angular/common/http"
import { UserDetails } from "../Models/userDetails.model";
import { BasicDetails } from "../Models/basicDetails.model";
@Injectable()
export class CommonService {
    //creating required Properties

private LoginUrl="http://localhost:50813/api/Login";//this is login Controller in api
private BasicDetailsUrl="http://localhost:50813/api/values";//this is basic details URL

constructor(private http:HttpClient)
{
//   setInterval(() => {
//              this.http.get(this.TokenGenerateUrl).subscribe((data)=>{
//                 console.log("Genarated Token"+data.toString())
//               //this.JWTToken=data.toString();
//              }) 
//            }, 1000 * 40); 

}


public httpoption={
 headers:new HttpHeaders({
     "Content-Type":"application/json",
     
 })
}

//this is for Validating Login Details 
Validateuser(userdetail:UserDetails){
    let ActualUrl=this.LoginUrl+"/"+userdetail.UserName+"/"+userdetail.Password;
   return this.http.get<UserDetails>(ActualUrl);
}
//this is for Getting all basic Details when logged user Successfully
GetBasicDetails(){
    return this.http.get<BasicDetails[]>(this.BasicDetailsUrl,this.httpoption)
}
//this is for Deleting The Record Based on Id 
DeleteRecord(id:number){
return this.http.delete(this.BasicDetailsUrl+"/"+id,this.httpoption);
}
//this is for update the record
UpdateRecord(basiDetailsUpdate:BasicDetails)
{
    return this.http.put(this.BasicDetailsUrl+"/"+basiDetailsUpdate[0].Id,basiDetailsUpdate[0],this.httpoption);
}
//this is Saving New record
AddNewRecord(basic:BasicDetails)
{
return this.http.post(this.BasicDetailsUrl,basic,this.httpoption);
}
}