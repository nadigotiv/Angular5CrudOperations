import { Route, Routes } from "@angular/router";
import { LoginComponent } from "./Login/login.component";
import { BasicDetailsComponent } from "./HomePage/basicDetails.component";
import { AddNewRecordComponent } from "./AddRecord/addNewRecord.component";
import { AuthGuard } from "./Services/canActivate.service";

export const routeDetails:Routes=[
{path:'',redirectTo:'Login',pathMatch:'full'},
{path:'Login',component:LoginComponent},
{path:'homePage',component:BasicDetailsComponent},
{path:'AddNewRecord',component:AddNewRecordComponent,canActivate:[AuthGuard]}
]