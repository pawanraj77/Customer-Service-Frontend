import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'employee', component:EmployeeComponent},
    {path:'add-employee', component:AddEmployeeComponent},
    {path:'update-employee/:cdsId', component:UpdateEmployeeComponent},
    {path:'change-password', component:ChangePasswordComponent},
    {path:'login', component:LoginComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'}
];
