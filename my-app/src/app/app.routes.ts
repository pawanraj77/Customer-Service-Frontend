import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { DisplayIssuesComponent } from './components/display-issues/display-issues.component';
import { RaiseIssueComponent } from './components/raise-issue/raise-issue.component';
import { ViewIssuesComponent } from './components/view-issues/view-issues.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'add-employee', component:AddEmployeeComponent},
    {path:'update-employee/:cdsId', component:UpdateEmployeeComponent},
    {path:'change-password', component:ChangePasswordComponent},
    {path:'display-issues', component:DisplayIssuesComponent},
    {path:'raise-issue', component:RaiseIssueComponent},
    {path:'view-issues', component:ViewIssuesComponent},
    {path:'login', component:LoginComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'}
];
