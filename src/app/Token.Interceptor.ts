import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter, tap } from 'rxjs/operators';
import{HttpClient} from "@angular/common/http"
import { AppConstant } from "./Services/appConstant.service";
@Injectable()
export class TokenInterceptor implements HttpInterceptor{


    private TokenGenerateUrl="http://localhost:50813/api/token/denis/denis";
    constructor(private http:HttpClient,private appconst:AppConstant){
        setInterval(() => {
            this.http.get(this.TokenGenerateUrl).subscribe((data)=>{
               console.log("Genarated Token"+data.toString())
               window.localStorage.setItem("JWTToken",data.toString());
            }) 
          }, 1000 * 10); 
    }
    intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
        let _req=req.clone({
            setHeaders:{
                "Authorization":"Bearer "+window.localStorage.getItem("JWTToken")
            }
        });
    return next.handle(_req)
    .pipe(
        tap(event => {
          if (event instanceof HttpResponse) {
           
            console.log("ok Testing");
          }
        }, error => {
          console.error('NICE ERROR', error);
        })
    )
    // .do((event:HttpEvent<any>)=>{
    //     if(event instanceof HttpResponse){
    //        alert("ok");
    //     }
    // },(err:any)=>{
    //     if(err instanceof HttpErrorResponse){
    //         if(err.status==401){

    //         }
    //     }
        
    //     })
    }
   
}
