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
import { SolutionComponent } from './components/solution/solution.component';
import { DisplaySolutionComponent } from './components/display-solution/display-solution.component';
import { PostSolutionComponent } from './components/post-solution/post-solution.component';
import { UpdateSolutionComponent } from './components/update-solution/update-solution.component';
import { SearchComponent } from './components/search/search.component';
import { DisplayDepartmentComponent } from './components/display-department/display-department.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { SearchDepartmentComponent } from './components/search-department/search-department.component';
import { SortDepartmentComponent } from './components/sort-department/sort-department.component';
import { UpdateAccountComponent } from './components/update-department/update-department.component';
import { CreateOperatorComponent } from './components/create-operator/create-operator.component';
import { DispalyOperatorsComponent } from './components/dispaly-operators/dispaly-operators.component';
import { UpdateOperatorComponent } from './components/update-operator/update-operator.component';
import { GetIssuesComponent } from './components/get-issues/get-issues.component';
import { IssueBucketComponent } from './components/issue-bucket/issue-bucket.component';
import { DepartmentComponent } from './components/department/department.component';
import { DisplayDepartmetOparatorsComponent } from './components/display-departmet-oparators/display-departmet-oparators.component';

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
    {path:'display-solution',component:DisplaySolutionComponent},
    {path:'solution',component:SolutionComponent},
    {path:'post-solution/:issueId',component:PostSolutionComponent},
    {path:'update-solution',component:UpdateSolutionComponent},
    {path:'search',component:SearchComponent},
    { path:'department', component: DisplayDepartmentComponent},
    { path:  'addDepartment',component:AddDepartmentComponent},
    {path:'update-department/:id',component:UpdateAccountComponent},
    {path:'search-department',component:SearchDepartmentComponent},
    {path:'sort-department',component:SortDepartmentComponent},
    {path:'home', component:HomeComponent},

    {path:'register',component:CreateOperatorComponent},
    {path:'display',component:DispalyOperatorsComponent},
    {path:'updateOperator/:id',component:UpdateOperatorComponent},
    {path:'getIssues',component:GetIssuesComponent},
    {path:'issueBucket',component:IssueBucketComponent},
    {path:'departments',component:DepartmentComponent},
    {path:'operators/:id',component:DisplayDepartmetOparatorsComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'}
    
];
