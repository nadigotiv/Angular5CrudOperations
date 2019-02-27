import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { routeDetails } from './app.Routes';
import{ RouterModule} from "@angular/router";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { CommonService } from './Services/commonService.service';
import { AppConstant } from './Services/appConstant.service';
import{} from "@angular/common"
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicDetailsComponent } from './HomePage/basicDetails.component';
import {MatDialogModule} from '@angular/material/dialog'
import {UpdateDetailsComponent} from "./DialogDetails/updateDetail.component"
import {DeleteComponent} from "./DialogDetails/delete.component"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNewRecordComponent } from './AddRecord/addNewRecord.component';
import { AuthGuard } from './Services/canActivate.service';
import {  TokenInterceptor } from './Token.Interceptor';
import { SearchDataPipe } from './Services/SearchDataPipe.pipe';
import { ShadowDirective } from './Services/ShadowDirecive.directive';
import { SmartText } from './Services/text.directive';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BasicDetailsComponent,
    UpdateDetailsComponent,
    DeleteComponent,
    AddNewRecordComponent,
    SearchDataPipe,
    ShadowDirective,
    SmartText
  ],

  imports: [
    BrowserModule,
    RouterModule.forRoot(routeDetails),
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
   

  ],
  entryComponents:[
    UpdateDetailsComponent,
    DeleteComponent
  ],
  providers: [{
provide:HTTP_INTERCEPTORS,
useClass:TokenInterceptor,
multi:true

  },CommonService,AppConstant,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
